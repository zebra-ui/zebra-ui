<template>
	<view v-if="inited" :class="['zebra-transition custom-class',classes]"
		:style="[rootStyle({ currentDuration, display, customStyle })]" @transitionend="onTransitionEnd"
		@click="onClick" @touchmove.stop.prevent="touchmove">
		<slot />
	</view>
</template>

<script>
	/**
	 * transition 动画
	 * @description Transition 动画
	 * @tutorial 
	 * @property {String} name 动画类型
	 * @property {Boolean} show	是否展示组件
	 * @property {String} duration	动画时长，单位为毫秒
	 * @property {String} custom-style	自定义样式
	 * @property {String} custom-class	自定义类
	 */
	const getClassNames = (name) => ({
		enter: `zebra-${name}-enter zebra-${name}-enter-active enter-class enter-active-class`,
		'enter-to': `zebra-${name}-enter-to zebra-${name}-enter-active enter-to-class enter-active-class`,
		leave: `zebra-${name}-leave zebra-${name}-leave-active leave-class leave-active-class`,
		'leave-to': `zebra-${name}-leave-to zebra-${name}-leave-active leave-to-class leave-active-class`,
	});
	import {
		styleToObj
	} from '../../static/utils/utils.js';
	export default {
		name: 'z-transition',
		props: {
			// 动画类型
			name: {
				type: String,
				default: "fade"
			},
			// 是否展示组件
			show: {
				type: Boolean,
				default: true
			},
			// 动画时长，单位为毫秒
			duration: {
				type: [Number, Object],
				default: 300
			},
			// 自定义样式
			customStyle: {
				type: String,
				default: ""
			},
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
				],
				currentDuration: '',
				transitionEnded: false
			}
		},
		watch: {
			show: {
				immediate: true,
				handler: function(val) {
					if (val === true) {
						this.observeShow(true, false);
					} else {
						this.observeShow(false, true);
					}
				}
			}
		},
		methods: {
			onClick() {
				this.$emit('click');
			},
			observeShow(value, old) {
				if (value === old) {
					return;
				}
				value ? this.enter() : this.leave();
			},
			enter() {
				const {
					duration,
					name
				} = this;
				const classNames = getClassNames(name);
				const currentDuration = this.isObj(duration) ? duration.enter : duration;
				this.status = 'enter';
				this.$emit('before-enter');
				this.requestAnimationFrame(() => {
					if (this.status !== 'enter') {
						return;
					}
					this.$emit('enter');
					this.inited = true;
					this.display = true;
					this.classes = classNames.enter;
					this.currentDuration = currentDuration;
					this.requestAnimationFrame(() => {
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
					duration,
					name
				} = this;
				const classNames = getClassNames(name);
				const currentDuration = this.isObj(duration) ? duration.leave : duration;
				this.status = 'leave';
				this.$emit('before-leave');
				this.requestAnimationFrame(() => {
					if (this.status !== 'leave') {
						return;
					}
					this.$emit('leave');
					this.classes = classNames.leave;
					this.currentDuration = currentDuration;
					this.requestAnimationFrame(() => {
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
				this.$emit(`after-${this.status}`);
				const {
					show,
					display
				} = this;
				if (!show && display) {
					this.display = false;
				}
			},
			touchmove() {
				this.$emit('touchmove');
			},
			rootStyle(data) {
				if (data.display) {
					return {
						'-webkit-transition-duration': data.currentDuration + 'ms',
						'transition-duration': data.currentDuration + 'ms',
						...styleToObj(data.customStyle),
					}
				} else {
					return {
						'-webkit-transition-duration': data.currentDuration + 'ms',
						'transition-duration': data.currentDuration + 'ms',
						'display': 'none',
						...styleToObj(data.customStyle),
					}
				}

			},
			isObj(x) {
				const type = typeof x;
				return x !== null && (type === 'object' || type === 'function');
			},
			requestAnimationFrame(cb) {
				const systemInfo = uni.getSystemInfoSync();
				if (systemInfo.platform === 'devtools') {
					return setTimeout(() => {
						cb();
					}, 1000 / 30);
				}
				return uni
					.createSelectorQuery()
					.selectViewport()
					.boundingClientRect()
					.exec(() => {
						cb();
					});
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

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

	.zebra-fade {
		&-enter-active {
			animation: $animation-duration-base zebra-fade-in both $animation-timing-function-enter;
		}

		&-leave-active {
			animation: $animation-duration-base zebra-fade-out both $animation-timing-function-leave;
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
