<template>
  <view :class="bem()" :style="{ height: addUnit(props.height) }">
    <z-sidebar
      :model-value="mainActiveIndex"
      :custom-style="sidebarStyle()"
      @change="onSidebarChange"
    >
      <template v-for="(item, index) in props.items" :key="index">
        <view :class="[bem('nav-item'), item.className]">
          <z-sidebar-item
            :dot="item.dot"
            :badge="item.badge"
            :disabled="item.disabled"
            :custom-style="{ padding: 'var(--z-tree-select-nav-item-padding)' }"
            @click="onClickSidebarItem"
          >
            <template #title>
              {{ item.text }}
            </template>
          </z-sidebar-item>
        </view>
      </template>
    </z-sidebar>
    <view :class="bem('content')">
      <template v-if="instance.slots.content">
        <slot name="content"></slot>
      </template>
      <template v-else>
        <template v-if="selected.children">
          <template v-for="(item, index) in selected.children" :key="index">
            <view
              :class="[
                'z-ellipsis',
                bem('item', {
                  active: isActiveItem(item.id),
                  disabled: item.disabled
                })
              ]"
              @click="onItemClick(item)"
            >
              {{ item.text }}
              <view v-if="isActiveItem(item.id)" :class="bem('selected')">
                <z-icon :name="props.selectedIcon" />
              </view>
            </view>
          </template>
        </template>
      </template>
    </view>
  </view>
</template>

<script setup lang="ts">
import { type PropType, computed, getCurrentInstance } from 'vue'
import {
  addUnit,
  makeArrayProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
  useComponentName,
  type Numeric
} from '../../libs/utils'
import zSidebar from '../z-sidebar/z-sidebar.vue'
import zSidebarItem from '../z-sidebar-item/z-sidebar-item.vue'
import zIcon from '../z-icon/z-icon.vue'
const instance = getCurrentInstance()!
const [componentName, bem] = createNamespace('tree-select')
useComponentName(componentName)
const props = defineProps({
  max: makeNumericProp(Infinity),
  items: makeArrayProp<any>(),
  height: makeNumericProp(300),
  selectedIcon: makeStringProp('check'),
  mainActiveIndex: makeNumericProp(0),
  activeId: {
    type: [Number, String, Array] as PropType<Numeric | Numeric[]>,
    default: 0
  }
})
const emit = defineEmits([
  'clickNav',
  'clickItem',
  'update:activeId',
  'update:mainActiveIndex'
])
const isActiveItem = (id: Numeric) =>
  // @ts-ignore
  Array.isArray(props.activeId)
    ? props.activeId.includes(id)
    : props.activeId === id

const selected = computed(() => props.items[+props.mainActiveIndex] || {})
const onSidebarChange = (index: number) => {
  emit('update:mainActiveIndex', index)
}

const sidebarStyle = () => {
  return {
    flex: '1',
    'overflow-y': 'auto',
    background: 'var(--z-tree-select-nav-background)'
  }
}

const onClickSidebarItem = (index: number) => emit('clickNav', index)
const onItemClick = (item: any) => {
  if (item.disabled) {
    return
  }
  let activeId
  if (Array.isArray(props.activeId)) {
    activeId = props.activeId.slice()

    const index = activeId.indexOf(item.id)

    if (index !== -1) {
      activeId.splice(index, 1)
    } else if (activeId.length < +props.max) {
      activeId.push(item.id)
    }
  } else {
    activeId = item.id
  }

  emit('update:activeId', activeId)
  emit('clickItem', item)
}
</script>
<script lang="ts">
export default {
  name: 'ZTreeSelect',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-tree-select {
  position: relative;
  display: flex;
  font-size: var(--z-tree-select-font-size);

  &__content {
    flex: 2;
    overflow-y: auto;
    background: var(--z-tree-select-content-background);
    -webkit-overflow-scrolling: touch;
  }

  &__item {
    position: relative;
    padding: 0 32px 0 var(--z-padding-md);
    font-weight: var(--z-font-bold);
    line-height: var(--z-tree-select-item-height);
    color: var(--z-tree-select-item-color);

    &--active {
      color: var(--z-tree-select-item-active-color);
    }

    &:active {
      background-color: var(--z-active-color);
    }

    &--disabled {
      color: var(--z-tree-select-item-disabled-color);
      cursor: not-allowed;

      &:active {
        background-color: transparent;
      }
    }
  }

  &__selected {
    position: absolute;
    top: 0;
    right: var(--z-padding-md);
    margin-top: 4rpx;
    font-size: var(--z-tree-select-item-selected-size);
  }
}
</style>
