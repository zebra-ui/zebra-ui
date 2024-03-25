<template>
  <view
    :style="[rootStyle({ width, height, radius })]"
    :class="['custom-class', bemMethods('image', { round })]"
    @click="onClick"
  >
    <image
      v-if="!error"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      class="image-class zebra-image__img"
      :show-menu-by-longpress="showMenuByLongpress"
      @load="onLoadHandler"
      @error="onErrorHandler"
    />

    <view
      v-if="loading && showLoading"
      class="loading-class zebra-image__loading"
    >
      <!-- @slot loading插槽 -->
      <slot v-if="useLoadingSlot" name="loading" />
      <view v-else class="zebra-image__loading-icon">
        <z-icon name="image_alt" size="64" />
      </view>
    </view>
    <view v-if="error && showError" class="error-class zebra-image__error">
      <!-- @slot 图片加载失败插槽 -->
      <slot v-if="useErrorSlot" name="error" />
      <view v-else class="zebra-image__error-icon">
        <z-icon name="warning" size="64" />
      </view>
    </view>
  </view>
</template>

<script>
import bem from "../../static/utils/bem.js";
import style from "../../static/utils/style.js";
import addUnit from "../../static/utils/add-unit.js";
export default {
  name: "z-image",
  props: {
    /**
     * 图片宽度
     */
    width: {
      type: [String, Number],
      default: "100%",
    },
    /**
     * 图片高度
     */
    height: {
      type: [String, Number],
      default: "100%",
    },
    /**
     * 图片圆角尺寸
     */
    radius: {
      type: [String, Number],
      default: 0,
    },
    /**
     * 图片是否展示为圆形
     */
    round: {
      type: Boolean,
      default: false,
    },
    /**
     * 图片路径
     */
    src: {
      type: String,
      default: "",
    },
    /**
     * 图片裁剪、缩放的模式，可选值与与uniapp中的图片保持一致
     */
    mode: {
      type: String,
      default: "aspectFill",
    },
    /**
     * 图片懒加载。只针对page与scroll-view下的image有效
     */
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    /**
     * 开启长按图片显示识别小程序码菜单
     * @since 微信小程序
     */
    showMenuByLongpress: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否展示图片加载中提示
     */
    showLoading: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否使用 loading 插槽
     */
    useLoadingSlot: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否展示图片加载失败提示
     */
    showError: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否使用 error 插槽
     */
    useErrorSlot: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      error: false,
      loading: true,
    };
  },
  methods: {
    onLoadHandler(event) {
      this.loading = false;
      /**
       * 图片加载完成事件
       * @property {object} event event
       */
      this.$emit("load", event.detail);
    },
    onErrorHandler(event) {
      this.loading = false;
      this.error = true;
      /**
       * 图片加载失败事件
       * @property {object} event event
       */
      this.$emit("error", event.detail);
    },
    onClick(event) {
      /**
       * 点击图片事件
       * @property {object} event event
       */
      this.$emit("click", event.detail);
    },
    bemMethods(name, conf) {
      return bem(name, conf);
    },
    rootStyle(data) {
      if (Number(data.radius)) {
        return {
          width: addUnit(data.width),
          height: addUnit(data.height),
          "border-radius": addUnit(data.radius),
        };
      } else {
        return {
          width: addUnit(data.width),
          height: addUnit(data.height),
        };
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../static/css/var";

.zebra-image {
  position: relative;
  display: inline-block;

  &--round {
    overflow: hidden;
    border-radius: 50%;

    img {
      border-radius: inherit;
    }
  }

  &__img,
  &__error,
  &__loading {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__error,
  &__loading {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $image-placeholder-text-color;
    font-size: $image-placeholder-font-size;
    background-color: $image-placeholder-background-color;
  }

  &__loading-icon {
    color: $image-loading-icon-color;
    font-size: $image-loading-icon-size;
  }

  &__error-icon {
    color: $image-error-icon-color;
    font-size: $image-error-icon-size;
  }
}
</style>
