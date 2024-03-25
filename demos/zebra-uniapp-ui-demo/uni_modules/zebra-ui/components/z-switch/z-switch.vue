<template>
	<view :class="[bemMethods('switch', { on: checked === activeValue, disabled })]" :style="[style]" @click="onClick">
		<view class="zebra-switch__node node-class">
			<view class="zebra-switch__loading">
				<z-loading v-if="loading" custom-style=""
					:color="loadingColor({ checked, activeColor, inactiveColor })" />
			</view>
		</view>
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import addUnit from '../../static/utils/add-unit.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: "z-switch",
		mixins: [ChildrenMixin('zField')],
		props: {
			size: [Number, String],
			value: null,
			loading: Boolean,
			disabled: Boolean,
			activeColor: String,
			inactiveColor: String,
			activeValue: {
				type: null,
				default: true,
			},
			inactiveValue: {
				type: null,
				default: false,
			},
		},
		computed: {
			checked() {
				return this.value === this.activeValue;
			},

			style() {
				return {
					fontSize: addUnit(this.size),
					backgroundColor: this.checked ? this.activeColor : this.inactiveColor,
				};
			},
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			loadingColor(data) {
				return data.checked ?
					data.activeColor || '#1989fa' :
					data.inactiveColor || '#969799';
			},
			onClick(event) {
				this.$emit('click', event);

				if (!this.disabled && !this.loading) {
					const newValue = this.checked ? this.inactiveValue : this.activeValue;
					this.$emit('input', newValue);
					this.$emit('change', newValue);
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/var";

	.zebra-switch {
		position: relative;
		display: inline-block;
		box-sizing: content-box;
		width: $switch-width;
		height: $switch-height;
		font-size: $switch-size;
		background-color: $switch-background-color;
		border: $switch-border;
		border-radius: $switch-node-size;
		// cursor: pointer;
		transition: background-color $switch-transition-duration;

		&__node {
			position: absolute;
			top: 0;
			left: 0;
			width: $switch-node-size;
			height: $switch-node-size;
			background-color: $switch-node-background-color;
			border-radius: 100%;
			box-shadow: $switch-node-box-shadow;
			transition: transform $switch-transition-duration cubic-bezier(0.3, 1.05, 0.4, 1.05);
		}

		&__loading {
			top: 25%;
			left: 25%;
			width: 50%;
			height: 50%;
			line-height: 1;
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&--on {
			background-color: $switch-on-background-color;

			.zebra-switch__node {
				transform: translateX($switch-width - $switch-node-size);
			}

			.zebra-switch__loading {
				color: $switch-on-background-color;
			}
		}

		&--disabled {
			cursor: not-allowed;
			opacity: $switch-disabled-opacity;
		}

		&--loading {
			cursor: default;
		}
	}
</style>
