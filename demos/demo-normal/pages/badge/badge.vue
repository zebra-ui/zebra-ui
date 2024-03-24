<template>
  <DemoPage title="Badge">
    <view class="demo-badge">
      <demo-block title="基础用法">
        <z-row gutter="20">
          <z-col span="6">
            <z-badge :content="5">
              <view class="child" />
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge :content="10">
              <view class="child" />
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge content="Hot">
              <view class="child" />
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge dot>
              <view class="child" />
            </z-badge>
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="最大值">
        <z-row gutter="20">
          <z-col span="6">
            <z-badge :content="20" max="9">
              <view class="child" />
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge :content="50" max="20">
              <view class="child" />
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge :content="200" max="99">
              <view class="child" />
            </z-badge>
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="自定义颜色">
        <z-row gutter="20">
          <z-col span="6">
            <z-badge :content="5" color="#1989fa">
              <view class="child" />
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge :content="10" color="#1989fa">
              <view class="child" />
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge dot color="#1989fa">
              <view class="child" />
            </z-badge>
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="自定义内容">
        <z-row gutter="20">
          <z-col span="6">
            <z-badge>
              <view class="child" />
              <template #content>
                <z-icon name="download" />
              </template>
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge>
              <view class="child" />
              <template #content>
                <z-icon name="flag" />
              </template>
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge>
              <view class="child" />
              <template #content>
                <z-icon name="mail" />
              </template>
            </z-badge>
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="自定义位置">
        <z-row gutter="20">
          <z-col span="6">
            <z-badge :content="10" position="top-left">
              <view class="child" />
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge :content="10" position="bottom-left">
              <view class="child" />
            </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge :content="10" position="bottom-right">
              <view class="child" />
            </z-badge>
          </z-col>
        </z-row>
      </demo-block>
      <demo-block title="独立展示">
        <z-row gutter="20">
          <z-col span="6">
            <z-badge :content="10"> </z-badge>
          </z-col>
          <z-col span="6">
            <z-badge :content="10" max="9"> </z-badge>
          </z-col>
        </z-row>
      </demo-block>
    </view>
  </DemoPage>
</template>

<style scoped lang="scss">
.demo-badge {
  .child {
    width: 80rpx;
    height: 80rpx;
    background: #fff;
    border-radius: 8rpx;
  }
}
</style>
