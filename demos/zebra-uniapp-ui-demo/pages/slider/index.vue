<template>
	<view class="demo-slider">
		<demo-block title="基础用法">
			<view class="demo-slider-item">
				<z-slider v-model="value" @change="onChange" />
			</view>
		</demo-block>
		<demo-block title="双滑块">
			<view class="demo-slider-item">
				<z-slider v-model="value1" range @change="onChange" />
			</view>
		</demo-block>
		<demo-block title="指定选择范围">
			<view class="demo-slider-item">
				<z-slider v-model="value" :min="-50" :max="50" @change="onChange" />
			</view>
		</demo-block>
		<demo-block title="禁用">
			<view class="demo-slider-item">
				<z-slider v-model="value" disabled />
			</view>
		</demo-block>
		<demo-block title="指定步长">
			<view class="demo-slider-item">
				<z-slider v-model="value" :step="10" @change="onChange" />
			</view>
		</demo-block>
		<demo-block title="自定义样式">
			<view class="demo-slider-item">
				<z-slider v-model="value" bar-height="8rpx" active-color="#ee0a24" @change="onChange" />
			</view>
		</demo-block>
		<demo-block title="自定义按钮">
			<view class="demo-slider-item">
				<z-slider v-model="value" use-button-slot active-color="#ee0a24" @drag="onDrag" @change="onChange">
					<view class="demo-slider-item-button" slot="button">{{ text }}</view>
				</z-slider>
			</view>
		</demo-block>
		<demo-block title="垂直方向">
			<view class="demo-slider-vertical">
				<view class="demo-slider-vertical-item">
					<z-slider :value="50" vertical @change="onChange" />
				</view>
				<view class="demo-slider-vertical-item" style="margin-left: 160rpx;">
					<z-slider :value="[20, 60]" vertical range @change="onChange" />
				</view>
			</view>
		</demo-block>
		<z-toast ref="zToast"></z-toast>
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
				value: 50,
				value1: [10, 50],
				text: ""
			}
		},
		mounted() {
			this.text = this.value
		},
		methods: {
			onChange(value) {
				this.$toast('当前值：' + value);
			},
			onDrag(value) {
				this.text = value.innerValue;
			}
		}
	}
</script>

<style scoped lang="scss">
	.demo-slider {
		&-item {
			padding: 30rpx 0;

			&-button {
				width: 52rpx;
				color: #fff;
				font-size: 20rpx;
				line-height: 36rpx;
				text-align: center;
				background-color: #ee0a24;
				border-radius: 200rpx;
			}
		}

		&-vertical {
			height: 300rpx;
			display: flex;
			margin: 50rpx;
		}
	}
</style>
