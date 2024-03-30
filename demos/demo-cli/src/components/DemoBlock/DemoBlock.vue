<template>
  <view class="zebra-doc-demo-wrapper">
    <view class="zebra-doc-demo-block">
      <view v-if="props.title" class="zebra-doc-demo-block__title">{{
        props.title
      }}</view>
      <view v-if="props.card" class="zebra-doc-demo-block__card">
        <slot />
      </view>
      <slot v-else />
    </view>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  card: {
    type: Boolean,
    default: true
  },
  title: String
})
</script>

<script lang="ts">
export default {
  name: 'DemoBlock',
  options: {
    virtualHost: true
  }
}
</script>

<style lang="scss">
@import '../../common/style/var';

.zebra-doc-demo-wrapper {
  padding: 0 40rpx 40rpx;

  .zebra-doc-demo-block {
    overflow: hidden;
    background: var(--zebra-background);
    border-radius: 10rpx;
    box-shadow:
      var(--zebra-shadow-size1) var(--zebra-shadow-size1)
        var(--zebra-shadow-size3) var(--zebra-shadow-background1),
      var(--zebra-shadow-size2) var(--zebra-shadow-size2)
        var(--zebra-shadow-size3) var(--zebra-shadow-background2);

    &__title {
      padding: 30rpx;
      margin: 0;
      font-size: 28rpx;
      font-weight: normal;
      line-height: 32rpx;
      color: var(--z-text-color-2);
      border-bottom: 2rpx solid var(--z-line-color);
    }

    &__card {
      padding: 30rpx;
    }

    &__title + &__card {
      margin-top: 0;
    }
  }
}

.zebra-doc-demo-wrapper:first-of-type {
  padding-top: 40rpx;
}
</style>
