<template>
	<view class="demo-cascader">
		<demo-block :card="false" title="基础用法">
			<z-field v-model="base.result" is-link readonly label="地区" placeholder="请选择所在地区"
				@click="base.show = true" />
			<z-popup :show="base.show" round position="bottom">
				<z-cascader :show="base.show" v-model="base.value" title="请选择所在地区" :options="options"
					@close="base.show = false" @finish="onFinish($event,'base')" />
			</z-popup>
		</demo-block>
		<demo-block :card="false" title="自定义颜色">
			<z-field v-model="customColor.result" is-link readonly label="地区" placeholder="请选择所在地区"
				@click="customColor.show = true" />
			<z-popup :show="customColor.show" round position="bottom">
				<z-cascader v-model="customColor.value" title="请选择所在地区" :options="options" active-color="#1989fa"
					@close="customColor.show = false" @finish="onFinish($event,'customColor')" />
			</z-popup>
		</demo-block>
		<demo-block :card="false" title="异步加载">
			<z-field v-model="async.result" is-link readonly label="地区" placeholder="请选择所在地区"
				@click="async.show = true" />
			<z-popup :show="async.show" round position="bottom">
				<z-cascader v-model="async.value" title="请选择所在地区" :options="async.options" @close="async.show = false"
					@change="onChange" @finish="onFinish($event,'async')" />
			</z-popup>
		</demo-block>
		<demo-block :card="false" title="自定义字段名">
			<z-field v-model="customFieldNames.result" is-link readonly label="地区" placeholder="请选择所在地区"
				@click="customFieldNames.show = true" />
			<z-popup :show="customFieldNames.show" round position="bottom">
				<z-cascader v-model="customFieldNames.value" title="请选择所在地区" :options="customFieldNamesOptions"
					:field-names="fieldNames" @close="customFieldNames.show = false"
					@finish="onFinishCustomName($event,'customFieldNames')" />
			</z-popup>
		</demo-block>
	</view>
</template>

<script>
	import DemoBlock from "../../components/DemoBlock/DemoBlock.vue";
	export default {
		components: {
			DemoBlock,
		},
		data() {
			return {
				base: {
					show: false,
					value: '',
					result: '',
				},
				customColor: {
					show: false,
					value: null,
					result: '',
				},
				async: {
					show: false,
					value: null,
					result: '',
					options: [],
				},
				customFieldNames: {
					show: false,
					value: null,
					result: '',
				},
				fieldNames: {
					text: 'name',
					value: 'code',
					children: 'items',
				},
				// 选项列表，children 代表子选项，支持多级嵌套
				options: [{
						text: '浙江省',
						value: '330000',
						children: [{
							text: '杭州市',
							value: '330100'
						}],
					},
					{
						text: '江苏省',
						value: '320000',
						children: [{
							text: '南京市',
							value: '320100'
						}],
					},
				],
				customFieldNamesOptions: [{
						name: '浙江省',
						code: '330000',
						items: [{
							name: '杭州市',
							code: '330100'
						}],
					},
					{
						name: '江苏省',
						code: '320000',
						items: [{
							name: '南京市',
							code: '320100'
						}],
					},
				]
			}
		},
		mounted() {
			this.getAsyncList();
		},
		methods: {
			// 异步实例得获取数据模拟(获取省)，真实环境请勿使用
			getAsyncList() {
				uni.request({
					url: 'https://mock.520ztc.com/mock/6191d2d7e7643873dbd08c48/getAreaListBy', //仅为示例，并非真实接口地址。
					data: {
						parent: 0
					},
					method: "POST",
					success: (res) => {
						let data = res.data.data;
						Object.keys(data).forEach((key) => {
							this.async.options.push({
								text: data[key],
								value: key,
								children: [],
							})
						})
					}
				});
			},
			// 异步实例得获取数据模拟(获取市)，真实环境请勿使用
			getAsyncCityList(code) {
				uni.request({
					url: 'https://mock.520ztc.com/mock/6191d2d7e7643873dbd08c48/getAreaListBy', //仅为示例，并非真实接口地址。
					data: {
						parent: code
					},
					method: "POST",
					success: (res) => {
						let data = res.data.data;
						let index = this.async.options.findIndex((item) => item.value == code);
						Object.keys(data).forEach((key) => {
							this.async.options[index].children.push({
								text: data[key],
								value: key,
								children: [],
							})
						})
					}
				});
			},
			// 异步实例得获取数据模拟(获取区)，真实环境请勿使用
			getAsyncCountyList(parentCode, childCode) {
				uni.request({
					url: 'https://mock.520ztc.com/mock/6191d2d7e7643873dbd08c48/getAreaListBy', //仅为示例，并非真实接口地址。
					data: {
						parent: childCode
					},
					method: "POST",
					success: (res) => {
						let data = res.data.data;
						let parentIndex = this.async.options.findIndex((item) => item.value == parentCode);
						let childIndex = this.async.options[parentIndex].children.findIndex((item) => item
							.value == childCode);
						Object.keys(data).forEach((key) => {
							this.async.options[parentIndex].children[childIndex].children.push({
								text: data[key],
								value: key
							})
						})
					}
				});
			},
			onChange(e) {
				if (e.tabIndex == 0) {
					this.getAsyncCityList(e.value);
				} else if (e.tabIndex == 1) {
					this.getAsyncCountyList(e.selectedOptions[0].value, e.selectedOptions[1].value);
				}
			},
			// 全部选项选择完毕后，会触发 finish 事件
			onFinish(e, name) {
				let selectedOptions = e.selectedOptions;
				this[name].show = false;
				this[name].result = selectedOptions.map((option) => option.text).join('/');
			},
			onFinishCustomName(e, name) {
				let selectedOptions = e.selectedOptions;
				this[name].show = false;
				this[name].result = selectedOptions.map((option) => option.name).join('/');
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-cascader {}
</style>
