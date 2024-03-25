<template>
	<view :class="['zebra-picker-column']" :style="[rootStyle({ itemHeight, visibleItemCount })]"
		@touchstart="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd"
		@touchcancel="onTouchEnd">
		<view :style="[wrapperStyle({ offset, itemHeight, visibleItemCount, duration })]">
			<view v-for="(option,index) in options" :key="index" :style="'height:'+itemHeight+'rpx'"
				:class="['zebra-ellipsis',bemMethods('picker-column__item', { disabled: option && option.disabled, selected: index === currentIndex }),index === currentIndex ? 'active-class' : '']"
				@click="onClickItem(index)">{{ optionText(option, valueKey) }}</view>
		</view>
	</view>
</template>

<script>
	import addUnit from '../../static/utils/add-unit.js';
	import bem from '../../static/utils/bem.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	import {
		styleToObj
	} from '../../static/utils/utils.js';
	const DEFAULT_DURATION = 200;
	export default {
		name: "z-picker-column",
		mixins: [ChildrenMixin('zPicker')],
		props: {
			itemHeight: {
				type: [String, Number],
				default: 88
			},
			visibleItemCount: {
				type: [String, Number],
				default: 6
			},
			valueKey: String,
			initialOptions: {
				type: Array,
				default: function() {
					return []
				},
			},
			defaultIndex: {
				type: Number,
				default: 0,
			},
			customStyle: {
				type: String,
				default: ""
			}
		},
		watch: {
			defaultIndex: {
				immediate: true,
				handler: function(value) {
					this.setIndex(value);
				}
			}
		},
		data() {
			return {
				startY: 0,
				offset: 0,
				duration: 0,
				startOffset: 0,
				options: [],
				currentIndex: 0,
			}
		},
		created() {
			const {
				defaultIndex,
				initialOptions
			} = this;
			this.currentIndex = defaultIndex;
			this.options = initialOptions;
			this.setIndex(defaultIndex);
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			rootStyle(data) {
				return {
					height: addUnit(data.itemHeight * data.visibleItemCount),
					...styleToObj(this.customStyle)
				};
			},
			wrapperStyle(data) {
				var offset = addUnit(
					data.offset + (data.itemHeight * (data.visibleItemCount - 1)) / 2
				);
				return {
					transition: 'transform ' + data.duration + 'ms',
					'line-height': addUnit(data.itemHeight),
					transform: 'translate3d(0, ' + offset + ', 0)',
				};
			},
			getCount() {
				return this.options.length;
			},
			onTouchStart(event) {
				this.startY = event.touches[0].clientY;
				this.startOffset = this.offset;
				this.duration = 0;
			},
			onTouchMove(event) {
				const data = this;
				const deltaY = event.touches[0].clientY - data.startY;
				this.offset = this.range(data.startOffset + deltaY, -(this.getCount() * data.itemHeight), data
					.itemHeight);
			},
			onTouchEnd() {
				const data = this;
				if (data.offset !== data.startOffset) {
					this.duration = DEFAULT_DURATION;
					const index = this.range(Math.round(-data.offset / data.itemHeight), 0, this.getCount() - 1);
					this.setIndex(index, true);
				}
			},
			onClickItem(index) {
				this.duration = DEFAULT_DURATION;
				this.setIndex(index, true);
			},
			adjustIndex(index) {
				const data = this;
				const count = this.getCount();
				index = this.range(index, 0, count);
				for (let i = index; i < count; i++) {
					if (!this.isDisabled(data.options[i]))
						return i;
				}
				for (let i = index - 1; i >= 0; i--) {
					if (!this.isDisabled(data.options[i]))
						return i;
				}
			},
			isDisabled(option) {
				return this.isObj(option) && option.disabled;
			},
			isObj(x) {
				const type = typeof x;
				return x !== null && (type === 'object' || type === 'function');
			},
			getOptionText(option) {
				const {
					data
				} = this;
				return this.isObj(option) && data.valueKey in option ?
					option[data.valueKey] :
					option;
			},
			setIndex(index, userAction) {
				const data = this;
				index = this.adjustIndex(index) || 0;
				const offset = -index * data.itemHeight;
				if (index !== data.currentIndex) {
					this.offset = offset;
					this.currentIndex = index;
					userAction && this.$emit('change', index);
					return
				}
				this.offset = offset;
				return;
			},
			setValue(value) {
				const {
					options
				} = this;
				for (let i = 0; i < options.length; i++) {
					if (this.getOptionText(options[i]) === value) {
						return this.setIndex(i);
					}
				}
				return Promise.resolve();
			},
			range(num, min, max) {
				return Math.min(Math.max(num, min), max);
			},
			getValue() {
				return this.options[this.currentIndex];
			},
			optionText(option, valueKey) {
				return this.isObj(option) && option[valueKey] != null ? option[valueKey] : option;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-picker-column {
		color: $picker-option-text-color;
		font-size: $picker-option-font-size;
		overflow: hidden;
		text-align: center
	}

	.zebra-picker-column__item {
		padding: 0 10rpx
	}

	.zebra-picker-column__item--selected {
		color: #323233;
		font-weight: $font-weight-bold;
	}

	.zebra-picker-column__item--disabled {
		opacity: $picker-option-disabled-opacity;
	}
</style>
