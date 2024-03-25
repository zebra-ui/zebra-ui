<template>
	<view class="demo-picker">
		<demo-block title="基础用法">
			<z-picker :columns="column1" @change="onChange1" />
		</demo-block>

		<demo-block title="默认选中项">
			<z-picker :columns="column1" :default-index="2" @change="onChange1" />
		</demo-block>

		<demo-block title="展示顶部栏">
			<z-picker show-toolbar title="标题" :columns="column1" @change="onChange1" @confirm="onConfirm"
				@cancel="onCancel" />
		</demo-block>

		<demo-block title="多列联动">
			<z-picker ref="zPicker" :columns="column4" @change="onChange2" />
		</demo-block>

		<demo-block title="禁用选项">
			<z-picker :columns="column2" />
		</demo-block>

		<demo-block title="加载状态">
			<z-picker loading :columns="column4" />
		</demo-block>

		<demo-block card title="搭配弹出层使用">
			<z-cell title="城市" :value="value" @click="showPicker = true" />
			<z-popup :show="showPicker" round position="bottom" @close="showPicker = false">
				<z-picker show-toolbar title="标题" :columns="column1" @cancel="onCancel2" @confirm="onConfirm2" />
			</z-popup>
		</demo-block>
		<z-toast ref="zToast" />

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
				showPicker: false,
				value: "",
				column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				column2: [{
						text: '杭州',
						disabled: true
					},
					{
						text: '宁波'
					},
					{
						text: '温州'
					}
				],
				column3: {
					浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
					福建: ['福州', '厦门', '莆田', '三明', '泉州']
				},
				column4: [{
						values: ['浙江', '福建'],
						className: 'column1'
					},
					{
						values: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
						className: 'column2',
						defaultIndex: 2
					}
				]
			}
		},
		methods: {
			onChange1(event) {
				const {
					value,
					index
				} = event;
				this.$toast(`Value: ${value}, Index：${index}`);
			},
			onCancel2() {
				this.showPicker = false;
			},
			onConfirm(event) {
				const {
					value,
					index
				} = event;
				uni.$toast(`Value: ${value}, Index：${index}`)
			},
			onConfirm2(event) {
				const {
					value,
					index
				} = event;
				this.value = value;
				this.showPicker = false;
				uni.$toast(`Value: ${value}, Index：${index}`)
			},
			onCancel() {
				uni.$toast("取消")
			},
			onChange2(event) {
				const {
					picker,
					value
				} = event;
				this.$refs.zPicker.setColumnValues(1, this.column3[value[0]]);
				getApp().picker = this.$refs.zPicker;
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
