<template>
	<view class="z-password-input">

		<view :class="[bemMethods('password-input__security'),gutter?'zebra-hairline--surround':'']"
			@click.stop="onTouchstart">
			<!-- 	onTouchstart={(event: TouchEvent)=> {
				event.stopPropagation();
				emit(ctx, 'focus', event);
				}}
				{...inherit(ctx, true)}
				> -->
			<!-- {Points} -->
			<template v-for="(item,index) in points">
				<view :key="index"
					:class="[index !== 0 && !gutter?'zebra-hairline--left':'','zebra-password-input__item',focused && index === value.length?'zebra-password-input__item--focus':'']"
					:style="[rootStyle(index)]">
					<view class="zebra-password-input__spot" v-if="mask"
						:style="'visibility:'+(value[index]?'visible' : 'hidden')">

					</view>
					<view v-else>
						{{value[index]||""}}
					</view>
					<view class="" v-if="focused && index === value.length">

					</view>
					<view class="zebra-password-input__cursor" v-if="focused && index === value.length">

					</view>
					<!-- 	{showCursor &&
						<div class={bem('cursor')} />} -->
				</view>
			</template>
		</view>
		<view v-if="errorInfo || info" class="">
			<view :class="errorInfo?'zebra-password-input__error-info':'zebra-password-input__info'">
				{{errorInfo || info}}
			</view>
		</view>
		<!-- {info &&} -->

	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import addUnit from "../../static/utils/add-unit.js";
	export default {
		name: "z-password-input",
		props: {
			info: String,
			gutter: [Number, String],
			focused: Boolean,
			errorInfo: String,
			mask: {
				type: Boolean,
				default: true,
			},
			value: {
				type: String,
				default: '',
			},
			length: {
				type: [Number, String],
				default: 6,
			},
		},
		data() {
			return {
				points: []
			};
		},
		mounted() {
			const {
				mask,
				value,
				length,
				gutter,
				focused,
				errorInfo
			} = this;
			const info = errorInfo || this.info;

			// const Points = [];
			for (let i = 0; i < length; i++) {
				const char = value[i];
				const showBorder = i !== 0 && !gutter;
				const showCursor = focused && i === value.length;

				let style;
				if (i !== 0 && gutter) {
					style = {
						marginLeft: addUnit(gutter)
					};
				}

				this.points.push(i);
			}
		},
		methods: {
			onTouchstart(event) {
				this.$emit('focus', event);
			},
			rootStyle(index) {
				if (index !== 0 && this.gutter) {
					return {
						marginLeft: addUnit(this.gutter)
					};
					// style =
				}
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/var";

	.z-password-input {
		.zebra-password-input {
			position: relative;
			margin: $password-input-margin;
			// user-select: none;

			&__info,
			&__error-info {
				margin-top: $padding-md;
				font-size: $password-input-info-font-size;
				text-align: center;
			}

			&__info {
				color: $password-input-info-color;
			}

			&__error-info {
				color: $password-input-error-info-color;
			}

			&__security {
				display: flex;
				width: 100%;
				height: $password-input-height;
				// cursor: pointer;

				&::after {
					border-radius: $password-input-border-radius;
				}

				.zebra-password-input__item {
					position: relative;
					display: flex;
					flex: 1;
					align-items: center;
					justify-content: center;
					height: 100%;
					font-size: $password-input-font-size;
					line-height: 1.2;
					background-color: $password-input-background-color;
				}

				.zebra-password-input__spot {
					position: absolute;
					top: 50%;
					left: 50%;
					width: $password-input-dot-size;
					height: $password-input-dot-size;
					background-color: $password-input-dot-color;
					border-radius: 100%;
					transform: translate(-50%, -50%);
					visibility: hidden;
				}
			}

			&__cursor {
				position: absolute;
				top: 50%;
				left: 50%;
				width: $number-keyboard-cursor-width;
				height: $number-keyboard-cursor-height;
				background-color: $number-keyboard-cursor-color;
				transform: translate(-50%, -50%);
				animation: $number-keyboard-cursor-animation-duration zebra-cursor-flicker infinite;
			}
		}

		@keyframes zebra-cursor-flicker {
			from {
				opacity: 0;
			}

			50% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

	}
</style>
