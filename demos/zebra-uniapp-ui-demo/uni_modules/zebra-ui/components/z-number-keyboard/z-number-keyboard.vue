<template>
	<view>
		<z-popup :show="show" :overlay="overlay" :position="position" :overlay-background="overlayBackground"
			@close="onClose()">
			<view class="zebra-number-keyboard">
				<view :style="'z-index:'+zIndex">
					<template v-if="title || (closeButtonText && theme === 'default')">
						<view class="zebra-number-keyboard__header">
							<template v-if="title">
								<view class="zebra-number-keyboard__title">
									{{title}}
								</view>
							</template>
							<template v-if="closeButtonText && theme === 'default'">
								<button type="button" class="zebra-number-keyboard__close" @click="onClose">
									{{closeButtonText}}
								</button>
							</template>
							<!-- { && <span class={bem('title-left')}>{titleLeft}</span>} -->
							<!-- {title && <h2 class={bem('title')}>{title}</h2>} -->
							<!-- {showClose && (
							
							)} -->
						</view>
					</template>
					<view class="zebra-number-keyboard__body">
						<view class="zebra-number-keyboard__keys">
							<template v-for="(key,index) in keys">
								<view :class="[bemMethods('key',{'wider': key.wider})]" :key="index">
									<key :key="key.text" :text="key.text" :type="key.type" :wider="key.wider"
										:color="key.color" @press="onPress">
										<!-- {{key.type === 'delete' && this.slots('delete')}}
								{{key.type === 'extra' && this.slots('extra-key')}} -->
									</key>
								</view>
							</template>
						</view>
						<view class="zebra-number-keyboard__sidebar" v-if="theme == 'custom'">
							<template v-if="showDeleteKey">
								<view :class="[bemMethods('key')]">
									<key large :text="deleteButtonText" type="delete" @press="onPress">
										<!-- {this.slots('delete')} -->
									</key>
								</view>
							</template>
							<view :class="[bemMethods('key')]">
								<key large :text="closeButtonText" type="close" color="blue"
									:loading="closeButtonLoading" @press="onPress" />
							</view>
						</view>
					</view>
				</view>
			</view>
		</z-popup>
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import key from './key/key.vue';
	export default {
		name: "z-number-keyboard",
		components: {
			key
		},
		props: {
			overlay: {
				type: Boolean,
				default: true
			},
			position: {
				type: String,
				default: "bottom"
			},
			show: Boolean,
			title: String,
			zIndex: [Number, String],
			randomKeyOrder: Boolean,
			closeButtonText: {
				type: String,
				default: null
			},
			deleteButtonText: {
				type: String,
				default: null
			},
			closeButtonLoading: Boolean,
			theme: {
				type: String,
				default: 'default',
			},
			value: {
				type: [String, Number],
				default: '',
			},
			extraKey: {
				type: [String, Array],
				default: '',
			},
			maxlength: {
				type: [Number, String],
				default: Number.MAX_VALUE,
			},
			transition: {
				type: Boolean,
				default: true,
			},
			showDeleteKey: {
				type: Boolean,
				default: true,
			},
			hideOnClickOutside: {
				type: Boolean,
				default: true,
			},
			safeAreaInsetBottom: {
				type: Boolean,
				default: true,
			},
			overlayBackground: {
				type: Boolean,
				default: false,
			}
		},
		watch: {
			show(val) {
				if (!this.transition) {
					this.$emit(val ? 'show' : 'hide');
				}
			},
		},

		computed: {
			keys() {
				if (this.theme === 'custom') {
					return this.genCustomKeys();
				}
				return this.genDefaultKeys();
			},
		},
		methods: {
			genBasicKeys() {
				const keys = [];
				for (let i = 1; i <= 9; i++) {
					keys.push({
						text: i
					});
				}

				if (this.randomKeyOrder) {
					keys.sort(() => (Math.random() > 0.5 ? 1 : -1));
				}

				return keys;
			},

			genDefaultKeys() {
				return [
					...this.genBasicKeys(),
					{
						text: this.extraKey,
						type: 'extra'
					},
					{
						text: 0
					},
					{
						text: this.showDeleteKey ? this.deleteButtonText : '',
						type: this.showDeleteKey ? 'delete' : '',
					},
				];
			},

			genCustomKeys() {
				const keys = this.genBasicKeys();
				const {
					extraKey
				} = this;
				const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

				if (extraKeys.length === 1) {
					keys.push({
						text: 0,
						wider: true
					}, {
						text: extraKeys[0],
						type: 'extra'
					});
				} else if (extraKeys.length === 2) {
					keys.push({
						text: extraKeys[0],
						type: 'extra'
					}, {
						text: 0
					}, {
						text: extraKeys[1],
						type: 'extra'
					});
				}
				return keys;
			},

			onBlur() {
				this.show && this.$emit('blur');
			},

			onClose() {
				this.$emit('close');
				this.onBlur();
			},

			onAnimationEnd() {
				this.$emit(this.show ? 'show' : 'hide');
			},

			onPress(text, type) {
				if (text === '') {
					if (type === 'extra') {
						this.onBlur();
					}
					return;
				}

				const {
					value
				} = this;
				if (type === 'delete') {
					this.$emit('delete');
				} else if (type === 'close') {
					this.onClose();
				} else if (value.length < this.maxlength) {
					this.$emit('input', text);
				}
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-number-keyboard {
		z-index: $number-keyboard-z-index;
		width: 100%;
		padding-bottom: 22px;
		background-color: $number-keyboard-background-color;

		.zebra-key {
			position: relative;
			flex: 1;
			flex-basis: 33%;
			box-sizing: border-box;
			padding: 0 12rpx 12rpx 0;

			&--wider {
				flex-basis: 66%;
			}
		}

		&--with-title {
			border-radius: 20px 20px 0 0;
		}

		&__header {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: content-box;
			height: $number-keyboard-title-height;
			padding-top: 6px;
			color: $number-keyboard-title-color;
			font-size: $number-keyboard-title-font-size;
		}

		&__title {
			display: inline-block;
			font-weight: normal;

			&-left {
				position: absolute;
				left: 0;
			}
		}

		&__body {
			display: flex;
			padding: 12rpx 0 0 12rpx;
		}

		&__keys {
			display: flex;
			flex: 3;
			flex-wrap: wrap;
		}

		&__close {
			position: absolute;
			right: 0;
			height: 100%;
			padding: $number-keyboard-close-padding;
			color: $number-keyboard-close-color;
			font-size: $number-keyboard-close-font-size;
			background-color: transparent;
			border: none;
			// cursor: pointer;

			&:active {
				opacity: $active-opacity;
			}

			&:after {
				border: none;
			}
		}

		&__sidebar {
			display: flex;
			flex: 1;
			flex-direction: column;
		}

		&--unfit {
			padding-bottom: 0;
		}
	}
</style>
