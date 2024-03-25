<template>
	<view class="demo-toast">
		<demo-block :card="false" title="基础用法">
			<z-cell is-link title="文字提示" @click="showToast1()" />
			<z-cell is-link title="加载提示" @click="showLoadingToast('circular')" />
			<z-cell is-link title="成功提示" @click="showSuccessToast()" />
			<z-cell is-link title="失败提示" @click="showFailToast()" />
		</demo-block>
		<demo-block :card="false" title="自定义图标">
			<z-cell is-link title="自定义图标" @click="showIconToast()" />
			<z-cell is-link title="自定义图片" @click="showImageToast()" />
			<z-cell is-link title="自定义加载图标" @click="showLoadingToast('spinner')" />
			<z-cell is-link title="使用加载模板" @click="showLoadingToastTemplate('f')" />
		</demo-block>
		<demo-block :card="false" title="自定义位置">
			<z-cell is-link title="顶部展示" @click="showTopToast()" />
			<z-cell is-link title="底部展示" @click="showBottomToast()" />
		</demo-block>
		<demo-block :card="false" title="动态更新提示">
			<z-cell is-link title="动态更新提示" @click="showCustomizedToast()" />
		</demo-block>
		<demo-block :card="false" title="关闭时的回调函数">
			<z-cell is-link title="关闭时的回调函数" @click="showCustomCallback()" />
		</demo-block>
		<z-toast ref="zToast" />
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

			}
		},
		methods: {
			showToast1() {
				this.$toast("文字提示")
			},
			showLoadingToast(loadingType) {
				this.$toast.loading({
					forbidClick: true,
					message: '加载中...',
					loadingType,
				});
			},
			showLoadingToastTemplate(loadingTemplate) {
				this.$toast.loading({
					forbidClick: true,
					loadingTemplate,
				});
			},
			showSuccessToast() {
				this.$toast.success('成功文案');
			},
			showFailToast() {
				this.$toast.fail('失败文案');
			},
			showIconToast() {
				this.$toast({
					message: "自定义图标",
					icon: 'mail_open',
				});
			},
			showImageToast() {
				this.$toast({
					message: '自定义图片',
					icon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png',
				});
			},
			showTopToast() {
				this.$toast({
					message: "顶部展示",
					position: 'top',
				});
			},
			showBottomToast() {
				this.$toast({
					message: "底部展示",
					position: 'bottom',
				});
			},
			showCustomizedToast() {
				const text = (second) => `倒计时 ${second} 秒`;
				const toast = this.$toast.loading({
					duration: 0,
					forbidClick: true,
					message: text(3),
					loadingTemplate: 'f'
				});

				let second = 3;
				const timer = setInterval(() => {
					second--;
					if (second) {
						toast.options.message = text(second);
					} else {
						clearInterval(timer);
						this.$toast.clear();
					}
				}, 1000);
			},
			showCustomCallback() {
				this.$toast({
					type: 'success',
					message: '提交成功',
					onClose: () => {
						this.$toast('执行OnClose函数');
					},
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.demo-toast {}
</style>
