<template>
  <view :class="bem('header')">
    <template v-if="props.showTitle">
      <view :class="bem('header-title')">
        <template v-if="componentSlots && componentSlots.title">
          <slot name="title"></slot>
        </template>
        <template v-else-if="props.title">
          {{ props.title }}
        </template>
        <template v-else> 日期选择 </template>
      </view>
    </template>
    <template v-if="props.showSubtitle">
      <view :class="bem('header-subtitle')" @click="onClickSubtitle">
        <template v-if="componentSlots && componentSlots.subtitle">
          <slot name="subtitle"></slot>
        </template>
        <template v-else>
          {{ props.subtitle }}
        </template>
      </view>
    </template>
    <view :class="bem('weekdays')">
      <template v-for="(text, index) in renderWeekDays" :key="index">
        <text :class="bem('weekday')">{{ text }}</text>
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { createNamespace, useComponentName } from '../../libs/utils'
import { bem } from './utils'

const [name] = createNamespace('calendar-header')
useComponentName(name)

const props = defineProps({
  date: Number,
  title: String,
  subtitle: String,
  showTitle: Boolean,
  showSubtitle: Boolean,
  firstDayOfWeek: Number,
  componentSlots: Object
})

const emit = defineEmits(['clickSubtitle'])

const onClickSubtitle = (event: any) => emit('clickSubtitle', event)

const renderWeekDays = computed(() => {
  const { firstDayOfWeek } = props
  const weekdays = ['日', '一', '二', '三', '四', '五', '六']
  return [
    ...weekdays.slice(firstDayOfWeek, 7),
    ...weekdays.slice(0, firstDayOfWeek)
  ]
})
</script>
<script lang="ts">
export default {
  name: 'ZCalendarHeader',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-calendar__header {
  flex-shrink: 0;
  box-shadow: var(--z-calendar-header-shadow);
}

.z-calendar__header-title,
.z-calendar__header-subtitle {
  height: var(--z-calendar-header-title-height);
  font-weight: var(--z-font-bold);
  line-height: var(--z-calendar-header-title-height);
  color: var(--z-text-color);
  text-align: center;
}

.z-calendar__header-title {
  font-size: var(--z-calendar-header-title-font-size);
}

.z-calendar__header-subtitle {
  font-size: var(--z-calendar-header-subtitle-font-size);
}

.z-calendar__weekdays {
  display: flex;
}

.z-calendar__weekday {
  flex: 1;
  font-size: var(--z-calendar-weekdays-font-size);
  line-height: var(--z-calendar-weekdays-height);
  color: var(--z-text-color);
  text-align: center;
}
</style>
