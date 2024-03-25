<template>
	<view class="demo-password-input">
		<demo-block :card="false" title="基础用法">
			<view class="demo-password-input-basicUsage">
				<z-password-input :value="value.basicUsage" :focused="current === 'basicUsage'"
					@focus="current = 'basicUsage'" />
			</view>
		</demo-block>
		<demo-block :card="false" title="自定义长度">
			<view class="demo-password-input-customLength">
				<z-password-input :value="value.customLength" :length="4" :focused="current === 'customLength'"
					@focus="current = 'customLength'" />
			</view>
		</demo-block>
		<demo-block :card="false" title="间距样式">
			<view class="demo-password-input-addGutter" style="background-color: #f7f8fa;padding: 30rpx;">
				<z-password-input :value="value.addGutter" :gutter="10" :focused="current === 'addGutter'"
					@focus="current = 'addGutter'" />
			</view>
		</demo-block>
		<demo-block :card="false" title="明文模式">
			<view class="demo-password-input-removeMask">
				<z-password-input :mask="false" :value="value.removeMask" :focused="current === 'removeMask'"
					@focus="current = 'removeMask'" />
			</view>
		</demo-block>
		<demo-block :card="false" title="提示信息">
			<view class="demo-password-input-showInfo">
				<z-password-input info="密码为 6 位数字" :value="value.showInfo" :error-info="errorInfo"
					:focused="current === 'showInfo'" @focus="current = 'showInfo'" />
			</view>
		</demo-block>

		<z-number-keyboard :show="!!current" @blur="current = ''" @input="onInput" @delete="onDelete" />
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
				value: {
					showInfo: '123',
					addGutter: '123',
					basicUsage: '123',
					removeMask: '123',
					customLength: '123',
				},
				current: '',
				errorInfo: '',
			}
		},
		watch: {
			current(value) {
				if (value) {
					let view = uni.createSelectorQuery().in(this).select(".demo-password-input-" + value);
					view.boundingClientRect(data => {
						uni.pageScrollTo({
							scrollTop: data.top,
							duration: 0
						});
					}).exec();
				}
			},
		},
		methods: {
			onInput(key) {
				const {
					value,
					current
				} = this;
				const maxlegnth = current === 'customLength' ? 4 : 6;
				const newValue = (value[current] + key).slice(0, maxlegnth);

				value[current] = newValue;

				if (
					current === 'showInfo' &&
					newValue.length === 6 &&
					newValue !== '123456'
				) {
					this.errorInfo = '密码错误';
				}
			},
			onDelete() {
				const {
					value,
					current
				} = this;
				value[current] = value[current].slice(0, value[current].length - 1);
				this.value = value;
				if (current === 'showInfo') {
					this.errorInfo = '';
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-password-input {
		min-height: 140vh;
	}
</style>
