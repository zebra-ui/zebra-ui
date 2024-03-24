<template>
  <DemoPage title="Area">
    <view class="demo-area">
      <demo-block title="基础用法">
        <z-area title="标题" :area-list="areaList" />
      </demo-block>
      <demo-block title="控制选中项">
        <z-area v-model="valueSelect" title="标题" :area-list="areaList" />
      </demo-block>
      <demo-block title="配置显示列">
        <z-area title="标题" :area-list="areaList" :columns-num="2" />
      </demo-block>
      <demo-block title="配置列占位提示文字">
        <z-area
          title="标题"
          :area-list="areaList"
          :columns-placeholder="['请选择', '请选择', '请选择']"
        />
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { areaList } from '../../common/js/area'
const valueSelect = ref('330302')
</script>
