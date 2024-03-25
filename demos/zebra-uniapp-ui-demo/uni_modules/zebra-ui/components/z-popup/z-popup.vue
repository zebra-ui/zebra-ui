<template>
	<view>
		<z-overlay v-if="overlay" :show="show" :z-index="zIndex" :overlay-back-groud="overlayBackground"
			:custom-style="overlayStyle" :duration="duration" @click="onClickOverlay" :lock-scroll="lockScroll" />
		<view v-if="inited"
			:class="[classes,bemMethods('popup', [position, { round, safe: safeAreaInsetBottom, safeTop: safeAreaInsetTop }])]"
			:style="[popupStyle({ zIndex, currentDuration, display, customStyle })]" @transitionend="onTransitionEnd"
			@tap.stop.prevent @touchmove.stop.prevent>
			<scroll-view class="z-popup__scroll-view" scroll-y="true">
				<!-- @slot 弹窗内容插槽 -->
				<slot />
			</scroll-view>
			<view v-if="closeable"
				:class="['close-icon-class zebra-popup__close-icon zebra-popup__close-icon--'+closeIconPosition]">
				<z-icon :name="closeIcon" :size="closeIconSize" @click="onClickCloseIcon" />
			</view>
		</view>
	</view>
</template>

<script>
	const getClassNames = (name) => ({
		enter: `zebra-${name}-enter zebra-${name}-enter-active enter-class enter-active-class`,
		'enter-to': `zebra-${name}-enter-to zebra-${name}-enter-active enter-to-class enter-active-class`,
		leave: `zebra-${name}-leave zebra-${name}-leave-active leave-class leave-active-class`,
		'leave-to': `zebra-${name}-leave-to zebra-${name}-leave-active leave-to-class leave-active-class`,
	});
	import bem from '../../static/utils/bem.js';
	import addUnit from '../../static/utils/add-unit.js';
	import {
		styleToObj
	} from '../../static/utils/utils.js';
	import {
		requestAnimationFrame
	} from "../../static/utils/utils.js";
	import {
		isObj
	} from "../../libs/utils/validator.js";
	export default {
		name: 'z-popup',
		props: {
			/**
			 * 动画类型
			 * @values scale,slide-up,slide-down,slide-left,slide-right
			 */
			name: {
				type: String,
				default: "fade"
			},
			/**
			 * 是否显示弹出层
			 */
			show: {
				type: Boolean,
				default: false
			},
			/**
			 * z-index 层级
			 */
			zIndex: {
				type: Number,
				default: 100
			},
			/**
			 * 是否显示遮罩层
			 */
			overlay: {
				type: Boolean,
				default: true
			},
			/**
			 * 自定义遮罩层样式
			 */
			overlayStyle: {
				type: String,
				default: ""
			},
			/**
			 * 是否显示遮罩层背景颜色
			 */
			overlayBackground: {
				type: Boolean,
				default: true
			},
			/**
			 * 动画名称
			 */
			transition: {
				type: String,
				default: ""
			},
			/**
			 * 动画时长，单位为毫秒
			 */
			duration: {
				type: Number,
				default: 300
			},
			/**
			 * 是否锁定背景滚动
			 */
			lockScroll: {
				type: Boolean,
				default: true
			},
			/**
			 * 弹出位置
			 * @values top,bottom,right,left
			 */
			position: {
				type: String,
				default: "center"
			},
			/**
			 * 是否显示为圆角
			 */
			round: {
				type: Boolean,
				default: false
			},
			/**
			 * 自定义样式
			 */
			customStyle: {
				type: String,
				default: ""
			},
			/**
			 * 是否在点击遮罩层后关闭
			 */
			closeOnClickOverlay: {
				type: Boolean,
				default: true
			},
			/**
			 * 是否显示关闭图标
			 */
			closeable: {
				type: Boolean,
				default: false
			},
			/**
			 * 关闭图标名称或图片链接
			 */
			closeIcon: {
				type: String,
				default: "close_big"
			},
			/**
			 * 关闭图标大小
			 */
			closeIconSize: {
				type: String,
				default: ""
			},
			/**
			 * 是否留出底部安全距离
			 */
			safeAreaInsetBottom: {
				type: Boolean,
				default: true
			},
			/**
			 * 是否留出顶部安全距离（状态栏高度）
			 */
			safeAreaInsetTop: {
				type: Boolean,
				default: false
			},
			/**
			 * 关闭图标位置 
			 * @values top-left,bottom-left,bottom-right
			 */
			closeIconPosition: {
				type: String,
				default: "top-right"
			}
		},
		watch: {
			show(val) {
				if (val === true) {
					this.observeShow(true, false);
				} else {
					this.observeShow(false, true);
				}
			}
		},
		data() {
			return {
				type: '',
				inited: false,
				display: false,
				status: '',
				classes: [
					'enter-class',
					'enter-active-class',
					'enter-to-class',
					'leave-class',
					'leave-active-class',
					'leave-to-class',
					'close-icon-class',
				],
				currentDuration: '',
				transitionEnded: false
			}
		},
		methods: {
			onClickOverlay() {
				/**
				 * 点击遮罩层事件
				 * @property {object} - -
				 */
				this.$emit('click-overlay');
				if (this.closeOnClickOverlay) {
					/**
					 * 关闭弹出层事件
					 * @property {object} - -
					 */
					this.$emit('close');
				}
			},
			popupStyle(data) {
				if (data.display) {
					return {
						'z-index': data.zIndex,
						'-webkit-transition-duration': data.currentDuration + 'ms',
						'transition-duration': data.currentDuration + 'ms',
						...styleToObj(data.customStyle),
					}
				} else {
					return {
						'z-index': data.zIndex,
						'-webkit-transition-duration': data.currentDuration + 'ms',
						'transition-duration': data.currentDuration + 'ms',
						...styleToObj(data.customStyle),
						'display': 'none'
					}
				}
			},
			observeShow(value, old) {
				if (value === old) {
					return;
				}
				value ? this.enter() : this.leave();
			},
			enter() {
				const {
					duration
				} = this;
				const name = this.transition || this.position;
				const classNames = getClassNames(name);
				const currentDuration = isObj(duration) ? duration.enter : duration;
				this.status = 'enter';
				/**
				 * 弹窗弹出之前事件
				 * @property {object} - -
				 */
				this.$emit('before-enter');
				requestAnimationFrame(() => {
					if (this.status !== 'enter') {
						return;
					}
					/**
					 * 弹窗弹出中事件
					 * @property {object} - -
					 */
					this.$emit('enter');
					this.inited = true;
					this.display = true;
					this.classes = classNames.enter;
					this.currentDuration = currentDuration;
					requestAnimationFrame(() => {
						if (this.status !== 'enter') {
							return;
						}
						this.transitionEnded = false;
						this.classes = classNames['enter-to']
					});
				});
			},
			leave() {
				if (!this.display) {
					return;
				}
				const {
					duration
				} = this;
				const name = this.transition || this.position;
				const classNames = getClassNames(name);
				const currentDuration = isObj(duration) ? duration.leave : duration;
				this.status = 'leave';
				/**
				 * 弹窗关闭之前事件
				 * @property {object} - -
				 */
				this.$emit('before-leave');
				requestAnimationFrame(() => {
					if (this.status !== 'leave') {
						return;
					}
					/**
					 * 弹窗关闭中事件
					 * @property {object} - -
					 */
					this.$emit('leave');
					this.classes = classNames.leave;
					this.currentDuration = currentDuration;
					requestAnimationFrame(() => {
						if (this.status !== 'leave') {
							return;
						}
						this.transitionEnded = false;
						setTimeout(() => this.onTransitionEnd(), currentDuration);
						this.classes = classNames['leave-to'];
					});
				});
			},
			onTransitionEnd() {
				if (this.transitionEnded) {
					return;
				}
				this.transitionEnded = true;
				/**
				 * 弹窗弹出后事件
				 * @property {object} - -
				 */
				this.$emit(`after-${this.status}`);
				const {
					show,
					display
				} = this;
				if (!show && display) {
					this.display = false;
				}
			},
			onClickCloseIcon() {
				/**
				 * 关闭弹窗触发
				 * @property {object} - -
				 */
				this.$emit('close');
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-popup {
		-webkit-overflow-scrolling: touch;
		animation: ease both;
		background-color: var(--popup-background-color, #fff);
		box-sizing: border-box;
		max-height: 100%;
		overflow-y: hidden;
		position: fixed;
		transition-timing-function: ease
	}

	.z-popup__scroll-view {
		width: 100%;
		height: 100%;
	}

	.zebra-popup--center {
		left: 50%;
		top: 50%;
		transform: translate3d(-50%, -50%, 0)
	}

	.zebra-popup--center.zebra-popup--round {
		border-radius: 32rpx
	}

	.zebra-popup--top {
		left: 0;
		top: 0;
		width: 100%
	}

	.zebra-popup--top.zebra-popup--round {
		border-radius: 0 0 32rpx 32rpx
	}

	.zebra-popup--right {
		right: 0;
		top: 50%;
		transform: translate3d(0, -50%, 0)
	}

	.zebra-popup--right.zebra-popup--round {
		border-radius: 32rpx 0 0 32rpx
	}

	.zebra-popup--bottom {
		bottom: 0;
		left: 0;
		width: 100%
	}

	.zebra-popup--bottom.zebra-popup--round {
		border-radius: 32rpx 32rpx 0 0
	}

	.zebra-popup--left {
		left: 0;
		top: 50%;
		transform: translate3d(0, -50%, 0)
	}

	.zebra-popup--left.zebra-popup--round {
		border-radius: 0 32rpx 32rpx 0
	}

	.zebra-popup--bottom.zebra-popup--safe {
		padding-bottom: env(safe-area-inset-bottom)
	}

	.zebra-popup--safeTop {
		padding-top: env(safe-area-inset-top)
	}

	.zebra-popup__close-icon {
		color: #969799;
		font-size: 36rpx;
		position: absolute;
		z-index: 1
	}

	.zebra-popup__close-icon--top-left {
		left: 32rpx;
		top: 32rpx
	}

	.zebra-popup__close-icon--top-right {
		right: 32rpx;
		top: 32rpx
	}

	.zebra-popup__close-icon--bottom-left {
		bottom: 32rpx;
		left: 32rpx
	}

	.zebra-popup__close-icon--bottom-right {
		bottom: 32rpx;
		right: 32rpx
	}

	.zebra-popup__close-icon:active {
		opacity: .6
	}

	@keyframes zebra-scale-enter {
		from {
			opacity: 0;
			transform: translate3d(-50%, -50%, 0) scale(.7)
		}
	}

	@keyframes zebra-scale-leave {
		to {
			opacity: 0;
			transform: translate3d(-50%, -50%, 0) scale(.7)
		}
	}

	@keyframes zebra-slide-up-enter {
		from {
			transform: translate3d(0, 100%, 0);
		}
	}

	@keyframes zebra-slide-up-leave {
		to {
			transform: translate3d(0, 100%, 0);
		}
	}

	@keyframes zebra-slide-down-enter {
		from {
			transform: translate3d(0, -100%, 0);
		}
	}

	@keyframes zebra-slide-down-leave {
		to {
			transform: translate3d(0, -100%, 0);
		}
	}

	@keyframes zebra-slide-left-enter {
		from {
			transform: translate3d(-100%, 0, 0);
		}
	}

	@keyframes zebra-slide-left-leave {
		to {
			transform: translate3d(-100%, 0, 0);
		}
	}

	@keyframes zebra-left-enter {
		from {
			transform: translate3d(-100%, -50%, 0);
		}
	}

	@keyframes zebra-left-leave {
		to {
			transform: translate3d(-100%, -50%, 0);
		}
	}

	@keyframes zebra-slide-right-enter {
		from {
			transform: translate3d(100%, 0, 0);
		}
	}

	@keyframes zebra-slide-right-leave {
		to {
			transform: translate3d(100%, 0, 0);
		}
	}

	@keyframes zebra-right-enter {
		from {
			transform: translate3d(100%, -50%, 0);
		}
	}

	@keyframes zebra-right-leave {
		to {
			transform: translate3d(100%, -50%, 0);
		}
	}

	@keyframes zebra-fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes zebra-fade-out {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	@keyframes zebra-rotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.zebra-bottom {
		&-enter-active {
			animation: zebra-slide-up-enter $animation-duration-base both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: zebra-slide-up-leave $animation-duration-base both $animation-timing-function-leave;
		}
	}

	.zebra-top {
		&-enter-active {
			animation: zebra-slide-down-enter $animation-duration-base both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: zebra-slide-down-leave $animation-duration-base both $animation-timing-function-leave;
		}
	}

	.zebra-left {
		&-enter-active {
			animation: zebra-left-enter $animation-duration-base both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: zebra-left-leave $animation-duration-base both $animation-timing-function-leave;
		}
	}

	.zebra-right {
		&-enter-active {
			animation: zebra-right-enter $animation-duration-base both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: zebra-right-leave $animation-duration-base both $animation-timing-function-leave;
		}
	}


	.zebra-fade {
		&-enter-active {
			animation: $animation-duration-base zebra-fade-in both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: $animation-duration-base zebra-fade-out both $animation-timing-function-leave;
		}
	}

	.zebra-scale {
		&-enter-active {
			animation: $animation-duration-fast zebra-scale-enter both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: $animation-duration-fast zebra-scale-leave both $animation-timing-function-leave;
		}
	}

	.zebra-slide-up {
		&-enter-active {
			animation: zebra-slide-up-enter $animation-duration-base both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: zebra-slide-up-leave $animation-duration-base both $animation-timing-function-leave;
		}
	}

	.zebra-slide-down {
		&-enter-active {
			animation: zebra-slide-down-enter $animation-duration-base both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: zebra-slide-down-leave $animation-duration-base both $animation-timing-function-leave;
		}
	}

	.zebra-slide-left {
		&-enter-active {
			animation: zebra-slide-left-enter $animation-duration-base both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: zebra-slide-left-leave $animation-duration-base both $animation-timing-function-leave;
		}
	}

	.zebra-slide-right {
		&-enter-active {
			animation: zebra-slide-right-enter $animation-duration-base both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: zebra-slide-right-leave $animation-duration-base both $animation-timing-function-leave;
		}
	}
</style>
