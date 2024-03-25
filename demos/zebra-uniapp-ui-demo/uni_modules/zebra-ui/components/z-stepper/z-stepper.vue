<template>
	<view :class="[bemMethods('stepper', [theme])]">
		<view v-if="showMinus" data-type="minus" :style="[buttonStyle({ buttonSize })]"
			:class="['minus-class',bemMethods('stepper__minus', { disabled: disabled || disableMinus || currentValue <= min })]"
			hover-class="zebra-stepper__minus--hover" hover-stay-time="70" @click="onTap" @touchstart="onTouchStart"
			@touchend="onTouchEnd">
			<slot name="minus" />
		</view>
		<input :type="integer ? 'number' : 'digit'"
			:class="['input-class',bemMethods('stepper__input', { disabled: disabled || disableInput })]"
			:style="[inputStyle({ buttonSize, inputWidth })]" :value="currentValue" :focus="focus"
			:disabled="disabled || disableInput" @input="onInput" @focus="onFocus" @blur="onBlur" />
		<view v-if="showPlus" data-type="plus" :style="[buttonStyle({ buttonSize })]"
			:class="['plus-class', bemMethods('stepper__plus', { disabled: disabled || disablePlus || currentValue >= max })]"
			hover-class="zebra-stepper__plus--hover" hover-stay-time="70" @click="onTap" @touchstart="onTouchStart"
			@touchend="onTouchEnd">
			<slot name="plus" />
		</view>
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import addUnit from '../../static/utils/add-unit.js';
	import {
		isDef
	} from '../../libs/utils/validator.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	const LONG_PRESS_START_TIME = 600;
	const LONG_PRESS_INTERVAL = 200;
	export default {
		name: "z-stepper",
		mixins: [ChildrenMixin('zField')],
		props: {
			value: {
				type: null,
				// observer: 'observeValue',
			},
			integer: {
				type: Boolean,
				// observer: 'check',
			},
			disabled: Boolean,
			inputWidth: String,
			buttonSize: String,
			asyncChange: Boolean,
			disableInput: Boolean,
			decimalLength: {
				type: Number,
				default: null,
				// observer: 'check',
			},
			min: {
				type: null,
				default: 1,
				// observer: 'check',
			},
			max: {
				type: null,
				default: Number.MAX_SAFE_INTEGER,
				// observer: 'check',
			},
			step: {
				type: null,
				default: 1,
			},
			showPlus: {
				type: Boolean,
				default: true,
			},
			showMinus: {
				type: Boolean,
				default: true,
			},
			disablePlus: Boolean,
			disableMinus: Boolean,
			longPress: {
				type: Boolean,
				default: true,
			},
			theme: String,
			focus: Boolean
		},
		data() {
			return {
				currentValue: '',
			}
		},
		watch: {
			value(val) {
				this.observeValue();
			},
			integer() {
				this.check();
			},
			decimalLength() {
				this.check();
			},
			min() {
				this.check();
			},
			max() {
				this.check();
			}
		},
		mounted() {
			this.currentValue = this.format(this.value);
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			buttonStyle(data) {
				return {
					width: addUnit(data.buttonSize),
					height: addUnit(data.buttonSize),
				};
			},
			inputStyle(data) {
				return {
					width: addUnit(data.inputWidth),
					height: addUnit(data.buttonSize),
				};
			},
			add(num1, num2) {
				const cardinal = Math.pow(10, 10);
				return Math.round((num1 + num2) * cardinal) / cardinal;
			},
			equal(value1, value2) {
				return String(value1) === String(value2);
			},
			observeValue() {
				const {
					value,
					currentValue
				} = this;
				if (!this.equal(value, currentValue)) {
					this.currentValue = this.format(value);
				}
			},
			check() {
				const val = this.format(this.currentValue);
				if (!equal(val, this.currentValue)) {
					this.currentValue = val;
				}
			},
			isDisabled(type) {
				const {
					disabled,
					disablePlus,
					disableMinus,
					currentValue,
					max,
					min,
				} = this;
				if (type === 'plus') {
					return disabled || disablePlus || currentValue >= max;
				}
				return disabled || disableMinus || currentValue <= min;
			},
			onFocus(event) {
				this.$emit('focus', event.detail);
			},
			onBlur(event) {
				const value = this.format(event.detail.value);
				this.emitChange(value);
				this.$emit('blur', Object.assign(Object.assign({}, event.detail), {
					value
				}));
			},
			// filter illegal characters
			filter(value) {
				value = String(value).replace(/[^0-9.-]/g, '');
				if (this.integer && value.indexOf('.') !== -1) {
					value = value.split('.')[0];
				}
				return value;
			},
			// limit value range
			format(value) {
				value = this.filter(value);
				// format range
				value = value === '' ? 0 : +value;
				value = Math.max(Math.min(this.max, value), this.min);
				// format decimal
				if (isDef(this.decimalLength)) {
					value = value.toFixed(this.decimalLength);
				}
				return value;
			},
			onInput(event) {
				const {
					value = ''
				} = event.detail || {};
				// allow input to be empty
				if (value === '') {
					return;
				}
				let formatted = this.filter(value);
				// limit max decimal length
				if (isDef(this.decimalLength) && formatted.indexOf('.') !== -1) {
					const pair = formatted.split('.');
					formatted = `${pair[0]}.${pair[1].slice(0, this.decimalLength)}`;
				}
				this.emitChange(formatted);
			},
			emitChange(value) {
				if (!this.asyncChange) {
					this.currentValue = value;
				}
				this.$emit('change', value);
				this.$emit('input', value);
			},
			onChange() {
				const {
					type
				} = this;
				if (this.isDisabled(type)) {
					this.$emit('overlimit', type);
					return;
				}
				const diff = type === 'minus' ? -this.step : +this.step;
				const value = this.format(this.add(+this.currentValue, diff));
				this.emitChange(value);
				this.$emit(type);
			},
			longPressStep() {
				this.longPressTimer = setTimeout(() => {
					this.onChange();
					this.longPressStep();
				}, LONG_PRESS_INTERVAL);
			},
			onTap(event) {
				const {
					type
				} = event.currentTarget.dataset;
				this.type = type;
				this.onChange();
			},
			onTouchStart(event) {
				if (!this.longPress) {
					return;
				}
				clearTimeout(this.longPressTimer);
				const {
					type
				} = event.currentTarget.dataset;
				this.type = type;
				this.isLongPress = false;
				this.longPressTimer = setTimeout(() => {
					this.isLongPress = true;
					this.onChange();
					this.longPressStep();
				}, LONG_PRESS_START_TIME);
			},
			onTouchEnd() {
				if (!this.longPress) {
					return;
				}
				clearTimeout(this.longPressTimer);
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/var";

	.zebra-stepper {
		font-size: 0
	}

	.zebra-stepper__minus,
	.zebra-stepper__plus {
		background-color: $stepper-background-color;
		border: 0;
		box-sizing: border-box;
		color: $stepper-button-icon-color;
		display: inline-block;
		height: $stepper-input-height;
		margin: 2rpx;
		padding: $padding-base;
		position: relative;
		vertical-align: middle;
		width: $stepper-input-height
	}

	.zebra-stepper__minus:before,
	.zebra-stepper__plus:before {
		width: 50%;
		height: 2rpx;
	}

	.zebra-stepper__minus:after,
	.zebra-stepper__plus:after {
		width: 2rpx;
		height: 50%;
	}

	.zebra-stepper__minus:empty.zebra-stepper__minus:after,
	.zebra-stepper__minus:empty.zebra-stepper__minus:before,
	.zebra-stepper__minus:empty.zebra-stepper__plus:after,
	.zebra-stepper__minus:empty.zebra-stepper__plus:before,
	.zebra-stepper__plus:empty.zebra-stepper__minus:after,
	.zebra-stepper__plus:empty.zebra-stepper__minus:before,
	.zebra-stepper__plus:empty.zebra-stepper__plus:after,
	.zebra-stepper__plus:empty.zebra-stepper__plus:before {
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: currentColor;
		transform: translate(-50%, -50%);
		content: '';
	}

	.zebra-stepper__minus--hover,
	.zebra-stepper__plus--hover {
		background-color: $stepper-active-color
	}

	.zebra-stepper__minus--disabled,
	.zebra-stepper__plus--disabled {
		color: $stepper-button-disabled-icon-color
	}

	.zebra-stepper__minus--disabled,
	.zebra-stepper__minus--disabled.zebra-stepper__minus--hover,
	.zebra-stepper__minus--disabled.zebra-stepper__plus--hover,
	.zebra-stepper__plus--disabled,
	.zebra-stepper__plus--disabled.zebra-stepper__minus--hover,
	.zebra-stepper__plus--disabled.zebra-stepper__plus--hover {
		background-color: $stepper-button-disabled-color
	}

	.zebra-stepper__minus {
		border-radius: $stepper-border-radius 0 0 $stepper-border-radius
	}

	.zebra-stepper__minus:after {
		display: none
	}

	.zebra-stepper__plus {
		border-radius: 0 $stepper-border-radius $stepper-border-radius 0
	}

	.zebra-stepper--round .zebra-stepper__input {
		background-color: initial !important
	}

	.zebra-stepper--round .zebra-stepper__minus,
	.zebra-stepper--round .zebra-stepper__plus {
		border-radius: 100%
	}

	.zebra-stepper--round .zebra-stepper__minus:active,
	.zebra-stepper--round .zebra-stepper__plus:active {
		opacity: .7
	}

	.zebra-stepper--round .zebra-stepper__minus--disabled,
	.zebra-stepper--round .zebra-stepper__minus--disabled:active,
	.zebra-stepper--round .zebra-stepper__plus--disabled,
	.zebra-stepper--round .zebra-stepper__plus--disabled:active {
		opacity: .3
	}

	.zebra-stepper--round .zebra-stepper__plus {
		background-color: #ee0a24;
		color: #fff
	}

	.zebra-stepper--round .zebra-stepper__minus {
		background-color: #fff;
		border: 2rpx solid #ee0a24;
		color: #ee0a24
	}

	.zebra-stepper__input {
		-webkit-appearance: none;
		background-color: $stepper-background-color;
		border: 0;
		border-radius: 0;
		border-width: 2rpx 0;
		box-sizing: border-box;
		color: $stepper-input-text-color;
		display: inline-block;
		font-size: $stepper-input-font-size;
		height: $stepper-input-height;
		margin: 2rpx;
		min-height: 0;
		padding: 2rpx;
		text-align: center;
		vertical-align: middle;
		width: $stepper-input-width
	}

	.zebra-stepper__input--disabled {
		background-color: $stepper-input-disabled-background-color;
	}
</style>
