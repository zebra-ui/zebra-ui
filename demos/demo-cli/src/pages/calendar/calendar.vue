<template>
  <DemoPage title="Calendar">
    <view class="demo-calendar">
      <demo-block title="基础用法">
        <z-cell
          is-link
          title="选择单个日期"
          :value="dateOne"
          @click="showSelectOne = true"
        />
        <z-calendar v-model:show="showSelectOne" @confirm="onConfirmOne" />

        <z-cell
          is-link
          title="选择多个日期"
          :value="dateMore"
          @click="showSelectMore = true"
        />
        <z-calendar
          v-model:show="showSelectMore"
          type="multiple"
          @confirm="onConfirmMore"
        />
        <z-cell
          is-link
          title="选择日期区间"
          :value="dateRange"
          @click="showSelectRange = true"
        />
        <z-calendar
          v-model:show="showSelectRange"
          type="range"
          @confirm="onConfirmRange"
        />
      </demo-block>

      <demo-block title="快捷选择">
        <z-cell
          is-link
          title="选择单个日期"
          :value="dateQuick1"
          @click="showQuick1 = true"
        />
        <z-calendar
          v-model:show="showQuick1"
          @confirm="onConfirmQuick1"
          :show-confirm="false"
        />

        <z-cell
          is-link
          title="选择日期区间"
          :value="dateQuick2"
          @click="showQuick2 = true"
        />
        <z-calendar
          v-model:show="showQuick2"
          @confirm="onConfirmQuick2"
          type="range"
          :show-confirm="false"
        />
      </demo-block>

      <demo-block title="自定义日历">
        <z-cell
          is-link
          title="自定义颜色"
          :value="dateColor"
          @click="showColor = true"
        />
        <z-calendar
          v-model:show="showColor"
          type="range"
          color="#ee0a24"
          @confirm="onConfirmColor"
        />

        <z-cell
          is-link
          title="自定义日期范围"
          :value="dateCustomRange"
          @click="showCustomRange = true"
        />
        <z-calendar
          v-model:show="showCustomRange"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirmCustomRange"
        />

        <z-cell
          is-link
          title="自定义按钮文字"
          :value="dateCustomText"
          @click="showCustomText = true"
        />
        <z-calendar
          v-model:show="showCustomText"
          type="range"
          confirm-text="完成"
          confirm-disabled-text="请选择结束时间"
          @confirm="onConfirmCustomText"
        />

        <z-cell
          is-link
          title="自定义日期文案"
          :value="dateCustomDayText"
          @click="showCustomDayText = true"
        />
        <z-calendar
          v-model:show="showCustomDayText"
          type="range"
          :formatter="formatter"
          @confirm="onConfirmCustomDayText"
        />

        <z-cell
          is-link
          title="自定义弹出位置"
          :value="dateCustomPosition"
          @click="showCustomPosition = true"
        />
        <z-calendar
          v-model:show="showCustomPosition"
          :round="false"
          position="right"
          @confirm="onConfirmCustomPosition"
        />

        <z-cell
          is-link
          title="日期区间最大范围"
          :value="dateMaxRange"
          @click="showMaxRange = true"
        />
        <z-calendar
          v-model:show="showMaxRange"
          type="range"
          :max-range="3"
          @confirm="onConfirmMaxRange"
        />

        <z-cell
          is-link
          title="自定义周起始日"
          :value="dateFirstDayOfWeek"
          @click="showFirstDayOfWeek = true"
        />
        <z-calendar
          v-model:show="showFirstDayOfWeek"
          first-day-of-week="1"
          @confirm="onConfirmFirstDayOfWeek"
        />
      </demo-block>

      <demo-block title="平铺展示">
        <z-calendar
          title="日历"
          :poppable="false"
          :show-confirm="false"
          :custom-style="{ height: '500px' }"
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const dateOne = ref('')
const showSelectOne = ref(false)
const dateMore = ref('')
const showSelectMore = ref(false)
const dateRange = ref('')
const showSelectRange = ref(false)

const dateQuick1 = ref('')
const showQuick1 = ref(false)
const onConfirmQuick1 = (value: any) => {
  showQuick1.value = false
  dateQuick1.value = formatDate(value)
}

const dateQuick2 = ref('')
const showQuick2 = ref(false)
const onConfirmQuick2 = (values: any) => {
  const [start, end] = values
  showQuick2.value = false
  dateQuick2.value = `${formatDate(start)} - ${formatDate(end)}`
}

const dateColor = ref('')
const showColor = ref(false)
const onConfirmColor = (values: any) => {
  const [start, end] = values
  showColor.value = false
  dateColor.value = `${formatDate(start)} - ${formatDate(end)}`
}

const formatDate = (date: any) => `${date.getMonth() + 1}/${date.getDate()}`
const onConfirmOne = (value: any) => {
  showSelectOne.value = false
  dateOne.value = formatDate(value)
}
const onConfirmMore = (dates: any) => {
  showSelectMore.value = false
  dateMore.value = `选择了 ${dates.length} 个日期`
}
const onConfirmRange = (values: any) => {
  const [start, end] = values
  showSelectRange.value = false
  dateRange.value = `${formatDate(start)} - ${formatDate(end)}`
}

const minDate = ref(new Date(2010, 0, 1))
const maxDate = ref(new Date(2010, 0, 31))
const dateCustomRange = ref('')
const showCustomRange = ref(false)
const onConfirmCustomRange = (value: any) => {
  showCustomRange.value = false
  dateCustomRange.value = formatDate(value)
}

const dateCustomText = ref('')
const showCustomText = ref(false)
const onConfirmCustomText = (values: any) => {
  const [start, end] = values
  showCustomText.value = false
  dateCustomText.value = `${formatDate(start)} - ${formatDate(end)}`
}

const formatter = (day: any) => {
  const month = day.date.getMonth() + 1
  const date = day.date.getDate()

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '劳动节'
    } else if (date === 4) {
      day.topInfo = '青年节'
    } else if (date === 11) {
      day.text = '今天'
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入住'
  } else if (day.type === 'end') {
    day.bottomInfo = '离店'
  }

  return day
}
const dateCustomDayText = ref('')
const showCustomDayText = ref(false)
const onConfirmCustomDayText = (values: any) => {
  const [start, end] = values
  showCustomDayText.value = false
  dateCustomDayText.value = `${formatDate(start)} - ${formatDate(end)}`
}

const dateCustomPosition = ref('')
const showCustomPosition = ref(false)
const onConfirmCustomPosition = (value: any) => {
  showCustomPosition.value = false
  dateCustomPosition.value = formatDate(value)
}

const dateMaxRange = ref('')
const showMaxRange = ref(false)
const onConfirmMaxRange = (values: any) => {
  const [start, end] = values
  showMaxRange.value = false
  dateMaxRange.value = `${formatDate(start)} - ${formatDate(end)}`
}

const dateFirstDayOfWeek = ref('')
const showFirstDayOfWeek = ref(false)
const onConfirmFirstDayOfWeek = (value: any) => {
  showFirstDayOfWeek.value = false
  dateFirstDayOfWeek.value = formatDate(value)
}
</script>
