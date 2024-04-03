<template>
  <DemoPage title="Navbar">
    <view class="demo-navbar">
      <demo-block title="基础用法">
        <z-nav-bar title="标题" />
      </demo-block>
      <demo-block title="返回上级">
        <z-nav-bar title="标题" left-text="返回" left-arrow />
      </demo-block>
      <demo-block title="右侧按钮">
        <z-nav-bar
          title="标题"
          left-text="返回"
          right-text="按钮"
          left-arrow
          @click-right="toast.showToast('按钮')"
        />
      </demo-block>
      <demo-block title="使用插槽">
        <z-nav-bar title="标题" left-text="返回" left-arrow>
          <template #right>
            <z-icon name="search" size="18" />
          </template>
        </z-nav-bar>
      </demo-block>
      <demo-block title="禁用按钮">
        <z-nav-bar
          title="标题"
          left-text="返回"
          right-text="按钮"
          left-arrow
          left-disabled
          right-disabled
        />
      </demo-block>
    </view>
  </DemoPage>
</template>

<script setup lang="ts">
// @ts-ignore
// eslint-disable-next-line no-undef
const toast = useToast()
</script>
