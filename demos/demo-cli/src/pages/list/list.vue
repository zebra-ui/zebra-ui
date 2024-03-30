<template>
  <DemoPage title="List">
    <view class="demo-list">
      <z-tabs animated sticky swipeable custom-navbar>
        <z-tab title="基础用法">
          <z-list
            id="list1"
            v-model:loading="list[0].loading"
            :finished="list[0].finished"
            finished-text="没有更多了"
            @load="onLoadData(0)"
          >
            <z-cell
              v-for="item in list[0].items"
              :key="item"
              :title="`单元格${item}`"
              value="内容"
            />
          </z-list>
        </z-tab>

        <z-tab title="错误提示">
          <z-list
            id="list2"
            v-model:loading="list[1].loading"
            v-model:error="list[1].error"
            :finished="list[1].finished"
            error-text="请求失败，点击重新加载"
            @load="onLoadData(1)"
          >
            <z-cell
              v-for="item in list[1].items"
              :key="item"
              :title="`单元格${item}`"
              value="内容"
            />
          </z-list>
        </z-tab>

        <z-tab title="下拉刷新">
          <z-pull-refresh
            id="refresh1"
            v-model="list[2].refreshing"
            @refresh="onRefresh(2)"
          >
            <z-list
              id="list3"
              v-model:loading="list[2].loading"
              :finished="list[2].finished"
              finished-text="没有更多了"
              @load="onLoadData(2)"
            >
              <z-cell
                v-for="item in list[2].items"
                :key="item"
                :title="`单元格${item}`"
                value="内容"
              />
            </z-list>
          </z-pull-refresh>
        </z-tab>
      </z-tabs>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// @ts-ignore
import { onPageScroll } from '@dcloudio/uni-app'
const list = ref([
  {
    items: [] as string[],
    refreshing: false,
    loading: false,
    error: false,
    finished: false
  },
  {
    items: [] as string[],
    refreshing: false,
    loading: false,
    error: false,
    finished: false
  },
  {
    items: [] as string[],
    refreshing: false,
    loading: false,
    error: false,
    finished: false
  }
])

onPageScroll((event: any) => {
  uni.$emit(`z-list-list1`, event)
  uni.$emit(`z-list-list2`, event)
  uni.$emit(`z-list-list3`, event)
  uni.$emit(`z-pull-refresh-refresh1`, event)
})

const onLoadData = (index: number) => {
  const currentList = list.value[index]
  currentList.loading = true

  setTimeout(() => {
    if (currentList.refreshing) {
      currentList.items = []
      currentList.refreshing = false
    }

    for (let i = 0; i < 10; i++) {
      const text = currentList.items.length + 1
      currentList.items.push(text < 10 ? '0' + text : String(text))
    }

    currentList.loading = false
    currentList.refreshing = false
    if (index === 1 && currentList.items.length === 10 && !currentList.error) {
      currentList.error = true
    } else {
      currentList.error = false
    }

    if (currentList.items.length >= 40) {
      currentList.finished = true
    }
  }, 2000)
}

const onRefresh = (index: number) => {
  list.value[index].finished = false
  onLoadData(index)
}
</script>
