<template>
	<view class="zebra-doc-demo-block">
		<view v-if="title" class="zebra-doc-demo-block__title">{{ title }}</view>
		<view v-if="card" class="zebra-doc-demo-block__card">
			<slot />
		</view>
		<slot v-else />
	</view>
</template>

<script>
	export default {
		name: 'demo-block',
		props: {
			card: {
				type: Boolean,
				default: true
			},
			title: String,
		},
	};
</script>

<style lang="scss">
	@import '../../common/style/var';

	.zebra-doc-demo-block {
		// margin: 60rpx 30rpx;
		// background-color: rgba(234, 234, 234, 1);
		// box-shadow: -6rpx -6rpx 8rpx rgba(255, 255, 255, 0.5), 6rpx 6rpx 8rpx rgba(174, 174, 192, 0.4);
		// border-radius: 30rpx;

		background-color: #FFFFFF;
		margin: 30rpx;
		border-radius: 8rpx;
		box-shadow: 0rpx 4rpx 24rpx 0rpx rgba(0, 0, 0, 0.05);

		&__title {
			margin: 0;
			padding: 30rpx;
			color: $zebra-doc-text-light-blue;
			font-weight: normal;
			font-size: 28rpx;
			line-height: 32rpx;
			border-bottom: 2rpx solid $zebra-doc-background-color;
		}

		&__card {
			padding: 30rpx;
			// margin: 24rpx 24rpx 0;
			// overflow: hidden;
			// border-radius: 16rpx;
		}

		&__title+&__card {
			margin-top: 0;
		}
	}
</style>
