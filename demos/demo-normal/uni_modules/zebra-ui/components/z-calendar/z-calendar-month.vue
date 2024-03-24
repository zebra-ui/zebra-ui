<template>
  <view class="z-calendar-month-rect" :class="bem('month')">
    <template v-if="props.showMonthTitle">
      <view :class="bem('month-title')">
        <template v-if="componentSlots && componentSlots['month-title']">
          <slot name="month-title"></slot>
        </template>
        <template v-else>
          {{ title }}
        </template>
      </view>
    </template>
    <view class="z-calendar-days-rect" :class="bem('days')">
      <template v-if="props.showMark && shouldRender">
        <view :class="bem('month-mark')">{{
          new Date(props.date).getMonth() + 1
        }}</view>
      </template>
      <template
        v-for="(item, index) in shouldRender ? days : placeholders"
        :key="index"
      >
        <z-calendar-day
          :item="item"
          :index="index"
          :color="props.color"
          :offset="offset"
          :row-height="rowHeight"
          :component-slots="props.componentSlots"
          @click="(item: any) => emit('click', item)"
          @click-disabled-date="(item: any) => emit('clickDisabledDate', item)"
        >
          <template
            v-if="componentSlots && componentSlots['top-info']"
            #top-info
          >
            <slot name="top-info" :item="item"></slot>
          </template>
          <template
            v-if="componentSlots && componentSlots['bottom-info']"
            #bottom-info
          >
            <slot name="bottom-info" :item="item"></slot>
          </template>
        </z-calendar-day>
      </template>
    </view>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  computed,
  type PropType,
  getCurrentInstance,
  onMounted,
  nextTick
} from 'vue'
import {
  addUnit,
  numericProp,
  createNamespace,
  makeRequiredProp,
  getRect,
  useToggle,
  useExpose,
  useId,
  useComponentName
} from '../../libs/utils'
import { getMonthEndDay } from '../z-date-picker/utils'
import {
  t,
  bem,
  compareDay,
  getPrevDay,
  getNextDay,
  formatMonthTitle
} from './utils'
import zCalendarDay from './z-calendar-day.vue'
import type { CalendarType, CalendarDayItem, CalendarDayType } from './types'
interface ComponentSlots {
  'top-info': string
  'bottom-info': string
  'month-title': string
}
const [name] = createNamespace('calendar-month')
useComponentName(name)
const props = defineProps({
  date: makeRequiredProp(Number),
  type: String as PropType<CalendarType>,
  color: String,
  minDate: makeRequiredProp(Date),
  maxDate: makeRequiredProp(Date),
  showMark: Boolean,
  rowHeight: numericProp,
  formatter: Function as PropType<(item: CalendarDayItem) => CalendarDayItem>,
  lazyRender: Boolean,
  currentDate: [Date, Array] as PropType<Date | Date[] | null>,
  allowSameDay: Boolean,
  showSubtitle: Boolean,
  showMonthTitle: Boolean,
  firstDayOfWeek: Number,
  componentSlots: Object as PropType<ComponentSlots | undefined>,
  index: [Number, String]
})
const emit = defineEmits(['click', 'clickDisabledDate', 'setScroll'])
const instance = getCurrentInstance()
const [visible, setVisible] = useToggle()
const height = ref()

const id = useId()

const title = computed(() => formatMonthTitle(new Date(props.date)))
const rowHeight = computed(() => addUnit(props.rowHeight))
const offset = computed(() => {
  const realDay = new Date(props.date).getDay()

  if (props.firstDayOfWeek) {
    return (realDay + 7 - props.firstDayOfWeek) % 7
  }
  return realDay
})

const totalDay = computed(() =>
  getMonthEndDay(
    new Date(props.date).getFullYear(),
    new Date(props.date).getMonth() + 1
  )
)

const shouldRender = computed(() => {
  return visible.value || !props.lazyRender || props.index == 0
})

const getTitle = () => title.value

const getMultipleDayType = (day: Date) => {
  const isSelected = (date: Date) =>
    // @ts-ignore
    (props.currentDate as Date[]).some((item) => compareDay(item, date) === 0)

  if (isSelected(day)) {
    const prevDay = getPrevDay(day)
    const nextDay = getNextDay(day)
    const prevSelected = isSelected(prevDay)
    const nextSelected = isSelected(nextDay)

    if (prevSelected && nextSelected) {
      return 'multiple-middle'
    }
    if (prevSelected) {
      return 'end'
    }
    if (nextSelected) {
      return 'start'
    }
    return 'multiple-selected'
  }

  return ''
}

const getRangeDayType = (day: Date) => {
  // @ts-ignore
  const [startDay, endDay] = props.currentDate as Date[]

  if (!startDay) {
    return ''
  }

  const compareToStart = compareDay(day, startDay)

  if (!endDay) {
    return compareToStart === 0 ? 'start' : ''
  }

  const compareToEnd = compareDay(day, endDay)

  if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
    return 'start-end'
  }
  if (compareToStart === 0) {
    return 'start'
  }
  if (compareToEnd === 0) {
    return 'end'
  }
  if (compareToStart > 0 && compareToEnd < 0) {
    return 'middle'
  }

  return ''
}

const getDayType = (day: Date): CalendarDayType => {
  const { type, minDate, maxDate, currentDate } = props

  if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
    return 'disabled'
  }

  if (currentDate === null) {
    return ''
  }

  if (Array.isArray(currentDate)) {
    // @ts-ignore
    if (type === 'multiple') {
      return getMultipleDayType(day)
    }
    // @ts-ignore
    if (type === 'range') {
      return getRangeDayType(day)
    }
    // @ts-ignore
  } else if (type === 'single') {
    // @ts-ignore
    return compareDay(day, currentDate as Date) === 0 ? 'selected' : ''
  }

  return ''
}

const getBottomInfo = (dayType: CalendarDayType) => {
  // @ts-ignore
  if (props.type === 'range') {
    if (dayType === 'start' || dayType === 'end') {
      return t(dayType)
    }
    if (dayType === 'start-end') {
      return `${t('start')}/${t('end')}`
    }
  }
}

const placeholders = computed<CalendarDayItem[]>(() => {
  const count = Math.ceil((totalDay.value + offset.value) / 7)
  return Array(count).fill({ type: 'placeholder' })
})

const days = computed(() => {
  const days: CalendarDayItem[] = []
  const year = new Date(props.date).getFullYear()
  const month = new Date(props.date).getMonth()

  for (let day = 1; day <= totalDay.value; day++) {
    const date = new Date(year, month, day)
    const type = getDayType(date)

    let config: CalendarDayItem = {
      date,
      type,
      text: day,
      bottomInfo: getBottomInfo(type)
    }

    if (props.formatter) {
      // @ts-ignore
      config = props.formatter(config)
    }

    days.push(config)
  }

  return days
})

const disabledDays = computed(() =>
  days.value.filter((day) => day.type === 'disabled')
)

const scrollToDate = (body: any, targetDate: Date) => {
  getRect(instance, '.z-calendar-days-rect').then((res: any) => {
    const daysRect = res
    const totalRows = placeholders.value.length
    const currentRow = Math.ceil((targetDate.getDate() + offset.value) / 7)
    const rowOffset = ((currentRow - 1) * daysRect.height) / totalRows
    emit('setScroll', daysRect.top + rowOffset + body.scrollTop - body.top)
  })
}

onMounted(() => {
  nextTick(() => {
    getRect(instance, '.z-calendar-month-rect').then((res: any) => {
      height.value = res.height
    })
  })
})
useExpose({
  id,
  props,
  getTitle,
  getHeight: () => height.value,
  setVisible,
  scrollToDate,
  disabledDays
})

defineExpose({
  id,
  props,
  getTitle,
  getHeight: () => height.value,
  setVisible,
  scrollToDate,
  disabledDays
})
</script>
<script lang="ts">
export default {
  name: 'ZCalendarMonth',
  options: {
    virtualHost: false
  }
}
</script>
<style lang="scss" scoped>
.z-calendar__month-title {
  height: var(--z-calendar-header-title-height);
  font-weight: var(--z-font-bold);
  line-height: var(--z-calendar-header-title-height);
  color: var(--z-text-color);
  text-align: center;
}

.z-calendar_month-title {
  font-size: var(--z-calendar-month-title-font-size);
}

.z-calendar__days {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  user-select: none;
}

.z-calendar__month-mark {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  font-size: var(--z-calendar-month-mark-font-size);
  color: var(--z-calendar-month-mark-color);
  pointer-events: none;
  transform: translate(-50%, -50%);
}
</style>
