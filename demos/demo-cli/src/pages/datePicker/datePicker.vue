<template>
  <DemoPage title="DatePicker">
    <view class="demo-date-picker">
      <demo-block title="基础用法">
        <z-date-picker
          v-model="currentDate"
          title="选择日期"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </demo-block>
      <demo-block title="选项类型">
        <z-date-picker
          v-model="currentDateOption"
          title="选择年月"
          :min-date="minDate"
          :max-date="maxDate"
          :columns-type="columnsType"
        />
      </demo-block>
      <demo-block title="格式化选项">
        <z-date-picker
          v-model="currentDateFormatter"
          title="选择年月"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          :columns-type="columnsType"
        />
      </demo-block>
      <demo-block title="过滤选项">
        <z-date-picker
          v-model="currentDateFilter"
          title="选择年月"
          :filter="filter"
          :min-date="minDate"
          :max-date="maxDate"
          :columns-type="columnsType"
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const currentDate = ref(['2021', '01', '01'])
const currentDateOption = ref(['2021', '01'])
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
const columnsType = ['year', 'month']
const currentDateFormatter = ref(['2021', '01'])
const formatter = (type: any, option: any) => {
  if (type === 'year') {
    option.text += '年'
  }
  if (type === 'month') {
    option.text += '月'
  }
  return option
}
const currentDateFilter = ref(['2021', '01'])
const filter = (type: string, options: any) => {
  if (type === 'month') {
    return options.filter((option: any) => Number(option.value) % 6 === 0)
  }
  return options
}
</script>
