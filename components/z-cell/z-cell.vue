<template>
	<view :class="[bemMethods('cell', [
        size,
        {
          center,
          required,
          borderless: !border,
          clickable: isLink || clickable,
        },
      ]),
    ]" :style="customStyle" @click="onClick">
		<view v-if="icon" class="zebra-cell__left-icon-wrap zebra-cell__left-icon">
			<z-icon :name="icon" size="32rpx" />
		</view>
		<template v-else>
			<!-- @slot 自定义图标插槽 -->
			<slot name="icon" />
		</template>
		<view :style="[titleStyles({ titleWidth, titleStyle })]" class="zebra-cell__title title-class">
			<template v-if="useTitleSlot">
				<!-- @slot 自定义标题插槽 -->
				<slot name="title" />
			</template>
			<template v-else-if="title">{{ title }}</template>
			<view v-if="label || useLabelSlot" class="zebra-cell__label label-class">
				<!-- @slot 自定义label插槽 -->
				<slot v-if="useLabelSlot" name="label" />
				<template v-else-if="label">{{ label }}</template>
			</view>
		</view>

		<view class="zebra-cell__value value-class">
			<template v-if="value || value === 0">{{ value }}</template>
			<!-- @slot 自定义value插槽 -->
			<slot v-else />
		</view>

		<view v-if="isLink" class="zebra-cell__right-icon-wrap zebra-cell__right-icon right-icon-class">
			<z-icon :name="arrowDirection ? arrowType[arrowDirection] : 'chevron_big_right'" />
		</view>

		<!-- @slot 自定义右侧图标插槽 -->
		<slot v-else name="right-icon" />

		<!-- @slot 备用插槽 -->
		<slot name="extra" />
	</view>
</template>

<script>
	import bem from "../../static/utils/bem.js";
	import addUnit from "../../static/utils/add-unit.js";
	import {
		styleToObj
	} from '../../static/utils/utils.js';
	export default {
		name: "z-cell",
		props: {
			/**
			 * 单元格大小
			 * @values large
			 */
			size: {
				type: String,
				default: "",
			},
			/**
			 * 是否使内容垂直居中
			 */
			center: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否显示表单必填星号
			 */
			required: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否显示下边框
			 */
			border: {
				type: Boolean,
				default: true,
			},
			/**
			 * 是否开启点击反馈
			 */
			clickable: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否展示右侧箭头并开启点击反馈
			 */
			isLink: {
				type: Boolean,
				default: false,
			},
			/**
			 * 自定义样式
			 */
			customStyle: {
				type: String,
				default: "",
			},
			/**
			 * 左侧图标名称或图片链接，可选值见 Icon 组件
			 */
			icon: {
				type: String,
				default: "",
			},
			/**
			 * 标题宽度，须包含单位
			 */
			titleWidth: {
				type: String,
				default: "",
			},
			/**
			 * 标题样式
			 */
			titleStyle: {
				type: String,
				default: "",
			},
			/**
			 * 左侧标题
			 */
			title: {
				type: String,
				default: "",
			},
			/**
			 * 标题下方的描述信息
			 */
			label: {
				type: String,
				default: "",
			},
			/**
			 * 是否使用 label slot
			 */
			useLabelSlot: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否使用 title slot
			 */
			useTitleSlot: {
				type: Boolean,
				default: false,
			},
			/**
			 * 右侧内容
			 */
			value: {
				type: String,
				default: "",
			},
			/**
			 * 箭头方向
			 * @values left,up,down
			 */
			arrowDirection: {
				type: String,
				default: "",
			},
		},
		data() {
			return {
				arrowType: {
					up: "chevron_big_up",
					down: "chevron_big_down",
					left: "chevron_big_left",
				},
			};
		},
		methods: {
			titleStyles(data) {
				return {
					"max-width": addUnit(data.titleWidth),
					"min-width": addUnit(data.titleWidth),
					...styleToObj(data.titleStyle),
				};
			},
			onClick(event) {
				/**
				 * 点击事件，点击单元格触发此事件
				 * @property {object} event event
				 */
				this.$emit("click", event);
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
		},
	};
</script>

<style scoped lang="scss">
	@import "../../static/css/var.scss";

	.zebra-cell {
		position: relative;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: $cell-vertical-padding $cell-horizontal-padding;
		overflow: hidden;
		color: $cell-text-color;
		font-size: $cell-font-size;
		line-height: $cell-line-height;
		background-color: inherit;

		&::after {
			position: absolute;
			box-sizing: border-box;
			content: " ";
			pointer-events: none;
			right: 32rpx;
			bottom: 0;
			left: 32rpx;
			border-bottom: 2rpx solid #ebedf0;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
		}

		&--borderless::after {
			display: none;
		}

		&--clickable {
			&:active {
				background-color: $cell-active-color;
			}
		}

		&__label {
			margin-top: $cell-label-margin-top;
			color: $cell-label-color;
			font-size: $cell-label-font-size;
			line-height: $cell-label-line-height;
		}

		&__title,
		&__value {
			flex: 1;
		}

		&__title:empty,
		&__value:empty {
			display: none
		}

		&__value {
			position: relative;
			overflow: hidden;
			color: $cell-value-color;
			text-align: right;
			vertical-align: middle;
			word-wrap: break-word;

			&--alone {
				color: $text-color;
				text-align: left;
			}
		}

		&__left-icon,
		&__right-icon {
			height: $cell-line-height;
			font-size: $cell-icon-size;
			line-height: $cell-line-height;
		}

		&__left-icon {
			margin-right: $padding-base;
		}

		&__right-icon {
			margin-left: $padding-base;
			color: $cell-right-icon-color;
		}

		&--hover {
			background-color: $cell-active-color;
		}

		&--required {
			overflow: visible;

			&::before {
				position: absolute;
				left: $padding-xs;
				color: $cell-required-color;
				font-size: $cell-font-size;
				content: "*";
			}
		}

		&--center {
			align-items: center;
		}

		&--large {
			padding-top: $cell-large-vertical-padding;
			padding-bottom: $cell-large-vertical-padding;

			.zebra-cell__title {
				font-size: $cell-large-title-font-size;
			}

			.zebra-cell__label {
				font-size: $cell-large-label-font-size;
			}
		}

		.zebra-cell__left-icon-wrap,
		.zebra-cell__right-icon-wrap {
			align-items: center;
			display: flex;
			height: 48rpx;
		}

		.zebra-cell__left-icon-wrap {
			margin-right: 8rpx;
		}

		.zebra-cell__right-icon-wrap {
			color: #969799;
			margin-left: 8rpx;
		}
	}
</style>
