<template>
  <view>
    <template v-if="slotDefault()">
      <view class="zebra-badge__wrapper" :style="[rootStyle()]">
        <!-- @slot 徽标默认插槽 -->
        <slot></slot>
        <template v-if="hasContent() || dot">
          <view
            :class="[bemMethods('badge', { dot: dot, fixed: !!slotDefault() })]"
            :style="{ background: color }"
          >
            <template v-if="!dot && hasContent()">
              <template v-if="slotContent()">
                <!-- @slot 徽标内容 -->
                <slot name="content"></slot>
              </template>
              <template v-else>
                <template v-if="maxShow"> {{ max }}+ </template>
                <template v-else>
                  {{ content }}
                </template>
              </template>
            </template>
          </view>
        </template>
      </view>
    </template>
    <template v-else>
      <template v-if="hasContent() || dot">
        <view
          :class="[bemMethods('badge', { dot: dot, fixed: !!slotDefault() })]"
          :style="{ background: color }"
        >
          <template v-if="!dot && hasContent()">
            <template v-if="slotContent()">
              <slot name="content"></slot>
            </template>
            <template v-else>
              <template v-if="maxShow"> {{ max }}+ </template>
              <template v-else>
                {{ content }}
              </template>
            </template>
          </template>
        </view>
      </template>
    </template>
  </view>
</template>

<script>
import bem from "../../static/utils/bem.js";
import { isDef, isNumeric } from "../../libs/utils/validator.js";
import { styleToObj } from "../../static/utils/utils.js";
export default {
  name: "z-badge",
  props: {
    /**
     * 是否显示为小红点样式
     */
    dot: {
      type: Boolean,
      default: false,
    },
    /**
     * 当内容为数字时，显示的最大值，超过该数值会显示为x+
     */
    max: {
      type: [Number, String],
      default: null,
    },
    /**
     * 背景颜色
     */
    color: {
      type: String,
      default: "",
    },
    /**
     * 内容
     */
    content: {
      type: [Number, String],
      default: null,
    },
    /**
     * 自定义样式
     */
    customStyle: {
      type: String,
      default: "",
    },
    /**
     * 是否使用默认插槽，即被组件包裹的子元素（仅支付宝小程序需要声明此属性）
     * @since 支付宝小程序
     */
    useSlot: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否使用内容插槽，即自定义组件内容（仅支付宝小程序需要声明此属性）
     * @since 支付宝小程序
     */
    useContentSlot: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    maxShow() {
      return (
        this.isDefMethods(this.max) &&
        this.isNumericMethods(this.content) &&
        +this.content > this.max
      );
    },
  },
  methods: {
    slotDefault() {
      if (this.$scopedSlots) {
        return this.$scopedSlots.default || this.useSlot;
      }
      return this.useSlot;
    },
    slotContent() {
      if (this.$scopedSlots) {
        return this.$scopedSlots.content || this.useContentSlot;
      }
      return this.useContentSlot;
    },
    rootStyle() {
      return styleToObj(this.customStyle);
    },
    bemMethods(name, conf) {
      return bem(name, conf);
    },
    isDefMethods(value) {
      return isDef(value);
    },
    isNumericMethods(value) {
      return isNumeric(value);
    },
    hasContent() {
      if (this.$scopedSlots) {
        return !!(
          this.$scopedSlots ||
          this.$scopedSlots.content ||
          this.useContentSlot ||
          (isDef(this.content) && this.content !== "")
        );
      }
      return !!(
        this.useContentSlot ||
        (isDef(this.content) && this.content !== "")
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../static/css/var.scss";

.zebra-badge {
  display: inline-block;
  box-sizing: border-box;
  min-width: $badge-size;
  padding: $badge-padding;
  color: $badge-color;
  font-weight: $badge-font-weight;
  font-size: $badge-font-size;
  font-family: $badge-font-family;
  line-height: 1.2;
  text-align: center;
  background-color: $badge-background-color;
  border: $badge-border-width solid $white;
  border-radius: $border-radius-max;

  &--fixed {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100%;
  }

  &--dot {
    width: $badge-dot-size;
    min-width: 0;
    height: $badge-dot-size;
    background-color: $badge-dot-color;
    border-radius: 100%;
  }

  &__wrapper {
    position: relative;
    display: inline-block;
  }
}
</style>
