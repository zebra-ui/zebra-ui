<template>
	<view :class="[bemMethods('rate')]" @touchmove="onTouchMove">
		<view :class="[bemMethods('rate__item')]" v-for="(item,index) in innerCountArray" :key="index"
			:style="[{ paddingRight: index !== count - 1 ? addUnitMethods(gutter) : null }]">
			<view :class="[bemMethods('rate__icon', [{ disabled, full: index + 1 <= innerValue }])]"
				:style="[{ fontSize: addUnitMethods(size) }]" :data-score="index">
				<z-icon :name="index + 1 <= innerValue ? icon : voidIcon"
					:color="disabled ? disabledColor : index + 1 <= innerValue ? color : voidColor"
					@click="onSelect(index)" />
			</view>
			<view v-if="allowHalf"
				:class="[bemMethods('rate__icon', ['half', { disabled, full: index + 0.5 <= innerValue }])]"
				:style="[{ fontSize: addUnitMethods(size) }]" :data-score="index - 0.5">
				<z-icon :name="index + 0.5 <= innerValue ? icon : voidIcon"
					:color="disabled ? disabledColor : index + 0.5 <= innerValue ? color : voidColor"
					@click="onSelect(index - 0.5)" />
			</view>

		</view>
	</view>
</template>

<script>
	import bem from "../../static/utils/bem.js";
	import addUnit from "../../static/utils/add-unit.js";
	import {
		getAllRect
	} from '../../static/utils/utils.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: "z-rate",
		mixins: [ChildrenMixin('zField')],
		props: {
			value: {
				type: Number,
			},
			readonly: Boolean,
			disabled: Boolean,
			allowHalf: Boolean,
			size: null,
			icon: {
				type: String,
				default: 'heart_fill',
			},
			voidIcon: {
				type: String,
				default: 'heart_outline',
			},
			color: String,
			voidColor: String,
			disabledColor: String,
			count: {
				type: Number,
				default: 5
			},
			gutter: null,
			touchable: {
				type: Boolean,
				default: true,
			},
		},
		data() {
			return {
				innerValue: 0,
				innerCountArray: Array.from({
					length: 5
				}),
			};
		},
		watch: {
			value(val) {
				if (val !== this.innerValue) {
					this.innerValue = val;
				}
			},
			count: {
				immediate: true,
				handler: function(val) {
					this.innerCountArray = Array.from({
						length: val
					})
				}
			}
		},
		mounted() {
			this.innerValue = this.value;
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			addUnitMethods(value) {
				return addUnit(value);
			},
			onSelect(score) {
				if (!this.disabled && !this.readonly) {
					// this.setData({
					// 	innerValue: score + 1
					// });
					this.innerValue = score + 1;
					// if (canIUseModel()) {
					// 	this.setData({
					// 		value: score + 1
					// 	});
					// }
					// wx.nextTick(() => {
					this.$emit('input', score + 1);
					this.$emit('change', score + 1);
					// });
				}
			},
			onTouchMove(event) {
				const {
					touchable
				} = this;
				if (!touchable)
					return;
				const {
					clientX
				} = event.touches[0];
				getAllRect(this, '.zebra-rate__icon').then((list) => {
					const target = list
						.sort((cur, next) => cur.dataset.score - next.dataset.score)
						.find((item) => clientX >= item.left && clientX <= item.right);
					if (target) {
						this.onSelect(target.dataset.score);
					}
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/var";

	.zebra-rate {
		display: inline-flex;
		flex-wrap: wrap;
		// cursor: pointer;
		// user-select: none;

		&__item {
			position: relative;

			&:not(:last-child) {
				padding-right: $rate-icon-gutter;
			}
		}

		&__icon {
			display: block;
			width: 1em;
			color: $rate-icon-void-color;
			font-size: $rate-icon-size;

			&--half {
				position: absolute;
				top: 0;
				left: 0;
				width: 0.5em;
				overflow: hidden;
			}

			&--full {
				color: $rate-icon-full-color;
			}

			&--disabled {
				color: $rate-icon-disabled-color;
			}
		}

		&--disabled {
			cursor: not-allowed;
		}

		&--readonly {
			cursor: default;
		}
	}
</style>
