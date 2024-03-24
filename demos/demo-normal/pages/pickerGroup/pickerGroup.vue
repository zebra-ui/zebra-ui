<template>
  <DemoPage title="PickerGroup">
    <view class="demo-picker-group">
      <demo-block title="选择日期时间">
        <z-picker-group
          title="预约日期"
          :tabs="['选择日期', '选择时间']"
          @confirm="onConfirm"
          @cancel="onCancel"
        >
          <z-tabs
            v-model:active="activeTab"
            shrink
            animated
            :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
          >
            <z-tab title="选择日期">
              <z-date-picker
                v-model="currentDate"
                :min-date="minDate"
                :max-date="maxDate"
              />
            </z-tab>
            <z-tab title="选择时间">
              <z-time-picker v-model="currentTime" />
            </z-tab>
          </z-tabs>
        </z-picker-group>
      </demo-block>
      <demo-block title="下一步按钮">
        <z-picker-group
          v-model:activeTab="activeTabNext"
          title="预约日期"
          :count="4"
          next-step-text="下一步"
          @confirm="onConfirm"
          @cancel="onCancel"
        >
          <z-tabs
            v-model:active="activeTabNext"
            shrink
            animated
            :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
          >
            <z-tab title="选择日期">
              <z-date-picker
                v-model="currentDate"
                :min-date="minDate"
                :max-date="maxDate"
              />
            </z-tab>
            <z-tab title="选择时间">
              <z-time-picker v-model="currentTime" />
            </z-tab>
            <z-tab title="再次选择日期">
              <z-date-picker
                v-model="currentDate"
                :min-date="minDate"
                :max-date="maxDate"
              />
            </z-tab>
            <z-tab title="再次选择时间">
              <z-time-picker v-model="currentTime" />
            </z-tab>
          </z-tabs>
        </z-picker-group>
      </demo-block>
      <demo-block title="选择日期范围">
        <z-picker-group
          title="预约日期"
          :count="2"
          @confirm="onConfirmDateMax"
          @cancel="onCancelDateMax"
        >
          <z-tabs
            v-model:active="activeTab"
            shrink
            animated
            :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
          >
            <z-tab title="开始日期">
              <z-date-picker
                v-model="startDate"
                :min-date="minDate"
                :max-date="maxDate"
              />
            </z-tab>
            <z-tab title="结束日期">
              <z-date-picker
                v-model="endDate"
                :min-date="minDate"
                :max-date="maxDate"
              />
            </z-tab>
          </z-tabs>
        </z-picker-group>
      </demo-block>
      <demo-block title="选择时间范围">
        <z-picker-group
          title="预约日期"
          :count="2"
          @confirm="onConfirmTimeMax"
          @cancel="onCancelTimeMax"
        >
          <z-tabs
            v-model:active="activeTab"
            shrink
            animated
            :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
          >
            <z-tab title="开始日期">
              <z-time-picker v-model="startTime" />
            </z-tab>
            <z-tab title="结束日期">
              <z-time-picker v-model="endTime" />
            </z-tab>
          </z-tabs>
        </z-picker-group>
      </demo-block>
      <demo-block title="受控模式">
        <view class="picker-button">
          <z-button type="primary" @click="setActiveTab">
            点击切换 tab，当前为 {{ activeTab }}
          </z-button>
        </view>
        <z-picker-group
          title="预约日期"
          :count="2"
          @confirm="onConfirmTimeMax"
          @cancel="onCancelTimeMax"
        >
          <z-tabs
            v-model:active="activeTab"
            shrink
            animated
            :custom-style="{ 'margin-top': 'var(--z-padding-base)' }"
          >
            <z-tab title="开始日期">
              <z-time-picker v-model="startTime" />
            </z-tab>
            <z-tab title="结束日期">
              <z-time-picker v-model="endTime" />
            </z-tab>
          </z-tabs>
        </z-picker-group>
      </demo-block>
    </view>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showToast } from '../../uni_modules/zebra-ui/components/z-toast/z-toast'
const currentDate = ref(['2022', '06', '01'])
const currentTime = ref(['12', '00'])
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)
const activeTab = ref(0)
const activeTabNext = ref(0)
const onConfirm = () => {
  showToast(`${currentDate.value.join('/')} ${currentTime.value.join(':')}`)
}

const onCancel = () => {
  showToast('cancel')
}

const startDate = ref(['2022', '06', '01'])
const endDate = ref(['2023', '06', '01'])

const onConfirmDateMax = () => {
  showToast(`${startDate.value.join('/')} - ${endDate.value.join('/')}`)
}

const onCancelDateMax = () => {
  showToast('cancel')
}

const startTime = ref(['12', '00'])
const endTime = ref(['12', '00'])

const onConfirmTimeMax = () => {
  showToast(`${startTime.value.join(':')} - ${endTime.value.join(':')}`)
}

const onCancelTimeMax = () => {
  showToast('cancel')
}
const setActiveTab = () => {
  activeTab.value = activeTab.value ? 0 : 1
}
</script>
<style lang="scss" scoped>
.demo-picker-group {
  .picker-button {
    margin-bottom: 20rpx;
  }
}
</style>
