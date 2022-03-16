<template>
	<z-cell :size="size" :icon="leftIcon" :center="center" :border="border" :is-link="isLink" :required="required"
		:clickable="clickable" :title-width="titleWidth" title-style="margin-right: 24rpx;" :custom-style="customStyle"
		:arrow-direction="arrowDirection" custom-class="zebra-field" :use-title-slot="!!label || !!useLabelSlot"
		@click="onClick">
		<slot name="left-icon" slot="icon" />
		<!-- <template v-if="label || useLabelSlot"> -->
		<template #title>
			<view v-if="label" :class="['label-class',bemMethods('field__label', { disabled })]">
				{{ label }}
			</view>
			<view v-if="!label && useLabelSlot">
				<slot name="label" />
			</view>
		</template>
		<!-- </template> -->
		<!-- 		<template v-else #title>
			<slot name="label" />
		</template> -->
		<view :class="[bemMethods('field__body', [type])]">
			<view :class="[bemMethods('field__control', [inputAlign, 'custom'])]" @click="onClickInput">
				<slot name="input" />
			</view>
			<template v-if="type === 'textarea'">
				<textarea
					:class="[bemMethods('field__control', [inputAlign, type, { disabled, showerror }]),'input-class']"
					:fixed="fixed" :focus="focus" :cursor="cursor" :value="innerValue" :auto-focus="autoFocus"
					:disabled="disabled || readonly" :maxlength="maxlength" :placeholder="placeholder"
					:placeholder-style="placeholderStyle"
					:placeholder-class="bemMethods('field__placeholder', { showerror, disabled })"
					:auto-height="!!autosize" :style="[inputStyle(autosize)]" :cursor-spacing="cursorSpacing"
					:adjust-position="adjustPosition" :show-confirm-bar="showConfirmBar" :hold-keyboard="holdKeyboard"
					:selection-end="selectionEnd" :selection-start="selectionStart"
					:disable-default-padding="disableDefaultPadding" @input="onInput" @click="onClickInput"
					@blur="onBlur" @focus="onFocus" @confirm="onConfirm" @linechange="onLineChange"
					@keyboardheightchange="onKeyboardHeightChange" />

			</template>

			<template v-else>
				<input :class="[bemMethods('field__control', [inputAlign, { disabled, showerror }]),'input-class']"
					:type="type" :focus="focus" :cursor="cursor" :value="innerValue" :auto-focus="autoFocus"
					:disabled="disabled || readonly" :maxlength="maxlength" :placeholder="placeholder"
					:placeholder-style="placeholderStyle"
					:placeholder-class="bemMethods('field__placeholder', { showerror })" :confirm-type="confirmType"
					:confirm-hold="confirmHold" :hold-keyboard="holdKeyboard" :cursor-spacing="cursorSpacing"
					:adjust-position="adjustPosition" :selection-end="selectionEnd" :selection-start="selectionStart"
					:password="password || type === 'password'" @input="onInput" @click="onClickInput" @blur="onBlur"
					@focus="onFocus" @confirm="onConfirm" @keyboardheightchange="onKeyboardHeightChange" />

			</template>

			<z-icon v-if="showClear" :name="clearIcon" class="zebra-field__clear-root zebra-field__icon-root"
				@touchstart="onClear" />
			<view class="zebra-field__icon-container" @tap="onClickIcon">
				<z-icon v-if="rightIcon || icon" :name="rightIcon || icon" :class="['zebra-field__icon-root',iconClass]"
					custom-class="right-icon-class" />
				<slot name="right-icon" />
				<slot name="icon" />
			</view>
			<view class="zebra-field__button">
				<slot name="button" />
			</view>
		</view>
		<view v-if="showWordLimit && maxlength" class="zebra-field__word-limit">
			<view :class="[bemMethods('field__word-num', { full: value.length >= maxlength })]">
				{{ value.length >= maxlength ? maxlength : value.length }}
			</view>/{{ maxlength }}
		</view>
		<view v-if="message"
			:class="[bemMethods('field__error-message', [errorMessageAlign, { disabled, showerror }])]">
			{{ message }}
		</view>
	</z-cell>

</template>

<script>
	import addUnit from "../../static/utils/add-unit.js";
	import bem from '../../static/utils/bem.js';
	import {
		isFunction,
		isPromise
	} from '../../libs/utils/validator.js';
	import {
		getParent
	} from '../../static/utils/utils.js';
	import {
		ParentMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: "z-field",
		mixins: [ParentMixin('zField')],
		props: {
			name: String,
			size: String,
			icon: String,
			label: String,
			error: {
				type: Boolean,
				default: false
			},
			center: Boolean,
			isLink: Boolean,
			leftIcon: String,
			rightIcon: String,
			autosize: null,
			required: Boolean,
			iconClass: String,
			clickable: Boolean,
			inputAlign: String,
			customStyle: String,
			errorMessage: String,
			arrowDirection: String,
			showWordLimit: Boolean,
			errorMessageAlign: String,
			readonly: {
				type: Boolean,
				// observer: 'setShowClear',
			},
			clearable: {
				type: Boolean,
				// observer: 'setShowClear',
			},
			clearTrigger: {
				type: String,
				default: 'focus',
			},
			border: {
				type: Boolean,
				default: true,
			},
			titleWidth: {
				type: String,
				default: '6.2em',
			},
			clearIcon: {
				type: String,
				default: 'off_close',
			},
			value: {
				type: [String, Number],
			},
			placeholder: String,
			placeholderStyle: String,
			placeholderClass: String,
			disabled: Boolean,
			maxlength: {
				type: Number,
				default: -1,
			},
			cursorSpacing: {
				type: Number,
				default: 50,
			},
			autoFocus: Boolean,
			focus: Boolean,
			cursor: {
				type: Number,
				default: -1,
			},
			selectionStart: {
				type: Number,
				default: -1,
			},
			selectionEnd: {
				type: Number,
				default: -1,
			},
			adjustPosition: {
				type: Boolean,
				default: true,
			},
			holdKeyboard: Boolean,
			type: {
				type: String,
				default: 'text',
			},
			password: Boolean,
			confirmType: String,
			confirmHold: Boolean,
			autoHeight: Boolean,
			fixed: Boolean,
			showConfirmBar: {
				type: Boolean,
				default: true,
			},
			disableDefaultPadding: {
				type: Boolean,
				default: true,
			},
			formatter: Function,
			formatTrigger: {
				type: String,
				default: 'onChange',
			},
			rules: Array,
			useLabelSlot: Boolean
		},
		data() {
			return {
				focused: false,
				innerValue: '',
				showClear: false,
				validateFailed: false,
				validateMessage: '',
				showerror: false,
				rulesvalidator: [],
				formValue: ""
				// children: null,
				// zForm: null
			}
		},
		watch: {
			readonly: {
				handler(val) {
					this.setShowClear();
				},
				immediate: true
			},
			clearable: {
				handler(val) {
					this.setShowClear();
				},
				immediate: true
			},
			value: {
				handler(val) {
					if (this.formatter && this.formatTrigger == "onChange") {
						this.innerValue = this.formatter(val);
					} else {
						this.innerValue = val;
					}
					this.formValue = val;
					this.resetValidation();
					this.validateWithTrigger('onChange');
				},
				immediate: true
			},
			error: {
				handler(val) {
					this.showerror = val;
				},
				immediate: true
			},
			validateFailed: {
				handler(val) {
					if (this.zForm.showError) {
						this.showerror = val;
					} else {
						this.showerror = false
					}
				}
			}
		},
		created() {
			uni.$on("childrenReady" + this._uid, (children) => {
				if (children) {
					this.formValue = this.formValue ? this.formValue : children.value;
					children.$watch('value', (val) => {
						this.formValue = val
					})
				}
			})
		},
		mounted() {
			this.triggerUpdate(this.formatTrigger);
			this.zForm = getParent(this, 'z-form');
			if (this.zForm) {
				this.zForm.fields.push(this);
			}
		},
		beforeDestroy() {
			if (this.zForm) {
				this.zForm.removeField(this);
			}
		},
		computed: {
			message() {
				return this.errorMessage || this.validateMessage;
			}
		},
		methods: {
			setRulesValidator(rules) {
				this.rulesvalidator = rules;
			},
			runValidator(value, rule) {
				return new Promise((resolve) => {
					const returnVal = rule.validator(value, rule);

					if (isPromise(returnVal)) {
						return returnVal.then(resolve);
					}

					resolve(returnVal);
				});
			},

			isEmptyValue(value) {
				if (Array.isArray(value)) {
					return !value.length;
				}
				if (value === 0) {
					return false;
				}
				return !value;
			},
			runSyncRule(value, rule) {
				if (rule.required && this.isEmptyValue(value)) {
					return false;
				}
				if (rule.pattern && !new RegExp(rule.pattern).test(value)) {
					return false;
				}
				return true;
			},

			getRuleMessage(value, rule) {
				const {
					message
				} = rule;

				if (isFunction(message)) {
					return message(value, rule);
				}

				return message;
			},
			runRules(rules) {
				return rules.reduce(
					(promise, rule) =>
					promise.then(() => {
						if (this.validateFailed) {
							return;
						}

						let value = this.formValue;
						if (rule.formatter) {
							value = rule.formatter(value, rule);
						}

						if (!this.runSyncRule(value, rule)) {
							this.validateFailed = true;
							this.validateMessage = this.getRuleMessage(value, rule);
							return;
						}

						if (rule.validator) {
							return this.runValidator(value, rule).then((result) => {
								if (result === false) {
									this.validateFailed = true;
									this.validateMessage = this.getRuleMessage(value, rule);
								}
							});
						}
					}),
					Promise.resolve()
				);
			},
			validate(rules = this.rules || this.rulesvalidator) {
				return new Promise((resolve) => {
					if (!rules) {
						resolve();
					}

					this.resetValidation();
					this.runRules(rules).then(() => {
						if (this.validateFailed) {
							resolve({
								name: this.name,
								message: this.validateMessage,
							});
						} else {
							resolve();
						}
					});
				});
			},
			validateWithTrigger(trigger) {

				if (this.zForm && (this.rules || this.rulesvalidator)) {
					const defaultTrigger = this.zForm.validateTrigger === trigger;
					var rules = [];
					if (this.rules && this.rules.length) {
						rules = this.rules.filter((rule) => {
							if (rule.trigger) {
								return rule.trigger === trigger;
							}

							return defaultTrigger;
						});
					} else {
						rules = this.rulesvalidator.filter((rule) => {
							if (rule.trigger) {
								return rule.trigger === trigger;
							}
							return defaultTrigger;
						});
					}
					if (rules.length) {
						this.validate(rules);
					}
				}
			},
			resetValidation() {
				if (this.validateFailed) {
					this.validateFailed = false;
					this.validateMessage = '';
				}
			},
			triggerUpdate(trigger = 'onChange') {
				if (this.formatter && trigger === this.formatTrigger) {
					this.innerValue = this.formatter(this.value);
				} else {
					this.innerValue = this.value;
				}
			},
			inputStyle(autosize) {
				if (autosize && autosize.constructor === 'Object') {
					return {
						'min-height': addUnit(autosize.minHeight),
						'max-height': addUnit(autosize.maxHeight),
					};
				}
				return '';
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			addUnitMethods(value) {
				return addUnit(value);
			},
			onInput(event) {
				const {
					value = ''
				} = event.detail || {};
				if (this.formatter && this.formatTrigger == "onChange") {
					this.innerValue = this.formatter(value);
				}
				this.innerValue = value;
				this.setShowClear();
				this.emitChange();
			},
			onFocus(event) {
				this.focused = true;
				this.setShowClear();
				this.$emit('focus', event.detail);
			},
			onBlur(event) {
				this.focused = false;
				if (this.formatter && this.formatTrigger == "onBlur") {
					this.innerValue = this.formatter(this.value);
				}
				this.setShowClear();
				this.$emit('blur', event.detail);
				this.validateWithTrigger('onBlur');
			},
			onClick(event) {
				this.$emit('click', event);
			},
			onClickIcon() {
				this.$emit('click-icon');
			},
			onClickInput(event) {
				this.$emit('click-input', event.detail);
			},
			onClear() {
				this.innerValue = '';
				this.setShowClear();
				this.emitChange();
				this.$emit('clear');
			},
			onConfirm(event) {
				const {
					value = ''
				} = event.detail || {};
				this.setShowClear();
				this.$emit('confirm', value);
			},
			setValue(value) {
				this.setShowClear();
				this.emitChange();
			},
			onLineChange(event) {
				this.$emit('linechange', event.detail);
			},
			onKeyboardHeightChange(event) {
				this.$emit('keyboardheightchange', event.detail);
			},
			emitChange() {
				this.$nextTickAll(() => {
					this.$emit('input', this.innerValue);
					this.$emit('change', this.innerValue);
				});
			},
			setShowClear() {
				const {
					clearable,
					readonly,
					clearTrigger,
					focused,
					value,
					innerValue
				} = this;
				let showClear = false;
				if (clearable && !readonly) {
					const hasValue = !!innerValue;
					const trigger = clearTrigger === 'always' || (clearTrigger === 'focus' && focused);
					showClear = hasValue && trigger;
				}
				this.showClear = showClear;
			},
			noop() {},
		}
	}
</script>

<style scoped lang="scss">
	.zebra-field {
		--cell-icon-size: var(--field-icon-size, 16px)
	}

	.zebra-field__label {
		color: var(--field-label-color, #646566)
	}

	.zebra-field__label--disabled {
		color: var(--field-disabled-text-color, #c8c9cc)
	}

	.zebra-field__body {
		align-items: center;
		display: flex
	}

	.zebra-field__body--textarea {
		box-sizing: border-box;
		line-height: 1.2em;
		min-height: var(--cell-line-height, 24px);
		padding: 3.6px 0
	}

	.zebra-field__control:empty+.zebra-field__control {
		display: block
	}

	.zebra-field__control {
		background-color: initial;
		border: 0;
		box-sizing: border-box;
		color: var(--field-input-text-color, #323233);
		display: none;
		line-height: inherit;
		margin: 0;
		min-height: var(--cell-line-height, 24px);
		padding: 0;
		position: relative;
		resize: none;
		text-align: left;
		width: 100%;
		font-size: inherit;
	}

	.zebra-field__control:empty {
		display: none
	}

	.zebra-field__control--textarea {
		height: var(--field-text-area-min-height, 18px);
		min-height: var(--field-text-area-min-height, 18px)
	}

	.zebra-field__control--showerror {
		color: var(--field-input-error-text-color, #ee0a24)
	}

	.zebra-field__control--disabled {
		background-color: initial;
		color: var(--field-input-disabled-text-color, #c8c9cc);
		opacity: 1
	}

	.zebra-field__control--center {
		text-align: center
	}

	.zebra-field__control--right {
		text-align: right
	}

	.zebra-field__control--custom {
		align-items: center;
		display: flex;
		min-height: var(--cell-line-height, 24px)
	}

	::v-deep .zebra-field__placeholder {
		color: var(--field-placeholder-text-color, #c8c9cc);
		left: 0;
		pointer-events: none;
		position: absolute;
		right: 0;
		top: 0
	}

	::v-deep .zebra-field__placeholder--showerror {
		color: var(--field-error-message-color, #ee0a24)
	}

	.zebra-field__icon-root {
		align-items: center;
		display: flex;
		min-height: var(--cell-line-height, 24px)
	}

	.zebra-field__clear-root,
	.zebra-field__icon-container {
		line-height: inherit;
		margin-right: calc(var(--padding-xs, 8px)*-1);
		padding: 0 var(--padding-xs, 8px);
		vertical-align: middle
	}

	.zebra-field__button,
	.zebra-field__clear-root,
	.zebra-field__icon-container {
		flex-shrink: 0
	}

	.zebra-field__clear-root {
		color: var(--field-clear-icon-color, #c8c9cc);
		font-size: var(--field-clear-icon-size, 16px)
	}

	.zebra-field__icon-container {
		color: var(--field-icon-container-color, #969799);
		font-size: var(--field-icon-size, 16px)
	}

	.zebra-field__icon-container:empty {
		display: none
	}

	.zebra-field__button {
		padding-left: var(--padding-xs, 8px)
	}

	.zebra-field__button:empty {
		display: none
	}

	.zebra-field__error-message {
		color: var(--field-error-message-color, #ee0a24);
		font-size: var(--field-error-message-text-font-size, 12px);
		text-align: left
	}

	.zebra-field__error-message--center {
		text-align: center
	}

	.zebra-field__error-message--right {
		text-align: right
	}

	.zebra-field__word-limit {
		color: var(--field-word-limit-color, #646566);
		font-size: var(--field-word-limit-font-size, 12px);
		line-height: var(--field-word-limit-line-height, 16px);
		margin-top: var(--padding-base, 4px);
		text-align: right
	}

	.zebra-field__word-num {
		display: inline
	}

	.zebra-field__word-num--full {
		color: var(--field-word-num-full-color, #ee0a24)
	}
</style>
