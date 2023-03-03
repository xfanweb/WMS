export function scancode(){
	uni.scanCode({
		onlyFromCamera: true,
		success: function (res) {
			const id =Number(JSON.parse(res.result).id)
			console.log(id);
			uniCloud.callFunction({
				name:'CheckSQL',
				data:{
					id:id
				}
			}).then(res =>{
				console.log(res.result.data)
				// console.log(res)
			})
		}
	});
}