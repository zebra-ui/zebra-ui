<template>
	<view class="demo-icon">
		<z-tabs sticky :active="0" color="#1989fa">
			<z-tab title="用法示例">
				<demo-block title="基础用法">
					<view class="list">
						<view class="item">
							<z-icon :name="demoIcon" size="68rpx" @click="onClick(demoIcon)" />
						</view>
						<view class="item">
							<z-icon :name="demoImage" size="68rpx" @click="onClick(demoImage)" />
						</view>
					</view>
					</z-row>
				</demo-block>
				<demo-block title="提示信息">
					<view class="list">
						<view class="item">
							<z-icon :name="demoIcon" size="64rpx" dot @click="onClick(demoIcon)" />
						</view>
						<view class="item">
							<z-icon :name="demoIcon" size="64rpx" info="9" @click="onClick(demoIcon)" />
						</view>
						<view class="item">
							<z-icon :name="demoIcon" size="64rpx" info="99+" @click="onClick(demoIcon)" />
						</view>
					</view>
				</demo-block>
				<demo-block title="图标颜色">
					<view class="list">
						<view class="item">
							<z-icon :name="demoIcon" size="64rpx" color="#1989fa" @click="onClick(demoIcon)" />
						</view>
						<view class="item">
							<z-icon :name="demoIcon" size="64rpx" color="#07c160" @click="onClick(demoIcon)" />
						</view>
					</view>
				</demo-block>
				<demo-block title="图标大小">
					<view class="list">
						<view class="item">
							<z-icon :name="demoIcon" size="80" @click="onClick(demoIcon)" />
						</view>
						<view class="item">
							<z-icon :name="demoIcon" size="100" @click="onClick(demoIcon)" />
						</view>
					</view>
				</demo-block>
			</z-tab>
			<z-tab title="基础图标">
				<demo-block title="basic">
					<view class="list">
						<view class="item" v-for="(item,index) in iconData.basic" :key="index">
							<z-icon :name="item.font_class" size="32px" custom-class="icon"
								@click="onClick(item.font_class)" />
							<!-- <view class="text">{{ item.font_class }}</view> -->
						</view>
					</view>
				</demo-block>
			</z-tab>
			<z-tab title="Arrow">
				<demo-block title="arrow">
					<view class="list">
						<view class="item" v-for="(item,index) in iconData.arrow" :key="index">
							<z-icon :name="item.font_class" size="32px" custom-class="icon"
								@click="onClick(item.font_class)" />
							<!-- <view class="text">{{ item.font_class }}</view> -->
						</view>
					</view>
				</demo-block>
			</z-tab>
			<!-- 	<z-tab title="线框风格" custom-class="demo-tab-pane">
				<z-col wx:for="{{ icons.outline }}" wx:key="index" custom-class="col" span="6">
					<z-icon name="{{ item }}" size="32px" custom-class="icon" />
					<view class="text">{{ item }}</view>
				</z-col>
			</z-tab>
			<z-tab title="实底风格" custom-class="demo-tab-pane">
				<z-col wx:for="{{ icons.filled }}" wx:key="index" custom-class="col" span="6">
					<z-icon name="{{ item }}" size="32px" custom-class="icon" />
					<view class="text">{{ item }}</view>
				</z-col>
			</z-tab> -->
		</z-tabs>
		<z-toast ref="zToast"></z-toast>
	</view>
</template>

<script>
	import DemoBlock from '../../components/DemoBlock/DemoBlock.vue';
	import iconData from '../../common/js/iconfont.js';
	export default {
		components: {
			DemoBlock
		},
		data() {
			return {
				iconData: iconData,
				demoIcon: 'happy',
				demoImage: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
			}
		},
		methods: {
			onClick(e) {
				uni.$zCopy(e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.demo-icon {
		.list {
			display: flex;
			flex-wrap: wrap;

			.item {
				width: 25%;
				height: 150rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}

			.item:active {
				background-color: #f2f3f5;
			}
		}
	}
</style>
