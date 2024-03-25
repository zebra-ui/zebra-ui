<template>
	<view class="demo-search">
		<demo-block :card="false" title="基本用法">
			<z-search v-model="value" placeholder="请输入搜索关键词" />
		</demo-block>
		<demo-block :card="false" title="监听事件">
			<z-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel"
				@clear="onClear" />
		</demo-block>
		<demo-block :card="false" title="搜索框内容对齐">
			<z-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
		</demo-block>
		<demo-block :card="false" title="禁用搜索框">
			<z-search v-model="value" disabled placeholder="请输入搜索关键词" />
		</demo-block>
		<demo-block :card="false" title="背景颜色">
			<z-search v-model="value" shape="round" background="#08C6C8" placeholder="请输入搜索关键词" />
		</demo-block>
		<demo-block :card="false" title="自定义按钮">
			<z-search v-model="value" label="地址" shape="round" placeholder="请输入搜索关键词" use-action-slot
				@search="onSearch">
				<view slot="action" @tap="onClick">搜索</view>
			</z-search>
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
				value: ''
			}
		},
		methods: {
			onChange(e) {},

			onSearch(e) {
				uni.$toast("搜索")
			},

			onClick(e) {
				uni.$toast("点击")
			},

			onCancel() {
				uni.$toast("取消")
			},

			onClear() {
				uni.$toast("清空")
			}
		}
	}
</script>

<style scoped lang="scss">
	.demo-search {}
</style>
