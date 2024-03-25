<template>
	<view class="demo-button">
		<demo-block card title="基本使用">
			<z-button>默认按钮</z-button>
		</demo-block>

		<demo-block card :title="t('type')">
			<div class="demo-button-row">
				<z-button type="default">{{ t('default') }}</z-button>
				<z-button type="primary">{{ t('primary') }}</z-button>
				<z-button type="info">{{ t('info') }}</z-button>
			</div>
			<z-button type="danger">{{ t('danger') }}</z-button>
			<z-button type="warning">{{ t('warning') }}</z-button>
		</demo-block>

		<demo-block :title="t('shape')">
			<z-button type="primary" square>{{t('square')}}</z-button>
			<z-button type="info" round>{{t('round')}}</z-button>
		</demo-block>

		<demo-block :title="t('size')">
			<z-button type="primary" size="large">{{ t('large') }}</z-button>
			<z-button type="primary" size="normal">{{ t('normal') }}</z-button>
			<z-button type="primary" size="small">{{ t('small') }}</z-button>
			<z-button type="primary" size="mini">{{ t('mini') }}</z-button>
		</demo-block>

		<demo-block :title="t('plain')">
			<z-button plain type="primary">{{t('plain')}}</z-button>
			<z-button plain type="info">{{t('plain')}}</z-button>
		</demo-block>

		<demo-block :title="t('hairline')">
			<z-button plain hairline type="primary">{{t('hairlineButton')}}</z-button>
			<z-button plain hairline type="info">{{t('hairlineButton')}}</z-button>
		</demo-block>

		<demo-block :title="t('disabled')">
			<z-button disabled type="primary">{{t('disabled')}}</z-button>
			<z-button disabled type="info">{{t('disabled')}}</z-button>
		</demo-block>

		<demo-block :title="t('loadingStatus')">
			<z-button loading type="primary"></z-button>
			<z-button loading type="primary" loading-type="spinner"></z-button>
			<z-button loading type="primary" loading-template="f" loading-size="60rpx"
				custom-style="height:100rpx;width:200rpx;"></z-button>
			<z-button loading :loading-text="t('loadingText')" type="info"></z-button>
		</demo-block>

		<demo-block :title="t('icon')">
			<z-button type="primary" icon="plus"></z-button>
			<z-button type="primary" icon="happy">{{t('button')}}</z-button>
			<z-button plain type="info" icon="https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png">{{t('button')}}
			</z-button>
		</demo-block>

		<demo-block :title="t('blockElement')">
			<z-button type="primary" block>{{ t('blockElement') }}</z-button>
		</demo-block>

		<!-- 		<demo-block :title="t('router')">
			<z-button :text="t('urlRoute')" type="primary" url="/zt/mobile.html" />
			<z-button :text="t('vueRoute')" type="primary" to="index" />
		</demo-block> -->

		<demo-block :title="t('customColor')">
			<z-button color="#7232dd">{{t('pure')}}</z-button>
			<z-button plain color="#7232dd">{{t('pure')}}</z-button>
			<z-button color="linear-gradient(to right, #ff6034, #ee0a24)">{{t('gradient')}}</z-button>
		</demo-block>

		<demo-block title="自定义样式">
			<z-button custom-style="height:60rpx;width:200rpx;" type="primary">改变宽高</z-button>
			<z-button custom-style="font-size:12rpx;" type="primary">改变字号</z-button>
			<z-button custom-style="padding:0 10rpx;" type="primary">改变边距</z-button>
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
				data: {
					type: '按钮类型',
					size: '按钮大小',
					icon: '图标按钮',
					loading: '加载状态',
					shape: '按钮形状',
					default: '默认按钮',
					primary: '主要按钮',
					info: '信息按钮',
					danger: '危险按钮',
					warning: '警告按钮',
					large: '大号按钮',
					normal: '普通按钮',
					small: '小型按钮',
					mini: '迷你按钮',
					plain: '边框按钮',
					square: '方形按钮',
					round: '圆形按钮',
					hairline: '细边框',
					hairlineButton: '细边框按钮',
					loadingText: '加载中...',
					router: '页面导航',
					urlRoute: 'URL 跳转',
					vueRoute: '路由跳转',
					customColor: '自定义颜色',
					pure: '单色按钮',
					gradient: '渐变按钮',
					blockElement: 'Block按钮',
					disabled: '禁用状态',
					loadingStatus: '加载状态',
					button: '按钮'
				},
			}
		},
		methods: {
			t(e) {
				return this.data[e];
			}
		}
	}
</script>

<style lang="scss">
	.demo-button {
		.zebra-doc-demo-block ::v-deep .zebra-button {
			&--large {
				margin-bottom: 32rpx;
			}

			&--small,
			&--normal {
				margin-right: 32rpx;
			}
		}

		&-row {
			margin-bottom: 24rpx;
		}
	}
</style>
