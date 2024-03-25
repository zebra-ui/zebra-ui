<template>
	<view class="demo-sticky">
		<demo-block title="基础用法">
			<z-sticky>
				<z-button type="primary">
					基础用法
				</z-button>
			</z-sticky>
		</demo-block>
		<demo-block title="吸顶距离">
			<z-sticky :offset-top="150">
				<z-button type="info">
					吸顶距离
				</z-button>
			</z-sticky>
		</demo-block>
		<demo-block title="指定容器">
			<view id="container" style="height: 300rpx; background-color: #fff;">
				<z-sticky :container="container">
					<z-button type="warning" custom-style="margin-left:300rpx;">
						指定容器
					</z-button>
				</z-sticky>
			</view>
		</demo-block>
		<demo-block title="嵌套在 scroll-view 内使用">
			<scroll-view @scroll="onScroll" scroll-y id="scroller" style="height: 400rpx;">
				<view style="height: 800rpx; padding-top: 50px;">
					<z-sticky :scroll-top="scrollTop" :offset-top="offsetTop">
						<z-button type="danger">
							嵌套在 scroll-view 内
						</z-button>
					</z-sticky>
				</view>
			</scroll-view>
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
				container: '',
				scrollTop: 0,
				offsetTop: 0,
			}
		},
		mounted() {
			const query = uni.createSelectorQuery();
			query.select('#container').boundingClientRect(data => {
				this.container = data;
			}).exec();
		},
		methods: {
			onScroll(event) {
				uni.createSelectorQuery()
					.select('#scroller')
					.boundingClientRect((res) => {
						this.scrollTop = event.detail.scrollTop;
						this.offsetTop = res.top;
					})
					.exec();
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-sticky {
		height: 200vh;

		.zebra-button {
			margin-left: $padding-md;
		}
	}
</style>
