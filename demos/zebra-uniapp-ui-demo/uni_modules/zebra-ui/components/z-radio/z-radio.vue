<template>
	<view :class="[bemMethods('radio', [{ horizontal: direction === 'horizontal' }])]"
		:style="[styleToObj(customStyle)]">
		<template v-if="tagType">
			<view class="zebra-radio__tag-wrap" @click="toggle">
				<view
					:class="[bemMethods('radio__tag', [shape, { disabled: disabled || parentDisabled, checked: !checked }])]"
					:style="[iconStyle(checkedColor, checked, disabled, parentDisabled)]">
					<slot />
				</view>
			</view>
		</template>
		<template v-else>
			<view v-if="labelPosition === 'left'"
				:class="['label-class',bemMethods('radio__label', [labelPosition, { disabled: disabled || parentDisabled }])]"
				@click="onClickLabel">
				<slot />
			</view>
			<view class="zebra-radio__icon-wrap" @click="toggle">
				<slot v-if="useIconSlot" name="icon" />
				<view v-else
					:class="[bemMethods('radio__icon', [shape, { disabled: disabled || parentDisabled, checked: checked }])]"
					:style="[iconStyle(checkedColor, checked, disabled, parentDisabled, iconSize)]">
					<z-icon name="done" custom-class="icon-class" custom-style="line-height:1.25em" />
				</view>

			</view>
			<view v-if="labelPosition === 'right'"
				:class="['label-class',bemMethods('radio__label', [labelPosition, { disabled: disabled || parentDisabled }])]"
				@click="onClickLabel">
				<slot />
			</view>
		</template>
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import addUnit from '../../static/utils/add-unit.js';
	import {
		styleToObj
	} from '../../static/utils/utils.js';
	import {
		getParent,
		getChildren
	} from '../../static/utils/utils.js';
	export default {
		name: "z-radio",
		props: {
			tag: Boolean,
			value: null,
			disabled: Boolean,
			useIconSlot: Boolean,
			checkedColor: String,
			name: String,
			labelPosition: {
				type: String,
				default: 'right',
			},
			labelDisabled: Boolean,
			shape: {
				type: String,
				default: 'round',
			},
			iconSize: {
				type: null,
				default: 40,
			},
			// 自定义样式
			customStyle: {
				type: String,
				default: ''
			},
		},
		// 字节小程序computed获取不到parent
		// #ifndef MP-TOUTIAO
		computed: {
			currentValue: {
				get() {
					this.parent = getParent(this, 'z-radio-group');
					return this.parent ? this.parent.value : this.value;
				},
				set(val) {
					this.parent = getParent(this, 'z-radio-group');
					(this.parent || this).$emit('input', val);
				},
			},
			tagType: {
				get() {
					this.parent = getParent(this, 'z-radio-group');
					return this.parent ? this.parent.tag : this.tag;
				},
				set(val) {
					// this.parent = this.getParent('z-radio-group');
					// (this.parent || this).$emit('input', val);
				},
			},
			checked() {
				return this.currentValue === this.name;
			},
		},
		// #endif
		data() {
			return {
				parentDisabled: false,
				direction: 'vertical',
				// #ifdef MP-TOUTIAO
				currentValue: '',
				tagType: '',
				checked: false
				// #endif
			}
		},
		// #ifdef MP-TOUTIAO
		mounted() {
			this.parent = getParent(this, 'z-radio-group');
			if (this.parent) {
				this.currentValue = this.parent.value;
				this.parent.$watch('value', (val) => {
					this.currentValue = this.parent.value;
					this.parent.$emit('input', val);
				})
				this.tagType = this.parent.tag;
				this.parent.$watch('tag', (val) => {
					this.tagType = this.parent.tag;
				})
				this.parent.$watch('disabled', (val) => {
					this.parentDisabled = val;
				}, {
					immediate: true
				})
			} else {
				this.currentValue = this.value;
				this.$watch('value', (val) => {
					this.currentValue = this.value;
					this.$emit('input', val);
				})
				this.tagType = this.tag;
				this.$watch('tag', (val) => {
					this.tagType = this.tag;
				})
			}
			this.checked = this.currentValue === this.name;
			this.$watch('currentValue', (val) => {
				this.checked = this.currentValue === this.name;
			})
		},
		// #endif
		methods: {
			styleToObj(style) {
				return styleToObj(style);
			},
			getParent(name = undefined) {
				let parent = this.$parent;
				// 通过while历遍，这里主要是为了H5需要多层解析的问题
				while (parent) {
					// 父组件
					if (parent.$options && parent.$options.name !== name) {
						// 如果组件的name不相等，继续上一级寻找
						parent = parent.$parent;
					} else {
						return parent;
					}
				}
				return false;
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			iconStyle(checkedColor, value, disabled, parentDisabled, iconSize) {
				var styles = {
					'font-size': addUnit(iconSize),
				};

				if (checkedColor && value && !disabled && !parentDisabled) {
					styles['border-color'] = checkedColor;
					styles['background-color'] = checkedColor;
				}

				return styles;
			},
			emitChange(value) {
				this.parent = getParent(this, 'z-radio-group');
				if (this.parent) {
					this.setParentValue(this.parent, value);
				} else {
					this.$emit('input', value);
					this.$emit('change', value);
				}
			},
			emit(target, value) {
				target.$emit('input', value);
				target.$emit('change', value);
			},
			toggle() {
				const {
					parentDisabled,
					disabled,
					value
				} = this;
				if (!disabled && !parentDisabled) {
					this.emitChange(!value);
				}
			},
			onClickLabel() {
				const {
					labelDisabled,
					parentDisabled,
					disabled,
					value
				} = this;
				if (!disabled && !labelDisabled && !parentDisabled) {
					this.emitChange(!value);
				}
			},
			setParentValue(parent, value) {
				this.currentValue = this.name;
				// #ifdef MP-TOUTIAO
				parent.value = this.currentValue;
				// #endif
			}
		},
	}
</script>


<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-radio {
		align-items: center;
		display: flex;
		overflow: hidden;
		-webkit-user-select: none;
		user-select: none;

		.zebra-radio--horizontal {
			margin-right: 12px
		}

		.zebra-radio__tag {
			position: relative;
			display: inline-flex;
			align-items: center;
			padding: $tag-padding;
			color: $tag-text-color;
			font-size: $tag-font-size;
			line-height: $tag-line-height;
			border-radius: $tag-border-radius;

			background-color: $tag-primary-color;

			&.zebra-radio__tag--checked {
				color: $tag-primary-color;
			}
		}

		.zebra-radio__tag--round {
			border-radius: $tag-round-border-radius;
		}

		.zebra-radio__tag--checked {
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

		.zebra-radio__tag--disabled {
			background-color: $radio-disabled-background-color;
			border-color: $radio-disabled-icon-color
		}

		.zebra-radio__tag--disabled.zebra-radio__tag--checked {
			color: $radio-disabled-icon-color
		}

		.zebra-radio__icon-wrap,
		.zebra-radio__label {
			line-height: $radio-size
		}

		.zebra-radio__icon-wrap {
			flex: none
		}

		.zebra-radio__icon {
			align-items: center;
			border: 1px solid $radio-border-color;
			box-sizing: border-box;
			color: transparent;
			display: flex;
			font-size: $radio-size;
			height: 1em;
			justify-content: center;
			text-align: center;
			transition-duration: $radio-transition-duration;
			transition-property: color, border-color, background-color;
			width: 1em
		}

		.zebra-radio__icon--round {
			border-radius: 100%
		}

		.zebra-radio__icon--checked {
			background-color: $radio-checked-icon-color;
			border-color: $radio-checked-icon-color;
			color: #fff
		}

		.zebra-radio__icon--disabled {
			background-color: $radio-disabled-background-color;
			border-color: $radio-disabled-icon-color
		}

		.zebra-radio__icon--disabled.zebra-radio__icon--checked {
			color: $radio-disabled-icon-color
		}

		.zebra-radio__label {
			word-wrap: break-word;
			color: $radio-label-color;
			padding-left: $radio-label-margin
		}

		.zebra-radio__label--left {
			float: left;
			margin: 0 $radio-label-margin 0 0
		}

		.zebra-radio__label--disabled {
			color: $radio-disabled-label-color
		}

		.zebra-radio__label:empty {
			margin: 0
		}
	}
</style>
