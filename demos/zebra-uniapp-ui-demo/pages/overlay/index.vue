<template>
	<view class="demo-overlay">
		<demo-block title="基础用法" padding>
			<z-button type="primary" customStyle="marginLeft:32rpx;" @click="onClickShow">
				显示遮罩层
			</z-button>
			<z-overlay :show="show" @click="onClickHide" />
		</demo-block>

		<demo-block title="嵌入内容" padding>
			<z-button type="primary" customStyle="marginLeft:32rpx;" @click="onClickShowEmbedded">
				嵌入内容
			</z-button>
			<z-overlay :show="showEmbedded" @click="onClickHideEmbedded">
				<view class="wrapper">
					<div class="block" @click.stop="noop" />
				</view>
			</z-overlay>
		</demo-block>
	</view>
</template>

<script>
	import DemoBlock from '../../components/DemoBlock/DemoBlock.vue';
	export default {
		components: {
			DemoBlock
		},
		data() {
			return {
				show: false,
				showEmbedded: false
			}
		},
		methods: {
			onClickShow() {
				this.show = true;
			},

			onClickHide() {
				this.show = false;
			},

			onClickShowEmbedded() {
				this.showEmbedded = true;
			},

			onClickHideEmbedded() {
				this.showEmbedded = false;
			},

			noop() {}
		}
	}
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		background-color: #FFFFFF;
	}

	/* #ifdef MP */
	.demo-overlay {
		height: calc(100vh - 40rpx);
		background-color: #FFFFFF;
	}

	/* #endif */

	.demo-overlay {
		background: #FFFFFF;

		.wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
		}

		.block {
			width: 240rpx;
			height: 240rpx;
			background-color: #FFFFFF;
		}
	}
</style>
