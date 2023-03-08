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