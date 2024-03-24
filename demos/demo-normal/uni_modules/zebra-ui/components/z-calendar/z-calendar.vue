<template>
  <template v-if="props.poppable">
    <z-popup
      :show="props.show"
      :custom-style="popupStyle"
      :close-icon-style="{ top: '22rpx' }"
      :round="props.round"
      :position="props.position"
      :closeable="props.showTitle || props.showSubtitle"
      :close-on-popstate="props.closeOnPopstate"
      :safe-area-inset-top="props.safeAreaInsetTop"
      :close-on-click-overlay="props.closeOnClickOverlay"
      @update:show="updateShow"
      @close="popupClose"
    >
      <view :class="bem()" :style="customStyle">
        <z-calendar-header
          :date="subtitle.date"
          :title="props.title"
          :subtitle="subtitle.textFn()"
          :show-title="props.showTitle"
          :show-subtitle="props.showSubtitle"
          :first-day-of-week="dayOffset"
          :component-slots="instance.slots"
          @click-subtitle="(event: any) => emit('clickSubtitle', event)"
        >
          <template v-if="instance.slots.title" #title>
            <slot name="title"></slot>
          </template>
          <template v-if="instance.slots.subtitle" #subtitle>
            <slot
              name="subtitle"
              :date="subtitle.date"
              :text="subtitle.textFn()"
            ></slot>
          </template>
        </z-calendar-header>
        <scroll-view
          :class="bem('body')"
          scroll-y="true"
          :scroll-into-view="scrollTopInto"
        >
          <template v-for="(date, index) in months" :key="index">
            <z-calendar-month
              :id="`month${index}`"
              class="z-calendar-month"
              :ref="setMonthRefs(index)"
              :data-date="date"
              :date-showed="false"
              :date="date"
              :index="index"
              :current-date="currentDate"
              :show-month-title="index !== 0 || !props.showSubtitle"
              :first-day-of-week="dayOffset"
              @click="onClickDay"
              :type="props.type"
              :color="props.color"
              :min-date="props.minDate"
              :max-date="props.maxDate"
              :show-mark="props.showMark"
              :formatter="props.formatter"
              :row-height="props.rowHeight"
              :lazy-render="props.lazyRender"
              :component-slots="instance.slots as any"
              :show-subtitle="props.showSubtitle"
              :allow-same-day="props.allowSameDay"
              @click-disabled-date="
                (item: any) => emit('clickDisabledDate', item)
              "
            >
              <template v-if="instance.slots['top-info']">
                <slot name="top-info"></slot>
              </template>
              <template v-if="instance.slots['bottom-info']">
                <slot name="bottom-info"></slot>
              </template>
              <template v-if="instance.slots['month-title']" #month-title>
                <slot
                  name="month-title"
                  :date="date"
                  :text="formatMonthTitle(date)"
                ></slot>
              </template>
            </z-calendar-month>
          </template>
        </scroll-view>
        <view
          :class="[
            bem('footer'),
            { 'z-safe-area-bottom': props.safeAreaInsetBottom }
          ]"
        >
          <template v-if="instance.slots.footer">
            <slot name="footer"></slot>
          </template>
          <template v-if="props.showConfirm">
            <z-button
              round
              block
              type="primary"
              :color="props.color"
              :custom-style="footerButtonStyle"
              :disabled="buttonDisabled"
              native-type="button"
              @click="onConfirm"
            >
              <template v-if="instance.slots['confirm-text']">
                <slot name="confirm-text" :disabled="buttonDisabled"></slot>
              </template>
              <template
                v-else-if="
                  buttonDisabled ? props.confirmDisabledText : props.confirmText
                "
              >
                {{
                  buttonDisabled ? props.confirmDisabledText : props.confirmText
                }}
              </template>
              <template v-else> 确认 </template>
            </z-button>
          </template>
        </view>
      </view>
    </z-popup>
  </template>
  <template v-else>
    <view :class="bem()" :style="customStyle">
      <z-calendar-header
        :date="subtitle.date"
        :title="props.title"
        :subtitle="subtitle.textFn()"
        :show-title="props.showTitle"
        :show-subtitle="props.showSubtitle"
        :first-day-of-week="dayOffset"
        :component-slots="instance.slots"
        @click-subtitle="(event: any) => emit('clickSubtitle', event)"
      >
        <template v-if="instance.slots.title" #title>
          <slot name="title"></slot>
        </template>
        <template v-if="instance.slots.subtitle" #subtitle>
          <slot
            name="subtitle"
            :date="subtitle.date"
            :text="subtitle.textFn()"
          ></slot>
        </template>
      </z-calendar-header>
      <scroll-view
        :class="bem('body')"
        scroll-y="true"
        :scroll-into-view="scrollTopInto"
      >
        <template v-for="(date, index) in months" :key="index">
          <z-calendar-month
            :id="`month${index}`"
            class="z-calendar-month"
            :ref="setMonthRefs(index)"
            :data-date="date"
            :date-showed="false"
            :date="date"
            :index="index"
            :current-date="currentDate"
            :show-month-title="index !== 0 || !props.showSubtitle"
            :first-day-of-week="dayOffset"
            @click="onClickDay"
            :type="props.type"
            :color="props.color"
            :min-date="props.minDate"
            :max-date="props.maxDate"
            :show-mark="props.showMark"
            :formatter="props.formatter"
            :row-height="props.rowHeight"
            :lazy-render="props.lazyRender"
            :component-slots="instance.slots as any"
            :show-subtitle="props.showSubtitle"
            :allow-same-day="props.allowSameDay"
            @click-disabled-date="
              (item: any) => emit('clickDisabledDate', item)
            "
          >
            <template v-if="instance.slots['top-info']">
              <slot name="top-info"></slot>
            </template>
            <template v-if="instance.slots['bottom-info']">
              <slot name="bottom-info"></slot>
            </template>
            <template v-if="instance.slots['month-title']" #month-title>
              <slot
                name="month-title"
                :date="date"
                :text="formatMonthTitle(date)"
              ></slot>
            </template>
          </z-calendar-month>
        </template>
      </scroll-view>
      <view
        :class="[
          bem('footer'),
          { 'z-safe-area-bottom': props.safeAreaInsetBottom }
        ]"
      >
        <template v-if="instance.slots.footer">
          <slot name="footer"></slot>
        </template>
        <template v-if="props.showConfirm">
          <z-button
            round
            block
            type="primary"
            :color="props.color"
            :custom-style="footerButtonStyle"
            :disabled="buttonDisabled"
            native-type="button"
            @click="onConfirm"
          >
            <template v-if="instance.slots['confirm-text']">
              <slot name="confirm-text" :disabled="buttonDisabled"></slot>
            </template>
            <template
              v-else-if="
                buttonDisabled ? props.confirmDisabledText : props.confirmText
              "
            >
              {{
                buttonDisabled ? props.confirmDisabledText : props.confirmText
              }}
            </template>
            <template v-else> 确认 </template>
          </z-button>
        </template>
      </view>
    </view>
  </template>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  computed,
  type PropType,
  onMounted,
  getCurrentInstance,
  nextTick
} from 'vue'
import {
  isDate,
  truthProp,
  numericProp,
  makeStringProp,
  makeNumericProp,
  raf,
  useRefs,
  useExpose
} from '../../libs/utils'
import {
  bem,
  getToday,
  cloneDate,
  cloneDates,
  getPrevDay,
  getNextDay,
  compareDay,
  calcDateNum,
  compareMonth,
  getDayByOffset,
  formatMonthTitle
} from './utils'
import { PopupPosition } from '../z-popup/types'
import { showToast } from '../z-toast/z-toast'
import zCalendarMonth from './z-calendar-month.vue'
import zCalendarHeader from './z-calendar-header.vue'
import type { CalendarType, CalendarExpose, CalendarDayItem } from './types'
const props = defineProps({
  show: Boolean,
  type: makeStringProp<CalendarType>('single'),
  title: String,
  color: String,
  round: truthProp,
  readonly: Boolean,
  poppable: truthProp,
  maxRange: makeNumericProp(null),
  position: makeStringProp<PopupPosition>('bottom'),
  showMark: truthProp,
  showTitle: truthProp,
  formatter: Function as PropType<(item: CalendarDayItem) => CalendarDayItem>,
  rowHeight: numericProp,
  confirmText: String,
  rangePrompt: String,
  lazyRender: Boolean,
  showConfirm: truthProp,
  defaultDate: [Date, Array] as PropType<Date | Date[] | null>,
  allowSameDay: Boolean,
  showSubtitle: truthProp,
  closeOnPopstate: truthProp,
  showRangePrompt: truthProp,
  confirmDisabledText: String,
  closeOnClickOverlay: truthProp,
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: truthProp,
  minDate: {
    type: Date,
    validator: isDate,
    default: getToday
  },
  maxDate: {
    type: Date,
    validator: isDate,
    default: () => {
      const now = getToday()
      return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate())
    }
  },
  firstDayOfWeek: {
    type: numericProp,
    default: 0,
    validator: (val: number) => val >= 0 && val <= 6
  },
  customStyle: Object
})

const instance = getCurrentInstance()!
const emit = defineEmits([
  'select',
  'confirm',
  'unselect',
  'monthShow',
  'overRange',
  'update:show',
  'clickSubtitle',
  'clickDisabledDate'
])
const popupStyle = computed(() => {
  let styles: { [key: string]: string | number } = {}
  // @ts-ignore
  if (props.position == 'top' || props.position == 'bottom') {
    styles['height'] = 'var(--z-calendar-popup-height)'
  }
  // @ts-ignore
  else if (props.position == 'left' || props.position == 'right') {
    styles['height'] = '100%'
  } else {
    styles = {}
  }
  return { ...styles }
})

const footerButtonStyle = computed(() => {
  const styles = {
    height: 'var(--z-calendar-confirm-button-height)',
    margin: 'var(--z-calendar-confirm-button-margin)'
  }
  return { ...styles }
})

const limitDateRange = (
  date: Date,
  minDate = props.minDate,
  maxDate = props.maxDate
) => {
  if (compareDay(date, minDate) === -1) {
    return minDate
  }
  if (compareDay(date, maxDate) === 1) {
    return maxDate
  }
  return date
}

const scrollTopInto = ref('')

const getInitialDate = (defaultDate = props.defaultDate) => {
  const { type, minDate, maxDate, allowSameDay } = props

  if (defaultDate === null) {
    return defaultDate
  }

  const now = getToday()

  // @ts-ignore
  if (type === 'range') {
    if (!Array.isArray(defaultDate)) {
      defaultDate = []
    }
    const start = limitDateRange(
      // @ts-ignore
      defaultDate[0] || now,
      minDate,
      allowSameDay ? maxDate : getPrevDay(maxDate)
    )
    const end = limitDateRange(
      // @ts-ignore
      defaultDate[1] || now,
      allowSameDay ? minDate : getNextDay(minDate)
    )
    return [start, end]
  }
  // @ts-ignore
  if (type === 'multiple') {
    if (Array.isArray(defaultDate)) {
      // @ts-ignore
      return defaultDate.map((date) => limitDateRange(date))
    }
    return [limitDateRange(now)]
  }

  if (!defaultDate || Array.isArray(defaultDate)) {
    // @ts-ignore
    defaultDate = now
  }
  // @ts-ignore
  return limitDateRange(defaultDate)
}

const subtitle = ref<{ textFn: () => string; date?: any }>({
  textFn: () => '',
  date: undefined
})
const currentDate = ref(getInitialDate())

const [monthRefs, setMonthRefs] = useRefs<any>()

const dayOffset = computed(() =>
  props.firstDayOfWeek ? +props.firstDayOfWeek % 7 : 0
)

const months = computed(() => {
  const months: any = []
  const cursor = new Date(props.minDate)

  cursor.setDate(1)

  do {
    // @ts-ignore
    months.push(cursor.getTime())
    cursor.setMonth(cursor.getMonth() + 1)
  } while (compareMonth(cursor, props.maxDate) !== 1)

  return months
})

const buttonDisabled = computed(() => {
  if (currentDate.value) {
    // @ts-ignore
    if (props.type === 'range') {
      return (
        !(currentDate.value as Date[])[0] || !(currentDate.value as Date[])[1]
      )
    }
    // @ts-ignore
    if (props.type === 'multiple') {
      return !(currentDate.value as Date[]).length
    }
  }
  return !currentDate.value
})

const getSelectedDate = () => currentDate.value
let contentObserver = ref()
const onScroll = () => {
  nextTick(() => {
    if (contentObserver.value != null) {
      contentObserver.value.disconnect()
    }
    const contentObserverData = uni.createIntersectionObserver(instance, {
      thresholds: [0, 0.1, 0.9, 1],
      observeAll: true
    })
    contentObserver.value = contentObserverData
    contentObserver.value.relativeTo('.z-calendar__body')
    contentObserver.value.observe('.z-calendar-month', (res: any) => {
      const { boundingClientRect } = res
      const { relativeRect } = res
      const { date } = res.dataset
      if (
        Math.floor(boundingClientRect.top) <=
        Math.floor(relativeRect.top) + 2
      ) {
        if (!res.dataset.showed) {
          res.dataset.showed = true
          emit('monthShow', {
            date: date,
            title: formatMonthTitle(date)
          })
        }
        subtitle.value = {
          textFn: () => formatMonthTitle(date),
          date: date
        }
      }
    })
  })
}

const scrollToDate = (targetDate: Date) => {
  raf(() => {
    months.value.some((month: Date, index: any) => {
      if (compareMonth(month, targetDate) === 0) {
        scrollTopInto.value = `month${index}`
        return true
      }
      return false
    })
    onScroll()
  })
}

const scrollToCurrentDate = () => {
  if (props.poppable && !props.show) {
    return
  }
  if (currentDate.value) {
    const targetDate =
      // @ts-ignore
      props.type === 'single'
        ? (currentDate.value as Date)
        : (currentDate.value as Date[])[0]
    if (isDate(targetDate)) {
      scrollToDate(targetDate)
    }
  } else {
    raf(onScroll)
  }
}

const init = () => {
  if (props.poppable && !props.show) {
    return
  }
  scrollToCurrentDate()
}

const reset = (date = getInitialDate()) => {
  currentDate.value = date
  scrollToCurrentDate()
}

const checkRange = (date: [Date, Date]) => {
  const { maxRange, rangePrompt, showRangePrompt } = props

  if (maxRange && calcDateNum(date) > +maxRange) {
    if (showRangePrompt) {
      showToast(rangePrompt || `最多选择 ${maxRange} 天`)
    }
    emit('overRange')
    return false
  }

  return true
}

const onConfirm = () =>
  // @ts-ignore
  emit(
    'confirm',
    currentDate.value ? currentDate.value : cloneDates(currentDate.value!)
  )

const select = (date: Date | Date[], complete?: boolean) => {
  const setCurrentDate = (date: Date | Date[]) => {
    currentDate.value = date
    emit('select', cloneDates(date))
  }
  // @ts-ignore
  if (complete && props.type === 'range') {
    const valid = checkRange(date as [Date, Date])

    if (!valid) {
      setCurrentDate([
        (date as Date[])[0],
        getDayByOffset((date as Date[])[0], +props.maxRange - 1)
      ])
      return
    }
  }

  setCurrentDate(date)

  if (complete && !props.showConfirm) {
    onConfirm()
  }
}

const getDisabledDate = (
  disabledDays: CalendarDayItem[],
  startDay: Date,
  date: Date
): Date | undefined =>
  disabledDays.find(
    (day) =>
      compareDay(startDay, day.date!) === -1 &&
      compareDay(day.date!, date) === -1
  )?.date

const disabledDays = computed(() =>
  monthRefs.value.reduce((arr, ref) => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    arr.push(...(ref?.disabledDays?.value ? ref?.disabledDays?.value : []))
    return arr
  }, [] as CalendarDayItem[])
)

const onClickDay = (item: CalendarDayItem) => {
  if (props.readonly || !item.date) {
    return
  }

  const { date } = item
  const { type } = props
  // @ts-ignore
  if (type === 'range') {
    if (!currentDate.value) {
      select([date])
      return
    }

    const [startDay, endDay] = currentDate.value as [Date, Date]

    if (startDay && !endDay) {
      const compareToStart = compareDay(date, startDay)

      if (compareToStart === 1) {
        const disabledDay = getDisabledDate(disabledDays.value, startDay, date)

        if (disabledDay) {
          const endDay = getPrevDay(disabledDay)
          if (compareDay(startDay, endDay) === -1) {
            select([startDay, endDay])
          } else {
            select([date])
          }
        } else {
          select([startDay, date], true)
        }
      } else if (compareToStart === -1) {
        select([date])
      } else if (props.allowSameDay) {
        select([date, date], true)
      }
    } else {
      select([date])
    }
    // @ts-ignore
  } else if (type === 'multiple') {
    if (!currentDate.value) {
      select([date])
      return
    }
    const dates = currentDate.value as Date[]

    const selectedIndex = dates.findIndex(
      (dateItem: Date) => compareDay(dateItem, date) === 0
    )

    if (selectedIndex !== -1) {
      const [unselectedDate] = dates.splice(selectedIndex, 1)
      emit('unselect', cloneDate(unselectedDate))
    } else if (props.maxRange && dates.length >= +props.maxRange) {
      showToast(props.rangePrompt || `最多选择 ${props.maxRange} 天`)
    } else {
      select([...dates, date])
    }
  } else {
    select(date, true)
  }
}

const updateShow = (value: boolean) => emit('update:show', value)

watch(
  () => props.show,
  () => {
    setTimeout(() => {
      init()
    }, 30)
  }
)
watch(
  () => [props.type, props.minDate, props.maxDate],
  // @ts-ignore
  () => reset(getInitialDate(currentDate.value))
)
watch(
  () => props.defaultDate,
  (value = null) => {
    currentDate.value = value
    scrollToCurrentDate()
  }
)

const popupClose = () => {
  scrollTopInto.value = ''
}

useExpose<CalendarExpose>({
  reset,
  scrollToDate,
  // @ts-ignore
  getSelectedDate
})

onMounted(() => {
  init()
})
</script>
<script lang="ts">
export default {
  name: 'ZCalendar',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-calendar {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--z-calendar-background);

  &__body {
    flex: 1;
    min-width: 0;
    min-height: 0;
  }

  &__footer {
    flex-shrink: 0;
    padding-right: var(--z-padding-md);
    padding-left: var(--z-padding-md);
  }
}
</style>
