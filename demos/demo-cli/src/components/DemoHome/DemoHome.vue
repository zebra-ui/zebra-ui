<template>
  <view class="demo-home">
    <view class="demo-home__title" v-if="props.showTitle">
      <image
        mode="aspectFit"
        class="demo-home__image"
        src="../../static/logo.png"
      />
      <view class="demo-home__text"> Zebra UI </view>
    </view>
    <view class="demo-home__desc" v-if="props.showDesc">
      多端适配的uniapp组件库
      <z-switch v-model="checked" @change="switchChange">
        <template #node>
          <view class="icon-wrapper">
            <z-icon
              :name="checked ? 'moon' : 'sun'"
              :color="checked ? 'var(--z-blue)' : 'var(--z-gray-5)'"
              size="40rpx"
            />
          </view>
        </template>
      </z-switch>
    </view>
    <view v-for="(group, index) in props.list" :key="index">
      <DemoHomeNav :group="group" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
// @ts-ignore
import { useThemeStore } from '../../store'
// #ifdef H5
import { useCurrentTheme, syncThemeToParent } from '../../common/js/iframe-sync'
useCurrentTheme()
// #endif
const store = useThemeStore()
const checked = ref(store.theme == 'dark' ? true : false)
const props = defineProps({
  list: {
    type: Array,
    default: function () {
      return []
    }
  },
  showTitle: {
    type: Boolean,
    default: true
  },
  showDesc: {
    type: Boolean,
    default: true
  }
})
const switchChange = (value: string) => {
  store.setTheme(value ? 'dark' : 'light')
  // #ifdef H5
  syncThemeToParent()
  // #endif
}
watch(
  () => store.theme,
  (value) => {
    checked.value = value == 'dark' ? true : false
  }
)
</script>

<style scoped lang="scss">
.demo-home {
  box-sizing: border-box;
  width: 100%;
  padding: 92rpx 40rpx 40rpx;
  background-color: var(--zebra-background);
}

.demo-home__title,
.demo-home__desc {
  padding-left: 32rpx;
  font-weight: normal;
  line-height: 52rpx;
  user-select: none;
}

.demo-home__title {
  margin: 0 0 32rpx;
  font-size: 64rpx;
}

.demo-home__image,
.demo-home__text {
  display: inline-block;
  vertical-align: middle;
}

.demo-home__image {
  width: 200rpx;
  height: 200rpx;
}

.demo-home__text {
  margin-left: 32rpx;
  font-weight: 500;
  color: var(--zebra-text-color);
}

.demo-home__title .demo-home--small {
  font-size: 48rpx;
}

.demo-home__desc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 80rpx;
  font-size: 28rpx;
  color: var(--z-text-color-2);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
