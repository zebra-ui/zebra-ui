<template>
  <DemoPage title="PullRefresh">
    <view class="demo-pull-refresh">
      <z-tabs>
        <z-tab title="基础用法">
          <z-pull-refresh
            id="refresh1"
            v-model="loading"
            @refresh="onRefresh(true)"
          >
            <z-cell
              v-for="item in 30"
              :key="item"
              :title="`单元格${item}`"
              value="内容"
            />
          </z-pull-refresh>
        </z-tab>
        <z-tab title="成功提示">
          <z-pull-refresh
            id="refresh2"
            v-model="loading"
            success-text="刷新成功"
            @refresh="onRefresh(false)"
          >
            <z-cell
              v-for="item in 10"
              :key="item"
              :title="`单元格${item}`"
              value="内容"
            />
          </z-pull-refresh>
        </z-tab>

        <z-tab title="自定义提示">
          <z-pull-refresh
            id="refresh3"
            v-model="loading"
            head-height="80"
            @refresh="onRefresh(true)"
          >
            <template #pulling="{ distance }">
              <image
                class="doge"
                src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
                :style="{ transform: `scale(${distance / 80})` }"
              />
            </template>
            <template #loosing>
              <image
                src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
                class="doge"
              />
            </template>
            <template #loading>
              <image
                src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg"
                class="doge"
              />
            </template>
            <z-cell
              v-for="item in 2"
              :key="item"
              :title="`单元格${item}`"
              value="内容"
            />
          </z-pull-refresh>
        </z-tab>
      </z-tabs>
    </view>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showToast } from '../../uni_modules/zebra-ui/components/z-toast/z-toast'
// @ts-ignore
import { onPageScroll } from '@dcloudio/uni-app'
const count = ref(0)
const loading = ref(false)

onPageScroll((event: any) => {
  uni.$emit(`z-pull-refresh-refresh1`, event)
  uni.$emit(`z-pull-refresh-refresh2`, event)
  uni.$emit(`z-pull-refresh-refresh3`, event)
})

// const tips = computed(() => {
//   if (count.value) {
//     return `刷新次数: ${count.value}`
//   }
//   return '下拉试试'
// })

const onRefresh = (isShowToast: boolean) => {
  setTimeout(() => {
    if (isShowToast) {
      showToast('刷新成功')
    }
    loading.value = false
    count.value++
  }, 1000)
}
</script>
<style lang="scss" scoped>
.demo-pull-refresh {
  .demo-pull-refresh {
    background-color: var(--z-background-2);

    .z-pull-refresh {
      height: calc(100vh - 100rpx);
    }

    .doge {
      width: 280rpx;
      height: 144rpx;
      margin-top: 16rpx;
      border-radius: 8rpx;
    }

    text {
      padding: var(--z-padding-md) 0 0 var(--z-padding-md);
      margin: 0;
    }
  }
}
</style>
