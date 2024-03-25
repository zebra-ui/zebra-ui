<template>
	<view class="demo-stepper">
		<demo-block title="基本用法">
			<z-stepper v-model="value" />
		</demo-block>
		<demo-block title="步长设置">
			<z-stepper v-model="value" step="2" />
		</demo-block>
		<demo-block title="限制输入范围">
			<z-stepper v-model="value" min="5" max="8" />
		</demo-block>
		<demo-block title="限制输入整数">
			<z-stepper v-model="value" integer />
		</demo-block>
		<demo-block title="禁用状态">
			<z-stepper v-model="value" disabled />
		</demo-block>
		<demo-block title="禁用输入框">
			<z-stepper v-model="value" disable-input />
		</demo-block>
		<demo-block title="固定小数位数">
			<z-stepper v-model="value" step="0.2" :decimal-length="1" />
		</demo-block>
		<demo-block title="自定义大小">
			<z-stepper v-model="value" input-width="80rpx" button-size="64rpx" />
		</demo-block>
		<demo-block title="异步变更">
			<z-stepper :value="value" async-change @change="onChange" />
		</demo-block>
		<demo-block title="圆角风格">
			<z-stepper v-model="value" theme="round" button-size="56rpx" disable-input />
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
				value: 1,
				timer: ""
			}
		},
		methods: {
			onChange(value) {
				this.$toast.loading({
					forbidClick: true
				});

				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.$toast.clear();
					// 注意此时修改 value 后会再次触发 change 事件
					this.value = value;
				}, 500);
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-stepper {}
</style>
