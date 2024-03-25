<template>
	<view :class="['zebra-row',bemMethods('row', [type,`justify-${justify}`,`align-${align}`])]"
		:style="[rootStyle({ gutter })]" @click="onClick">
		<!-- @slot 默认插槽 -->
		<slot></slot>
	</view>
</template>

<script>
	import addUnit from '../../static/utils/add-unit.js';
	import bem from '../../static/utils/bem.js';
	import style from '../../static/utils/style.js';
	import {
		ParentMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: 'z-row',
		mixins: [ParentMixin('zRow')],
		options: {
			virtualHost: true
		},
		props: {
			/**
			 * 列元素之间的间距
			 */
			gutter: {
				type: [String, Number],
				default: 0
			},
			/**
			 * 布局方式
			 * @values flex
			 */
			type: {
				type: String,
				default: ""
			},
			/**
			 * Flex 主轴对齐方式
			 * @values end,center,space-around,space-between
			 */
			justify: {
				type: String,
				default: "start"
			},
			/**
			 * Flex 交叉轴对齐方式
			 * @values center,bottom
			 */
			align: {
				type: String,
				default: "top"
			},
		},
		methods: {
			onClick(event) {
				/**
				 * 点击事件
				 * @property {object} event event
				 */
				this.$emit('click', event);
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			rootStyle(data) {
				if (!data.gutter) {
					return '';
				}
				return style({
					'margin-right': addUnit(-data.gutter / 2),
					'margin-left': addUnit(-data.gutter / 2),
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-row {
		&::after {
			display: table;
			clear: both;
			content: '';
		}

		&--flex {
			display: flex;
			flex-wrap: wrap;

			&::after {
				display: none;
			}
		}

		&--justify-center {
			justify-content: center;
		}

		&--justify-end {
			justify-content: flex-end;
		}

		&--justify-space-between {
			justify-content: space-between;
		}

		&--justify-space-around {
			justify-content: space-around;
		}

		&--align-center {
			align-items: center;
		}

		&--align-bottom {
			align-items: flex-end;
		}
	}
</style>
