<template>
	<view class="demo-home-nav">
		<view class="demo-home-nav__title">{{ group.groupName }}</view>
		<view class="demo-home-nav__group">
			<view v-for="(item,index) in group.list" :key="index" class="demo-home-nav__block"
				@click="onClick(item.path)">
				<image class="image" :src="item.image"></image>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			group: {
				type: Object,
				default: function() {
					return null;
				}
			}
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			onClick(event) {
				let url = `/pages${event}/index`;
				if (getCurrentPages().length > 9) {
					uni.redirectTo({
						url
					});
				} else {
					uni.navigateTo({
						url
					});
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-home-nav__title {
		margin: 0 32rpx;
		color: rgba(69, 90, 100, 0.6);
		font-size: 14px;
	}

	.demo-home-nav__group {
		display: flex;
		flex-wrap: wrap;
	}

	.demo-home-nav__block {
		width: 330rpx;
		height: 325rpx;

		.image {
			width: 100%;
			height: 100%;
		}
	}
</style>
