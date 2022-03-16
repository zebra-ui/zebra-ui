<template>
	<view class="zebra-swipe-cell" @click="onClick" @touchstart="onTouchStart" @touchmove="onTouchMove"
		@touchend="onTouchEnd" @touchcancel="onTouchEnd">
		<view class="zebra-swipe-cell__wrapper"
			:style="{transform: `translate3d(${offset}px, 0, 0)`,transitionDuration: dragging ? '0s' : '.6s'}">
			<!-- {this.genLeftPart()} -->
			<template v-if="slotLeft()">
				<view ref="left" class="zebra-swipe-cell__left left" @click="getClickHandler('left', true)">
					<slot name="left"></slot>
				</view>
			</template>
			<slot></slot>
			<template v-if="slotRight()">
				<view ref="right" class="zebra-swipe-cell__right right" @click="getClickHandler('right', true)">
					<slot name="right"></slot>
				</view>
			</template>
			<!-- {this.genRightPart()} -->
		</view>
	</view>
</template>

<script>
	import {
		touchMixins
	} from '../../libs/mixins/touch.js';
	import {
		getRect
	} from '../../static/utils/utils.js';
	const THRESHOLD = 0.15;
	export default {
		name: "z-swipe-cell",
		mixins: [touchMixins],
		props: {
			disabled: Boolean,
			leftWidth: [Number, String],
			rightWidth: [Number, String],
			name: {
				type: [Number, String],
				default: '',
			},
		},
		data() {
			return {
				offset: 0,
				dragging: false,
				beforeClose: null
			};
		},
		computed: {
			computedLeftWidth() {
				return +this.leftWidth || this.getWidthByRef('left');
			},

			computedRightWidth() {
				return +this.rightWidth || this.getWidthByRef('right');
			},
		},
		mounted() {},
		methods: {
			setBeforeClose(methods) {
				this.beforeClose = methods;
			},
			slotLeft() {
				return this.$scopedSlots.left;
			},
			slotRight() {
				return this.$scopedSlots.right;
			},
			range(num, min, max) {
				return Math.min(Math.max(num, min), max);
			},
			async getWidthByRef(ref) {

				let result = await getRect(this, "." + ref);

				return result.width || 0;
			},

			// @exposed-api
			async open(position) {
				const offset =
					position === 'left' ? await this.computedLeftWidth : -await this.computedRightWidth;
				this.opened = true;
				this.offset = offset;

				this.$emit('open', {
					position,
					name: this.name,
					detail: this.name,
				});
			},

			close(position) {

				this.offset = 0;
				if (this.opened) {
					this.opened = false;
					this.$emit('close', {
						position,
						name: this.name,
					});
				}
			},

			onTouchStart(event) {
				if (this.disabled) {
					return;
				}

				this.startOffset = this.offset;
				this.touchStart(event);
			},

			async onTouchMove(event) {
				if (this.disabled) {
					return;
				}

				this.touchMove(event);

				if (this.direction === 'horizontal') {
					this.dragging = true;
					this.lockClick = true;

					const isPrevent = !this.opened || this.deltaX * this.startOffset < 0;

					this.offset = this.range(
						this.deltaX + this.startOffset,
						-await this.computedRightWidth,
						await this.computedLeftWidth
					);

				}
			},

			onTouchEnd() {
				if (this.disabled) {
					return;
				}

				if (this.dragging) {
					this.toggle(this.offset > 0 ? 'left' : 'right');
					this.dragging = false;
					setTimeout(() => {
						this.lockClick = false;
					}, 0);
				}
			},

			async toggle(direction) {
				const offset = Math.abs(this.offset);
				const threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;
				const computedLeftWidth = await this.computedLeftWidth;
				const computedRightWidth = await this.computedRightWidth;

				if (
					computedRightWidth &&
					direction === 'right' &&
					offset > computedRightWidth * threshold
				) {
					this.open('right');
				} else if (
					computedLeftWidth &&
					direction === 'left' &&
					offset > computedLeftWidth * threshold
				) {
					this.open('left');
				} else {
					this.close();
				}
			},

			onClick(position = 'outside') {
				this.$emit('click', position);

				if (this.opened && !this.lockClick) {
					if (this.beforeClose) {
						this.beforeClose({
							position,
							name: this.name,
							instance: this,
						});
					} else if (this.onClose) {
						this.onClose(position, this, {
							name: this.name
						});
					} else {
						this.close(position);
					}
				}
			},

			getClickHandler(position, stop) {
				this.onClick(position);
			},
		}
	}
</script>

<style scoped lang="scss">
	.zebra-swipe-cell {
		position: relative;
		overflow: hidden;
		cursor: grab;

		&__wrapper {
			transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1);
			transition-property: transform;
		}

		&__left,
		&__right {
			position: absolute;
			top: 0;
			height: 100%;
		}

		&__left {
			left: 0;
			transform: translate3d(-100%, 0, 0);
		}

		&__right {
			right: 0;
			transform: translate3d(100%, 0, 0);
		}
	}
</style>
