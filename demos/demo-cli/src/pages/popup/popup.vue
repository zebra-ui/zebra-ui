<template>
  <DemoPage title="Popup">
    <view class="demo-popup">
      <demo-block title="基础用法">
        <z-cell title="展示弹出层" is-link @click="show = true" />
        <z-popup v-model:show="show">
          <view class="popup-content"> 内容 </view>
        </z-popup>
      </demo-block>
      <demo-block title="弹出位置">
        <z-cell title="顶部弹出" is-link @click="showTop = true" />
        <z-cell title="底部弹出" is-link @click="showBottom = true" />
        <z-cell title="左侧弹出" is-link @click="showLeft = true" />
        <z-cell title="右侧弹出" is-link @click="showRight = true" />
        <z-popup
          v-model:show="showTop"
          position="top"
          :custom-style="{ height: '30%' }"
        ></z-popup>
        <z-popup
          v-model:show="showBottom"
          position="bottom"
          :custom-style="{ height: '30%' }"
        ></z-popup>
        <z-popup
          v-model:show="showLeft"
          position="left"
          :custom-style="{ width: '30%', height: '100%' }"
        ></z-popup>
        <z-popup
          v-model:show="showRight"
          position="right"
          :custom-style="{ width: '30%', height: '100%' }"
        ></z-popup>
      </demo-block>
      <demo-block title="关闭图标">
        <z-cell title="关闭图标" is-link @click="showClose = true" />
        <z-cell title="自定义图标" is-link @click="showCloseCustom = true" />
        <z-cell title="图标位置" is-link @click="showClosePosition = true" />
        <z-popup
          v-model:show="showClose"
          closeable
          position="bottom"
          :custom-style="{ height: '30%' }"
        ></z-popup>
        <z-popup
          v-model:show="showCloseCustom"
          closeable
          close-icon="close-circle"
          position="bottom"
          :custom-style="{ height: '30%' }"
        ></z-popup>
        <z-popup
          v-model:show="showClosePosition"
          closeable
          close-icon-position="top-left"
          position="bottom"
          :custom-style="{ height: '30%' }"
        ></z-popup>
      </demo-block>
      <demo-block title="圆角弹窗">
        <z-cell title="圆角居中" is-link @click="showRadiusCenter = true" />
        <z-cell title="圆角底部" is-link @click="showRadiusBottom = true" />
        <z-popup v-model:show="showRadiusCenter" round>
          <view class="popup-content"> 内容 </view>
        </z-popup>
        <z-popup
          v-model:show="showRadiusBottom"
          round
          position="bottom"
          :custom-style="{ height: '30%' }"
        ></z-popup>
      </demo-block>
      <demo-block title="事件">
        <z-cell title="点击事件" is-link @click="showEvent = true" />
        <z-cell title="显示关闭事件" is-link @click="showEventHide = true" />
        <z-popup
          v-model:show="showEvent"
          position="bottom"
          closeable
          :custom-style="{ height: '30%' }"
          @click-overlay="onClickOverlay"
          @click-close-icon="onClickCloseIcon"
        ></z-popup>
        <z-popup
          v-model:show="showEventHide"
          position="bottom"
          closeable
          :custom-style="{ height: '30%' }"
          @open="showToast('open')"
          @opened="showToast('opened')"
          @close="showToast('close')"
          @closed="showToast('closed')"
        ></z-popup>
      </demo-block>
      <z-toast ref="zToast"></z-toast>
    </view>
  </DemoPage>
</template>

<script lang="ts" setup>
import { showToast } from '@zebra-ui/uniapp'
import { ref } from 'vue'
const show = ref(false)
const showTop = ref(false)
const showBottom = ref(false)
const showLeft = ref(false)
const showRight = ref(false)
const showClose = ref(false)
const showCloseCustom = ref(false)
const showClosePosition = ref(false)
const showRadiusCenter = ref(false)
const showRadiusBottom = ref(false)
const showEvent = ref(false)
const showEventHide = ref(false)

const onClickOverlay = () => {
  showToast('click-overlay')
}
const onClickCloseIcon = () => {
  showToast('click-close-icon')
}
</script>

<style lang="scss" scoped>
.demo-popup {
  .popup-content {
    padding: 100rpx;
    color: var(--z-text-color);
  }
}
</style>
