<template>
	<view>
		<z-overlay v-if="options.mask || options.forbidClick" :overlay-back-groud="options.mask?true:false" :show="show"
			:z-index="zIndex" />
		<z-transition :show="show" :custom-style="transitionRootStyle()" custom-class="zebra-toast__container">
			<view
				:class="['zebra-toast','zebra-toast--'+(options.type === 'text'&&!options.icon ? 'text' : 'icon'),'zebra-toast--'+options.position]"
				@touchmove.stop.prevent="noop">
				<!-- text only -->
				<text v-if="options.type === 'text'&&!options.icon">{{ options.message }}</text>

				<!-- with icon -->
				<block v-else>
					<z-loading v-if="options.type === 'loading'" color="white" :template="options.loadingTemplate"
						:type="options.loadingType" custom-style="margin: 20rpx 0;" />
					<z-icon v-if="options.icon || options.type === 'success' || options.type === 'fail'"
						:size="options.iconSize"
						:name="options.icon || (options.type == 'success'?'window_check':options.type == 'fail'?'window_close':'')" />
					<text v-if="options.message" class="zebra-toast__text">{{ options.message }}</text>
				</block>
				<slot />
			</view>
		</z-transition>
	</view>
</template>

<script>
	let queue = [];
	export default {
		name: "z-toast",
		props: {
			zIndex: {
				type: Number,
				default: 1000,
			},
		},
		data() {
			return {
				show: false,
				options: {
					type: 'text',
					mask: false,
					message: '',
					duration: 1000,
					position: 'middle',
					forbidClick: false,
					loadingType: 'circular',
					iconSize: '72rpx',
					icon: '',
					loadingTemplate: ''
				}
			}
		},
		methods: {
			noop() {},
			transitionRootStyle() {
				return `z-index:${this.zIndex};left:50%;max-width:70%;position:fixed;top:50%;transform:translate(-50%,-50%);width:-webkit-fit-content;width:fit-content;`;
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-toast {
		word-wrap: break-word;
		align-items: center;
		background-color: $toast-background-color;
		border-radius: $toast-border-radius;
		box-sizing: initial;
		color: $toast-text-color;
		display: flex;
		flex-direction: column;
		font-size: $toast-font-size;
		justify-content: center;
		line-height: $toast-line-height;
		white-space: pre-wrap
	}

	.zebra-toast__container {
		left: 50%;
		max-width: $toast-max-width;
		position: fixed;
		top: 50%;
		transform: translate(-50%, -50%);
		width: -webkit-fit-content;
		width: fit-content
	}

	.zebra-toast--text {
		min-width: $toast-text-min-width;
		padding: $toast-text-padding
	}

	.zebra-toast--icon {
		min-height: $toast-default-min-height;
		padding: $toast-default-padding;
		width: $toast-default-width
	}

	.zebra-toast--icon .zebra-toast__text {
		padding-top: 16rpx
	}

	.zebra-toast__loading {
		margin: 20rpx 0
	}

	.zebra-toast--top {
		transform: translateY(-30vh)
	}

	.zebra-toast--bottom {
		transform: translateY(30vh)
	}
</style>
