<template>
  <DemoPage title="Loading">
    <view class="demo-loading">
      <demo-block title="基础用法">
        <z-row gutter="20">
          <z-col span="6">
            <z-loading />
          </z-col>
          <z-col span="6">
            <z-loading type="spinner" />
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="自定义颜色">
        <z-row gutter="20">
          <z-col span="6">
            <z-loading color="#1989fa" />
          </z-col>
          <z-col span="6">
            <z-loading color="#1989fa" type="spinner" />
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="自定义大小">
        <z-row gutter="20">
          <z-col span="6">
            <z-loading color="#1989fa" size="24" />
          </z-col>
          <z-col span="6">
            <z-loading color="#1989fa" type="spinner" size="24" />
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="显示文字">
        <z-row gutter="20" align="center">
          <z-col span="8">
            <z-loading size="24">加载中...</z-loading>
          </z-col>
          <z-col span="6">
            <z-loading size="24" vertical>加载中...</z-loading>
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="文本颜色">
        <z-row gutter="20" align="center">
          <z-col span="8">
            <z-loading size="24" text-color="#0094ff">加载中...</z-loading>
          </z-col>
          <z-col span="6">
            <z-loading size="24" vertical text-color="#0094ff"
              >加载中...</z-loading
            >
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="自定义图标">
        <z-row gutter="20" align="center">
          <z-col span="8">
            <z-loading size="30">
              <template #icon>
                <z-icon name="undo" size="30" />
              </template>
            </z-loading>
          </z-col>
          <z-col span="6">
            <z-loading size="30">
              <template #icon>
                <z-icon name="reloadtime" size="30" />
              </template>
            </z-loading>
          </z-col>
        </z-row>
      </demo-block>
    </view>
  </DemoPage>
</template>
