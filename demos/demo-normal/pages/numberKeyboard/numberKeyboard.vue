<template>
  <DemoPage title="NumberKeyboard">
    <view class="demo-number-keyboard">
      <demo-block title="基础用法">
        <z-cell title="弹出默认键盘" is-link @click="show = true" />
        <z-number-keyboard
          :show="show"
          @blur="show = false"
          @input="onInput"
          @delete="onDelete"
        />
      </demo-block>
      <demo-block title="双向绑定">
        <z-field
          v-model="valueModel"
          label="双向绑定"
          readonly
          clickable
          @click="showValue = true"
        />
        <z-number-keyboard
          v-model="valueModel"
          :show="showValue"
          :maxlength="6"
          @blur="showValue = false"
        />
      </demo-block>
      <demo-block title="带右侧栏的键盘">
        <z-cell title="带右侧栏的键盘" is-link @click="showRight = true" />
        <z-number-keyboard
          :show="showRight"
          theme="custom"
          extra-key="."
          close-button-text="完成"
          @blur="showRight = false"
          @input="onInput"
          @delete="onDelete"
        />
      </demo-block>
      <demo-block title="身份证号键盘">
        <z-cell title="身份证号键盘" is-link @click="showCard = true" />
        <z-number-keyboard
          :show="showCard"
          extra-key="X"
          close-button-text="完成"
          @blur="showCard = false"
          @input="onInput"
          @delete="onDelete"
        />
      </demo-block>
      <demo-block title="键盘标题">
        <z-cell title="键盘标题" is-link @click="showTitle = true" />
        <z-number-keyboard
          :show="showTitle"
          title="键盘标题"
          extra-key="."
          close-button-text="完成"
          @blur="showTitle = false"
          @input="onInput"
          @delete="onDelete"
        />
      </demo-block>
      <demo-block title="配置多个按键">
        <z-cell title="配置多个按键" is-link @click="showMore = true" />
        <z-number-keyboard
          :show="showMore"
          theme="custom"
          :extra-key="['00', '.']"
          close-button-text="完成"
          @blur="showMore = false"
          @input="onInput"
          @delete="onDelete"
        />
      </demo-block>
      <demo-block title="随机数字键盘">
        <z-cell title="随机数字键盘" is-link @click="showNumber = true" />
        <z-number-keyboard
          :show="showNumber"
          random-key-order
          @blur="showNumber = false"
          @input="onInput"
          @delete="onDelete"
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const show = ref(false)
const showRight = ref(false)
const showCard = ref(false)
const showTitle = ref(false)
const showMore = ref(false)
const showNumber = ref(false)
const showValue = ref(false)
const valueModel = ref('')
const onInput = (value: string) => toast.showToast(value)
const onDelete = () => toast.showToast('删除')
</script>
