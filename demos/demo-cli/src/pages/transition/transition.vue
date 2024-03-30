<template>
  <DemoPage title="Transition">
    <view class="demo-transition">
      <demo-block title="基础用法">
        <z-cell-group>
          <z-cell is-link title="Fade" @click="animate('fade')" />
          <z-cell is-link title="Slide Up" @click="animate('slide-up')" />
          <z-cell is-link title="Slide Down" @click="animate('slide-down')" />
          <z-cell is-link title="Slide Left" @click="animate('slide-left')" />
          <z-cell is-link title="Slide Right" @click="animate('slide-right')" />
        </z-cell-group>
      </demo-block>
      <z-transition v-model:show="show" :name="transitionName">
        <view class="demo-animate-content">
          <view class="demo-animate-block" />
        </view>
      </z-transition>
    </view>
  </DemoPage>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const transitionName = ref('')

const animate = (newName: string) => {
  show.value = true
  transitionName.value = newName

  setTimeout(() => {
    show.value = false
  }, 500)
}
</script>

<style lang="scss" scoped>
.demo-transition {
  .demo-animate-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500rpx;

    .demo-animate-block {
      width: 200rpx;
      height: 200rpx;
      background-color: var(--z-blue);
      border-radius: 16rpx;
    }
  }
}
</style>
