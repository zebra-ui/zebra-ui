<template>
	<z-popup :show="show" :z-index="zIndex" :overlay="overlay" :transition="transition"
		:custom-class="'zebra-dialog--'+theme+className"
		:custom-style="'width:'+addUnitMethods(width)+';'+customStyle+rootStyle()" :overlay-style="overlayStyle"
		:close-on-click-overlay="closeOnClickOverlay" @close="onClickOverlay">
		<view v-if="title || useTitleSlot" :class="[bemMethods('dialog__header', { isolated: !(message || useSlot) })]">
			<slot v-if="useTitleSlot" name="title" />
			<block v-else-if="title">{{ title }}</block>
		</view>

		<slot v-if="useSlot" />
		<view v-else-if="message" :class="[bemMethods('dialog__message', [theme, messageAlign, { hasTitle: title }])]">
			<text class="zebra-dialog__message-text">{{ message }}</text>
		</view>


		<view v-if="theme === 'round-button'"
			class="zebra-goods-action zebra-goods-action--safe zebra-dialog__footer--round-button">
			<view v-if="showCancelButton" style="flex: 1;">
				<z-button custom-style="width:100%;" :loading="loading.cancel" @click="onCancel">
					{{ cancelButtonText }}
				</z-button>
			</view>
			<view v-if="showCancelButton&&showConfirmButton" style="width: 20rpx;">
			</view>
			<view v-if="showConfirmButton" style="flex: 1;">
				<z-button custom-style="width:100%;" type="primary" :loading="loading.confirm"
					:open-type="confirmButtonOpenType" :lang="lang" :business-id="businessId"
					:session-from="sessionFrom" :send-message-title="sendMessageTitle"
					:send-message-path="sendMessagePath" :send-message-img="sendMessageImg"
					:show-message-card="showMessageCard" :app-parameter="appParameter" @click="onConfirm"
					@getuserinfo="onGetUserInfo" @contact="onContact" @getphonenumber="onGetPhoneNumber"
					@error="onError" @launchapp="onLaunchApp" @opensetting="onOpenSetting">
					{{ confirmButtonText }}
				</z-button>
			</view>
		</view>

		<view v-else class="zebra-hairline--top zebra-dialog__footer">
			<view v-if="showCancelButton" style="flex: 1;">
				<z-button size="large" :loading="loading.cancel"
					:custom-style="'color:'+cancelButtonColor+';'+'border:0;display:block;'" @click="onCancel">
					{{ cancelButtonText }}
				</z-button>
			</view>

			<z-line v-if="showCancelButton&&showConfirmButton" borderColor="#ebedf0" direction="col"></z-line>
			<view v-if="showConfirmButton" style="flex: 1;">
				<z-button size="large" :loading="loading.confirm"
					:custom-style="'color:'+confirmButtonColor+';'+'border:0;display:block;'"
					:open-type="confirmButtonOpenType" :lang="lang" :business-id="businessId"
					:session-from="sessionFrom" :send-message-title="sendMessageTitle"
					:send-message-path="sendMessagePath" :send-message-img="sendMessageImg"
					:show-message-card="showMessageCard" :app-parameter="appParameter" @click="onConfirm"
					@getuserinfo="onGetUserInfo" @contact="onContact" @getphonenumber="onGetPhoneNumber"
					@error="onError" @launchapp="onLaunchApp" @opensetting="onOpenSetting">
					{{ confirmButtonText }}
				</z-button>
			</view>
		</view>
	</z-popup>
</template>
<script>
	import addUnit from "../../static/utils/add-unit.js";
	import bem from '../../static/utils/bem.js';
	import {
		toPromise
	} from '../../libs/utils/utils.js';
	import {
		styleToObj
	} from '../../static/utils/utils.js';
	export default {
		name: 'z-dialog',
		props: {
			options: {
				type: Object,
				default: function() {
					return null
				}
			},
			lang: String,
			businessId: Number,
			sessionFrom: String,
			sendMessageTitle: String,
			sendMessagePath: String,
			sendMessageImg: String,
			showMessageCard: Boolean,
			appParameter: String,
			ariaLabel: String,
			openType: String,
			getUserProfileDesc: String,
		},
		data() {
			return {
				show: false,
				title: "",
				message: "",
				theme: 'default',
				useSlot: false,
				className: "",
				customStyle: "",
				asyncClose: false,
				messageAlign: "",
				beforeClose: null,
				overlayStyle: "",
				useTitleSlot: false,
				showCancelButton: false,
				closeOnClickOverlay: false,
				confirmButtonOpenType: "",
				width: null,
				zIndex: 2000,
				confirmButtonText: '确认',
				cancelButtonText: '取消',
				confirmButtonColor: "#1989fa",
				cancelButtonColor: "gray",
				showConfirmButton: true,
				overlay: true,
				transition: 'scale',
				loading: {
					confirm: false,
					cancel: false,
				},
				callback: (() => {}),
				dialogStyle: ""
			}
		},
		watch: {
			options: {
				handler(val) {
					if (val) {
						Object.keys(val).forEach(key => {
							this[key] = val[key];
						});
					}
				},
				deep: true,
				immediate: true
			},
			show(val) {
				if (!val) {
					this.stopLoading()
				}
			}
		},
		mounted() {

		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			addUnitMethods(value) {
				return addUnit(value);
			},
			toJSON() {
				return this;
			},
			rootStyle() {
				return "background-color:#ffffff;border-radius: 12rpx;font-size: 32rpx;overflow: hidden;top: 45% !important;width: 600rpx;"
			},
			onConfirm() {
				this.handleAction('confirm');
			},
			onCancel() {
				this.handleAction('cancel');
			},
			onClickOverlay() {
				this.close('overlay');
			},
			close(action) {
				this.show = false;
				this.$nextTickAll(() => {
					this.$emit('close', action);
					const {
						callback
					} = this;
					if (callback) {
						callback(action, this);
					}
				});
			},
			stopLoading() {
				// this.setData({
				// 	loading: {
				// 		confirm: false,
				// 		cancel: false,
				// 	},
				// });
				this.loading.confirm = false;
				this.loading.cancel = false;
			},
			handleAction(action) {
				this.$emit(action, {
					dialog: this
				});
				const {
					asyncClose,
					beforeClose
				} = this;
				if (!asyncClose && !beforeClose) {
					this.close(action);
					return;
				}
				// this.setData({
				// 	[`loading.${action}`]: true,
				// });
				this.loading[action] = true;
				if (beforeClose) {
					toPromise(beforeClose(action)).then((value) => {
						if (value) {
							this.close(action);
						} else {
							this.stopLoading();
						}
					});
				}
			},
			// button methods
			onGetUserInfo(event) {
				this.$emit("getuserinfo", event);
			},
			onContact(event) {
				this.$emit("contact", event);
			},
			onGetPhoneNumber(event) {
				this.$emit("getphonenumber", event);
			},
			onError(event) {
				this.$emit("error", event);
			},
			onLaunchApp(event) {
				this.$emit("launchapp", event);
			},
			onOpenSetting(event) {
				this.$emit("opensetting", event);
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var';

	.zebra-goods-action {
		align-items: center;
		background-color: $goods-action-background-color;
		bottom: 0;
		box-sizing: initial;
		display: flex;
		height: $goods-action-height;
		left: 0;
		position: fixed;
		right: 0
	}

	.zebra-goods-action--safe {
		padding-bottom: env(safe-area-inset-bottom)
	}

	.zebra-dialog__footer--round-button {
		padding: $goods-action-footer-round-button-padding;
		position: relative;
	}

	.zebra-dialog {
		background-color: $dialog-background-color;
		border-radius: $dialog-border-radius;
		font-size: $dialog-font-size;
		overflow: hidden;
		top: 45% !important;
		width: $dialog-small-screen-width
	}

	@media (max-width:642rpx) {
		.zebra-dialog {
			width: $dialog-small-screen-width
		}
	}

	.zebra-dialog__header {
		font-weight: $dialog-header-font-weight;
		line-height: $dialog-header-line-height;
		padding-top: $dialog-header-padding-top;
		text-align: center
	}

	.zebra-dialog__header--isolated {
		padding: $dialog-header-isolated-padding
	}

	.zebra-dialog__message {
		-webkit-overflow-scrolling: touch;
		font-size: $dialog-message-font-size;
		line-height: $dialog-message-line-height;
		max-height: $dialog-message-max-height;
		overflow-y: auto;
		padding: $dialog-message-padding;
		text-align: center
	}

	.zebra-dialog__message-text {
		word-wrap: break-word
	}

	.zebra-dialog__message--hasTitle {
		color: $dialog-has-title-message-text-color;
		padding-top: $dialog-has-title-message-padding-top
	}

	.zebra-dialog__message--round-button {
		color: #323233;
		padding-bottom: 16px
	}

	.zebra-dialog__message--left {
		text-align: left
	}

	.zebra-dialog__message--right {
		text-align: right
	}

	.zebra-dialog__footer {
		display: flex
	}

	.zebra-dialog__footer--round-button {
		padding: 8px 24px 16px !important;
		position: relative !important
	}

	.zebra-dialog__cancel,
	.zebra-dialog__confirm {
		border: 0 !important
	}

	.zebra-dialog-bounce-enter {
		opacity: 0;
		transform: translate3d(-50%, -50%, 0) scale(.7)
	}

	.zebra-dialog-bounce-leave-active {
		opacity: 0;
		transform: translate3d(-50%, -50%, 0) scale(.9)
	}
</style>
