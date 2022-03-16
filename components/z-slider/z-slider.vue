<template>
	<view :class="[bemMethods('slider', { disabled, vertical })]" :style="wrapperStyle" @click="onClick">
		<view :class="[bemMethods('slider__bar')]" :style="barStyle">
			<view v-if="range" :class="[bemMethods('slider__button-wrapper-left')]" :data-index="0"
				@touchstart.stop="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd"
				@touchcancel="onTouchEnd">
				<slot v-if="useButtonSlot" name="left-button" />
				<view v-else :class="[bemMethods('slider__button')]" />
			</view>
			<view v-if="range" :class="[bemMethods('slider__button-wrapper-right')]" :data-index="1"
				@touchstart.stop="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd"
				@touchcancel="onTouchEnd">
				<slot v-if="useButtonSlot" name="right-button" />
				<view v-else :class="[bemMethods('slider__button')]" />
			</view>

			<view v-if="!range" :class="[bemMethods('slider__button-wrapper')]" @touchstart.stop="onTouchStart"
				@touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
				<slot v-if="useButtonSlot" name="button" />
				<view v-else :class="[bemMethods('slider__button')]" />
			</view>
		</view>
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import {
		touchMixins
	} from '../../libs/mixins/touch.js';
	import {
		getRect
	} from '../../static/utils/utils.js';
	import addUnit from '../../static/utils/add-unit.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: "z-slider",
		mixins: [touchMixins, ChildrenMixin('zField')],
		props: {
			range: Boolean,
			disabled: Boolean,
			useButtonSlot: Boolean,
			activeColor: String,
			inactiveColor: String,
			max: {
				type: Number,
				default: 100,
			},
			min: {
				type: Number,
				default: 0,
			},
			step: {
				type: Number,
				default: 1,
			},
			value: {
				type: null,
				default: 0,
			},
			vertical: Boolean,
			barHeight: null,
		},
		data() {
			return {
				wrapperStyle: "",
				barStyle: "",
				innerValue: 0
			}
		},
		watch: {
			value(val) {
				if (val !== this.innerValue) {
					this.updateinnerValue(val);
				}
			},
		},
		mounted() {
			this.updateinnerValue(this.value);
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			onTouchStart(event) {
				if (this.disabled)
					return;
				const {
					index
				} = event.currentTarget.dataset;
				if (typeof index === 'number') {
					this.buttonIndex = index;
				}
				this.touchStart(event);
				this.startinnerValue = this.format(this.innerValue);
				this.newinnerValue = this.innerValue;
				if (this.isRange(this.newinnerValue)) {
					this.startinnerValue = this.newinnerValue.map((val) => this.format(val));
				} else {
					this.startinnerValue = this.format(this.newinnerValue);
				}
				this.dragStatus = 'start';
			},
			onTouchMove(event) {
				if (this.disabled)
					return;
				if (this.dragStatus === 'start') {
					this.$emit('drag-start');
				}
				this.touchMove(event);
				this.dragStatus = 'draging';
				getRect(this, '.zebra-slider').then((rect) => {
					const {
						vertical
					} = this;
					const delta = vertical ? this.deltaY : this.deltaX;
					const total = vertical ? rect.height : rect.width;
					const diff = (delta / total) * this.getRange();
					if (this.isRange(this.startinnerValue)) {
						this.newinnerValue[this.buttonIndex] =
							this.startinnerValue[this.buttonIndex] + diff;
					} else {
						this.newinnerValue = this.startinnerValue + diff;
					}
					this.updateinnerValue(this.newinnerValue, false, true);
				});
			},
			onTouchEnd() {
				if (this.disabled)
					return;
				if (this.dragStatus === 'draging') {
					this.updateinnerValue(this.newinnerValue, true);
					this.$emit('drag-end');
				}
			},
			onClick(event) {
				if (this.disabled)
					return;
				const {
					min
				} = this;
				getRect(this, '.zebra-slider').then((rect) => {
					const {
						vertical
					} = this;
					const touch = event.touches[0];
					const delta = vertical ?
						touch.clientY - rect.top :
						touch.clientX - rect.left;
					const total = vertical ? rect.height : rect.width;
					const innerValue = Number(min) + (delta / total) * this.getRange();
					if (this.isRange(this.innerValue)) {
						const [left, right] = this.innerValue;
						const middle = (left + right) / 2;
						if (innerValue <= middle) {
							this.updateinnerValue([innerValue, right], true);
						} else {
							this.updateinnerValue([left, innerValue], true);
						}
					} else {
						this.updateinnerValue(innerValue, true);
					}
				});
			},
			isRange(val) {
				const {
					range
				} = this;
				return range && Array.isArray(val);
			},
			handleOverlap(innerValue) {
				if (innerValue[0] > innerValue[1]) {
					return innerValue.slice(0).reverse();
				}
				return innerValue;
			},
			updateinnerValue(innerValue, end, drag) {
				if (this.isRange(innerValue)) {
					innerValue = this.handleOverlap(innerValue).map((val) => this.format(val));
				} else {
					innerValue = this.format(innerValue);
				}
				this.innerValue = innerValue;
				const {
					vertical
				} = this;
				const mainAxis = vertical ? 'height' : 'width';
				// this.setData({
				// 	wrapperStyle: `
				//          background: ${this.data.inactiveColor || ''};
				//          ${vertical ? 'width' : 'height'}: ${addUnit(this.data.barHeight) || ''};
				//        `,
				// 	barStyle: `
				//          ${mainAxis}: ${this.calcMainAxis()};
				//          left: ${vertical ? 0 : this.calcOffset()};
				//          top: ${vertical ? this.calcOffset() : 0};
				//          ${drag ? 'transition: none;' : ''}
				//        `,
				// });
				this.wrapperStyle = `
			          background: ${this.inactiveColor || ''};
			          ${vertical ? 'width' : 'height'}: ${addUnit(this.barHeight) || ''};
			        `
				this.barStyle = `
			          ${mainAxis}: ${this.calcMainAxis()};
			          left: ${vertical ? 0 : this.calcOffset()};
			          top: ${vertical ? this.calcOffset() : 0};
			          ${drag ? 'transition: none;' : ''};
					  backgroundColor: ${this.activeColor};
			        `
				if (drag) {
					this.$emit('drag', {
						innerValue
					});
					this.$emit('input', innerValue);
				}
				if (end) {
					this.$emit('change', innerValue);
				}
				// if ((drag || end) && canIUseModel()) {
				// 	this.setData({
				// 		innerValue
				// 	});
				// }
			},
			getScope() {
				return Number(this.max) - Number(this.min);
			},
			getRange() {
				const {
					max,
					min
				} = this;
				return max - min;
			},
			// 计算选中条的长度百分比
			calcMainAxis() {
				const {
					innerValue
				} = this;
				const {
					min
				} = this;
				const scope = this.getScope();
				if (this.isRange(innerValue)) {
					return `${((innerValue[1] - innerValue[0]) * 100) / scope}%`;
				}
				return `${((innerValue - Number(min)) * 100) / scope}%`;
			},
			// 计算选中条的开始位置的偏移量
			calcOffset() {
				const {
					innerValue
				} = this;
				const {
					min
				} = this;
				const scope = this.getScope();
				if (this.isRange(innerValue)) {
					return `${((innerValue[0] - Number(min)) * 100) / scope}%`;
				}
				return '0%';
			},
			format(innerValue) {
				const {
					max,
					min,
					step
				} = this;
				return Math.round(Math.max(min, Math.min(innerValue, max)) / step) * step;
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-slider {
		background-color: $slider-inactive-background-color;
		border-radius: 999px;
		width: 100%;
		height: $slider-bar-height;
		position: relative
	}

	.zebra-slider:before {
		bottom: calc($--padding-xs*-1);
		content: "";
		left: 0;
		position: absolute;
		right: 0;
		top: calc($padding-xs*-1)
	}

	.zebra-slider__bar {
		background-color: $slider-active-background-color;
		border-radius: inherit;
		height: 100%;
		position: relative;
		transition: all .2s;
		width: 100%
	}

	.zebra-slider__button {
		background-color: $slider-button-background-color;
		border-radius: $slider-button-border-radius;
		box-shadow: $slider-button-box-shadow;
		height: $slider-button-height;
		width: $slider-button-width
	}

	.zebra-slider__button-wrapper,
	.zebra-slider__button-wrapper-right {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate3d(50%, -50%, 0)
	}

	.zebra-slider__button-wrapper-left {
		left: 0;
		position: absolute;
		top: 50%;
		transform: translate3d(-50%, -50%, 0)
	}

	.zebra-slider--disabled {
		opacity: $slider-disabled-opacity
	}

	.zebra-slider--vertical {
		display: inline-block;
		height: 100%;
		width: $slider-bar-height
	}

	.zebra-slider--vertical .zebra-slider__button-wrapper,
	.zebra-slider--vertical .zebra-slider__button-wrapper-right {
		bottom: 0;
		right: 50%;
		top: auto;
		transform: translate3d(50%, 50%, 0)
	}

	.zebra-slider--vertical .zebra-slider__button-wrapper-left {
		left: auto;
		right: 50%;
		top: 0;
		transform: translate3d(50%, -50%, 0)
	}

	.zebra-slider--vertical:before {
		bottom: 0;
		left: -16rpx;
		right: -16rpx;
		top: 0
	}
</style>
