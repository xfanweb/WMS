let db =uniCloud.database({
	throwOnNotFound:false,
})
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// return event.id
	return await db.collection('WMS').where({
		  id:event.id
	}).get()
	//返回数据给客户端
};
