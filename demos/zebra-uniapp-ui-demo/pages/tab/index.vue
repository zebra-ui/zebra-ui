<template>
	<view>
		<demo-block title="基础用法">
			<z-tabs :active="1" @change="onChange">
				<z-tab v-for="(item,index) in tabs4" :key="index" :title="'标签 ' + item">
					<view class="content">
						{{ '内容' + item }}
					</view>
				</z-tab>
			</z-tabs>
		</demo-block>
		<demo-block title="通过名称匹配">
			<z-tabs active="b">
				<z-tab v-for="(item,index) in tabsWithName" :key="index" :name="item.name" :title="'标签 ' + item.index">
					<view class="content">
						{{ '内容' + item.index}}
					</view>
				</z-tab>
			</z-tabs>
		</demo-block>
		<demo-block title="横向滚动">
			<z-tabs>
				<z-tab v-for="(item,index)  in tabs6" :key="index" :title="'标签 ' + item">
					<view class="content">
						{{ '内容' + item }}
					</view>
				</z-tab>
			</z-tabs>
		</demo-block>
		<demo-block title="禁用标签">
			<z-tabs @disabled="onClickDisabled">
				<z-tab v-for="(item,index) in  tabs3" :key="index" :disabled="index === 1" :title="'标签 ' + item">
					<view class="content">
						{{ '内容' + item }}
					</view>
				</z-tab>
			</z-tabs>
		</demo-block>
		<demo-block title="样式风格">
			<z-tabs type="card" tab-class="special-tab">
				<z-tab v-for="(item,index) in  tabs3" :key="index" :title="'标签 ' + item">
					<view class="content">
						{{ '内容' + item }}
					</view>
				</z-tab>
			</z-tabs>
		</demo-block>
		<demo-block title="点击事件">
			<z-tabs @click="onClick">
				<z-tab v-for="(item,index) in  tabs2" :key="index" :title="'标签 ' + item">
					<view class="content">
						{{ '内容' + item }}
					</view>
				</z-tab>
			</z-tabs>
		</demo-block>
		<demo-block title="粘性布局">
			<z-tabs sticky>
				<z-tab v-for="(item,index) in tabs4" :key="index" :title="'标签 ' + item">
					<view class="content" style="height: 500rpx;">
						{{ '内容' + item }}
					</view>
				</z-tab>
			</z-tabs>
		</demo-block>
		<!-- 字节小程序不支持:host,此处无效 -->
		<!-- #ifndef MP-TOUTIAO -->
		<demo-block title="切换动画">
			<z-tabs animated>
				<z-tab v-for="(item,index) in  tabs4" :key="index" :title="'标签 ' + item">
					<view class="content">
						{{ '内容' + item }}
					</view>
				</z-tab>
			</z-tabs>
		</demo-block>
		<demo-block title="滑动切换">
			<z-tabs swipeable animated>
				<z-tab v-for="(item,index) in  tabs4" :key="index" :title="'标签 ' + item">
					<view class="content">
						{{ '内容' + item }}
					</view>
				</z-tab>
			</z-tabs>
		</demo-block>
		<!-- #endif -->
		<demo-block title="自定义标题">
			<z-tabs :active="1" @change="onChange" tab-class="special-tab" tab-active-class="special-tab-active">
				<z-icon slot="nav-right" name="search" custom-class="right-nav" @click="onClickNavRight" />
				<z-tab v-for="(item,index) in tabs4" :key="index" :title="'标签 ' + item" :dot="index === 1"
					:info="index === 2 ? 99 : null">
					<view class="content">
						{{ '内容' + item }}
					</view>
				</z-tab>
			</z-tabs>
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
				tabs2: [1, 2],
				tabs3: [1, 2, 3],
				tabs4: [1, 2, 3, 4],
				tabs6: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				tabsWithName: [{
						name: 'a',
						index: 1
					},
					{
						name: 'b',
						index: 2
					},
					{
						name: 'c',
						index: 3
					}
				]
			}
		},
		methods: {
			onChange(event) {
				this.$toast(`切换到标签 ${event.index + 1}`);
			},
			onClickDisabled(event) {
				this.$toast(`标签已被禁用`);
			},
			onClick(event) {
				this.$toast(`点击标签 ${event.index + 1}`);
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		padding: 30rpx;
		font-size: 30rpx;
	}
</style>
