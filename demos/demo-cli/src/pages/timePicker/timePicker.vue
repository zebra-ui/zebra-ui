<template>
  <DemoPage title="TimePicker">
    <view class="demo-time-picker">
      <demo-block title="基础用法">
        <z-time-picker v-model="currentTime" title="选择时间" />
      </demo-block>
      <demo-block title="选项类型">
        <z-time-picker
          v-model="currentTimeOption"
          title="选择时间"
          :columns-type="columnsType"
        />
      </demo-block>
      <demo-block title="时间范围">
        <z-time-picker
          v-model="currentTimeMax"
          title="选择时间"
          :min-hour="10"
          :max-hour="20"
          :min-minute="30"
          :max-minute="40"
        />
      </demo-block>
      <demo-block title="整体时间范围">
        <z-time-picker
          v-model="currentTimeMaxAll"
          title="选择时间"
          :columns-type="['hour', 'minute', 'second']"
          min-time="09:40:10"
          max-time="20:20:50"
        />
      </demo-block>
      <demo-block title="格式化选项">
        <z-time-picker
          v-model="currentTimeFormatter"
          title="选择时间"
          :formatter="formatter"
        />
      </demo-block>
      <demo-block title="过滤选项">
        <z-time-picker
          v-model="currentTimeFilter"
          title="选择时间"
          :filter="filter"
        />
      </demo-block>
      <demo-block title="高级用法">
        <z-time-picker title="选择时间" :filter="filterMore" />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const currentTime = ref(['12', '00'])
const currentTimeOption = ref(['12', '00', '05'])
const columnsType = ['hour', 'minute', 'second']
const currentTimeMax = ref(['12', '35'])
const currentTimeMaxAll = ref(['12', '00', '00'])
const currentTimeFormatter = ref(['12', '00'])
const formatter = (type: string, option: any) => {
  if (type === 'hour') {
    option.text += '时'
  }
  if (type === 'minute') {
    option.text += '分'
  }
  return option
}
const currentTimeFilter = ref(['12', '00'])
const filter = (type: string, options: any) => {
  if (type === 'minute') {
    return options.filter((option: any) => Number(option.value) % 10 === 0)
  }
  return options
}
const filterMore = (type: string, options: any, values: any) => {
  const hour = +values[0]

  if (type === 'hour') {
    return options.filter(
      (option: any) => Number(option.value) >= 8 && Number(option.value) <= 18
    )
  }

  if (type === 'minute') {
    options = options.filter((option: any) => Number(option.value) % 10 === 0)

    if (hour === 8) {
      return options.filter((option: any) => Number(option.value) >= 40)
    }

    if (hour === 18) {
      return options.filter((option: any) => Number(option.value) <= 20)
    }
  }

  return options
}
</script>
