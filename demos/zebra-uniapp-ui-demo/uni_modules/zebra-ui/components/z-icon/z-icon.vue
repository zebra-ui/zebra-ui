<template>
	<view :class="[rootClass({ classPrefix, name })]" :style="[rootStyle({ customStyle, color, size })]"
		@click="onClick" @touchstart="onTouchStart">
		<z-info v-if="info || dot" :dot="dot" :info="info" custom-class="zebra-icon__info" />
		<image v-if="isImage(name)" :src="name" mode="aspectFit" :style="[rootStyle({ customStyle, color, size })]"
			class="zebra-icon__image" />
	</view>
</template>

<script>
	import addUnit from "../../static/utils/add-unit.js";
	export default {
		name: "z-icon",
		props: {
			/**
			 * 类名前缀
			 */
			classPrefix: {
				type: String,
				default: "zebra-icon",
			},
			/**
			 * 图标名称或图片链接
			 */
			name: {
				type: String,
				default: "",
			},
			/**
			 * 自定义样式
			 */
			customStyle: {
				type: String,
				default: "",
			},
			//
			/**
			 * 自定义类名，部分小程序不支持，请谨慎使用
			 */
			customClass: {
				type: String,
				default: "",
			},
			/**
			 * 图标颜色
			 */
			color: {
				type: String,
				default: "inherit",
			},
			/**
			 * 图标大小，默认单位为rpx
			 */
			size: {
				type: String,
				default: "inherit",
			},
			/**
			 * 图标右上角文字提示
			 */
			info: {
				type: [String, Number],
				default: null,
			},
			/**
			 * 是否显示图标右上角小红点
			 */
			dot: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {};
		},
		methods: {
			onClick(event) {
				/**
				 * 点击事件，点击图标触发
				 * @property {object} event event
				 */
				this.$emit("click", event);
			},
			onTouchStart(event) {
				/**
				 * 触摸事件，触摸图标触发（此事件也会触发click事件）
				 * @property {object} event event
				 */
				this.$emit("touchstart", event);
			},
			isImage(name) {
				return name.indexOf("/") !== -1;
			},
			rootClass(data) {
				var classes = ["custom-class"];
				if (data.classPrefix != null) {
					classes.push(data.classPrefix);
				}
				if (this.isImage(data.name)) {
					classes.push("zebra-icon--image");
				} else if (data.classPrefix != null) {
					classes.push(data.classPrefix + "-" + data.name);
				}
				return classes.join(" ");
			},
			rootStyle(data) {
				return {
					color: data.color,
					"font-size": addUnit(data.size),
					...data.customStyle,
				};
			},
			imageStyle(data) {
				return {
					width: addUnit(data.size),
					height: addUnit(data.size)
				}
			}
		},
	};
</script>

<style scoped lang="scss">
	@import "../../static/css/iconfont.css";

	.zebra-icon {
		&__image {
			width: 1em;
			height: 1em;
			object-fit: contain;
		}
	}
</style>
