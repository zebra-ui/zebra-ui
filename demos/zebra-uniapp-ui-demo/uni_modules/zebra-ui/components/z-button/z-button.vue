<template>
	<button :class="[
      customClass,
      bemMethods('button', [
        type,
        size,
        {
          block,
          round,
          plain,
          square,
          loading,
          disabled,
          hairline,
          unclickable: disabled || loading,
        },
      ]),
      hairline ? 'zebra-hairline--surround' : '',
    ]" hover-class="zebra-button--active hover-class" :lang="lang" :form-type="formType"
		:style="[rootStyle({ plain, color, customStyle })]" :open-type="disabled || loading ? '' : openType"
		:session-from="sessionFrom" :send-message-title="sendMessageTitle" :send-message-path="sendMessagePath"
		:send-message-img="sendMessageImg" :show-message-card="showMessageCard" :app-parameter="appParameter"
		:hover-stop-propagation="hoverStopPropagation" :hover-start-time="hoverStartTime"
		:hover-stay-time="hoverStayTime" @click="onClick" @getuserinfo="getuserinfo" @getphonenumber="getphonenumber"
		@error="error" @launchapp="launchapp" @opensetting="opensetting">
		<view class="zebra-button__content">
			<template v-if="loading">
				<z-loading custom-class="loading-class" :size="loadingSize" :type="loadingType"
					:template="loadingTemplate" :color="loadingColor({ type, color, plain })" />
				<view v-if="loadingText" class="zebra-button__loading-text">
					{{ loadingText }}
				</view>
			</template>
			<template v-else>
				<view v-if="icon" class="zebra-button__icon">
					<z-icon size="30rpx" :name="icon" :class-prefix="classPrefix" custom-style="line-height:inherit" />
				</view>
				<view class="zebra-button__text">
					<!-- @slot 按钮文字 -->
					<slot />
				</view>
			</template>
		</view>
	</button>
</template>

<script>
	import bem from "../../static/utils/bem.js";
	import {
		styleToObj
	} from "../../static/utils/utils.js";
	export default {
		name: "z-button",
		props: {
			/**
			 * 按钮的类型
			 * @values default,primary,info,warning,danger
			 */
			type: {
				type: String,
				default: "default",
			},
			/**
			 * 按钮的尺寸大小
			 * @values normal,large,small,mini
			 */
			size: {
				type: String,
				default: "normal",
			},
			/**
			 * 是否为块级元素
			 */
			block: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否为圆形按钮
			 */
			round: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否为边框按钮
			 */
			plain: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否为方形按钮
			 */
			square: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否显示为加载状态
			 */
			loading: {
				type: Boolean,
				default: false,
			},
			/**
			 * 是否禁用按钮
			 */
			disabled: {
				type: Boolean,
				default: false,
			},
			/**
			 * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 （微信小程序）
			 * @values zh_CN,zh_TW,en
			 */
			lang: {
				type: String,
				default: "en",
			},
			/**
			 * 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
			 * @values submit,reset
			 */
			formType: {
				type: String,
				default: "",
			},
			/**
			 * 按钮颜色，支持传入`linear-gradient`渐变色
			 */
			color: {
				type: String,
				default: "",
			},
			/**
			 * 自定义样式，与行内样式style写法一致
			 */
			customStyle: {
				type: String,
				default: "",
			},
			/**
			 * 自定义类，部分小程序不支持，请谨慎使用
			 */
			customClass: {
				type: String,
				default: "",
			},
			/**
			 * 开放能力，详情请查看 [uniapp按钮组件](https://uniapp.dcloud.io/component/button)
			 */
			openType: {
				type: String,
				default: "",
			},
			/**
			 * 会话来源
			 */
			sessionFrom: {
				type: String,
				default: "",
			},
			/**
			 * 会话内消息卡片标题，open-type="contact"时有效
			 */
			sendMessageTitle: {
				type: String,
				default: "",
			},
			/**
			 * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
			 */
			sendMessagePath: {
				type: String,
				default: "",
			},
			/**
			 * 会话内消息卡片图片，open-type="contact"时有效
			 */
			sendMessageImg: {
				type: String,
				default: "",
			},
			/**
			 * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
			 */
			showMessageCard: {
				type: Boolean,
				default: false,
			},
			/**
			 * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
			 */
			appParameter: {
				type: String,
				default: "",
			},
			/**
			 * 指定是否阻止本节点的祖先节点出现点击态
			 * @since 微信小程序
			 */
			hoverStopPropagation: {
				type: Boolean,
				default: false,
			},
			/**
			 * 按住后多久出现点击态，单位毫秒
			 */
			hoverStartTime: {
				type: Number,
				default: 20,
			},
			/**
			 * 手指松开后点击态保留时间，单位毫秒
			 */
			hoverStayTime: {
				type: Number,
				default: 70,
			},
			/**
			 * 加载图标大小
			 */
			loadingSize: {
				type: String,
				default: "40rpx",
			},
			/**
			 * 加载状态图标类型
			 * @values circular,spinner
			 */
			loadingType: {
				type: String,
				default: "circular",
			},
			/**
			 * 加载状态提示文字
			 */
			loadingText: {
				type: String,
				default: "",
			},
			/**
			 * 左侧图标名称或图片链接，可选值见 Icon 组件
			 */
			icon: {
				type: String,
				default: "",
			},
			/**
			 * 图标类名前缀，同 Icon 组件的 class-prefix 属性
			 */
			classPrefix: {
				type: String,
				default: "zebra-icon",
			},
			/**
			 * 加载状态模板类型
			 * @values a,b,c,d,e,f
			 */
			loadingTemplate: {
				type: String,
				default: "",
			},
		},
		data() {
			return {
				hairline: false,
			};
		},
		methods: {
			styleToObj(style) {
				return styleToObj(style);
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			rootStyle(data) {
				if (!data.color) {
					return styleToObj(data.customStyle);
				}

				var properties = {
					color: data.plain ? data.color : "#fff",
					background: data.plain ? null : data.color,
					...styleToObj(data.customStyle),
				};
				if (data.color.indexOf("gradient") !== -1) {
					properties.border = 0;
				} else {
					properties["border-color"] = data.color;
				}
				return properties;
			},
			loadingColor(data) {
				if (data.plain) {
					return data.color ? data.color : "#c9c9c9";
				}

				if (data.type === "default") {
					return "#c9c9c9";
				}

				return "#fff";
			},
			onClick(event) {
				if (!this.disabled && !this.loading) {
					/**
					 * 点击事件，在按钮不为加载状态且不为禁用状态时可触发此事件
					 * @property {object} event event
					 */
					this.$emit("click", event);
				}
			},
			getphonenumber(res) {
				/**
				 * 获取用户手机号，可以从getphonenumber回调中获取到用户信息
				 * @property {object} event event
				 * @since 微信小程序
				 */
				this.$emit("getphonenumber", res);
			},
			getuserinfo(res) {
				/**
				 * 用户点击该按钮时，会返回获取到的用户信息
				 * @property {object} event event
				 * @since 微信小程序
				 */
				this.$emit("getuserinfo", res);
			},
			error(res) {
				/**
				 * 当使用开放能力时，发生错误的回调
				 * @property {object} event event
				 * @since 微信小程序
				 */
				this.$emit("error", res);
			},
			opensetting(res) {
				/**
				 * 在打开授权设置页并关闭后回调
				 * @property {object} event event
				 * @since 微信小程序
				 */
				this.$emit("opensetting", res);
			},
			launchapp(res) {
				/**
				 * 从小程序打开 App 成功的回调
				 * @property {object} event event
				 * @since 微信小程序
				 */
				this.$emit("launchapp", res);
			},
		},
	};
</script>

<style scoped lang="scss">
	@import "../../static/css/var.scss";

	.zebra-button {
		position: relative;
		display: inline-block;
		box-sizing: border-box;
		height: $button-default-height;
		margin: 0;
		padding: 0;
		font-size: $button-default-font-size;
		line-height: $button-default-height;
		text-align: center;
		border-radius: $button-border-radius;
		cursor: pointer;
		transition: opacity $animation-duration-fast;
		-webkit-appearance: none;

		&::before {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 100%;
			height: 100%;
			background-color: $black;
			border: inherit;
			border-color: $black;
			border-radius: inherit;
			transform: translate(-50%, -50%);
			opacity: 0;
			content: " ";
		}

		&::after {
			border: none;
		}

		&:active::before {
			opacity: 0.1;
		}

		&--loading,
		&--disabled {
			&::before {
				display: none;
			}
		}

		&--default {
			color: $button-default-color;
			background-color: $button-default-background-color;
			border: $button-border-width solid $button-default-border-color;
		}

		&--primary {
			color: $button-primary-color;
			background-color: $button-primary-background-color;
			border: $button-border-width solid $button-primary-border-color;
		}

		&--info {
			color: $button-info-color;
			background-color: $button-info-background-color;
			border: $button-border-width solid $button-info-border-color;
		}

		&--danger {
			color: $button-danger-color;
			background-color: $button-danger-background-color;
			border: $button-border-width solid $button-danger-border-color;
		}

		&--warning {
			color: $button-warning-color;
			background-color: $button-warning-background-color;
			border: $button-border-width solid $button-warning-border-color;
		}

		&--plain {
			background-color: $button-plain-background-color;

			&.zebra-button--primary {
				color: $button-primary-background-color;
			}

			&.zebra-button--info {
				color: $button-info-background-color;
			}

			&.zebra-button--danger {
				color: $button-danger-background-color;
			}

			&.zebra-button--warning {
				color: $button-warning-background-color;
			}
		}

		&--large {
			width: 100%;
			height: $button-large-height;
		}

		&--normal {
			padding: 0 30rpx;
			font-size: $button-normal-font-size;
		}

		&--small {
			height: $button-small-height;
			padding: 0 $padding-xs;
			font-size: $button-small-font-size;
		}

		&__loading {
			color: inherit;
			font-size: inherit;
		}

		&--mini {
			height: $button-mini-height;
			padding: 0 $padding-base;
			font-size: $button-mini-font-size;

			&+.zebra-button--mini {
				margin-left: $padding-base;
			}
		}

		&--block {
			display: block;
			width: 100%;
		}

		&--disabled {
			cursor: not-allowed;
			opacity: $button-disabled-opacity;
		}

		&--loading {
			cursor: default;
		}

		&--round {
			border-radius: $button-round-border-radius;
		}

		&--square {
			border-radius: 0;
		}

		&__content {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;

			&::before {
				content: " ";
			}
		}

		&__icon {
			font-size: 24rpx;
			line-height: inherit;
		}

		&__icon+&__text,
		&__loading+&__text,
		&__text+&__icon,
		&__text+&__loading {
			margin-left: $padding-base;
		}

		&--hairline {
			border-width: 1rpx;

			&::after {
				border-color: inherit;
				border-radius: $button-border-radius * 2;
			}

			&.zebra-button--round::after {
				border-radius: $button-round-border-radius;
			}

			&.zebra-button--square::after {
				border-radius: 0;
			}
		}

		.zebra-button__loading-text:not(:empty) {
			margin-left: 8rpx;
		}

		.zebra-button__icon+.zebra-button__text:empty,
		.zebra-button__loading-text:empty {
			margin-left: 0rpx;
		}
	}
</style>
