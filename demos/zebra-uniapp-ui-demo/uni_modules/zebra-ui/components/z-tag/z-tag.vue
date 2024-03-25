<template>
	<view :class="['custom-class',bemMethods('tag', [type, size, { mark, plain, round }])]"
		:style="[rootStyle({ plain, color, textColor })]">
		<slot />
		<z-icon v-if="closeable" name="shutdown" custom-class="zebra-tag__close" @click="onClose" />
	</view>
</template>

<script>
	/**
	 * tag 标签
	 * @description tag 标签
	 * @tutorial 
	 * @property {String} type 类型，可选值为 primary success danger warning
	 * @property {String} size	大小, 可选值为 large medium
	 * @property {Boolean} mark	是否为标记样式
	 * @property {Boolean} plain	是否为空心样式
	 * @property {Boolean} round	是否为圆角样式
	 * @property {String} color	标签颜色
	 * @property {String} text-color	文本颜色，优先级高于 color 属性
	 * @property {Boolean} closeable	是否为可关闭标签
	 */
	import bem from '../../static/utils/bem.js';
	import style from '../../static/utils/style.js';
	import addUnit from '../../static/utils/add-unit.js';
	export default {
		name: 'z-tag',
		props: {
			// 类型，可选值为 primary success danger warning
			type: {
				type: String,
				default: ""
			},
			// 大小, 可选值为 large medium
			size: {
				type: String,
				default: ""
			},
			// 是否为标记样式
			mark: {
				type: Boolean,
				default: false
			},
			// 是否为空心样式
			plain: {
				type: Boolean,
				default: false
			},
			// 是否为圆角样式
			round: {
				type: Boolean,
				default: false
			},
			// 标签颜色
			color: {
				type: String,
				default: ""
			},
			// 文本颜色，优先级高于 color 属性
			textColor: {
				type: String,
				default: ""
			},
			// 是否为可关闭标签
			closeable: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {}
		},
		methods: {
			onClose() {
				this.$emit('close');
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			rootStyle(data) {
				return {
					'background-color': data.plain ? '' : data.color,
					color: data.textColor || data.plain ? data.textColor || data.color : '',
				};
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-tag {
		position: relative;
		display: inline-flex;
		align-items: center;
		padding: $tag-padding;
		color: $tag-text-color;
		font-size: $tag-font-size;
		line-height: $tag-line-height;
		border-radius: $tag-border-radius;

		&--default {
			background-color: $tag-default-color;

			&.zebra-tag--plain {
				color: $tag-default-color;
			}
		}

		&--danger {
			background-color: $tag-danger-color;

			&.zebra-tag--plain {
				color: $tag-danger-color;
			}
		}

		&--primary {
			background-color: $tag-primary-color;

			&.zebra-tag--plain {
				color: $tag-primary-color;
			}
		}

		&--success {
			background-color: $tag-success-color;

			&.zebra-tag--plain {
				color: $tag-success-color;
			}
		}

		&--warning {
			background-color: $tag-warning-color;

			&.zebra-tag--plain {
				color: $tag-warning-color;
			}
		}

		&--plain {
			background-color: $tag-plain-background-color;
			border-color: currentColor;

			&::before {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				border: 2rpx solid;
				border-color: inherit;
				border-radius: inherit;
				content: '';
				pointer-events: none;
			}
		}

		&--medium {
			padding: $tag-medium-padding;
		}

		&--large {
			padding: $tag-large-padding;
			font-size: $tag-large-font-size;
			border-radius: $tag-large-border-radius;
		}

		&--mark {
			border-radius: 0 $tag-round-border-radius $tag-round-border-radius 0;

			&::after {
				display: block;
				width: 4rpx;
				content: '';
			}
		}

		&--round {
			border-radius: $tag-round-border-radius;
		}

		&__close {
			margin-left: 4rpx;
			cursor: pointer;
		}
	}
</style>
