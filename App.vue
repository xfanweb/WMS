<script>
	export function ExecSql(name, data, callback) {
		uniCloud.callFunction({
			name: name,
			data: data
		}).then(res => {
			callback(res);
		})
	}
	export function time() {
		const date = new Date();
		const year = date.getFullYear();
		let month = date.getMonth()+1;
		let day = date.getDate();
		let h = date.getHours();
		let m = date.getMinutes();
		let s = date.getSeconds();
		month<=9?month="0"+month:false
		day<=9?day="0"+day:false
		h<=9?h="0"+h:false
		m<=9?m="0"+m:false
		s<=9?s="0"+s:false
		let time = year+"年"+month+"月"+day+"日"+h+":"+m+":"+s
		return time
	}
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";  //引入 uview
	page {
	    height: 100%;
	    background: #f1f6fc;
	}
</style>
