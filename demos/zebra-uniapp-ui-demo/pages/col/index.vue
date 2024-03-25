<template>
	<view class="demo-col">
		<demo-block title="基础用法">
			<z-row>
				<z-col span="8">span: 8</z-col>
				<z-col span="8">span: 8</z-col>
				<z-col span="8">span: 8</z-col>
			</z-row>

			<z-row>
				<z-col span="4">span: 4</z-col>
				<z-col span="10" offset="4">
					offset: 4, span: 10
				</z-col>
			</z-row>

			<z-row>
				<z-col offset="12" span="12">
					offset: 12, span: 12
				</z-col>
			</z-row>
		</demo-block>

		<demo-block title="在列元素之间增加间距">
			<z-row gutter="80">
				<z-col span="8">span: 8</z-col>
				<z-col span="8">span: 8</z-col>
				<z-col span="8">span: 8</z-col>
			</z-row>
			<z-row gutter="50">
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
			</z-row>
		</demo-block>

		<!-- 字节小程序自定义组件暂不支持flex布局 -->
		<!-- #ifndef MP-TOUTIAO -->
		<demo-block title="Flex 布局">
			<z-row type="flex">
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
			</z-row>

			<z-row type="flex" justify="center">
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
			</z-row>

			<z-row type="flex" justify="end">
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
			</z-row>

			<z-row type="flex" justify="space-between">
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
			</z-row>

			<z-row type="flex" justify="space-around">
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
				<z-col span="6">span: 6</z-col>
			</z-row>
		</demo-block>
		<!-- #endif -->

	</view>
</template>

<script>
	import DemoBlock from '../../components/DemoBlock/DemoBlock.vue';
	export default {
		components: {
			DemoBlock
		},
	}
</script>

<style lang="scss">
	.demo-col {

		// .zebra-row--flex {
		// 	.zebra-col {
		// 		width: 160rpx;
		// 	}
		// }
		.zebra-col {
			margin-bottom: 20rpx;
			color: #FFFFFF;
			font-size: 26rpx;
			line-height: 60rpx;
			text-align: center;
			background-clip: content-box;

			&:nth-child(odd) {
				background-color: #39a9ed;
			}

			&:nth-child(even) {
				background-color: #66c6f2;
			}
		}
	}
</style>
