<template>
	<view class="demo-dialog">
		<demo-block :card="false" title="提示弹窗">
			<z-cell title="提示弹窗" @click="onClickAlert" is-link />
			<z-cell title="提示弹窗（无标题）" @click="onClickAlert2" is-link />
			<z-cell title="确认弹窗" @click="onClickConfirm" is-link />
		</demo-block>
		<demo-block :card="false" title="按钮样式">
			<z-cell title="提示弹窗" @click="onClickThemeAlert" is-link />
			<z-cell title="提示弹窗（无标题）" @click="onClickThemeAlert2" is-link />
			<z-cell title="确认弹窗" @click="onClickThemeConfirm" is-link />
		</demo-block>
		<demo-block :card="false" title="异步关闭">
			<z-cell title="异步关闭" @click="onClickAsyncClose" />
		</demo-block>
		<demo-block :card="false" title="组件调用">
			<z-cell title="组件调用" @click="showCustomDialog" />
		</demo-block>
		<z-dialog
			:options="{'title':'标题','useSlot':true,'show':show,'show-cancel-button':true,'confirm-button-open-type':'getUserInfo'}"
			@close="onClose" @getuserinfo="getUserInfo">
			<view class="demo-dialog-text">
				自定义内容
			</view>
		</z-dialog>
		<z-dialog ref="zDialog" />
		<z-toast ref="zToast"></z-toast>
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
				show: false
			}
		},
		methods: {
			showCustomDialog() {
				this.show = true;
			},
			getUserInfo(event) {
			},
			onClickAlert() {
				this.$dialog.alert({
					title: '标题',
					message: '我是zebra-ui里的弹出框，我长得很漂亮',
				});
			},
			onClickAlert2() {
				this.$dialog.alert({
					message: '我是zebra-ui里的弹出框，我长得很漂亮',
				});
			},
			onClickConfirm() {
				this.$dialog.confirm({
					title: '标题',
					message: '我是zebra-ui里的弹出框，我长得漂亮吗？',
				});
			},
			onClickThemeAlert() {
				this.$dialog.alert({
					title: '标题',
					theme: 'round-button',
					message: '我是zebra-ui里的弹出框，我长得很漂亮',
				});
			},
			onClickThemeAlert2() {
				this.$dialog.alert({
					theme: 'round-button',
					message: '我是zebra-ui里的弹出框，我长得很漂亮',
				});
			},
			onClickThemeConfirm() {
				this.$dialog.confirm({
					title: '标题',
					theme: 'round-button',
					message: '我是zebra-ui里的弹出框，我长得漂亮吗？',
				});
			},
			onClickAsyncClose() {
				const beforeClose = (action) =>
					new Promise((resolve) => {
						setTimeout(() => {
							if (action === 'confirm') {
								resolve(true);
							} else {
								// 拦截取消操作
								resolve(false);
								this.$toast("拦截取消操作")
							}
						}, 1000);
					});

				this.$dialog.confirm({
					title: '标题',
					message: '我是zebra-ui里的弹出框，我长得很漂亮',
					beforeClose,
				});
			},
			onClose() {
				this.show = false;
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-dialog {
		&-text {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30rpx;
			padding: 30rpx;
		}
	}
</style>
