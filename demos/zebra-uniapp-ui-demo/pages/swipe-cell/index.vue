<template>
	<view class="demo-swipe-cell">
		<demo-block :card="false" title="基础用法">
			<z-swipe-cell>
				<template #left>
					<z-button square type="primary">选择</z-button>
				</template>
				<z-cell :border="false" title="单元格" value="内容" />
				<template #right>
					<z-button square type="danger" @click="onDelete">删除</z-button>
					<z-button square type="primary">收藏</z-button>
				</template>
			</z-swipe-cell>
		</demo-block>
		<demo-block :card="false" title="异步关闭">
			<z-swipe-cell ref="zSwipeCell">
				<template #left>
					<z-button square type="primary">选择</z-button>
				</template>
				<z-cell :border="false" title="单元格" value="内容" />
				<template #right>
					<z-button square type="danger" text="删除">删除</z-button>
				</template>
			</z-swipe-cell>
		</demo-block>
		<demo-block :card="false" title="打开关闭方法">
			<z-swipe-cell ref="zSwipeCell1">
				<template #left>
					<z-button square type="primary">选择</z-button>
				</template>
				<z-cell :border="false" title="单元格" value="内容" />
				<template #right>
					<z-button square type="danger" text="删除">删除</z-button>
				</template>
			</z-swipe-cell>
			<view class="demo-swipe-cell-button">
				<z-button type="primary" size="small" @click="open()">点击打开</z-button>
				<z-button size="small" @click="close()">点击关闭</z-button>
			</view>

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

			}
		},
		onReady() {
			this.$refs.zSwipeCell.setBeforeClose(this.beforeClose);
		},
		methods: {
			open() {
				this.$refs.zSwipeCell1.open();
			},
			close() {
				this.$refs.zSwipeCell1.close();
			},
			onDelete() {
				uni.$toast("点击了删除")
			},
			beforeClose({
				position,
				instance
			}) {
				switch (position) {
					case 'left':
					case 'cell':
					case 'outside':
						instance.close();
						break;
					case 'right':
						uni.$dialog
							.confirm({
								message: "确认删除吗？",
							})
							.then(() => {
								instance.close();
							});
						break;
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-swipe-cell {
		&-button {
			padding: 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
		}
	}
</style>
