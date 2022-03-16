<template>
  <view
    :class="['custom-class', bemMethods('loading', { vertical })]"
    :style="[styleToObj(customStyle)]"
  >
    <view v-if="template" :class="['zebra-loading__template--' + template]">
      <view
        v-if="['a', 'b', 'c', 'd', 'e', 'f'].includes(template)"
        class="container loading"
      >
        <view class="shape shape1"></view>
        <view class="shape shape2"></view>
        <view class="shape shape3"></view>
        <view class="shape shape4"></view>
      </view>
    </view>

    <view
      v-else
      :class="['zebra-loading__spinner', 'zebra-loading__spinner--' + type]"
      :style="[spinnerStyle({ color, size })]"
    >
      <view
        v-if="type === 'spinner'"
        v-for="(item, index) in array12"
        :key="index"
        class="zebra-loading__dot"
      />
    </view>
    <view
      class="zebra-loading__text"
      :style="[textStyle({ textSize, textColor })]"
    >
      <!-- @slot 默认插槽 -->
      <slot />
    </view>
  </view>
</template>

<script>
import bem from "../../static/utils/bem.js";
import addUnit from "../../static/utils/add-unit.js";
import { styleToObj } from "../../static/utils/utils.js";
export default {
  name: "z-loading",
  props: {
    /**
     * 加载类型
     * @values circular,spinner
     */
    type: {
      type: String,
      default: "circular",
    },
    /**
     * 加载组件的颜色
     */
    color: {
      type: String,
      default: "#c9c9c9",
    },
    /**
     * 加载图标大小，默认单位为 rpx
     */
    size: {
      type: String,
      default: "40rpx",
    },
    /**
     * 文字大小，默认单位为为 rpx
     */
    textSize: {
      type: String,
      default: "28rpx",
    },
    /**
     * 文字颜色
     */
    textColor: {
      type: String,
      default: "",
    },
    /**
     * 是否垂直排列图标和文字内容
     */
    vertical: {
      type: Boolean,
      default: false,
    },
    /**
     * 自定义样式
     */
    customStyle: {
      type: String,
      default: "",
    },
    /**
     * 加载模板
     * @values a,b,c,d,e,f
     */
    template: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      array12: Array.from({
        length: 12,
      }),
    };
  },
  methods: {
    bemMethods(name, conf) {
      return bem(name, conf);
    },
    styleToObj(style) {
      return styleToObj(style);
    },
    spinnerStyle(data) {
      return {
        color: data.color,
        width: addUnit(data.size),
        height: addUnit(data.size),
      };
    },
    textStyle(data) {
      return {
        "font-size": addUnit(data.textSize),
        color: data.textColor || this.color,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../static/css/var";
@import "../../static/css/loading";

.zebra-loading {
  align-items: center;
  color: #c8c9cc;
  display: flex;
  justify-content: center;
}

.zebra-loading__spinner {
  animation: zebra-rotate 0.8s linear infinite;
  box-sizing: border-box;
  height: 30rpx;
  max-height: 100%;
  max-width: 100%;
  position: relative;
  width: 30rpx;
}

.zebra-loading__spinner--spinner {
  animation-timing-function: steps(12);
}

.zebra-loading__spinner--circular {
  border: 1rpx solid transparent;
  border-radius: 100%;
  border-top-color: initial;
}

.zebra-loading__text {
  color: #969799;
  font-size: 28rpx;
  line-height: 20rpx;
  margin-left: 16rpx;
}

.zebra-loading__text:empty {
  display: none;
}

.zebra-loading--vertical {
  flex-direction: column;
}

.zebra-loading--vertical .zebra-loading__text {
  margin: 30rpx 0 0;
}

.zebra-loading__dot {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.zebra-loading__dot:before {
  background-color: currentColor;
  border-radius: 40%;
  content: " ";
  display: block;
  height: 25%;
  margin: 0 auto;
  width: 2rpx;
}

.zebra-loading__dot:first-of-type {
  opacity: 1;
  transform: rotate(30deg);
}

.zebra-loading__dot:nth-of-type(2) {
  opacity: 0.9375;
  transform: rotate(60deg);
}

.zebra-loading__dot:nth-of-type(3) {
  opacity: 0.875;
  transform: rotate(90deg);
}

.zebra-loading__dot:nth-of-type(4) {
  opacity: 0.8125;
  transform: rotate(120deg);
}

.zebra-loading__dot:nth-of-type(5) {
  opacity: 0.75;
  transform: rotate(150deg);
}

.zebra-loading__dot:nth-of-type(6) {
  opacity: 0.6875;
  transform: rotate(180deg);
}

.zebra-loading__dot:nth-of-type(7) {
  opacity: 0.625;
  transform: rotate(210deg);
}

.zebra-loading__dot:nth-of-type(8) {
  opacity: 0.5625;
  transform: rotate(240deg);
}

.zebra-loading__dot:nth-of-type(9) {
  opacity: 0.5;
  transform: rotate(270deg);
}

.zebra-loading__dot:nth-of-type(10) {
  opacity: 0.4375;
  transform: rotate(300deg);
}

.zebra-loading__dot:nth-of-type(11) {
  opacity: 0.375;
  transform: rotate(330deg);
}

.zebra-loading__dot:nth-of-type(12) {
  opacity: 0.3125;
  transform: rotate(1turn);
}

@keyframes zebra-rotate {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
