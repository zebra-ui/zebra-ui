<template>
  <DemoPage title="Field">
    <view class="demo-field">
      <demo-block title="基础用法">
        <z-field v-model="value" label="文本" placeholder="请输入文本" />
      </demo-block>
      <demo-block title="自定义类型">
        <z-field v-model="text" label="文本" placeholder="请输入文本" />
        <z-field
          v-model="tel"
          type="tel"
          label="手机号"
          placeholder="请输入手机号"
        />
        <z-field
          v-model="digit"
          type="digit"
          label="整数"
          placeholder="请输入整数"
        />
        <z-field
          v-model="number"
          type="number"
          label="数字"
          placeholder="请输入数字"
        />
        <z-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
      </demo-block>
      <demo-block title="禁用输入框">
        <z-field label="文本" model-value="输入框只读" readonly />
        <z-field label="文本" model-value="输入框已禁用" disabled />
      </demo-block>
      <demo-block title="显示图标">
        <z-field
          v-model="value1"
          label="文本"
          left-icon="detail"
          right-icon="info-circle"
          placeholder="显示图标"
        />
        <z-field
          v-model="value2"
          clearable
          label="文本"
          left-icon="safetycertificate"
          placeholder="显示清除图标"
        />
      </demo-block>
      <demo-block title="必填星号">
        <z-field
          v-model="username"
          required
          label="用户名"
          placeholder="请输入用户名"
        />
        <z-field
          v-model="phone"
          required
          label="手机号"
          placeholder="请输入手机号"
        />
      </demo-block>
      <demo-block title="错误提示">
        <z-field
          v-model="username"
          error
          label="用户名"
          placeholder="请输入用户名"
        />
        <z-field
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
          error-message="手机号格式错误"
        />
      </demo-block>
      <demo-block title="插入按钮">
        <z-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入验证码"
        >
          <template #button>
            <z-button size="mini" type="primary">发送验证码</z-button>
          </template>
        </z-field>
      </demo-block>
      <demo-block title="格式化输入内容">
        <z-field
          v-model="value3"
          label="文本"
          :formatter="formatter"
          placeholder="在输入时执行格式化"
        />
        <z-field
          v-model="value4"
          label="文本"
          :formatter="formatter"
          format-trigger="onBlur"
          placeholder="在失焦时执行格式化"
        />
      </demo-block>
      <demo-block title="高度自适应">
        <z-field
          v-model="message"
          rows="1"
          autosize
          label="留言"
          type="textarea"
          placeholder="请输入留言"
        />
      </demo-block>
      <demo-block title="显示字数统计">
        <z-field
          v-model="message"
          rows="2"
          autosize
          :maxlength="50"
          label="留言"
          type="textarea"
          placeholder="请输入留言"
          show-word-limit
        />
      </demo-block>
      <demo-block title="输入框内容对齐">
        <z-field
          v-model="value5"
          label="文本"
          placeholder="请输入文本"
          input-align="right"
        />
      </demo-block>
      <demo-block title="输入框文本位置">
        <z-field
          v-model="value6"
          label="文本"
          placeholder="顶部对齐"
          label-align="top"
        />
        <z-field
          v-model="value7"
          label="文本"
          placeholder="左对齐"
          label-align="left"
        />
        <z-field
          v-model="value8"
          label="文本"
          placeholder="居中对齐"
          label-align="center"
        />
        <z-field
          v-model="value9"
          label="文本"
          placeholder="右对齐"
          label-align="right"
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('')
const tel = ref('')
const text = ref('')
const digit = ref('')
const number = ref('')
const password = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const username = ref('')
const phone = ref('')
const sms = ref('')
const message = ref('')
const formatter = (value: string) => value.replace(/\d/g, '')
</script>
