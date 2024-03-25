<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uni_modules/zebra-ui/index.scss";

	::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}

	/*每个页面公共css */
	page {
		background-color: rgba(234, 234, 234, 1);
		padding-bottom: 40rpx;
	}
</style>
