<template>
	<view class="demo-checkbox">
		<demo-block title="基本用法">
			<z-checkbox v-model="checkbox1">复选框</z-checkbox>
		</demo-block>

		<demo-block title="标签样式">
			<z-checkbox tag v-model="checkbox1">复选框</z-checkbox>
		</demo-block>

		<demo-block title="禁用状态">
			<z-checkbox v-model="checkbox5" disabled>
				复选框
			</z-checkbox>
			<z-checkbox v-model="checkbox4" disabled>
				复选框
			</z-checkbox>
			<z-checkbox tag v-model="checkbox5" disabled>
				复选框
			</z-checkbox>
			<z-checkbox tag v-model="checkbox4" disabled>
				复选框
			</z-checkbox>
		</demo-block>

		<demo-block title="自定义形状">
			<z-checkbox v-model="checkboxShape" shape="square">
				自定义形状
			</z-checkbox>
			<z-checkbox tag v-model="checkboxShape" shape="square">
				自定义形状
			</z-checkbox>
		</demo-block>

		<demo-block title="自定义颜色">
			<z-checkbox v-model="checkbox2" checked-color="#ee0a24">
				自定义颜色
			</z-checkbox>
			<z-checkbox tag v-model="checkbox2" checked-color="#ee0a24">
				自定义颜色
			</z-checkbox>
		</demo-block>

		<demo-block title="自定义大小">
			<z-checkbox v-model="checkboxSize" icon-size="58rpx">
				自定义大小
			</z-checkbox>
		</demo-block>

		<demo-block title="自定义图标">
			<z-checkbox v-model="checkbox3" use-icon-slot>
				自定义图标
				<template slot="icon">
					<image class="custom-icon-image" :src="checkbox3 ? activeIcon : inactiveIcon" />
				</template>
			</z-checkbox>
		</demo-block>

		<demo-block title="禁用文本点击">
			<z-checkbox v-model="checkboxLabel" label-disabled>
				禁用文本点击
			</z-checkbox>
		</demo-block>

		<demo-block title="复选框组">
			<z-checkbox-group v-model="result">
				<z-checkbox name="a">复选框a</z-checkbox>
				<z-checkbox name="b">复选框b</z-checkbox>
				<z-checkbox name="c">复选框c</z-checkbox>
			</z-checkbox-group>
			<z-checkbox-group v-model="result">
				<z-checkbox tag name="a">复选框a</z-checkbox>
				<z-checkbox tag name="b">复选框b</z-checkbox>
				<z-checkbox tag name="c">复选框c</z-checkbox>
			</z-checkbox-group>
		</demo-block>

		<demo-block title="水平排列">
			<z-checkbox-group v-model="horizontalResult" direction="horizontal">
				<z-checkbox name="a">复选框a</z-checkbox>
				<z-checkbox name="b">复选框b</z-checkbox>
			</z-checkbox-group>
			<z-checkbox-group v-model="horizontalResult" direction="horizontal">
				<z-checkbox tag name="a">复选框a</z-checkbox>
				<z-checkbox tag name="b">复选框b</z-checkbox>
			</z-checkbox-group>
		</demo-block>

		<demo-block title="限制最大可选数">
			<z-checkbox-group v-model="result2" :max="2">
				<z-checkbox name="a">复选框a</z-checkbox>
				<z-checkbox name="b">复选框b</z-checkbox>
				<z-checkbox name="c">复选框c</z-checkbox>
			</z-checkbox-group>
		</demo-block>


		<demo-block title="全选与反选">
			<z-checkbox-group v-model="checkAllResult" ref="group">
				<z-checkbox name="a">复选框a</z-checkbox>
				<z-checkbox name="b">复选框b</z-checkbox>
				<z-checkbox name="c">复选框c</z-checkbox>
			</z-checkbox-group>

			<div class="demo-checkbox-buttons">
				<z-button type="primary" @click="checkAll">
					全选
				</z-button>
				<z-button type="info" @click="toggleAll">
					反选
				</z-button>
			</div>
		</demo-block>

		<demo-block :card="false" title="搭配单元格组件使用">
			<z-checkbox-group v-model="result3">
				<z-cell-group>
					<z-cell v-for="(item, index) in list" clickable :key="index" :title="`复选框${item}`"
						@click="toggle(index)">
						<template #right-icon>
							<z-checkbox ref="checkboxes" :name="item" />
						</template>
					</z-cell>
				</z-cell-group>
			</z-checkbox-group>
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
				checkbox1: true,
				checkbox2: true,
				checkbox3: true,
				checkbox4: true,
				checkbox5: false,
				checkboxLabel: true,
				checkboxSize: true,
				checkboxShape: true,
				list: ['a', 'b', 'c'],
				result: ['a', 'b'],
				horizontalResult: [],
				result2: [],
				result3: [],
				result4: [],
				checkAllResult: [],
				activeIcon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
				inactiveIcon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png',
			}
		},
		methods: {
			toggle(index) {
				this.$refs.checkboxes[index].toggle();
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
	.demo-checkbox {
		// background: #FFFFFF;
		font-size: 32rpx;

		&-buttons {
			margin-top: 32rpx;

			.van-button {
				margin-left: 32rpx;
			}
		}

		::v-deep .zebra-checkbox {
			margin: 0 0 8px 20px;
		}

		::v-deep .zebra-cell {
			.zebra-checkbox {
				margin: 0;
			}
		}

		.custom-icon-image {
			height: 20px;
			width: 20px;
		}

		&-buttons {
			margin-top: 32rpx;

			::v-deep .zebra-button {
				margin-left: 32rpx;
			}
		}

	}
</style>
