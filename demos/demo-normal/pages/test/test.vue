<template>
  <view>
    <view class="" @click="inputClick">
      <input
        ref="inputRef"
        style="pointer-events: none"
        type="text"
        @click="inputClick"
      />
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const inputRef = ref()

const inputClick = () => {}
</script>
