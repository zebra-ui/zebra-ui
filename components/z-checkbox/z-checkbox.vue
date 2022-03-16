<template>
	<view :class="[bemMethods('checkbox', [{ horizontal: direction === 'horizontal' }])]"
		:style="[styleToObj(customStyle)]">
		<template v-if="tag">
			<view class="zebra-checkbox__tag-wrap" @click="toggle">
				<view
					:class="[bemMethods('checkbox__tag', [shape, { disabled: disabled || parentDisabled, checked: !checked }])]"
					:style="[iconStyle(checkedColor, checked, disabled, parentDisabled)]">
					<slot />
				</view>
			</view>
		</template>
		<template v-else>
			<view v-if="labelPosition === 'left'"
				:class="['label-class',bemMethods('checkbox__label', [labelPosition, { disabled: disabled || parentDisabled }])]"
				@click="onClickLabel">
				<slot />
			</view>
			<view class="zebra-checkbox__icon-wrap" @click="toggle">
				<slot v-if="useIconSlot" name="icon" />
				<view v-else
					:class="[bemMethods('checkbox__icon', [shape, { disabled: disabled || parentDisabled, checked: checked }])]"
					:style="[iconStyle(checkedColor, checked, disabled, parentDisabled, iconSize)]">
					<z-icon name="done" custom-class="icon-class" custom-style="line-height: 1.25em;" />
				</view>

			</view>
			<view v-if="labelPosition === 'right'"
				:class="['label-class',bemMethods('checkbox__label', [labelPosition, { disabled: disabled || parentDisabled }])]"
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
		getParent,
		getChildren
	} from '../../static/utils/utils.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	import {
		styleToObj
	} from '../../static/utils/utils.js';
	export default {
		name: "z-checkbox",
		mixins: [ChildrenMixin('zField')],
		props: {
			tag: Boolean,
			value: Boolean,
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
			customStyle: {
				type: String,
				default: ""
			}
		},
		// 字节小程序computed获取不到parent
		// #ifndef MP-TOUTIAO
		computed: {
			checked: {
				get() {
					this.parent = getParent(this, 'z-checkbox-group');
					if (this.parent) {
						return this.parent.value.indexOf(this.name) !== -1;
					}
					return this.value;
				},

				set(val) {
					this.parent = getParent(this, 'z-checkbox-group');
					if (this.parent) {
						this.setParentValue(this.parent, val);
					} else {
						this.$emit('input', val);
					}
				},
			},
		},
		// #endif
		data() {
			return {
				parentDisabled: false,
				direction: 'vertical',
				// #ifdef MP-TOUTIAO
				checked: false
				// #endif
			}
		},
		// #ifdef MP-TOUTIAO
		mounted() {
			this.parent = getParent(this, 'z-checkbox-group');
			if (this.parent) {
				this.checked = this.parent.value.indexOf(this.name) !== -1;
				this.parent.$watch('value', (val) => {
					if (this.parent) {
						this.checked = this.parent.value.indexOf(this.name) !== -1;
					} else {
						this.checked = this.value
					}
				})
			} else {
				this.checked = this.value;
				this.$watch('value', (val) => {
					this.checked = val
				})
			}
		},
		// #endif
		methods: {
			styleToObj(style) {
				return styleToObj(style);
			},
			getParent(name = undefined) {
				let parent = this.$parent;
				while (parent) {
					if (parent.$options && parent.$options.name !== name) {
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
				this.parent = getParent(this, 'z-checkbox-group');
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
				const parentValue = parent.value.slice();
				const {
					name
				} = this;
				const {
					max
				} = parent;
				if (value) {
					const index = parentValue.indexOf(name);
					if (max && parentValue.length >= max && index == -1) {
						return;
					}
					if (index === -1) {
						parentValue.push(name);
						this.emit(parent, parentValue);
					} else {
						parentValue.splice(index, 1);
						this.emit(parent, parentValue);
					}
				} else {
					const index = parentValue.indexOf(name);
					if (index !== -1) {
						parentValue.splice(index, 1);
						this.emit(parent, parentValue);
					}
				}
			},
		}
	}
</script>


<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-checkbox {
		align-items: center;
		display: flex;
		overflow: hidden;
		-webkit-user-select: none;
		user-select: none;

		.zebra-checkbox--horizontal {
			margin-right: 12px
		}

		.zebra-checkbox__tag {
			position: relative;
			display: inline-flex;
			align-items: center;
			padding: $tag-padding;
			color: $tag-text-color;
			font-size: $tag-font-size;
			line-height: $tag-line-height;
			border-radius: $tag-border-radius;

			background-color: $tag-primary-color;

			&.zebra-checkbox__tag--checked {
				color: $tag-primary-color;
			}
		}

		.zebra-checkbox__tag--round {
			border-radius: $tag-round-border-radius;
		}

		.zebra-checkbox__tag--checked {
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

		.zebra-checkbox__tag--disabled {
			background-color: $checkbox-disabled-background-color;
			border-color: $checkbox-disabled-icon-color
		}

		.zebra-checkbox__tag--disabled.zebra-checkbox__tag--checked {
			color: $checkbox-disabled-icon-color
		}

		.zebra-checkbox__icon-wrap,
		.zebra-checkbox__label {
			line-height: $checkbox-size
		}

		.zebra-checkbox__icon-wrap {
			flex: none
		}

		.zebra-checkbox__icon {
			align-items: center;
			border: 1px solid $checkbox-border-color;
			box-sizing: border-box;
			color: transparent;
			display: flex;
			font-size: $checkbox-size;
			height: 1em;
			justify-content: center;
			text-align: center;
			transition-duration: $checkbox-transition-duration;
			transition-property: color, border-color, background-color;
			width: 1em
		}

		.zebra-checkbox__icon--round {
			border-radius: 100%
		}

		.zebra-checkbox__icon--checked {
			background-color: $checkbox-checked-icon-color;
			border-color: $checkbox-checked-icon-color;
			color: #fff
		}

		.zebra-checkbox__icon--disabled {
			background-color: $checkbox-disabled-background-color;
			border-color: $checkbox-disabled-icon-color
		}

		.zebra-checkbox__icon--disabled.zebra-checkbox__icon--checked {
			color: $checkbox-disabled-icon-color
		}

		.zebra-checkbox__label {
			word-wrap: break-word;
			color: $checkbox-label-color;
			padding-left: $checkbox-label-margin
		}

		.zebra-checkbox__label--left {
			float: left;
			margin: 0 $checkbox-label-margin 0 0
		}

		.zebra-checkbox__label--disabled {
			color: $checkbox-disabled-label-color
		}

		.zebra-checkbox__label:empty {
			margin: 0
		}
	}
</style>
