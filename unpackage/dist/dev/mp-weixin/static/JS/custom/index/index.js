// 扫码传参
export function scancode() {
	uni.scanCode({
		onlyFromCamera: true,
		success: function(res) {
			const id = Number(JSON.parse(res.result).id)
			uni.navigateTo({
				url: '/pages/detail/detail?id=' + id
			})
		}
	});
}
//自定义跳转方法
export function router(url) {
	uni.navigateTo({
		url: '/pages/' + url + '/' + url
	})
}
