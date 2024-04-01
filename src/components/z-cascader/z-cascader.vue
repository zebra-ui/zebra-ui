<template>
  <view :class="bem()">
    <template v-if="props.showHeader">
      <view :class="bem('header')">
        <view :class="bem('title')">
          <template v-if="instance.slots.title">
            <slot name="title"></slot>
          </template>
          <template v-else>
            {{ props.title }}
          </template>
        </view>
        <template v-if="props.closeable">
          <z-icon
            :name="props.closeIcon"
            :custom-class="[HAPTICS_FEEDBACK]"
            :custom-style="closeIconStyle"
            @click="onClose"
          />
        </template>
      </view>
    </template>
    <view :class="bem('tabs')">
      <z-tabs
        ref="cascaderTabsRef"
        v-model:active="activeTab"
        shrink
        animated
        :color="props.activeColor"
        :swipeable="props.swipeable"
        @click-tab="onClickTab"
      >
        <template v-for="(tab, tabIndex) in tabs" :key="tabIndex">
          <z-tab
            :title="
              tab.selected
                ? tab.selected[textKey]
                : props.placeholder || '请选择'
            "
            :title-style="tabTitleStyle(tab)"
          >
            <template v-if="instance.slots['options-top']">
              <slot name="options-top" :tab-index="tabIndex"></slot>
            </template>
            <scroll-view :class="bem('options')" scroll-y="true">
              <template
                v-for="(option, optionIndex) in tab.options"
                :key="optionIndex"
              >
                <view
                  :class="[
                    bem('option', {
                      selected: optionSelected(option, tab.selected),
                      disabled: option.disabled
                    }),
                    option.className
                  ]"
                  :style="{
                    color: optionColor(
                      option,
                      optionSelected(option, tab.selected)
                    )
                  }"
                  @click="() => onSelect(option, tabIndex)"
                >
                  <template v-if="instance.slots.option">
                    <slot
                      name="option"
                      :option="option"
                      :selected="optionSelected(option, tab.selected)"
                    ></slot>
                  </template>
                  <template v-else>
                    <text>{{ option[textKey] }}</text>
                  </template>
                  <template v-if="optionSelected(option, tab.selected)">
                    <z-icon name="check" :custom-style="selectedIconStyle" />
                  </template>
                </view>
              </template>
            </scroll-view>
            <template v-if="instance.slots['options-bottom']">
              <slot name="options-bottom" :tab-index="tabIndex"></slot>
            </template>
          </z-tab>
        </template>
      </z-tabs>
    </view>
  </view>
</template>
<script lang="ts" setup>
import {
  ref,
  watch,
  nextTick,
  type PropType,
  getCurrentInstance,
  computed,
  onMounted
} from 'vue'
import {
  extend,
  truthProp,
  numericProp,
  makeArrayProp,
  makeStringProp,
  createNamespace,
  HAPTICS_FEEDBACK,
  type Numeric,
  useComponentName
} from '../../libs/utils'
import zIcon from '../z-icon/z-icon.vue'
import zTabs from '../z-tabs/z-tabs.vue'
import zTab from '../z-tab/z-tab.vue'
import type { TabsClickTabEventParams } from '../z-tabs/types'
import type { CascaderTab, CascaderOption, CascaderFieldNames } from './types'
const [name, bem] = createNamespace('cascader')
useComponentName(name)
const instance = getCurrentInstance()!
const props = defineProps({
  title: String,
  options: makeArrayProp<CascaderOption>(),
  closeable: truthProp,
  swipeable: truthProp,
  closeIcon: makeStringProp('close'),
  showHeader: truthProp,
  modelValue: numericProp,
  fieldNames: Object as PropType<CascaderFieldNames>,
  placeholder: String,
  activeColor: String
})
const emit = defineEmits([
  'close',
  'change',
  'finish',
  'clickTab',
  'update:modelValue'
])

const tabs = ref<CascaderTab[]>([])
const cascaderTabsRef = ref()
const activeTab = ref(0)

const closeIconStyle = computed(() => {
  const styles = {
    color: 'var(--z-cascader-close-icon-color)',
    fontSize: 'var(--z-cascader-close-icon-size)'
  }
  return styles
})

const {
  text: textKey,
  value: valueKey,
  children: childrenKey
} = extend(
  {
    text: 'text',
    value: 'value',
    children: 'children'
  },
  props.fieldNames
)

const tabTitleStyle = (tab: any) => {
  const styles = {
    color: 'var(--z-cascader-tab-color)',
    fontWeight: 'var(--z-font-bold)'
  }
  if (!tab.selected) {
    styles['color'] = 'var(--z-cascader-unselected-tab-color)'
    styles['fontWeight'] = 'normal'
  }
  return styles
}

const selectedIconStyle = computed(() => {
  const styles = {
    fontSize: 'var(--z-cascader-selected-icon-size)'
  }
  return styles
})

const optionSelected = (option: any, selectedOption: any) => {
  return !!(selectedOption && option[valueKey] === selectedOption[valueKey])
}

const optionColor = (option: any, selected: any) => {
  return option.color || (selected ? props.activeColor : undefined)
}

const getSelectedOptionsByValue = (
  options: CascaderOption[],
  value: Numeric
): CascaderOption[] | undefined => {
  for (const option of options) {
    if (option[valueKey] === value) {
      return [option]
    }

    if (option[childrenKey]) {
      const selectedOptions = getSelectedOptionsByValue(
        option[childrenKey],
        value
      )
      if (selectedOptions) {
        return [option, ...selectedOptions]
      }
    }
  }
}

const updateTabs = () => {
  const { options, modelValue } = props

  if (modelValue !== undefined) {
    // @ts-ignore
    const selectedOptions = getSelectedOptionsByValue(options, modelValue)

    if (selectedOptions) {
      let optionsCursor = options
      // @ts-ignore
      tabs.value = selectedOptions.map((option) => {
        const tab = {
          options: optionsCursor,
          selected: option
        }
        // @ts-ignore
        const next = optionsCursor.find(
          (item) => item[valueKey] === option[valueKey]
        )
        if (next) {
          optionsCursor = next[childrenKey]
        }

        return tab
      })

      if (optionsCursor) {
        tabs.value.push({
          // @ts-ignore
          options: optionsCursor,
          selected: null
        })
      }

      nextTick(() => {
        activeTab.value = tabs.value.length - 1
      })

      return
    }
  }

  tabs.value = [
    {
      // @ts-ignore
      options,
      selected: null
    }
  ]

  setTimeout(() => {
    if (cascaderTabsRef.value) {
      cascaderTabsRef.value.resize()
    }
  }, 500)
}

const onSelect = (option: CascaderOption, tabIndex: number) => {
  if (option.disabled) {
    return
  }

  tabs.value[tabIndex].selected = option

  if (tabs.value.length > tabIndex + 1) {
    tabs.value = tabs.value.slice(0, tabIndex + 1)
  }

  if (option[childrenKey]) {
    const nextTab = {
      options: option[childrenKey],
      selected: null
    }

    if (tabs.value[tabIndex + 1]) {
      tabs.value[tabIndex + 1] = nextTab
    } else {
      tabs.value.push(nextTab)
    }

    nextTick(() => {
      activeTab.value++
    })
  }

  const selectedOptions = tabs.value.map((tab) => tab.selected).filter(Boolean)

  emit('update:modelValue', option[valueKey])

  const params = {
    value: option[valueKey],
    tabIndex,
    selectedOptions
  }
  emit('change', params)

  if (!option[childrenKey]) {
    if (cascaderTabsRef.value) {
      cascaderTabsRef.value.resize()
    }
    emit('finish', params)
  }
}

const onClose = () => emit('close')

const onClickTab = ({ name, title }: TabsClickTabEventParams) =>
  emit('clickTab', name, title)

watch(activeTab, () => {
  setTimeout(() => {
    if (cascaderTabsRef.value) {
      cascaderTabsRef.value.resize()
    }
  }, 500)
})
watch(() => props.options, updateTabs, { deep: true })
watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) {
      const values = tabs.value.map((tab) => tab.selected?.[valueKey])
      if (values.includes(value)) {
        return
      }
    }
    updateTabs()
  }
)
updateTabs()

const resizeTabs = ref(true)
onMounted(() => {
  resizeTabs.value = true
})
</script>
<script lang="ts">
export default {
  name: 'ZCascader',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-cascader {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--z-cascader-header-height);
    padding: var(--z-cascader-header-padding);
  }

  &__title {
    font-size: var(--z-cascader-title-font-size);
    font-weight: var(--z-font-bold);
    line-height: var(--z-cascader-title-line-height);
    color: var(--z-text-color);
  }

  &__tabs {
    padding: 0 var(--z-padding-xs);
  }

  &__option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx var(--z-padding-xs);
    font-size: var(--z-font-size-md);
    line-height: var(--z-line-height-md);
    color: var(--z-text-color);
    cursor: pointer;

    &:active {
      background-color: var(--z-active-color);
    }

    &--selected {
      font-weight: var(--z-font-bold);
      color: var(--z-cascader-active-color);
    }

    &--disabled {
      color: var(--z-cascader-option-disabled-color);
      cursor: not-allowed;

      &:active {
        background-color: transparent;
      }
    }
  }

  &__options {
    box-sizing: border-box;
    height: var(--z-cascader-options-height);
    padding-top: 12rpx;
  }
}
</style>
