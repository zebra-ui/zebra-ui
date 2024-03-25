<template>
	<view :id="tabsId" :class="[bemMethods('tabs', [type])]">
		<z-sticky :disabled="!sticky" :z-index="zIndex" :offset-top="offsetTop" :container="container"
			@scroll="onTouchScroll">
			<view
				:class="[bemMethods('tabs__wrap', { scrollable }),type === 'line' && border ? 'zebra-hairline--top-bottom' : '']">
				<slot name="nav-left" />

				<scroll-view :scroll-x="scrollable" :scroll-with-animation="scrollWithAnimation"
					:scroll-left="scrollLeft" :class="[bemMethods('tabs__scroll', [type])]"
					:style="color ? 'border-color: ' + color : ''">
					<view :class="[bemMethods('tabs__nav', [type, { complete: !ellipsis }]),'nav-class']"
						:style="[navStyle(color, type)]">
						<view v-if="type === 'line'" class="zebra-tabs__line"
							:style="[lineStyle({ color, lineOffsetLeft, lineHeight, skipTransition, duration, lineWidth })]" />
						<view v-for="(item,index) in tabs" :key="index"
							:class="[tabClass(index === currentIndex, ellipsis),bemMethods('tab', { active: index === currentIndex, disabled: item.disabled, complete: !ellipsis })]"
							:style="[tabStyle({ active: index === currentIndex, ellipsis, color, type, disabled: item.disabled, titleActiveColor, titleInactiveColor, swipeThreshold, scrollable })]"
							@click="onTap(index)">
							<view :class="[ellipsis ? 'zebra-ellipsis' : '']" :style="[item.titleStyle]">
								{{ item.title }}
								<z-info v-if="item.info || item.dot" :info="item.info" :dot="item.dot"
									custom-style="display: inline-block;position: relative;top: -1px;transform: translateX(0);" />
							</view>
						</view>
					</view>
				</scroll-view>

				<slot name="nav-right" />
			</view>
		</z-sticky>

		<view class="zebra-tabs__content" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd"
			@touchcancel="onTouchEnd">
			<view :class="[bemMethods('tabs__track', [{ animated }]),'zebra-tabs__track']"
				:style="[trackStyle({ duration, currentIndex, animated })]">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import addUnit from '../../static/utils/add-unit.js';
	import {
		styleToObj
	} from '../../static/utils/utils.js'
	import {
		getAllRect,
		getRect,
		requestAnimationFrame,
		getParent,
		getChildren
	} from '../../static/utils/utils.js';
	import {
		ParentMixin
	} from '../../libs/mixins/relation.js';
	const MIN_DISTANCE = 10;
	const s = Symbol();
	export default {
		name: "z-tabs",
		mixins: [ParentMixin('zTabs')],
		props: {
			sticky: Boolean,
			border: Boolean,
			swipeable: Boolean,
			titleActiveColor: String,
			titleInactiveColor: String,
			color: String,
			animated: {
				type: Boolean,
				// observer() {

				// },
			},
			lineWidth: {
				type: null,
				default: 80,
				// observer: 'resize',
			},
			lineHeight: {
				type: null,
				default: -1,
			},
			active: {
				type: null,
				default: 0,
				// observer(name) {
				// 	if (name !== this.getCurrentName()) {
				// 		this.setCurrentIndexByName(name);
				// 	}
				// },
			},
			type: {
				type: String,
				default: 'line',
			},
			ellipsis: {
				type: Boolean,
				default: true,
			},
			duration: {
				type: Number,
				default: 0.3,
			},
			zIndex: {
				type: Number,
				default: 1,
			},
			swipeThreshold: {
				type: Number,
				default: 5,
				// observer(value) {
				// 	this.setData({
				// 		scrollable: this.children.length > value || !this.data.ellipsis,
				// 	});
				// },
			},
			offsetTop: {
				type: Number,
				default: 0,
			},
			lazyRender: {
				type: Boolean,
				default: true,
			},
			tabCustomStyle: {
				type: String,
				default: ""
			},
			navCustomStyle: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				// children: [],
				tabsId: this.$z.guid(),
				tabs: [],
				scrollLeft: 0,
				scrollable: false,
				currentIndex: 0,
				container: null,
				skipTransition: true,
				scrollWithAnimation: false,
				lineOffsetLeft: 0,
				swiping: false,

				direction: '',
				deltaX: 0,
				deltaY: 0,
				offsetX: 0,
				offsetY: 0,
				startX: 0,
				startY: 0
			}
		},
		watch: {
			animated: {
				handler: function(val) {
					this.children.forEach((child, index) => child.updateRender(
						index === this
						.currentIndex,
						this));
				}
			},
			lineWidth: {
				handler: function(val) {
					this.resize();
				}
			},
			active: {
				handler: function(val) {
					if (val !== this.getCurrentName()) {
						this.setCurrentIndexByName(val);
					}
				}
			},
			swipeThreshold: {
				immediate: true,
				handler: function(val) {
					this.scrollable = getChildren(this.$children, 'z-tab').length > val || !this.ellipsis
				}
			},
		},
		created() {
			uni.$on("childrenReady" + this._uid, (children) => {
				children.updateRender(
					children.index === this
					.currentIndex,
					this)
				if (children.index == this.tabs.length - 1) {
					this.resize();
					if (this.active !== this.getCurrentName()) {
						this.setCurrentIndexByName(this.active);
					}
				}
			})
		},
		mounted() {
			this.swiping = true;
			setTimeout(() => {
				this.$nextTickAll(() => {
					this.resize();
					this.scrollIntoView();
				})
			}, 0)
			if (this.sticky) {
				this.$nextTickAll(() => {
					setTimeout(() => {
						const query = uni.createSelectorQuery().in(this);
						query.select('#' + this.tabsId).boundingClientRect(data => {
							this.container = data;
						}).exec();
					}, 0)
				})
			}
		},
		methods: {
			getDirection(x, y) {
				if (x > y && x > MIN_DISTANCE) {
					return 'horizontal';
				}
				if (y > x && y > MIN_DISTANCE) {
					return 'vertical';
				}
				return '';
			},
			tabClass(active, ellipsis) {
				var classes = ['tab-class'];

				if (active) {
					classes.push('tab-active-class');
				}

				if (ellipsis) {
					classes.push('zebra-ellipsis');
				}
				return classes.join(' ');
			},
			tabStyle(data) {
				var titleColor = data.active ?
					data.titleActiveColor :
					data.titleInactiveColor;

				var ellipsis = data.scrollable && data.ellipsis;
				if (data.type === 'card') {
					return {
						'border-color': data.color,
						'background-color': !data.disabled && data.active ? data.color : null,
						'color': titleColor || (!data.disabled && !data.active ? data.color : null),
						'flex-basis': ellipsis ? 88 / data.swipeThreshold + '%' : null,
						...styleToObj(this.tabCustomStyle)
					}
				}

				return {
					'color': titleColor,
					'flex-basis': ellipsis ? 88 / data.swipeThreshold + '%' : null,
					...styleToObj(this.tabCustomStyle)
				};
			},
			navStyle(color, type) {
				return {
					'border-color': type === 'card' && color ? color : null,
					...styleToObj(this.navCustomStyle)
				};
			},
			trackStyle(data) {
				if (!data.animated) {
					return '';
				}

				return {
					// #ifdef MP
					'left': -100 * data.currentIndex + '%',
					// #endif
					// #ifndef MP
					'transform': `translate3d(${-100 * data.currentIndex}%, 0px, 0px)`,
					// #endif
					'transition-duration': data.duration + 's',
					'-webkit-transition-duration': data.duration + 's'
				};
			},
			lineStyle(data) {
				return {
					'width': addUnit(data.lineWidth),
					'transform': 'translateX(' + data.lineOffsetLeft + 'px)',
					'-webkit-transform': 'translateX(' + data.lineOffsetLeft + 'px)',
					'background-color': data.color,
					'height': data.lineHeight !== -1 ? addUnit(data.lineHeight) : null,
					'border-radius': data.lineHeight !== -1 ? addUnit(data.lineHeight) : null,
					'transition-duration': !data.skipTransition ? data.duration + 's' : null,
					'-webkit-transition-duration': !data.skipTransition ?
						data.duration + 's' : null
				};
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			updateTabs() {
				const children = getChildren(this.$children, 'z-tab');
				const data = this;
				this.tabs = children.map((child) => {
					return {
						'dot': child.dot,
						'info': child.info,
						'title': child.title,
						'disabled': child.disabled,
						'titleStyle': child.titleStyle,
						'name': child.name,
						'active': child.active,
						'index': child.index,
						'inited': child.inited,
						'shouldRender': child.shouldRender,
						'shouldShow': child.shouldShow,
					}
				});
				this.scrollable = children.length > data.swipeThreshold || !data.ellipsis;
				this.setCurrentIndexByName(data.active || this.getCurrentName());
			},
			trigger(eventName, child) {
				const {
					currentIndex
				} = this;
				const currentChild = child || getChildren(this.$children, 'z-tab')[currentIndex];
				if (!currentChild) {
					return;
				}
				this.$emit(eventName, {
					index: currentChild.index,
					name: currentChild.getComputedName(),
					title: currentChild.title,
				});
			},
			onTap(index) {
				const child = getChildren(this.$children, 'z-tab')[index];
				if (child.disabled) {
					this.trigger('disabled', child);
				} else {
					this.setCurrentIndex(index);
					this.$nextTick(() => {
						this.trigger('click');
					});
				}
			},
			setCurrentIndexByName(name) {
				let children = this.children;
				const matched = children.filter((child) => child.getComputedName() === name);
				if (matched.length) {
					this.setCurrentIndex(matched[0].index);
				}
			},
			setCurrentIndex(currentIndex) {
				const data = this;
				let children = this.children;
				if (currentIndex == null ||
					currentIndex >= children.length ||
					currentIndex < 0) {
					return;
				}
				children.forEach((item, index) => {
					const active = index === currentIndex;
					if (active !== item.active || !item.inited) {
						item.updateRender(active, this);
					}
				});
				if (currentIndex === data.currentIndex) {
					return;
				}
				const shouldEmitChange = data.currentIndex !== null;
				this.currentIndex = currentIndex;
				requestAnimationFrame(() => {
					this.resize();
					this.scrollIntoView();
				});
				this.$nextTick(() => {
					this.trigger('input');
					if (shouldEmitChange) {
						this.trigger('change');
					}
				});
			},
			getCurrentName() {
				const activeTab = this.children[this.currentIndex];
				if (activeTab) {
					return activeTab.getComputedName();
				}
			},
			resize() {
				if (this.type !== 'line') {
					return;
				}
				const {
					currentIndex,
					ellipsis,
					skipTransition
				} = this;
				Promise.all([
					getRect(this, '.zebra-tabs__line'),
					getAllRect(this, '.zebra-tab'),
				]).then(([lineRect, rects = []]) => {
					const rect = rects[currentIndex];
					if (rect == null) {
						return;
					}
					let lineOffsetLeft = rects
						.slice(0, currentIndex)
						.reduce((prev, curr) => prev + curr.width, 0);
					lineOffsetLeft +=
						(rect.width - lineRect.width) / 2 + (ellipsis ? 0 : 8);
					this.lineOffsetLeft = lineOffsetLeft;
					this.swiping = true;
					if (skipTransition) {
						this.$nextTickAll(() => {
							this.skipTransition = false;
						});
					}
				});
			},
			scrollIntoView() {
				const {
					currentIndex,
					scrollable,
					scrollWithAnimation
				} = this;
				if (!scrollable) {
					return;
				}
				Promise.all([
					getRect(this, '.zebra-tabs__nav'),
					getAllRect(this, '.zebra-tab'),
				]).then(([navRect, tabRects]) => {
					const tabRect = tabRects[currentIndex];
					const offsetLeft = tabRects
						.slice(0, currentIndex)
						.reduce((prev, curr) => prev + curr.width, 0);
					this.scrollLeft = offsetLeft - (navRect.width - tabRect.width) / 2;
					if (!scrollWithAnimation) {
						this.$nextTickAll(() => {
							this.scrollWithAnimation = true;
						});
					}
				});
			},
			onTouchScroll(event) {
				this.$emit('scroll', event.detail);
			},
			onTouchStart(event) {
				if (!this.swipeable)
					return;
				this.touchStart(event);
			},
			onTouchMove(event) {
				if (!this.swipeable)
					return;
				this.touchMove(event);
			},
			onTouchEnd() {
				if (!this.swipeable)
					return;
				const {
					direction,
					deltaX,
					offsetX
				} = this;
				const minSwipeDistance = 50;
				if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
					const index = this.getAvaiableTab(deltaX);
					if (index !== -1) {
						this.setCurrentIndex(index);
					}
				}
				this.swiping = false;
			},
			getAvaiableTab(direction) {
				const {
					tabs,
					currentIndex
				} = this;
				const step = direction > 0 ? -1 : 1;
				for (let i = step; currentIndex + i < tabs.length && currentIndex + i >= 0; i += step) {
					const index = currentIndex + i;
					if (index >= 0 &&
						index < tabs.length &&
						tabs[index] &&
						!tabs[index].disabled) {
						return index;
					}
				}
				return -1;
			},
			resetTouchStatus() {
				this.direction = '';
				this.deltaX = 0;
				this.deltaY = 0;
				this.offsetX = 0;
				this.offsetY = 0;
			},
			touchStart(event) {
				this.resetTouchStatus();
				const touch = event.touches[0];
				this.startX = touch.clientX;
				this.startY = touch.clientY;
			},
			touchMove(event) {
				const touch = event.touches[0];
				this.deltaX = touch.clientX - this.startX;
				this.deltaY = touch.clientY - this.startY;
				this.offsetX = Math.abs(this.deltaX);
				this.offsetY = Math.abs(this.deltaY);
				this.direction =
					this.direction || this.getDirection(this.offsetX, this.offsetY);
			},
		}
	}
</script>

<style scoped lang="scss">
	.zebra-tabs {
		-webkit-tap-highlight-color: transparent;
		position: relative
	}

	.zebra-tabs__wrap {
		display: flex;
		overflow: hidden
	}

	.zebra-tabs__wrap--scrollable .zebra-tab {
		flex: 0 0 22%
	}

	.zebra-tabs__wrap--scrollable .zebra-tab--complete {
		flex: 1 0 auto !important;
		padding: 0 24rpx
	}

	.zebra-tabs__wrap--scrollable .zebra-tabs__nav--complete {
		padding-left: 16rpx;
		padding-right: 16rpx
	}

	.zebra-tabs__scroll {
		background-color: $tabs-nav-background-color;
		width: 100%;
	}

	.zebra-tabs__scroll--line {
		box-sizing: initial;
		height: calc(100% + 36rpx)
	}

	.zebra-tabs__scroll--card {
		margin: 0 $padding-md
	}

	.zebra-tabs__scroll::-webkit-scrollbar {
		display: none
	}

	.zebra-tabs__nav {
		display: flex;
		position: relative;
		-webkit-user-select: none;
		user-select: none
	}

	.zebra-tabs__nav--card {
		border: 2rpx solid $tabs-default-color;
		border-radius: 4rpx;
		box-sizing: border-box;
		height: $tabs-card-height
	}

	.zebra-tabs__nav--card .zebra-tab {
		border-right: 2rpx solid $tabs-default-color;
		color: $tabs-default-color;
		line-height: 56rpx
	}

	.zebra-tabs__nav--card .zebra-tab:last-child {
		border-right: none
	}

	.zebra-tabs__nav--card .zebra-tab.zebra-tab--active {
		background-color: $tabs-default-color;
		color: #fff
	}

	.zebra-tabs__nav--card .zebra-tab--disabled {
		color: $tab-disabled-text-color
	}

	.zebra-tabs__line {
		background-color: $tabs-bottom-bar-color;
		border-radius: $tabs-bottom-bar-height;
		bottom: 0;
		height: $tabs-bottom-bar-height;
		left: 0;
		position: absolute;
		z-index: 1
	}

	.zebra-tabs__track {
		height: 100%;
		position: relative;
		width: 100%
	}

	.zebra-tabs__track--animated {
		display: flex;
		/* #ifdef MP */
		transition-property: left
			/* #endif */
	}

	.zebra-tabs__content {
		overflow: hidden
	}

	.zebra-tabs--line .zebra-tabs__wrap {
		height: $tabs-line-height
	}

	.zebra-tabs--card .zebra-tabs__wrap {
		height: $tabs-card-height
	}

	.zebra-tab {
		box-sizing: border-box;
		color: $tab-text-color;
		cursor: pointer;
		flex: 1;
		font-size: $tab-font-size;
		line-height: $tabs-line-height;
		min-width: 0;
		padding: 0 10rpx;
		position: relative;
		text-align: center
	}

	.zebra-tab--active {
		color: $tab-active-text-color;
		font-weight: $font-weight-bold
	}

	.zebra-tab--disabled {
		color: $tab-disabled-text-color
	}

	.zebra-tab__title__info {
		display: inline-block;
		position: relative !important;
		top: -2rpx !important;
		transform: translateX(0) !important
	}
</style>
