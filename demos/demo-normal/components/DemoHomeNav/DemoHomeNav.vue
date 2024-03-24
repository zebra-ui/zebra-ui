<template>
  <view class="demo-home-nav">
    <view class="demo-home-nav__title">{{ group.groupName }}</view>
    <view class="demo-home-nav__group">
      <view
        v-for="(item, index) in props.group.list"
        :key="index"
        class="demo-home-nav__block"
        @click="onClick(item.path)"
      >
        <view class="block-card">
          <view class="block-card-icon">
            <view
              :class="[
                'zebra-icon',
                'card-icon-content',
                'zebra-icon-' + item.image
              ]"
            />
            <view class="block-card-title">
              {{ item.title.split(' ')[1] }}
            </view>
            <view class="block-card-text">
              {{ item.title.split(' ')[0] }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  group: {
    type: Object,
    default: function () {
      return null
    }
  }
})
const onClick = (event: any) => {
  const url = `/pages${event}${event}`
  if (getCurrentPages().length > 9) {
    uni.redirectTo({
      url
    })
  } else {
    uni.navigateTo({
      url
    })
  }
}
</script>

<style scoped lang="scss">
.card-icon-content {
  font-size: 76rpx;
  color: #1874ca;
}

.demo-home-nav__title {
  margin: 0 32rpx;
  font-size: 28rpx;
  color: var(--z-text-color-2);
}

.demo-home-nav__group {
  display: flex;
  flex-wrap: wrap;
  padding: 20rpx 0;
}

.demo-home-nav__block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 330rpx;
  height: 300rpx;

  .block-card {
    box-sizing: border-box;
    width: 240rpx;
    height: 240rpx;
    padding: 30rpx;
    background-color: var(--zebra-background);
    border-radius: 26rpx;
    box-shadow:
      var(--zebra-shadow-size1) var(--zebra-shadow-size1)
        var(--zebra-shadow-size3) var(--zebra-shadow-background1),
      var(--zebra-shadow-size2) var(--zebra-shadow-size2)
        var(--zebra-shadow-size3) var(--zebra-shadow-background2);

    .block-card-title {
      margin-top: 20rpx;
      font-size: 32rpx;
      font-weight: bold;
      color: #1874ca;
    }

    .block-card-text {
      margin-top: 14rpx;
      font-size: 22rpx;
      color: var(--z-text-color-2);
    }
  }
}
</style>
