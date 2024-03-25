<template>
	<view class="demo-transition">
		<demo-block :card="false" title="基础用法">
			<z-cell title="Fade" @click="onClickFade" is-link />
			<z-cell title="Slide Up" @click="onClickSlideUp" is-link />
			<z-cell title="Slide Down" @click="onClickSlideDown" is-link />
			<z-cell title="Slide Left" @click="onClickSlideLeft" is-link />
			<z-cell title="Slide Right" @click="onClickSlideRight" is-link />

			<z-transition :show="show" :name="name" :custom-style="transitionStyle()">
			</z-transition>


		</demo-block>

	</view>
</template>

<script>
	import DemoBlock from '../../components/DemoBlock/DemoBlock.vue';
	export default {
		components: {
			DemoBlock
		},
		data() {
			return {
				show: false,
				name: 'fade',
				showCustom: false
			}
		},
		methods: {
			onClickFade() {
				this.trigger('fade');
			},

			onClickFadeUp() {
				this.trigger('fade-up');
			},

			onClickFadeDown() {
				this.trigger('fade-down');
			},

			onClickFadeLeft() {
				this.trigger('fade-left');
			},

			onClickFadeRight() {
				this.trigger('fade-right');
			},

			onClickSlideUp() {
				this.trigger('slide-up');
			},

			onClickSlideDown() {
				this.trigger('slide-down');
			},

			onClickSlideLeft() {
				this.trigger('slide-left');
			},

			onClickSlideRight() {
				this.trigger('slide-right');
			},

			trigger(name) {
				// this.setData({
				// 	name,
				// 	show: true
				// });
				this.name = name;
				this.show = true;
				setTimeout(() => {
					// this.setData({
					// 	show: false
					// });
					this.show = false;
				}, 500);
			},

			onClickCustom() {
				// this.setData({
				// 	showCustom: true
				// });
				this.showCustom = true;
				setTimeout(() => {
					// this.setData({
					// 	showCustom: false
					// });
					this.showCustom = false;
				}, 1000);
			},

			onBeforeEnter() {},

			onEnter() {},

			onAfterEnter() {},

			onBeforeLeave() {},

			onLeave() {},

			onAfterLeave() {},

			transitionStyle() {
				return "position: fixed;top: 50%;left: 50%;width: 100px;height: 100px;margin: -50px 0 0 -50px;background-color: #1989fa;";
			}
		}
	}
</script>

<style scoped lang="scss">
	.zebra-enter-active-class,
	.zebra-leave-active-class {
		transition-property: background-color, transform;
	}

	.zebra-enter-class,
	.zebra-leave-to-class {
		background-color: red;
		transform: rotate(-360deg) translate3d(-100%, -100%, 0);
	}
</style>
