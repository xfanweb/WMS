let db = uniCloud.database({
	throwOnNotFound: false,
})
exports.main = async (event, context) => {
	const name = event.name
	switch (event.api) {
		case 'querystock':
			return await db.collection(name).where({
				id: event.id
			}).get()
		case 'updatestock':
			const status = event.status
			return await db.collection(name).where({
				id: event.id
			}).update({
				status: status
			})

	}
}
