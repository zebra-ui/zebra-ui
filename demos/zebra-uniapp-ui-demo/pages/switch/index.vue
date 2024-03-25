<template>
	<view class="demo-switch">
		<demo-block title="基础用法">
			<z-switch v-model="checked" @change="onChange" />
		</demo-block>
		<demo-block title="禁用状态">
			<z-switch v-model="checked" disabled />
		</demo-block>
		<demo-block title="加载状态">
			<z-switch v-model="checked" loading />
		</demo-block>
		<demo-block title="自定义大小">
			<z-switch v-model="checked" size="40rpx" />
		</demo-block>
		<demo-block title="自定义颜色">
			<z-switch v-model="checked" active-color="#ee0a24" inactive-color="#dcdee0" />
		</demo-block>
		<demo-block title="异步控制">
			<z-switch :value="checked" @input="onInput" />
		</demo-block>
		<demo-block :card="false" title="搭配单元格使用">
			<z-cell center title="标题">
				<template #right-icon>
					<z-switch v-model="checked" size="24" />
				</template>
			</z-cell>
		</demo-block>
		<z-dialog ref="zDialog"></z-dialog>
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
				checked: true,
			}
		},
		methods: {
			onChange(e) {},
			onInput(checked) {
				this.$dialog.confirm({
					title: '提醒',
					message: '是否切换开关？',
				}).then(() => {
					this.checked = checked;
				});
			},
		}
	}
</script>

<style>
	.demo-switch {}
</style>
