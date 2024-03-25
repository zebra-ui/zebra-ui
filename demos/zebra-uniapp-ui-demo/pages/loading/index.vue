<template>
	<view class="demo-loading">
		<demo-block title="加载类型">
			<z-row gutter="50">
				<z-col span="6">
					<z-loading />
				</z-col>
				<z-col span="6">
					<z-loading type="spinner" />
				</z-col>
			</z-row>
		</demo-block>
		<demo-block title="自定义颜色">
			<z-row gutter="50">
				<z-col span="6">
					<z-loading color="#1989fa" />
				</z-col>
				<z-col span="6">
					<z-loading type="spinner" color="#1989fa" />
				</z-col>
			</z-row>
		</demo-block>
		<demo-block title="自定义大小">
			<z-row gutter="50">
				<z-col span="6">
					<z-loading size="48" />
				</z-col>
				<z-col span="6">
					<z-loading type="spinner" size="48" />
				</z-col>
			</z-row>
		</demo-block>
		<demo-block title="加载文案">
			<z-row gutter="50">
				<z-col span="8">
					<z-loading size="48">
						加载中...
					</z-loading>
				</z-col>
			</z-row>
		</demo-block>
		<demo-block title="垂直排列">
			<z-row gutter="50">
				<z-col span="8">
					<z-loading size="48" vertical>
						加载中...
					</z-loading>
				</z-col>
			</z-row>
		</demo-block>
		<demo-block title="自定义文本颜色">
			<z-row gutter="50">
				<z-col span="8">
					<z-loading size="48" vertical color="#0094ff">
						加载中...
					</z-loading>
				</z-col>
				<z-col span="8">
					<z-loading size="48" vertical text-color="#0094ff">
						加载中...
					</z-loading>
				</z-col>
			</z-row>
		</demo-block>
		<demo-block title="使用加载模板">
			<z-row gutter="50">
				<z-col span="12">
					<view class="demo-loading-template">
						<z-loading template="a"></z-loading>
					</view>
				</z-col>
				<z-col span="12">
					<view class="demo-loading-template">
						<z-loading template="b"></z-loading>
					</view>
				</z-col>
				<z-col span="12">
					<view class="demo-loading-template">
						<z-loading template="c"></z-loading>
					</view>
				</z-col>
				<z-col span="12">
					<view class="demo-loading-template">
						<z-loading template="d"></z-loading>
					</view>
				</z-col>
				<z-col span="12">
					<view class="demo-loading-template">
						<z-loading template="e"></z-loading>
					</view>
				</z-col>
				<z-col span="12">
					<view class="demo-loading-template">
						<z-loading template="f"></z-loading>
					</view>
				</z-col>
			</z-row>
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
	.demo-loading {

		.demo-loading-template {
			position: relative;
			display: flex;
			height: 260rpx;
			border: 2rpx solid rgba(255, 255, 255, 0.1);
			border-radius: 10rpx;
			margin-top: 30rpx;
			background: #040038;
			justify-content: center;
			align-items: center;
		}
	}
</style>
