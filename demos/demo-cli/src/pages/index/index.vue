<template>
  <DemoPage :show-header="false">
    <view class="demo-index">
      <z-swiper v-model="list" ref="zswiper" :options="options">
        <z-swiper-item
          v-for="(item, index) in list"
          :swiper-item-height="swiperHeight"
          :key="index"
        >
          <view class="scroll-view-content" :style="scrollViewStyle">
            <DemoHome
              :list="item"
              :show-title="index == 0"
              :show-desc="index == 0"
            />
          </view>
        </z-swiper-item>
      </z-swiper>
      <z-tabbar
        v-model="active"
        float
        background
        animate
        @change="tabbarChange"
      >
        <z-tabbar-item v-for="(item, index) in tabbarIcon" :key="index">
          <template #icon="props">
            <z-icon
              class-prefix="zebra-icon"
              :custom-style="{ 'font-weight': 'bold' }"
              :name="props.active ? item.active : item.inactive"
            />
          </template>
          {{ item.name }}
        </z-tabbar-item>
      </z-tabbar>
    </view>
  </DemoPage>
</template>

<script setup>
import { computed, ref } from 'vue'
import config from '../../common/js/config.js'
const list = ref(config)
list.value = list.value.map((item) => [item])
const active = ref(0)
const zswiper = ref(null)
const options = ref({
  autoHeight: true,
  noSwiping: true,
  effect: 'cube',
  cubeEffect: {
    shadow: false,
    slideShadows: false
  }
})

const tabbarIcon = ref([
  {
    name: '基础',
    active: 'base-a',
    inactive: 'base'
  },
  {
    name: '表单',
    active: 'form-a',
    inactive: 'form-i'
  },
  {
    name: '反馈',
    active: 'feedback-a',
    inactive: 'feedback'
  },
  {
    name: '展示',
    active: 'show-a',
    inactive: 'show'
  },
  {
    name: '导航',
    active: 'navigation-a',
    inactive: 'navigation'
  }
])

const swiperHeight = computed(() => {
  return uni.getSystemInfoSync().windowHeight + 'px'
})

const scrollViewStyle = computed(() => {
  const styles = {
    height: `calc(100vh - env(safe-area-inset-top) - ${uni.getSystemInfoSync().statusBarHeight}px)`
  }
  return {
    ...styles
  }
})

const tabbarChange = (value) => {
  zswiper.value.swiper.slideTo(value, 500, false)
}
</script>
<style scoped lang="scss">
.demo-index {
  .scroll-view-content {
    overflow-y: auto;
  }
}
</style>
