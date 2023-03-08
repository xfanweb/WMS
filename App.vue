<script>
	export function ExecSql (name,data,callback) {
		uniCloud.callFunction({
			name: name,
			data: data
		}).then(res => {
			// that.detail = res.result.data
			// that.value = res.result.data[0]['status']
			callback(res);
		})
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
	@import "uview-ui/index.scss";
</style>
