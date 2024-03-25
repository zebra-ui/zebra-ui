<template>
	<view class="z-overlay">
		<z-transition v-if="lockScroll" :show="show"
			:custom-style="rootCustomStyle({zIndex,customStyle,overlayCustomStyle})" :duration="duration"
			@click="onClick" @touchmove="noop">
			<slot></slot>
		</z-transition>
		<z-transition v-else :show="show" :custom-style="rootCustomStyle({zIndex,customStyle,overlayCustomStyle})"
			:duration="duration" @click="onClick">
			<slot></slot>
		</z-transition>
	</view>
</template>

<script>
	import {
		styleToString
	} from "../../static/utils/utils.js";
	export default {
		name: 'z-overlay',
		options: {
			styleIsolation: 'shared',
			addGlobalClass: true,
		},
		props: {
			/**
			 * 是否展示遮罩层
			 */
			show: {
				type: Boolean,
				default: false
			},
			/**
			 * 遮罩层层级
			 */
			zIndex: {
				type: [String, Number],
				default: 1
			},
			/**
			 * 动画时长，单位毫秒
			 */
			duration: {
				type: [String, Number],
				default: 300
			},
			/**
			 * 自定义样式
			 */
			customStyle: {
				type: String,
				default: ""
			},
			/**
			 * 遮罩层是否展示背景颜色
			 */
			overlayBackGroud: {
				type: Boolean,
				default: true
			},
			/**
			 * 是否锁定背景滚动
			 */
			lockScroll: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				overlayCustomStyle: {
					'position': 'fixed',
					'top': 0,
					'left': 0,
					'z-index': 10,
					'width': '100%',
					'height': '100%',
					'background-color': 'rgba(0, 0, 0, 0.7)',
				}
			}
		},
		methods: {
			rootCustomStyle(data) {
				if (!data) {
					return
				}
				data.overlayCustomStyle["background-color"] = this.overlayBackGroud ? 'rgba(0, 0, 0, 0.7)' : 'transparent'
				return `z-index:${data.zIndex};` + data.customStyle + styleToString(data.overlayCustomStyle);
			},
			onClick() {
				/**
				 * 关闭遮罩层事件
				 * @property {object} - -
				 */
				this.$emit('close');
				/**
				 * 点击遮罩层事件
				 * @property {object} - -
				 */
				this.$emit('click');
			},
			noop() {},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';
</style>
