<template>
	<view class="demo-field">
		<demo-block :card="false" title="基础用法">
			<z-field v-model="value" label="文本" placeholder="请输入内容"></z-field>
		</demo-block>
		<demo-block :card="false" title="自定义类型">
			<!-- 输入任意文本 -->
			<z-field v-model="text" label="文本" />
			<!-- 输入手机号，调起手机号键盘 -->
			<z-field v-model="tel" type="tel" label="手机号" />
			<!-- 允许输入正整数，调起纯数字键盘 -->
			<z-field v-model="digit" type="digit" label="整数" />
			<!-- 允许输入数字，调起带符号的纯数字键盘 -->
			<z-field v-model="number" type="number" label="数字" />
			<!-- 输入密码 -->
			<z-field v-model="password" type="password" label="密码" />
		</demo-block>
		<demo-block :card="false" title="禁用输入框">
			<z-field label="文本" value="输入框只读" readonly />
			<z-field label="文本" value="输入框已禁用" disabled />
		</demo-block>
		<demo-block :card="false" title="显示图标">
			<z-field v-model="value1" label="文本" left-icon="happy" right-icon="warning" placeholder="显示图标" />
			<z-field v-model="value2" clearable label="文本" left-icon="happy" placeholder="显示清除图标" />
		</demo-block>
		<demo-block :card="false" title="错误提示">
			<z-field v-model="username" error required label="用户名" placeholder="请输入用户名" />
			<z-field v-model="phone" required label="手机号" placeholder="请输入手机号" error-message="手机号格式错误" />
		</demo-block>
		<demo-block :card="false" title="插入按钮">
			<z-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
				<template #button>
					<z-button size="small" type="primary">发送验证码</z-button>
				</template>
			</z-field>
		</demo-block>
		<demo-block :card="false" title="格式化输入内容">
			<z-field v-model="value1" label="文本" :formatter="formatter" placeholder="在输入时执行格式化" />
			<z-field v-model="value2" label="文本" :formatter="formatter" format-trigger="onBlur"
				placeholder="在失焦时执行格式化" />
		</demo-block>
		<demo-block :card="false" title="高度自适应">
			<z-field v-model="message" rows="1" autosize label="留言" type="textarea" placeholder="请输入留言" />
		</demo-block>
		<demo-block :card="false" title="显示字数统计">
			<z-field v-model="message" rows="2" autosize label="留言" type="textarea" :maxlength="50" placeholder="请输入留言"
				show-word-limit />
		</demo-block>
		<demo-block :card="false" title="输入框内容对齐">
			<z-field v-model="value" label="文本" placeholder="输入框内容右对齐" input-align="right" />
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
				value: "",

				tel: '',
				text: '',
				digit: '',
				number: '',
				password: '',

				value1: '',
				value2: '123',

				username: "",
				phone: '123',
				sms: "",
				message: ""
			}
		},
		methods: {
			formatter(value) {
				// 过滤输入的数字
				return value.replace(/\d/g, '');
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-field {}
</style>
