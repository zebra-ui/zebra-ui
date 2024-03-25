<template>
	<view class="demo-area">
		<demo-block card title="基本使用">
			<z-area title="标题" :area-list="areaList" :loading="showLoading" />
		</demo-block>
		<demo-block card title="选中省市区">
			<z-area title="标题" :area-list="areaList" value="140215" :loading="showLoading" />
		</demo-block>
		<demo-block card title="配置显示列">
			<z-area title="标题" :area-list="areaList" :columns-num="2" :loading="showLoading" />
		</demo-block>
		<demo-block card title="配置列占位提示文字">
			<z-area title="标题" :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']"
				:loading="showLoading" />
		</demo-block>
		<demo-block card title="事件">
			<z-area title="标题" :area-list="areaList" :loading="showLoading" @change="onChange" @confirm="onConfirm"
				@cancel="onCancel" />
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
				areaList: {},
				showLoading: true
			}
		},
		mounted() {
			this.getAreaList();
		},
		methods: {
			onChange(e) {
				uni.$toast(`name:${e.values[e.index].name},code:${e.values[e.index].code}`)
			},
			onConfirm(e) {
				uni.$toast(`name:${e.values[2].name},code:${e.values[2].code}`)
			},
			onCancel() {
				uni.$toast("点击了退出")
			},
			getAreaList() {
				uni.request({
					url: 'https://mock.520ztc.com/mock/6191d2d7e7643873dbd08c48/getAreaList', //该地址为模拟接口，请勿在实际项目中使用
					method: 'POST',
					success: (res) => {
						this.areaList = res.data.data;
						this.showLoading = false;
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.demo-area {}
</style>
