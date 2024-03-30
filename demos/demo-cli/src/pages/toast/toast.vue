<template>
  <DemoPage title="Toast">
    <view class="demo-toast">
      <demo-block title="基础用法">
        <z-cell title="文字提示" is-link @click="showToast('文字提示')" />
        <z-cell
          title="加载提示"
          is-link
          @click="showLoadingToast({ message: '加载中...', forbidClick: true })"
        />
        <z-cell
          title="成功提示"
          is-link
          @click="showSuccessToast('成功文案')"
        />
        <z-cell title="失败提示" is-link @click="showFailToast('失败文案')" />
      </demo-block>
      <demo-block title="自定义图标">
        <z-cell
          title="自定义图标"
          is-link
          @click="
            showToast({ message: '自定义图标', icon: 'search', duration: 0 })
          "
        />
        <z-cell
          title="自定义图片"
          is-link
          @click="
            showToast({
              message: '自定义图片',
              icon: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png'
            })
          "
        />
        <z-cell
          title="自定义加载图标"
          is-link
          @click="
            showLoadingToast({
              message: '加载中...',
              forbidClick: true,
              loadingType: 'spinner'
            })
          "
        />
      </demo-block>
      <demo-block title="自定义位置">
        <z-cell
          title="顶部展示"
          is-link
          @click="showToast({ message: '顶部展示', position: 'top' })"
        />
        <z-cell
          title="底部展示"
          is-link
          @click="showToast({ message: '底部展示', position: 'bottom' })"
        />
      </demo-block>
      <demo-block title="文字换行方式">
        <z-cell
          title="换行时截断单词"
          is-link
          @click="
            showToast({
              message:
                'This message will contain a incomprehensibilities long word.',
              wordBreak: 'break-all'
            })
          "
        />
        <z-cell
          title="换行时不截断单词"
          is-link
          @click="
            showToast({
              message:
                'This message will contain a incomprehensibilities long word.',
              wordBreak: 'break-word'
            })
          "
        />
      </demo-block>
      <demo-block title="动态更新提示">
        <z-cell title="动态更新提示" is-link @click="showToastTrends()" />
      </demo-block>
      <demo-block title="使用组件">
        <z-cell title="使用组件" is-link @click="show = true" />
        <z-toast v-model:show="show" :duration="0">
          <template #message>
            <view class="toast-custom">
              <z-icon name="error" color="var(--z-orange)"></z-icon>
              <view> 这是一段内容确定删除吗？ </view>
            </view>
            <view class="toast-button">
              <z-button type="primary" size="mini" @click="show = false"
                >确认</z-button
              >
              <z-button size="mini" @click="show = false">取消</z-button>
            </view>
          </template>
        </z-toast>
      </demo-block>
    </view>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  showToast,
  showLoadingToast,
  showSuccessToast,
  showFailToast,
  closeToast
} from '../../uni_modules/zebra-ui'
const showToastTrends = () => {
  const toast = showLoadingToast({
    duration: 0,
    forbidClick: true,
    message: '倒计时 3 秒'
  })

  let second = 3
  const timer = setInterval(() => {
    second--
    if (second) {
      toast!.state.message = `倒计时 ${second} 秒`
    } else {
      clearInterval(timer)
      closeToast()
    }
  }, 1000)
}

const show = ref(false)
</script>

<style lang="scss" scoped>
.demo-toast {
  .toast-custom {
    display: flex;
    align-items: center;
    padding: 30rpx;
  }

  .toast-button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
