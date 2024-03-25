<template>
	<view class="demo-tag">
		<demo-block card title="基础用法">
			<z-cell title="primary 类型">
				<z-tag type="primary">标签</z-tag>
			</z-cell>
			<z-cell title="success 类型">
				<z-tag type="success">标签</z-tag>
			</z-cell>
			<z-cell title="danger 类型">
				<z-tag type="danger">标签</z-tag>
			</z-cell>
			<z-cell title="warning 类型">
				<z-tag type="warning">标签</z-tag>
			</z-cell>
		</demo-block>

		<demo-block card title="样式风格">
			<z-cell title="空心样式">
				<z-tag plain type="primary">标签</z-tag>
			</z-cell>
			<z-cell title="圆角样式">
				<z-tag round type="primary">标签</z-tag>
			</z-cell>
			<z-cell title="标记样式">
				<z-tag mark type="primary">标签</z-tag>
			</z-cell>
			<z-cell title="可关闭标签">
				<z-tag v-if="show" size="medium" closeable type="primary" @close="close">
					标签
				</z-tag>
			</z-cell>
		</demo-block>
		<demo-block card title="标签大小">
			<z-cell title="小号标签">
				<z-tag type="primary">标签</z-tag>
			</z-cell>
			<z-cell title="中号标签">
				<z-tag type="primary" size="medium">标签</z-tag>
			</z-cell>
			<z-cell title="大号标签">
				<z-tag type="primary" size="large">标签</z-tag>
			</z-cell>
		</demo-block>
		<demo-block card title="自定义颜色">
			<z-cell title="背景颜色">
				<z-tag color="#7232dd">标签</z-tag>
			</z-cell>
			<z-cell title="文字颜色">
				<z-tag color="#ffe1e1" text-color="#ad0000">标签</z-tag>
			</z-cell>
			<z-cell title="空心颜色">
				<z-tag color="#7232dd" plain>标签</z-tag>
			</z-cell>
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
				show: true,
			};
		},
		methods: {
			close() {
				this.show = false;
			},
		},
	}
</script>

<style>
</style>
