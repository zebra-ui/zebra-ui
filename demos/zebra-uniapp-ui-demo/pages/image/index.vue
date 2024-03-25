<template>
	<view class="demo-image">
		<demo-block :title="t('basicUsage')">
			<z-row>
				<z-image width="200" height="200" :src="image" />
			</z-row>
		</demo-block>

		<demo-block :title="t('fitMode')">
			<z-row gutter="20">
				<z-col v-for="fit in fits" span="8" :key="fit">
					<z-image :mode="fit" width="100%" height="200" :src="image" />
					<div class="text">{{ fit }}</div>
				</z-col>
			</z-row>
		</demo-block>

		<demo-block :title="t('round')">
			<z-row gutter="20">
				<z-col v-for="fit in fits" span="8" :key="fit">
					<z-image round :mode="fit" width="100%" height="200" :src="image" />
					<div class="text">{{ fit }}</div>
				</z-col>
			</z-row>
		</demo-block>

		<demo-block :title="t('loading')">
			<z-row gutter="20">
				<z-col span="8">
					<z-image width="100%" height="27vw" />
					<div class="text">{{ t('defaultTip') }}</div>
				</z-col>

				<z-col span="8">
					<z-image width="100%" height="27vw" use-loading-slot>
						<template #loading>
							<z-loading type="spinner" size="40" />
						</template>
					</z-image>
					<div class="text">{{ t('customTip') }}</div>
				</z-col>
			</z-row>
		</demo-block>

		<demo-block :title="t('error')">
			<z-row gutter="20">
				<z-col span="8">
					<z-image width="100%" height="27vw" src="x" />
					<div class="text">{{ t('defaultTip') }}</div>
				</z-col>

				<z-col span="8">
					<z-image width="100%" height="27vw" src="x" use-error-slot>
						<template #error>{{ t('loadFail') }}</template>
					</z-image>
					<div class="text">{{ t('customTip') }}</div>
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
				type: {
					basicUsage: '基础用法',
					fitMode: '填充模式',
					round: '圆形图片',
					loading: '加载中提示',
					error: '加载失败提示',
					defaultTip: '默认提示',
					customTip: '自定义提示',
					loadFail: '加载失败',
				},
				image: 'https://cdn.zebraui.com/zebra-ui/images/demo.jpg',
				fits: ['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'heightFix'],
			}
		},
		methods: {
			t(type) {
				return this.type[type];
			}
		}
	}
</script>

<style lang="scss">
	.demo-image {
		.zebra-col {
			margin-bottom: 40rpx;
		}

		.text {
			margin-top: 10rpx;
			color: #646566;
			font-size: 28rpx;
			text-align: center;
		}
	}
</style>
