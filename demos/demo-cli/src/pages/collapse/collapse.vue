<template>
  <DemoPage title="Collapse">
    <view class="demo-collapse">
      <demo-block title="基础用法">
        <z-collapse v-model="active1">
          <z-collapse-item title="标题1">
            zebra-swiper是基于uniapp开发的一款移动端轮播组件。
          </z-collapse-item>
          <z-collapse-item title="标题2">
            zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
            其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
          </z-collapse-item>
          <z-collapse-item title="标题3">
            在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。
            通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。
            同时，也可以通过$refs的方式调用组件的方法。
          </z-collapse-item>
        </z-collapse>
      </demo-block>
      <demo-block title="手风琴">
        <z-collapse v-model="active2" accordion>
          <z-collapse-item title="标题1">
            zebra-swiper是基于uniapp开发的一款移动端轮播组件。
          </z-collapse-item>
          <z-collapse-item title="标题2">
            zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
            其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
          </z-collapse-item>
          <z-collapse-item title="标题3">
            在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。
            通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。
            同时，也可以通过$refs的方式调用组件的方法。
          </z-collapse-item>
        </z-collapse>
      </demo-block>
      <demo-block title="禁用">
        <z-collapse v-model="active3">
          <z-collapse-item title="标题1">
            zebra-swiper是基于uniapp开发的一款移动端轮播组件。
          </z-collapse-item>
          <z-collapse-item title="标题2" disabled>
            zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
            其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
          </z-collapse-item>
          <z-collapse-item title="标题3" disabled>
            在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。
            通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。
            同时，也可以通过$refs的方式调用组件的方法。
          </z-collapse-item>
        </z-collapse>
      </demo-block>
      <demo-block title="自定义标题">
        <z-collapse v-model="active4">
          <z-collapse-item>
            <template #title> 标题1<z-icon name="tag" /> </template>
            zebra-swiper是基于uniapp开发的一款移动端轮播组件。
          </z-collapse-item>
          <z-collapse-item title="标题2" value="内容" icon="question-circle">
            zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
            其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
          </z-collapse-item>
        </z-collapse>
      </demo-block>
      <demo-block title="全部展开与全部切换">
        <z-collapse v-model="active5" ref="collapse">
          <z-collapse-item title="标题1" name="1">
            zebra-swiper是基于uniapp开发的一款移动端轮播组件。
          </z-collapse-item>
          <z-collapse-item title="标题2" name="2">
            zebraSwiper 组件主要由 z-swiper，z-swiper-item 组成。
            其中，z-swiper-item 组件只可放置在 z-swiper 组件中。
          </z-collapse-item>
          <z-collapse-item title="标题3" name="3">
            在使用组件时，可以通过props像组件传递参数，从而实现不同的配置。
            通常，配置都将通过options对象传递给组件。所以配置项都应该写进options中。
            同时，也可以通过$refs的方式调用组件的方法。
          </z-collapse-item>
        </z-collapse>

        <view class="demo-collapse-buttons">
          <z-button type="primary" @click="openAll"> 全部展开 </z-button>
          <z-button
            type="primary"
            :custom-style="{ 'margin-left': '30rpx' }"
            @click="toggleAll"
          >
            全部切换
          </z-button>
        </view>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const active1 = ref([0])
const active2 = ref(0)
const active3 = ref([])
const active4 = ref([])
const active5 = ref(['1'])

const collapse = ref()

const openAll = () => {
  collapse.value?.toggleAll?.(true)
}
const toggleAll = () => {
  collapse.value?.toggleAll?.()
}
</script>
<style lang="scss" scoped>
.demo-collapse {
  &-buttons {
    margin-top: var(--z-padding-md);
  }
}
</style>
