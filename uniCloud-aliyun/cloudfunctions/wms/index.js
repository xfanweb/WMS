let db = uniCloud.database({
	throwOnNotFound: false,
})
exports.main = async (event, context) => {
	const tablename = event.tablename
	switch (event.api) {
		case 'querystock':
			return await db.collection(tablename).where({
				id: event.id
			}).get()
		case 'updatestock':
			if(!event.status){
				event.name=null;
				event.phone=null
			}
			return await db.collection(tablename).where({
				id: event.id
			}).update({
				name: event.name,
				phone: event.phone,
				status: event.status
			})
		case 'queryrecord':
			return await db.collection(tablename).where({
				id: event.id
			}).get()
		case 'addrecord':
			return await db.collection(tablename).add({
				id: event.id,
				name: event.name,
				phone: event.phone,
				time: event.time,
				status: event.status
			})
	}
}
