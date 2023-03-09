//监听页面加载
export function onLoad(){
	this.date = new Date().getFullYear();
}
// 扫码传参
export function scanCode() {
	uni.scanCode({
		onlyFromCamera: true,  //仅允许通过相机扫描  不允许读取相册
		success: function(res) {
			const id = Number(JSON.parse(res.result).id)
			uni.navigateTo({
				url: '/pages/detail/detail?id=' + id   //将id传入库存详情界面
			})
		}
	});
}
