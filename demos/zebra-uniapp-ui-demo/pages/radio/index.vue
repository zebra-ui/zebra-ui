<template>
	<view class="demo-radio">
		<demo-block title="基本用法">
			<z-radio-group v-model="radio1" custom-style="padding: 0 32rpx;">
				<z-radio name="1" custom-style="margin-bottom: 16rpx;">单选框 1</z-radio>
				<z-radio name="2" custom-style="margin-bottom: 16rpx;">单选框 2</z-radio>
			</z-radio-group>
		</demo-block>

		<demo-block title="标签样式">
			<z-radio-group v-model="radio1" tag custom-style="padding: 0 32rpx;">
				<z-radio name="1" custom-style="margin-bottom: 16rpx;">单选框 1</z-radio>
				<z-radio name="2" custom-style="margin-bottom: 16rpx;">单选框 2</z-radio>
			</z-radio-group>
		</demo-block>

		<demo-block title="禁用状态">
			<z-radio-group v-model="radio2" custom-style="padding: 0 32rpx;" disabled>
				<z-radio name="1" custom-style="margin-bottom: 16rpx;">单选框 1</z-radio>
				<z-radio name="2" custom-style="margin-bottom: 16rpx;">单选框 2</z-radio>
			</z-radio-group>
			<z-radio-group v-model="radio2" tag custom-style="padding: 0 32rpx;" disabled>
				<z-radio name="1" custom-style="margin-bottom: 16rpx;">单选框 1</z-radio>
				<z-radio name="2" custom-style="margin-bottom: 16rpx;">单选框 2</z-radio>
			</z-radio-group>
		</demo-block>

		<demo-block title="自定义形状">
			<z-radio-group v-model="radioShape" custom-style="padding: 0 32rpx;">
				<z-radio name="1" shape="square" custom-style="margin-bottom: 16rpx;">单选框 1</z-radio>
				<z-radio name="2" shape="square" custom-style="margin-bottom: 16rpx;">单选框 2</z-radio>
			</z-radio-group>
			<z-radio-group v-model="radioShape" tag custom-style="padding: 0 32rpx;">
				<z-radio name="1" shape="square" custom-style="margin-bottom: 16rpx;">单选框 1</z-radio>
				<z-radio name="2" shape="square" custom-style="margin-bottom: 16rpx;">单选框 2</z-radio>
			</z-radio-group>
		</demo-block>

		<demo-block title="自定义颜色">
			<z-radio-group v-model="radio3" custom-style="padding: 0 32rpx;">
				<z-radio name="1" checked-color="#ee0a24" custom-style="margin-bottom: 16rpx;">
					单选框 1
				</z-radio>
				<z-radio name="2" checked-color="#ee0a24" custom-style="margin-bottom: 16rpx;">
					单选框 2
				</z-radio>
			</z-radio-group>
			<z-radio-group v-model="radio3" tag custom-style="padding: 0 32rpx;">
				<z-radio name="1" checked-color="#ee0a24" custom-style="margin-bottom: 16rpx;">
					单选框 1
				</z-radio>
				<z-radio name="2" checked-color="#ee0a24" custom-style="margin-bottom: 16rpx;">
					单选框 2
				</z-radio>
			</z-radio-group>
		</demo-block>

		<demo-block title="自定义大小">
			<z-radio-group v-model="radioIconSize" custom-style="padding: 0 32rpx;">
				<z-radio name="1" icon-size="58rpx" custom-style="margin-bottom: 16rpx;"> 单选框 1 </z-radio>
				<z-radio name="2" icon-size="58rpx" custom-style="margin-bottom: 16rpx;"> 单选框 2 </z-radio>
			</z-radio-group>
		</demo-block>

		<demo-block title="自定义图标">
			<z-radio-group v-model="radio4" custom-style="padding: 0 32rpx;">
				<z-radio name="1" use-icon-slot custom-style="margin-bottom: 16rpx;">
					单选框 1
					<template slot="icon">
						<image class="custom-icon-image" :src="radio4 == '1' ? icon.active : icon.inactive" />
					</template>
				</z-radio>
				<z-radio name="2" use-icon-slot custom-style="margin-bottom: 16rpx;">
					单选框 2
					<template slot="icon">
						<image class="custom-icon-image" :src="radio4 == '2' ? icon.active : icon.inactive" />
					</template>
				</z-radio>
			</z-radio-group>
		</demo-block>

		<demo-block title="禁用文本点击">
			<z-radio-group v-model="radioLabel" custom-style="padding: 0 32rpx;">
				<z-radio name="1" label-disabled custom-style="margin-bottom: 16rpx;">单选框 1</z-radio>
				<z-radio name="2" label-disabled custom-style="margin-bottom: 16rpx;">单选框 2</z-radio>
			</z-radio-group>
		</demo-block>

		<demo-block title="水平排列">
			<z-radio-group v-model="radioLabel" direction="horizontal">
				<z-radio name="a" custom-style="margin: 0 0 16rpx 40rpx;">复选框a</z-radio>
				<z-radio name="b" custom-style="margin: 0 0 16rpx 40rpx;">复选框b</z-radio>
			</z-radio-group>
			<z-radio-group v-model="radioLabel" tag direction="horizontal">
				<z-radio name="a" custom-style="margin: 0 0 16rpx 40rpx;">复选框a</z-radio>
				<z-radio name="b" custom-style="margin: 0 0 16rpx 40rpx;">复选框b</z-radio>
			</z-radio-group>
		</demo-block>


		<demo-block :card="false" title="搭配单元格组件使用">
			<z-radio-group v-model="radio5">
				<z-cell-group>
					<z-cell clickable title="单选框 1" @click="radio5 = '1'">
						<template #right-icon>
							<z-radio name="1" />
						</template>
					</z-cell>
					<z-cell clickable title="单选框 2" @click="radio5 = '2'">
						<template #right-icon>
							<z-radio name="2" />
						</template>
					</z-cell>
				</z-cell-group>
			</z-radio-group>
		</demo-block>
	</view>
</template>

<script>
	import DemoBlock from '../../components/DemoBlock/DemoBlock.vue';
	export default {
		options: {
			styleIsolation: 'shared',
			addGlobalClass: true,
		},
		components: {
			DemoBlock
		},
		data() {
			return {
				radio1: '1',
				radio2: '2',
				radio3: '1',
				radio4: '1',
				radio5: '1',
				radioLabel: '1',
				radioShape: '1',
				radioIconSize: '1',
				radioHorizontal: '1',
				icon: {
					active: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
					inactive: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png',
				},
			}
		},
		methods: {
			toggle(index) {
				this.$refs.radioes[index].toggle();
			},

			checkAll() {
				this.$refs.group.toggleAll(true);
			},

			toggleAll() {
				this.$refs.group.toggleAll();
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-radio {
		font-size: 32rpx;

		.custom-icon-image {
			height: 40rpx;
			width: 40rpx;
		}
	}
</style>
