<template>
	<view class="demo-line">
		<demo-block title="基础用法">
			<z-line />
		</demo-block>
		<demo-block title="纵向">
			<view class="demo-line-col">
				文字
				<z-line custom-style="height:30rpx" direction="col"></z-line>
				文字
			</view>
		</demo-block>
		<demo-block title="插入内容">
			<z-line content-position="center">zebraUI</z-line>
		</demo-block>
		<demo-block title="内容位置">
			<z-line content-position="center">文本</z-line>
			<z-line content-position="left">文本</z-line>
			<z-line content-position="right">文本</z-line>
		</demo-block>
		<demo-block title="虚线">
			<z-line dashed />
		</demo-block>
		<demo-block custom-class="white" title="自定义样式" padding>
			<z-line content-position="center" custom-style="color: #1989fa;border-color: #1989fa;font-size: 24rpx;">
				文本</z-line>
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

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.demo-line {
		&-col {
			font-size: 24rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
		}
	}
</style>
