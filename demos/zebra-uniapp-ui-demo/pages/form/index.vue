<template>
	<view class="demo-form">
		<demo-block :card="false" title="基础用法">
			<z-form ref="form" @submit="onSubmit">
				<z-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
					:rules="[{ required: true, message: '请填写用户名' }]" />
				<z-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
					:rules="[{ required: true, message: '请填写密码' }]" />
				<view style="padding: 32rpx;">
					<z-button round block type="info" @click="submit('form')">提交</z-button>
				</view>
			</z-form>
		</demo-block>
		<demo-block :card="false" title="校验规则">
			<z-form ref="form1" validate-first @failed="onFailed">
				<!-- 通过 pattern 进行正则校验 -->
				<z-field v-model="value1" name="pattern" label="正则校验" placeholder="正则校验"
					:rules="[{ pattern, message: '请输入正确内容' }]" />
				<!-- 通过 validator 进行函数校验 -->
				<z-field ref="validatorForm" v-model="value2" name="validator" label="函数校验" placeholder="函数校验" />
				<!-- 通过 validator 进行异步函数校验 -->
				<z-field ref="asyncValidatorForm" v-model="value3" name="asyncValidator" label="异步校验"
					placeholder="异步函数校验" />
				<div style="padding: 32rpx;">
					<z-button round block type="info" @click="submit('form1')">提交</z-button>
				</div>
			</z-form>
		</demo-block>
		<demo-block :card="false" title="表单项类型">
			<z-form ref="form2" @submit="onSubmit">
				<z-field name="switch" label="开关">
					<template #input>
						<z-switch v-model="switchChecked" size="40rpx" />
					</template>
				</z-field>
				<z-field name="checkbox" label="复选框">
					<template #input>
						<z-checkbox v-model="checkbox" shape="square" />
					</template>
				</z-field>
				<z-field name="checkboxGroup" :rules="[{ required: true, message: '请至少选择一个' }]" label="复选框组">
					<template #input>
						<z-checkbox-group v-model="checkboxGroup" direction="horizontal">
							<z-checkbox name="1" shape="square">复选框 1</z-checkbox>
							<z-checkbox name="2" shape="square" customStyle="margin-left:20rpx;">复选框 2</z-checkbox>
						</z-checkbox-group>
					</template>
				</z-field>
				<z-field name="radio" label="单选框">
					<template #input>
						<z-radio-group v-model="radio" direction="horizontal">
							<z-radio name="1">单选框 1</z-radio>
							<z-radio name="2" customStyle="margin-left:20rpx;">单选框 2</z-radio>
						</z-radio-group>
					</template>
				</z-field>
				<z-field name="stepper" label="步进器">
					<template #input>
						<z-stepper v-model="stepper" />
					</template>
				</z-field>
				<z-field name="rate" label="评分">
					<template #input>
						<z-rate v-model="rate" />
					</template>
				</z-field>
				<z-field name="slider" label="滑块">
					<template #input>
						<view style="width: 100%;">
							<z-slider v-model="slider" />
						</view>
					</template>
				</z-field>
				<z-field name="uploader" label="文件上传">
					<template #input>
						<z-uploader v-model="uploader" />
					</template>
				</z-field>
				<z-field readonly clickable name="picker" :value="value.value" label="选择器" placeholder="点击选择城市"
					@click="showPicker = true" />
				<z-field readonly clickable name="datetimePicker" :value="value1" label="时间选择" placeholder="点击选择时间"
					@click="showPicker1 = true" />
				<z-field readonly clickable name="area" :value="valueArea" label="地区选择" placeholder="点击选择省市区"
					@click="showArea = true" />
				<view style="padding: 32rpx;">
					<z-button round block type="info" @click="submit('form2')">提交</z-button>
				</view>
			</z-form>
		</demo-block>
		<z-toast ref="zToast"></z-toast>
		<z-popup :show="showPicker" position="bottom">
			<z-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
		</z-popup>
		<z-popup :show="showPicker1" position="bottom">
			<z-datetime-picker type="time" @confirm="onConfirm1" @cancel="showPicker1 = false" />
		</z-popup>
		<z-popup :show="showArea" position="bottom">
			<z-area :area-list="areaList" @confirm="onConfirmArea" @cancel="showArea = false" />
		</z-popup>
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
				username: '',
				password: '',
				value1: '',
				value2: '',
				value3: '',
				pattern: "\\d{6}",
				switchChecked: false,
				checkbox: false,
				checkboxGroup: [],
				radio: '1',
				stepper: 1,
				rate: 3,
				slider: 50,
				uploader: [{
					url: 'https://cdn.zebraui.com/zebra-ui/images/demo-images/test1.jpg'
				}],
				value: '',
				columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				showPicker: false,
				value1: '',
				showPicker1: false,
				showArea: false,
				areaList: {},
				valueArea: ""
			}
		},
		mounted() {
			this.getAreaList();
		},
		onReady() {
			this.$refs.validatorForm.setRulesValidator([{
				validator: this.validator,
				message: '请输入正确内容'
			}]);
			this.$refs.asyncValidatorForm.setRulesValidator([{
				validator: this.asyncValidator,
				message: '请输入正确内容'
			}]);
		},
		methods: {
			getAreaList() {
				uni.request({
					url: 'https://mock.520ztc.com/mock/6191d2d7e7643873dbd08c48/getAreaList', //该地址为模拟接口，请勿在实际项目中使用
					method: 'POST',
					success: (res) => {
						this.areaList = res.data.data;
					}
				});
			},
			onConfirmArea({
				values
			}) {
				this.valueArea = values
					.filter((item) => !!item)
					.map((item) => item.name)
					.join('/');
				this.showArea = false;
			},
			onConfirm(event) {
				this.value = event;
				this.showPicker = false;
			},
			onConfirm1(time) {
				this.value1 = time;
				this.showPicker1 = false;
			},
			// 校验函数返回 true 表示校验通过，false 表示不通过
			validator(val) {
				return /1\d{10}/.test(val);
			},
			// 异步校验函数返回 Promise
			asyncValidator(val) {
				return new Promise((resolve) => {

					uni.$toast.loading('验证中...');

					setTimeout(() => {
						uni.$toast.clear();
						resolve(/\d{6}/.test(val));
					}, 1000);
				});
			},
			onFailed(errorInfo) {
				console.log('failed', errorInfo);
			},
			submit(name) {
				this.$refs[name].onSubmit();
			},
			onSubmit(values) {
				console.log('submit', values);
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-form {}
</style>
