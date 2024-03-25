<template>
	<view class="demo-number-board">
		<demo-block :card="false" title="基础用法">
			<z-cell title="弹出默认键盘" is-link @click="keyboard = 'default'">
			</z-cell>
		</demo-block>
		<demo-block :card="false" title="右侧栏">
			<z-cell title="弹出带右侧栏的键盘" is-link @click="keyboard = 'custom'">
			</z-cell>
		</demo-block>
		<demo-block :card="false" title="身份证">
			<z-cell title="弹出身份证号键盘" is-link @click="keyboard = 'extraKey'">
			</z-cell>
		</demo-block>
		<demo-block :card="false" title="标题">
			<z-cell title="弹出带标题的键盘" is-link @click="keyboard = 'title'">
			</z-cell>
		</demo-block>
		<demo-block :card="false" title="多个按键">
			<z-cell title="弹出配置按键的键盘" is-link @click="keyboard = 'multiExtraKey'">
			</z-cell>
		</demo-block>
		<demo-block :card="false" title="随机数字">
			<z-cell title="弹出随机数字的键盘" is-link @click="keyboard = 'randomKeyOrder'">
			</z-cell>
		</demo-block>
		<demo-block :card="false" title="输入框">
			<z-field readonly clickable :value="value" label="搭配输入框" placeholder="点此输入"
				@click="keyboard = 'bindValue'" />
		</demo-block>
		<z-number-keyboard :show="keyboard == 'default'" @close="keyboard = ''" @blur="keyboard = ''" @input="onInput"
			@delete="onDelete">
		</z-number-keyboard>
		<z-number-keyboard :show="keyboard == 'custom'" theme="custom" extra-key="." close-button-text="完成"
			@blur="keyboard = ''" @input="onInput" @delete="onDelete" />
		<z-number-keyboard :show="keyboard == 'extraKey'" extra-key="X" close-button-text="完成" @blur="keyboard = ''"
			@input="onInput" @delete="onDelete" />
		<z-number-keyboard :show="keyboard == 'title'" close-button-text="完成" title="标题" extra-key="."
			@blur="keyboard = ''" @input="onInput" @delete="onDelete" />
		<z-number-keyboard :show="keyboard === 'multiExtraKey'" close-button-text="关闭" theme="custom"
			:extra-key="['00', '.']" @blur="keyboard = ''" @input="onInput" @delete="onDelete" />
		<z-number-keyboard :show="keyboard === 'randomKeyOrder'" random-key-order @blur="keyboard = ''" @input="onInput"
			@delete="onDelete" />
		<z-number-keyboard :show="keyboard === 'bindValue'" :maxlength="6" @blur="keyboard = ''" @input="onInput" />
		<z-toast ref="zToast">
		</z-toast>
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
				value: '',
				keyboard: ""
			}
		},
		methods: {
			showKey() {
				this.show = true;
			},
			onInput(value) {
				this.$toast(value);
				this.value += value;
			},
			onDelete() {
				this.$toast('删除');
			},
		}
	}
</script>

<style>

</style>
