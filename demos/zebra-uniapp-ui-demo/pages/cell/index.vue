<template>
	<view class="demo-cell">
		<demo-block :card="false" :title="t('basicUsage')">
			<z-cell-group>
				<z-cell :title="t('cell')" :value="t('content')" />
				<z-cell :title="t('cell')" :value="t('content')" :label="t('desc')" :border="false" />
			</z-cell-group>
		</demo-block>

		<!-- <demo-block :card="false" :title="t('insetGrouped')">
			<z-cell-group inset>
				<z-cell :title="t('cell')" :value="t('content')" />
				<z-cell :title="t('cell')" :value="t('content')" :label="t('desc')" :border="false" />
			</z-cell-group>
		</demo-block> -->

		<demo-block :card="false" :title="t('largeSize')">
			<z-cell :title="t('cell')" :value="t('content')" icon="user" size="large" />
			<z-cell :title="t('cell')" :value="t('content')" size="large" :label="t('desc')" :border="false" />
		</demo-block>

		<demo-block :card="false" :title="t('showIcon')">
			<z-cell :title="t('cell')" :value="t('content')" icon="user" :border="false" />
		</demo-block>

		<demo-block :card="false" :title="t('showArrow')">
			<z-cell :title="t('cell')" is-link />
			<z-cell :title="t('cell')" is-link :value="t('content')" />
			<z-cell :title="t('cell')" is-link arrow-direction="down" :value="t('content')" :border="false" />
		</demo-block>

		<demo-block :card="false" :title="t('groupTitle')">
			<z-cell-group :title="`${t('group')} 1`">
				<z-cell :title="t('cell')" :value="t('content')" :border="false" />
			</z-cell-group>
			<z-cell-group :title="`${t('group')} 2`">
				<z-cell :title="t('cell')" :value="t('content')" :border="false" />
			</z-cell-group>
		</demo-block>

		<demo-block :card="false" :title="t('useSlots')">
			<z-cell title="这是一段文字" :value="new Date().getFullYear() + ''" :label="t('desc')" clickable>
				<template #icon>
					<view style="margin-right: 10rpx; display: flex">
						<z-image width="100" height="100" src="https://cdn.zebraui.com/zebra-ui/images/dog.jpg" />
					</view>
				</template>
			</z-cell>

			<z-cell :value="t('content')" use-title-slot is-link>
				<template #title>
					<span class="custom-title">{{ t("cell") }}</span>
					<z-tag type="danger">{{ t("tag") }}</z-tag>
				</template>
			</z-cell>

			<z-cell icon="user" :title="t('cell')" :border="false">
				<template #right-icon>
					<z-icon name="search" class="search-icon" />
				</template>
			</z-cell>
		</demo-block>

		<demo-block :card="false" :title="t('verticalCenter')">
			<z-cell center :title="t('cell')" :value="t('content')" :label="t('desc')" :border="false" />
		</demo-block>
	</view>
</template>

<script>
	import DemoBlock from "../../components/DemoBlock/DemoBlock.vue";
	export default {
		components: {
			DemoBlock,
		},
		data() {
			return {
				type: {
					cell: "单元格",
					valueOnly: "只设置 value",
					showIcon: "展示图标",
					showArrow: "展示箭头",
					largeSize: "单元格大小",
					group: "分组",
					groupTitle: "分组标题",
					router: "页面导航",
					urlRoute: "URL 跳转",
					vueRoute: "路由跳转",
					useSlots: "使用插槽",
					insetGrouped: "卡片风格",
					verticalCenter: "垂直居中",
					basicUsage: "基础用法",
					content: "内容",
					desc: "描述信息",
					tag: "标签",
				},
			};
		},
		methods: {
			t(type) {
				return this.type[type];
			},
		},
	};
</script>

<style lang="scss">
	.demo-cell {
		.custom-title {
			margin-right: 8rpx;
			vertical-align: middle;
		}

		.search-icon {
			font-size: 32rpx;
			line-height: inherit;
		}
	}
</style>
