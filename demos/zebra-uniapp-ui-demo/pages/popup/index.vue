<template>
	<view>
		<demo-block :card="false" title="基础用法">
			<z-cell-group inset>
				<z-cell title="展示弹出层" is-link @click="showBasic" />
			</z-cell-group>
			<z-popup :show="show.basic" custom-style="padding: 30px 50px" @close="hideBasic">
				内容
			</z-popup>
		</demo-block>

		<demo-block :card="false" title="弹出位置">
			<z-cell-group inset>
				<z-cell title="顶部弹出" is-link @click="showTop" />
				<z-cell title="底部弹出" is-link @click="showBottom" />
				<z-cell title="左侧弹出" is-link @click="showLeft" />
				<z-cell title="右侧弹出" is-link @click="showRight" />
			</z-cell-group>
			<z-popup :show="show.top" position="top" custom-style="height: 20%" @close="hideTop" />
			<z-popup :show="show.bottom" position="bottom" custom-style="height: 50%" @close="hideBottom">
			</z-popup>
			<z-popup :show="show.left" position="left" custom-style="width: 20%;height: 100%" @close="hideLeft" />
			<z-popup :show="show.right" position="right" custom-style="width: 20%;height: 100%" @close="hideRight" />
		</demo-block>

		<demo-block :card="false" title="关闭图标">
			<z-cell-group inset>
				<z-cell title="关闭图标" is-link @click="showCloseIcon" />
				<z-cell title="自定义图标" is-link @click="showCustomCloseIcon" />
				<z-cell title="图标位置" is-link @click="showCustomIconPosition" />
			</z-cell-group>
			<z-popup :show="show.closeIcon" closeable position="bottom" custom-style="height: 20%"
				@close="hideCloseIcon" />

			<z-popup :show="show.customCloseIcon" closeable close-icon-size="50rpx" close-icon="off_outline_close"
				position="bottom" custom-style="height:20%" @close="hideCustomCloseIcon" />

			<z-popup :show="show.customIconPosition" closeable close-icon-position="top-left" position="bottom"
				custom-style="height: 20%" @close="hideCustomIconPosition" />
		</demo-block>

		<demo-block :card="false" title="圆角弹窗">
			<z-cell-group inset>
				<z-cell title="圆角弹窗" is-link @click="showRound" />
			</z-cell-group>
			<z-popup :show="show.round" round position="bottom" custom-style="height: 20%" @close="hideRound" />
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
				show: {
					basic: false,
					top: false,
					bottom: false,
					left: false,
					right: false,
					round: false,
					closeIcon: false,
					customCloseIcon: false,
					customIconPosition: false
				}
			}
		},
		methods: {
			toggle(type, show) {
				// this.setData({
				// 	[`show.${type}`]: show
				// });
				this.show[type] = show;
			},

			showBasic() {
				this.toggle('basic', true);
			},

			hideBasic() {
				this.toggle('basic', false);
			},

			showTop() {
				this.toggle('top', true);
			},

			hideTop() {
				this.toggle('top', false);
			},

			showLeft() {
				this.toggle('left', true);
			},

			hideLeft() {
				this.toggle('left', false);
			},

			showRight() {
				this.toggle('right', true);
			},

			hideRight() {
				this.toggle('right', false);
			},

			showBottom() {
				this.toggle('bottom', true);
			},

			hideBottom() {
				this.toggle('bottom', false);
			},

			showRound() {
				this.toggle('round', true);
			},

			hideRound() {
				this.toggle('round', false);
			},

			showCloseIcon() {
				this.toggle('closeIcon', true);
			},

			hideCloseIcon() {
				this.toggle('closeIcon', false);
			},

			showCustomCloseIcon() {
				this.toggle('customCloseIcon', true);
			},

			hideCustomCloseIcon() {
				this.toggle('customCloseIcon', false);
			},

			showCustomIconPosition() {
				this.toggle('customIconPosition', true);
			},

			hideCustomIconPosition() {
				this.toggle('customIconPosition', false);
			}
		}
	}
</script>

<style>

</style>
