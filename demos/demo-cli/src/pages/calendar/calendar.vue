<template>
  <DemoPage title="Calendar">
    <view class="demo-calendar">
      <demo-block title="基础用法">
        <z-cell
          is-link
          title="选择单个日期"
          :value="formatFullDate(state.date.selectSingle)"
          @click="show('single', 'selectSingle')"
        />

        <z-cell
          is-link
          title="选择多个日期"
          :value="formatMultiple(state.date.selectMultiple)"
          @click="show('multiple', 'selectMultiple')"
        />

        <z-cell
          is-link
          title="选择日期区间"
          :value="formatRange(state.date.selectRange)"
          @click="show('range', 'selectRange')"
        />
      </demo-block>

      <demo-block title="快捷选择">
        <z-cell
          is-link
          title="选择单个日期"
          :value="formatFullDate(state.date.quickSelect1)"
          @click="show('single', 'quickSelect1')"
        />

        <z-cell
          is-link
          title="选择日期区间"
          :value="formatRange(state.date.quickSelect2)"
          @click="show('range', 'quickSelect2')"
        />
      </demo-block>

      <demo-block title="自定义日历">
        <z-cell
          is-link
          title="自定义颜色"
          :value="formatRange(state.date.customColor)"
          @click="show('range', 'customColor')"
        />

        <z-cell
          is-link
          title="自定义日期范围"
          :value="formatFullDate(state.date.customRange)"
          @click="show('single', 'customRange')"
        />

        <z-cell
          is-link
          title="自定义按钮文字"
          :value="formatRange(state.date.customConfirm)"
          @click="show('range', 'customConfirm')"
        />

        <z-cell
          is-link
          title="自定义日期文案"
          :value="formatRange(state.date.customDayText)"
          @click="show('range', 'customDayText')"
        />

        <z-cell
          is-link
          title="自定义弹出位置"
          :value="formatFullDate(state.date.customPosition)"
          @click="show('single', 'customPosition')"
        />

        <z-cell
          is-link
          title="日期区间最大范围"
          :value="formatRange(state.date.maxRange)"
          @click="show('range', 'maxRange')"
        />

        <z-cell
          is-link
          title="自定义周起始日"
          @click="show('single', 'firstDayOfWeek')"
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

      <z-calendar
        v-model:show="state.showCalendar"
        :type="state.type"
        :color="state.color"
        :round="state.round"
        :position="state.position"
        :min-date="state.minDate"
        :max-date="state.maxDate"
        :max-range="state.maxRange"
        :formatter="state.formatter"
        :show-confirm="state.showConfirm"
        :confirm-text="state.confirmText"
        :first-day-of-week="state.firstDayOfWeek"
        :confirm-disabled-text="state.confirmDisabledText"
        @confirm="onConfirm"
      />
    </view>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
const state = reactive<Record<string, any>>({
  date: {
    maxRange: [],
    selectSingle: null,
    selectRange: [],
    selectMultiple: [],
    quickSelect1: null,
    quickSelect2: [],
    customColor: [],
    customConfirm: [],
    customRange: null,
    customDayText: [],
    customPosition: null
  },
  type: 'single',
  round: true,
  color: undefined,
  minDate: undefined,
  maxDate: undefined,
  maxRange: undefined,
  position: undefined,
  formatter: undefined,
  showConfirm: false,
  showCalendar: false,
  confirmText: undefined,
  confirmDisabledText: undefined,
  firstDayOfWeek: 0
})

const resetSettings = () => {
  state.round = true
  state.color = undefined
  state.minDate = undefined
  state.maxDate = undefined
  state.maxRange = undefined
  state.position = undefined
  state.formatter = undefined
  state.showConfirm = true
  state.confirmText = undefined
  state.confirmDisabledText = undefined
  state.firstDayOfWeek = 0
}

const dayFormatter = (day: any) => {
  if (!day.date) {
    return day
  }

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
    day.bottomInfo = '入店'
  } else if (day.type === 'end') {
    day.bottomInfo = '离店'
  }

  return day
}

const show = (type: string, id: string) => {
  resetSettings()
  state.id = id
  state.type = type
  state.showCalendar = true

  switch (id) {
    case 'quickSelect1':
    case 'quickSelect2':
      state.showConfirm = false
      break
    case 'customColor':
      state.color = '#ee0a24'
      break
    case 'customConfirm':
      state.confirmText = '完成'
      state.confirmDisabledText = '请选择结束时间'
      break
    case 'customRange':
      state.minDate = new Date(2010, 0, 1)
      state.maxDate = new Date(2010, 0, 31)
      break
    case 'customDayText':
      state.minDate = new Date(2010, 4, 1)
      state.maxDate = new Date(2010, 4, 31)
      state.formatter = dayFormatter
      break
    case 'customPosition':
      state.round = false
      state.position = 'right'
      break
    case 'maxRange':
      state.maxRange = 3
      break
    case 'firstDayOfWeek':
      state.firstDayOfWeek = 1
      break
  }
}

const formatDate = (date: Date) => {
  if (date) {
    return `${date.getMonth() + 1}/${date.getDate()}`
  }
}

const formatFullDate = (date: Date) => {
  if (date) {
    return `${date.getFullYear()}/${formatDate(date)}`
  }
}

const formatMultiple = (dates: Date[]) => {
  if (dates.length) {
    return `选择了 ${dates.length} 个日期`
  }
}

const formatRange = (dateRange: Date[]) => {
  if (dateRange.length) {
    const [start, end] = dateRange
    return `${formatDate(start)} - ${formatDate(end)}`
  }
}

const onConfirm = (date: Date | Date[]) => {
  state.showCalendar = false
  state.date[state.id] = date
}
</script>
