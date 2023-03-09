import {
	execSql,
	objValue,
	time
} from '../../../../App.vue'
//监听页面加载
export function onLoad(options) {
	let that = this
	that.id = Number(options.id)
	execSql('wms', objValue('stock', 'querystock', that.id, null, null, null, null), (res) => {
		that.stock = res.result.data //stock表里的数据
		that.name = that.stock[0].name //姓名
		that.phone = that.stock[0].phone //手机号
		that.StatusContent = that.stock[0].status //借出状态
		that.value = that.stock[0].status //u-switch 双向绑定 依据借出状态
		// console.log(that.value)
		that.input = that.stock[0].status //u-input 双向绑定 依据借出状态
	})
	execSql('wms', objValue('record', 'queryrecord', that.id, null, null, null, null), (res) => {
		// console.log(res)
		that.record = res.result.data.reverse() //按最新时间排序 
		that.recordarr =that.record //存进recordarr数组 模糊搜索需要用到
	})
}
//Switch状态发生改变校验完毕执行数据库操作
export function change() {
	let that = this
	//更新库存、记录状态
	function update() {
		that.status = true
		that.StatusContent = !that.StatusContent
		// objValue(tablename, api, id, name, phone, time, status)
		// objValue(表名,进行的api指令,设备id,姓名,手机号,时间,状态)没有填null
		execSql('wms', objValue('record', 'addrecord', that.id, that.name, that.phone, time(), that.value), (res) => {
			execSql('wms', objValue('stock', 'updatestock', that.id, that.name, that.phone, null, that.value), (
				res) => {
				const title = that.value == false ? "归还成功" : "借出成功" //定义弹窗文字
				that.name = "" //姓名清空
				that.phone = "" //手机号清空
				that.input = false //输入框解除禁用
				uni.showToast({
					title: title,
					icon: 'success'
				})
				setTimeout(function() {
					uni.navigateBack()
				}, 1600)
			})
		})
	}
	if (!that.StatusContent) {
		if (that.name !== "" && that.phone.length === 11) {
			update()
		} else {
			uni.showToast({
				title: '请检查',
				icon: 'error'
			})
			that.value = !that.value
		}
	} else {
		update()
	}
}
//模糊搜索
export function search(v,arr) {
	// v 传入的搜索框值  arr 传入的recordarr数组
	let that = this;
	let itemarr =[]
	if (v=="") {
		that.record=arr
		console.log(arr)
	}
	that.record.filter(item => {
		if (item.name.indexOf(v) !== -1||item.phone.indexOf(v) !== -1) {
			itemarr.push(item)
		}else{
			itemarr=itemarr
		}
		that.record = itemarr
	});
	
}
