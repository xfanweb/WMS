import {ExecSql} from '../../../../App.vue';
export function change() {
	var that = this
	that.status = true
	const id = that.id
	const title = that.value == false ? "归还成功" : "借出成功"
	uni.showToast({
		title: title,
		icon: 'success'
	})
}
