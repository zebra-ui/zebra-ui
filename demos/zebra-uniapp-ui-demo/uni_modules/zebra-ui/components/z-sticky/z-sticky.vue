<template>
	<view>
		<view class="zebra-sticky" :style="[containerStyle({ fixed, height, zIndex })]">
			<view :class="[bemMethods('sticky-wrap', { fixed })]"
				:style="[wrapStyle({ fixed, stickyTop, transform, zIndex })]">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import addUnit from '../../static/utils/add-unit.js';
	const ROOT_ELEMENT = '.zebra-sticky';
	export default {
		components: {},
		// #ifdef MP-WEIXIN
		options: {
			virtualHost: true // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现
		},
		// #endif
		props: {
			zIndex: {
				type: Number,
				default: 99,
			},
			offsetTop: {
				type: Number,
				default: 0,
			},
			disabled: {
				type: Boolean,
				default: false
			},
			container: {
				type: null
			},
			scrollTop: {
				type: null
			},
			// h5顶部导航栏的高度
			h5NavHeight: {
				type: [Number, String],
				default: 44
			},
		},
		data() {
			return {
				height: 0,
				fixed: false,
				transform: 0,
				attached: false,
				containerHeight: 0,
				stickyTop: 0,
			};
		},
		watch: {
			offsetTop(newVal) {
				if (typeof newVal !== 'number' || !this.attached) {
					return;
				}
				if (this.scrollTop) {
					this.initObserver("scroll");
				} else {
					this.initObserver("page");
				}

			},
			disabled(newVal) {
				if (!this.attached) {
					return;
				}
				if (newVal) {
					this.transform = 0;
					this.fixed = false;
					this.disconnectObserver()
				} else {
					this.initObserver("page");
				}
			},
			container: {
				handler: function(newVal) {
					if (!newVal || !this.height) {
						return;
					}
					this.observerContainer();
				}
			},
			scrollTop: {
				immediate: true,
				handler: function(val) {
					if (!this.attached) {
						return;
					}
					this.initObserver("scroll");
				}
			}
		},
		computed: {},
		methods: {
			wrapStyle(data) {
				return {
					'transform': data.transform ?
						'translate3d(0, ' + data.transform + 'px, 0)' : '',
					'top': data.fixed ? data.stickyTop + 'px' : '',
					'z-index': data.zIndex,
				};
			},
			containerStyle(data) {
				return {
					'height': data.fixed ? addUnit(data.height) : '',
					'z-index': data.zIndex,
				};
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			getRect(selector) {
				return new Promise(((resolve, reject) => {
					this.createSelectorQuery().select(selector)
						.boundingClientRect((rect) => {
							if (rect) {
								resolve(rect);
							} else {
								reject(new Error(`can not find selector: ${selector}`));
							}
						})
						.exec();
				}));
			},
			getAllRects(selector) {
				return new Promise(((resolve, reject) => {
					this.createSelectorQuery().selectAll(selector)
						.boundingClientRect((rects) => {
							if (rects && rects.lenght > 0) {
								resolve(rects);
							} else {
								reject(new Error(`can not find selector: ${selector}`));
							}
						})
						.exec();
				}));
			},
			getContainerRect() {
				let nodesRef = this.container();
				return new Promise(((resolve) => nodesRef.boundingClientRect(
						resolve)
					.exec()));
			},
			initObserver(type) {
				if (type == "page") {
					// #ifdef H5
					this.stickyTop = this.offsetTop != 0 ? uni.upx2px(this.offsetTop) + this.h5NavHeight : this
						.h5NavHeight;
					// #endif
					// #ifndef H5
					this.stickyTop = this.offsetTop != 0 ? uni.upx2px(this.offsetTop) : 0;
					// #endif
				} else {
					// #ifdef H5
					this.stickyTop = this.offsetTop != 0 ? this.offsetTop + this.h5NavHeight : this.h5NavHeight;
					// #endif
					// #ifndef H5
					this.stickyTop = this.offsetTop != 0 ? this.offsetTop : 0;
					// #endif
				}
				this.disconnectObserver();
				this.getRect(ROOT_ELEMENT).then((rect) => {
					this.height = rect.height
					this.transform = 0;
					if (type == "page") {
						this.observerContent();
						this.observerContainer();
					} else {
						if (this.offsetTop >= rect.top) {
							this.$emit('scroll', {
								scrollTop: this.scrollTop,
								isFixed: true
							});
							this.fixed = true;
							this.transform = 0;
						} else {
							this.$emit('scroll', {
								scrollTop: this.scrollTop,
								isFixed: false
							});
							this.fixed = false;
						}
					}

				});
			},
			disconnectObserver(observerName) {
				if (observerName) {
					let observer = this[observerName];
					observer && observer.disconnect();
				} else {
					this.contentObserver && this.contentObserver.disconnect();
					this.containerObserver && this.containerObserver.disconnect();
				}
			},
			observerContent() {
				let stickyTop = this.stickyTop;

				this.disconnectObserver('contentObserver');
				let contentObserver = this.createIntersectionObserver({
					thresholds: [1],
					initialRatio: 1
				});
				contentObserver.relativeToViewport({
					top: -stickyTop
				});
				contentObserver.observe(ROOT_ELEMENT, (res) => {
					if (this.disabled) {
						return;
					}
					this.setFixed(res.boundingClientRect.top);
				});
				this.contentObserver = contentObserver;
			},
			observerContainer() {
				let rect = this.container;
				let height = this.height;
				let stickyTop = this.stickyTop;

				if (!rect) {
					return;
				}
				this.disconnectObserver('containerObserver');

				this.$nextTick(() => {
					this.getRect(ROOT_ELEMENT).then((contentRect) => {
						let _contentTop = contentRect.top;
						let _containerTop = rect.top;
						let containerHeight = rect.height;
						let _relativeTop = _contentTop - _containerTop;
						let containerObserver = this.createIntersectionObserver({
							thresholds: [1],
							initialRatio: 1
						});

						containerObserver.relativeToViewport({
							top: containerHeight - height - stickyTop - _relativeTop
						});
						containerObserver.observe(ROOT_ELEMENT, (res) => {
							if (this.disabled) {
								return;
							}
							if (this.stickyTop + contentRect.height > containerHeight +
								res.boundingClientRect.top) {
								this.transform = containerHeight - contentRect.height;
							} else if (this.stickyTop >= _contentTop) {
								this.transform = 0;
							} else {
								this.transform = 0;
							}
							this.setFixed(res.boundingClientRect.top);
						});
						this._relativeTop = _relativeTop;
						this.containerHeight = containerHeight;
						this.containerObserver = containerObserver;
					});
				})
			},
			setFixed(top) {
				let height = this.height;
				let containerHeight = this.containerHeight;
				let _relativeTop = this._relativeTop;
				let stickyTop = this.stickyTop;
				let fixed = containerHeight && height ? top >= height + stickyTop + _relativeTop - containerHeight && top <
					stickyTop : top < stickyTop;
				if (fixed) {
					this.transform = 0;
				}
				this.$emit('scroll', {
					scrollTop: top,
					isFixed: fixed
				});
				this.fixed = fixed;
			},
		},

		mounted() {
			this.attached = true;
			if (!this.disabled) {
				this.initObserver("page");
			}
		},
		destroyed() {
			this.attached = false;
			this.disconnectObserver();
		},
	};
</script>
<style lang="scss" scoped>
	.zebra-sticky {
		position: relative
	}

	.zebra-sticky-wrap--fixed {
		left: 0;
		position: fixed;
		right: 0
	}
</style>
