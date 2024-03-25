<template>
	<view class="demo-rate">
		<demo-block title="基础用法">
			<z-rate v-model="value" />
		</demo-block>
		<demo-block title="自定义图标">
			<z-rate v-model="value" icon="cloud" void-icon="cloud_outline" />
		</demo-block>
		<demo-block title="自定义样式">
			<z-rate v-model="value" :size="50" color="#ffd21e" void-color="#eee" />
		</demo-block>
		<demo-block title="半个选择">
			<z-rate v-model="value1" :size="50" allow-half void-color="#eee" />
		</demo-block>
		<demo-block title="自定义数量">
			<z-rate v-model="value" :count="6" />
		</demo-block>
		<demo-block title="禁用状态">
			<z-rate v-model="value" disabled />
		</demo-block>
		<demo-block title="只读状态">
			<z-rate v-model="value" readonly />
		</demo-block>
		<demo-block title="监听事件">
			<z-rate v-model="value" @change="onChange" />
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
				value: 3,
				value1: 2.5,
			}
		},
		methods: {
			onChange(value) {
				this.$toast('当前值：' + value);
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-rate {}
</style>
