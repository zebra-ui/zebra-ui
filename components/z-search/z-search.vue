<template>
	<view :class="[bemMethods('search', { withaction: showAction || useActionSlot })]"
		:style="[{background: background}]">
		<view :class="[bemMethods('search__content', [shape])]">
			<view class="zebra-search__label" v-if="label">{{ label }}</view>
			<slot v-else name="label" />
			<view class="zebra-search__field field-class">
				<z-field type="search" :left-icon="!useLeftIconSlot ? leftIcon : ''"
					:right-icon="!useRightIconSlot ? rightIcon : ''" :focus="focus" :error="error" :border="false"
					confirm-type="search" :value="value" :disabled="disabled" :readonly="readonly"
					:clearable="clearable" :clear-trigger="clearTrigger" :clear-icon="clearIcon" :maxlength="maxlength"
					:input-align="inputAlign" input-class="input-class" :placeholder="placeholder"
					:placeholder-style="placeholderStyle"
					custom-style="padding: 5px 10px 5px 0; background-color: transparent;" @blur="onBlur"
					@focus="onFocus" @change="onChange" @confirm="onSearch" @clear="onClear"
					@click-input="onClickInput">
					<template #left-icon>
						<slot v-if="useLeftIconSlot" name="left-icon" />
					</template>
					<template #right-icon>
						<slot v-if="useRightIconSlot" name="right-icon" />
					</template>
				</z-field>
			</view>
		</view>

		<view v-if="showAction || useActionSlot" class="zebra-search__action" hover-class="zebra-search__action--hover"
			hover-stay-time="70">
			<slot v-if="useActionSlot" name="action" />
			<view v-else @click="onCancel" class="cancel-class">{{ actionText }}</view>
		</view>
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	export default {
		name: "z-search",
		props: {
			value: String,
			label: String,
			focus: Boolean,
			error: Boolean,
			disabled: Boolean,
			readonly: Boolean,
			inputAlign: String,
			showAction: Boolean,
			useActionSlot: Boolean,
			useLeftIconSlot: Boolean,
			useRightIconSlot: Boolean,
			leftIcon: {
				type: String,
				default: 'search',
			},
			rightIcon: String,
			placeholder: String,
			placeholderStyle: String,
			actionText: {
				type: String,
				default: '取消',
			},
			background: {
				type: String,
				default: '#ffffff',
			},
			maxlength: {
				type: Number,
				default: -1,
			},
			shape: {
				type: String,
				default: 'square',
			},
			clearable: {
				type: Boolean,
				default: true,
			},
			clearTrigger: {
				type: String,
				default: 'focus',
			},
			clearIcon: {
				type: String,
				default: 'off_close',
			},
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			onChange(event) {
				// if (canIUseModel()) {
				// 	this.setData({
				// 		value: event.detail
				// 	});
				// }
				this.$emit('change', event.detail);
			},
			onCancel() {
				setTimeout(() => {
					this.$emit('cancel');
					this.$emit('change', '');
				}, 200);
			},
			onSearch(event) {
				this.$emit('search', event.detail);
			},
			onFocus(event) {
				this.$emit('focus', event.detail);
			},
			onBlur(event) {
				this.$emit('blur', event.detail);
			},
			onClear(event) {
				this.$emit('clear');
			},
			onClickInput(event) {
				this.$emit('click-input', event.detail);
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/var";

	.zebra-search {
		align-items: center;
		box-sizing: border-box;
		display: flex;
		padding: $search-padding;

		.zebra-search__content {
			background-color: $search-background-color;
			border-radius: 4rpx;
			display: flex;
			flex: 1;
			padding-left: $padding-sm
		}

		.zebra-search__content--round {
			border-radius: 999px
		}

		.zebra-search__label {
			color: $search-label-color;
			font-size: $search-label-font-size;
			line-height: $search-input-height;
			padding: $search-label-padding
		}

		.zebra-search__field {
			flex: 1
		}

		.zebra-search__field__left-icon {
			color: $search-left-icon-color
		}

		.zebra-search--withaction {
			padding-right: 0
		}

		.zebra-search__action {
			color: $search-action-text-color;
			font-size: $search-action-font-size;
			line-height: $search-input-height;
			padding: $search-action-padding
		}

		.zebra-search__action--hover {
			background-color: #f2f3f5
		}
	}
</style>
