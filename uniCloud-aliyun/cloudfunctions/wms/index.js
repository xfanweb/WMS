let db = uniCloud.database({
	throwOnNotFound: false,
})
exports.main = async (event, context) => {
	const name = event.name
	

	switch (event.api) {
		case 'querystock':
			const id = {id:event.id}
			return await db.collection(name).where(id).get()
		case 'updatestock':
			const status =event.status
			return await db.collection(name).where({
				  id:event.id
			}).updateAndReturn({
				status:db.command.inc(status)
			})
	}
}

