<template>
  <DemoPage title="PasswordInput">
    <view class="demo-password-input">
      <demo-block title="基础用法">
        <z-password-input
          :value="value"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
        <z-number-keyboard
          v-model="value"
          :show="showKeyboard"
          @blur="showKeyboard = false"
        />
      </demo-block>
      <demo-block title="自定义长度">
        <z-password-input
          :value="valueLenth"
          :length="4"
          :focused="showKeyboardLength"
          @focus="showKeyboardLength = true"
        />
        <z-number-keyboard
          v-model="valueLenth"
          :show="showKeyboardLength"
          @blur="showKeyboardLength = false"
        />
      </demo-block>
      <demo-block title="格子间距">
        <z-password-input
          :value="valueGutter"
          :gutter="10"
          :focused="showKeyboardGutter"
          @focus="showKeyboardGutter = true"
        />
        <z-number-keyboard
          v-model="valueGutter"
          :show="showKeyboardGutter"
          @blur="showKeyboardGutter = false"
        />
      </demo-block>
      <demo-block title="明文展示">
        <z-password-input
          :value="valueMask"
          :mask="false"
          :focused="showKeyboardMask"
          @focus="showKeyboardMask = true"
        />
        <z-number-keyboard
          v-model="valueMask"
          :show="showKeyboardMask"
          @blur="showKeyboardMask = false"
        />
      </demo-block>
      <demo-block title="提示信息">
        <z-password-input
          :value="valueError"
          info="密码为 6 位数字"
          :error-info="errorInfo"
          :focused="showKeyboardError"
          @focus="showKeyboardError = true"
        />
        <z-number-keyboard
          v-model="valueError"
          :show="showKeyboardError"
          @blur="showKeyboardError = false"
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
const value = ref('123')
const valueLenth = ref('123')
const valueGutter = ref('123')
const valueMask = ref('123')
const valueError = ref('123')
const showKeyboard = ref(false)
const showKeyboardLength = ref(false)
const showKeyboardGutter = ref(false)
const showKeyboardMask = ref(false)
const showKeyboardError = ref(false)
const errorInfo = ref('')
watch(valueError, (newVal) => {
  if (newVal.length === 6 && newVal !== '123456') {
    errorInfo.value = '密码错误'
  } else {
    errorInfo.value = ''
  }
})
</script>
