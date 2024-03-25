<template>
	<view :class="[bemMethods('col', [span]),offset ? 'zebra-col--offset-' + offset : '']" :style="[styleData]">
		<slot />
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import addUnit from '../../static/utils/add-unit.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: 'z-col',
		mixins: [ChildrenMixin('zRow')],
		options: {
			virtualHost: true
		},
		props: {
			/**
			 * 列元素宽度
			 */
			span: {
				type: [String, Number],
				default: 0
			},
			/**
			 * 列元素偏移距离
			 */
			offset: {
				type: [String, Number],
				default: 0
			},
		},
		data() {
			return {
				gutter: 0,
				styleData: {}
			}
		},
		mounted() {
			if (this.parent) {
				this.gutter = this.parent.gutter;
			}
		},
		watch: {
			gutter(val) {
				const spaces = [];
				const groups = [
					[]
				];
				let totalSpan = 0;
				let children = this.parent.children;
				children.forEach((item, index) => {
					totalSpan += Number(item.span);
					if (totalSpan > 24) {
						groups.push([index]);
						totalSpan -= 24;
					} else {
						groups[groups.length - 1].push(index);
					}
				});
				groups.forEach((group) => {
					const averagePadding = (val * (group.length - 1)) / group.length;
					group.forEach((item, index) => {
						if (index === 0) {
							spaces.push({
								right: averagePadding
							});
						} else {
							const left = val - spaces[item - 1].right;
							const right = averagePadding - left;
							spaces.push({
								left,
								right
							});
						}
					});
				});
				let index = children.findIndex((item) => {
					return item._uid == this._uid
				})
				const {
					left,
					right
				} = spaces[index];
				this.styleData = {
					paddingLeft: left ? `${left}rpx` : null,
					paddingRight: right ? `${right}rpx` : null,
				}
			}
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-col {
		float: left;
		box-sizing: border-box;
		min-height: 2rpx;
	}

	@mixin generate-col($n) {
		@for $i from 1 to $n {
			.zebra-col--#{$i} {
				width: ($i * 100% / 24);
			}

			.zebra-col--offset-#{$i} {
				margin-left: ($i * 100% / 24);
			}
		}
	}

	@include generate-col(24);
</style>
