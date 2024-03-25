<template>
	<view class="demo-color">
		<demo-block v-for="(item, index) in colorList" :key="index" :title="item.type">
			<view class="demo-color-list">
				<view v-for="(child, index) in item.data" :key="index" :class="['demo-color-item', child.class]">
					{{ child.text }}
				</view>
			</view>
		</demo-block>
	</view>
</template>

<script>
	import DemoBlock from "../../components/DemoBlock/DemoBlock.vue";
	export default {
		components: {
			DemoBlock,
		},
		data() {
			return {
				colorList: [{
						type: "主色",
						data: [{
								text: "primary",
								class: "color-type1",
							},
							{
								text: "dark",
								class: "color-type2",
							},
							{
								text: "light",
								class: "color-type3",
							},
						],
					},
					{
						type: "辅助色",
						data: [{
								text: "primary",
								class: "color-type4",
							},
							{
								text: "dark",
								class: "color-type5",
							},
							{
								text: "light",
								class: "color-type6",
							},
							{
								text: "primary",
								class: "color-type7",
							},
							{
								text: "dark",
								class: "color-type8",
							},
							{
								text: "light",
								class: "color-type9",
							},
						],
					},
					{
						type: "中性色",
						data: [{
								text: "gray-1",
								class: "color-type10",
							},
							{
								text: "gray-2",
								class: "color-type11",
							},
							{
								text: "gray-3",
								class: "color-type12",
							},
							{
								text: "gray-4",
								class: "color-type13",
							},
							{
								text: "gray-5",
								class: "color-type14",
							},
							{
								text: "gray-6",
								class: "color-type15",
							},
							{
								text: "gray-7",
								class: "color-type16",
							},
							{
								text: "gray-8",
								class: "color-type17",
							},
							{
								text: "black",
								class: "color-type18",
							},
						],
					},
					{
						type: "功能色",
						data: [{
								text: "red",
								class: "color-type19",
							},
							{
								text: "blue",
								class: "color-type20",
							},
							{
								text: "green",
								class: "color-type21",
							},
							{
								text: "orange",
								class: "color-type22",
							},
							{
								text: "orange-dark",
								class: "color-type23",
							},
							{
								text: "orange-light",
								class: "color-type24",
							},
						],
					},
				],
			};
		},
		methods: {},
	};
</script>

<style scoped lang="scss">
	.demo-color {
		.demo-color-item {
			width: 30%;
			height: 100rpx;
			font-size: $font-t3;
			color: $white;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 10rpx;
			border-radius: $border-radius-md;
		}

		.demo-color-list {
			display: flex;
			flex-wrap: wrap;
		}

		.color-type1 {
			background-color: $primary;
		}

		.color-type2 {
			background-color: $primary-dark;
		}

		.color-type3 {
			background-color: $primary-light;
		}

		.color-type4 {
			background-color: $second;
		}

		.color-type5 {
			background-color: $second-dark;
		}

		.color-type6 {
			background-color: $second-light;
		}

		.color-type7 {
			background-color: $third;
		}

		.color-type8 {
			background-color: $third-dark;
		}

		.color-type9 {
			background-color: $third-light;
		}

		.color-type10 {
			background-color: $gray-1;
		}

		.color-type11 {
			background-color: $gray-2;
		}

		.color-type12 {
			background-color: $gray-3;
		}

		.color-type13 {
			background-color: $gray-4;
		}

		.color-type14 {
			background-color: $gray-5;
		}

		.color-type15 {
			background-color: $gray-6;
		}

		.color-type16 {
			background-color: $gray-7;
		}

		.color-type17 {
			background-color: $gray-8;
		}

		.color-type18 {
			background-color: $black;
		}

		.color-type19 {
			background-color: $red;
		}

		.color-type20 {
			background-color: $blue;
		}

		.color-type21 {
			background-color: $green;
		}

		.color-type22 {
			background-color: $orange;
		}

		.color-type23 {
			background-color: $orange-dark;
		}

		.color-type24 {
			color: #000000;
			background-color: $orange-light;
		}
	}
</style>
