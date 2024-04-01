<template>
  <DemoPage title="Form">
    <view class="demo-form">
      <demo-block title="基础用法">
        <z-form ref="formBasic" @submit="onSubmitBasic">
          <z-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <z-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </z-form>
        <view class="button">
          <z-button block type="primary" @click="submitFormBasic">
            提交
          </z-button>
        </view>
      </demo-block>
      <demo-block title="校验规则">
        <z-form ref="formRule" @failed="onFailed">
          <z-field
            v-model="value1"
            label="正则校验"
            name="pattern"
            placeholder="输入六位数字通过校验"
            :rules="[{ pattern, message: '请输入正确内容' }]"
          />
          <z-field
            v-model="value2"
            label="函数校验"
            name="validator"
            placeholder="输入1开头的11位数字通过校验"
            :rules="[{ validator, message: '请输入正确内容' }]"
          />
          <z-field
            v-model="value3"
            label="错误提示"
            name="validatorMessage"
            placeholder="自定义错误提示"
            :rules="[{ validator: validatorMessage }]"
          />
          <z-field
            v-model="value4"
            label="异步函数校验"
            name="asyncValidator"
            placeholder="输入1234通过校验"
            :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
          />
        </z-form>
        <view class="button">
          <z-button block type="primary" @click="submitFormRule">
            提交
          </z-button>
        </view>
      </demo-block>
      <demo-block title="表单项类型">
        <z-form ref="formItem" @submit="onSubmitItem">
          <z-field name="switch" label="开关">
            <template #input>
              <z-switch v-model="switchChecked" />
            </template>
          </z-field>

          <z-field name="checkbox" label="复选框">
            <template #input>
              <z-checkbox v-model="checkbox" shape="square" />
            </template>
          </z-field>

          <z-field name="checkboxGroup" label="复选框组">
            <template #input>
              <z-checkbox-group v-model="checkboxGroup" direction="horizontal">
                <z-checkbox name="1" shape="square"> 选项1 </z-checkbox>
                <z-checkbox name="2" shape="square"> 选项2 </z-checkbox>
              </z-checkbox-group>
            </template>
          </z-field>

          <z-field name="radio" label="单选框">
            <template #input>
              <z-radio-group v-model="radio" direction="horizontal">
                <z-radio name="1">选项1</z-radio>
                <z-radio name="2">选项2</z-radio>
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
              <z-slider v-model="slider" />
            </template>
          </z-field>

          <z-field name="uploader" label="文件上传">
            <template #input>
              <z-uploader v-model="uploader" max-count="2" />
            </template>
          </z-field>
          <z-field
            v-model="resultPicker"
            is-link
            readonly
            name="picker"
            label="选择器"
            placeholder="请选择城市"
            @click="showPicker = true"
          />
          <z-field
            v-model="resultDatePicker"
            is-link
            readonly
            name="datePicker"
            label="时间选择"
            placeholder="点击选择事件"
            @click="showPickerDate = true"
          />
          <z-field
            v-model="areaCode"
            is-link
            readonly
            name="area"
            label="地区选择"
            placeholder="点击选择省市区"
            @click="showArea = true"
          />
          <z-field
            v-model="resultCalendar"
            is-link
            readonly
            name="calendar"
            label="日历"
            placeholder="点击选择日期"
            @click="showCalendar = true"
          />
          <z-calendar
            v-model:show="showCalendar"
            round
            teleport="body"
            @confirm="onConfirmCalendar"
          />
        </z-form>
        <view class="button">
          <z-button block type="primary" @click="submitFormItem">
            提交
          </z-button>
        </view>
      </demo-block>
    </view>
    <z-popup v-model:show="showPicker" round position="bottom" teleport="body">
      <z-picker
        :columns="columnsPicker"
        @confirm="onConfirmPicker"
        @cancel="onCancelPicker"
      />
    </z-popup>
    <z-popup
      v-model:show="showPickerDate"
      round
      position="bottom"
      teleport="body"
    >
      <z-date-picker
        @confirm="onConfirmDatePicker"
        @cancel="onCancelDatePicker"
      />
    </z-popup>
    <z-popup v-model:show="showArea" round position="bottom" teleport="body">
      <z-area
        :area-list="areaList"
        @confirm="onConfirmArea"
        @cancel="onCancelArea"
      />
    </z-popup>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { areaList } from '../../common/js/area'
import { showLoadingToast, closeToast } from '@zebra-ui/uniapp'
const formBasic = ref()
const formRule = ref()
const formItem = ref()
const username = ref('')
const password = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('abc')
const value4 = ref('')
const areaCode = ref('')
const resultCalendar = ref('')
const rate = ref(3)
const radio = ref('1')
const slider = ref(50)
const stepper = ref(1)
const uploader = ref([
  { url: 'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg' }
])
const checkbox = ref(false)
const checkboxGroup = ref([])
const switchChecked = ref(false)
const showArea = ref(false)
const showCalendar = ref(false)
const pattern = /\d{6}/
const onSubmitBasic = (values: any) => {
  console.log('submit', values)
}
const onSubmitItem = (values: any) => {
  console.log('submit', values)
}
const submitFormBasic = () => {
  formBasic.value.submit()
}
const submitFormRule = () => {
  formRule.value.submit()
}
const submitFormItem = () => {
  formItem.value.submit()
}
const validator = (val: any) => /1\d{10}/.test(val)
const validatorMessage = (val: any) => `${val} 不合法，请重新输入`
const asyncValidator = (val: any) =>
  new Promise((resolve) => {
    showLoadingToast('验证中...')

    setTimeout(() => {
      closeToast()
      resolve(val === '1234')
    }, 1000)
  })
const onFailed = (errorInfo: any) => {
  console.log('failed', errorInfo)
}

const resultPicker = ref('')
const resultDatePicker = ref('')
const showPicker = ref(false)
const showPickerDate = ref(false)
const columnsPicker = ref([
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
])
const onConfirmPicker = ({ selectedOptions }: any) => {
  resultPicker.value = selectedOptions[0]?.text || ''
  showPicker.value = false
}
const onCancelPicker = () => {
  showPicker.value = false
}
const onConfirmDatePicker = ({ selectedValues }: any) => {
  resultDatePicker.value = selectedValues.join('/')
  showPickerDate.value = false
}

const onCancelDatePicker = () => {
  showPickerDate.value = false
}
const onConfirmArea = ({ selectedOptions }: any) => {
  areaCode.value = selectedOptions.map((item: any) => item!.text).join('/')
  showArea.value = false
}

const onCancelArea = () => {
  showArea.value = false
}
const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`
const onConfirmCalendar = (date: Date) => {
  resultCalendar.value = formatDate(date)
  showCalendar.value = false
}
</script>
<style lang="scss" scoped>
.demo-form {
  .button {
    margin-top: 20rpx;
  }
}
</style>
