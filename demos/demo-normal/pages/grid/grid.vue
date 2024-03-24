<template>
  <DemoPage title="Grid">
    <view class="demo-grid">
      <demo-block title="基础用法">
        <z-grid>
          <z-grid-item v-for="i in 4" :key="i" icon="image" text="文字" />
        </z-grid>
      </demo-block>
      <demo-block title="自定义列数">
        <z-grid :column-num="3">
          <z-grid-item v-for="i in 6" :key="i" icon="image" text="文字" />
        </z-grid>
      </demo-block>
      <demo-block title="自定义内容">
        <z-grid :border="false" :column-num="3">
          <z-grid-item>
            <z-image
              mode="widthFix"
              src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg"
            />
          </z-grid-item>
          <z-grid-item>
            <z-image
              mode="widthFix"
              src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg"
            />
          </z-grid-item>
          <z-grid-item>
            <z-image
              mode="widthFix"
              src="https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg"
            />
          </z-grid-item>
        </z-grid>
      </demo-block>
      <demo-block title="正方形格子">
        <z-grid square>
          <z-grid-item v-for="i in 8" :key="i" icon="image" text="文字" />
        </z-grid>
      </demo-block>
      <demo-block title="格子间距">
        <z-grid :gutter="10">
          <z-grid-item v-for="i in 8" :key="i" icon="image" text="文字" />
        </z-grid>
      </demo-block>
      <demo-block title="内容横排">
        <z-grid direction="horizontal" :column-num="3">
          <z-grid-item icon="image" text="文字" />
          <z-grid-item icon="image" text="文字" />
          <z-grid-item icon="image" text="文字" />
        </z-grid>
      </demo-block>
      <demo-block title="徽标提示">
        <z-grid :column-num="2">
          <z-grid-item icon="home" text="文字" dot />
          <z-grid-item icon="search" text="文字" badge="99+" />
        </z-grid>
      </demo-block>
    </view>
  </DemoPage>
</template>
<style lang="scss" scoped>
.demo-grid {
  color: var(--z-text-color);
}
</style>
