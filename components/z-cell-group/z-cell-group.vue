<template>
	<view>
		<view v-if="title" :class="[bemMethods('cell-group__title', { inset })]">
			{{ title }}
		</view>
		<view :class="[
        'custom-class',
        bemMethods('cell-group', { inset }),
        border ? 'zebra-hairline--top-bottom' : ''
      ]">
			<slot />
		</view>
	</view>
</template>

<script>
	import bem from "../../static/utils/bem.js";
	export default {
		name: "z-cell-group",
		props: {
			/**
			 * 分组标题
			 */
			title: {
				type: String,
				default: "",
			},
			/**
			 * 是否展示为圆角卡片风格
			 */
			inset: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否显示外边框
			 */
			border: {
				type: Boolean,
				default: true,
			},
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
		},
	};
</script>

<style scoped lang="scss">
	@import "../../static/css/var.scss";

	.zebra-cell-group {
		background-color: inherit;

		&--inset {
			margin: $cell-group-inset-padding;
			overflow: hidden;
			border-radius: $cell-group-inset-border-radius;
		}

		&__title {
			padding: $cell-group-title-padding;
			color: $cell-group-title-color;
			font-size: $cell-group-title-font-size;
			line-height: $cell-group-title-line-height;

			&--inset {
				padding: $cell-group-inset-title-padding;
			}
		}
	}
</style>
