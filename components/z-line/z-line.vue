<template>
  <view
    :class="[
      bemMethods('divider', [{ dashed, hairline }, direction, contentPosition]),
    ]"
    :style="[rootStyle({ borderColor, textColor, fontSize, customStyle })]"
  >
    <!-- @slot 默认插槽 -->
    <slot />
  </view>
</template>

<script>
import bem from "../../static/utils/bem.js";
import { styleToObj } from "../../static/utils/utils.js";
import addUnit from "../../static/utils/add-unit.js";
export default {
  name: "z-line",
  props: {
    /**
     * 是否显示为虚线
     */
    dashed: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否使用细线条
     */
    hairline: {
      type: Boolean,
      default: false,
    },
    /**
     * 内容的位置
     * @values center,left,right
     */
    contentPosition: {
      type: String,
      default: "",
    },
    /**
     * 文字大小
     */
    fontSize: {
      type: String,
      default: "",
    },
    /**
     * 线条的颜色
     */
    borderColor: {
      type: String,
      default: "",
    },
    /**
     * 文字的颜色
     */
    textColor: {
      type: String,
      default: "",
    },
    /**
     * 自定义样式
     */
    customStyle: {
      type: String,
      default: "",
    },
    /**
     * 线条方向
     * @values row,col
     */
    direction: {
      type: String,
      default: "row",
    },
  },
  methods: {
    bemMethods(name, conf) {
      return bem(name, conf);
    },
    styleToObj(style) {
      return styleToObj(style);
    },
    rootStyle(data) {
      return {
        "border-color": data.borderColor,
        color: data.textColor,
        "font-size": addUnit(data.fontSize),
        ...styleToObj(data.customStyle),
      };
    },
  },
};
</script>

<style scoped lang="scss">
.zebra-divider {
  display: flex;
  align-items: center;
  margin: $divider-margin;
  color: $divider-text-color;
  font-size: $divider-font-size;
  line-height: $divider-line-height;
  border-color: $divider-border-color;
  border-style: solid;
  border-width: 0;

  &--row {
    &::before,
    &::after {
      display: block;
      flex: 1;
      box-sizing: border-box;
      height: 2rpx;
      border-color: inherit;
      border-style: inherit;
      border-width: $border-width-base 0 0;
    }
  }

  &--col {
    margin: 0;

    &::before,
    &::after {
      display: block;
      flex: 1;
      box-sizing: border-box;
      height: 100%;
      border-color: inherit;
      border-style: inherit;
      border-width: 0 0 0 $border-width-base;
    }
  }

  &::before {
    content: "";
  }

  &--hairline {
    &::before,
    &::after {
      transform: scaleY(0.5);
    }
  }

  &--dashed {
    border-style: dashed;
  }

  &--center,
  &--left,
  &--right {
    &::before {
      margin-right: $divider-content-padding;
    }

    &::after {
      margin-left: $divider-content-padding;
      content: "";
    }
  }

  &--left {
    &::before {
      max-width: $divider-content-left-width;
    }
  }

  &--right {
    &::after {
      max-width: $divider-content-right-width;
    }
  }
}
</style>
