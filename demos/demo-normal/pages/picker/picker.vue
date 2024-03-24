<template>
  <DemoPage title="Picker">
    <view class="demo-picker">
      <demo-block title="基础用法">
        <z-picker
          title="标题"
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
        />
      </demo-block>
      <demo-block title="搭配弹出层使用">
        <z-field
          v-model="fieldValue"
          is-link
          readonly
          label="城市"
          placeholder="选择城市"
          @click="showPicker = true"
          @click-input="showPicker = true"
        />
        <z-popup v-model:show="showPicker" round position="bottom">
          <z-picker
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirmInput"
          />
        </z-popup>
      </demo-block>
      <demo-block title="双向绑定">
        <z-picker v-model="selectedValues" title="标题" :columns="columns" />
      </demo-block>
      <demo-block title="多列选择">
        <z-picker title="标题" :columns="columnsMore" />
      </demo-block>
      <demo-block title="级联选择">
        <z-picker title="标题" :columns="columnsCascade" />
      </demo-block>
      <demo-block title="禁用选项">
        <z-picker :columns="columnsDisabled" />
      </demo-block>
      <demo-block title="加载状态">
        <z-picker :loading="loading" />
      </demo-block>
      <demo-block title="自定义 Columns 的结构">
        <z-picker
          title="标题"
          :columns="columnsCustom"
          :columns-field-names="customFieldName"
        />
      </demo-block>
    </view>
    <z-toast ref="zToast"></z-toast>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showToast } from '../../uni_modules/zebra-ui'
const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
]
const columnsMore = [
  [
    { text: '周一', value: 'Monday' },
    { text: '周二', value: 'Tuesday' },
    { text: '周三', value: 'Wednesday' },
    { text: '周四', value: 'Thursday' },
    { text: '周五', value: 'Friday' }
  ],
  [
    { text: '上午', value: 'Morning' },
    { text: '下午', value: 'Afternoon' },
    { text: '晚上', value: 'Evening' }
  ]
]
const columnsCascade = [
  {
    text: '浙江',
    value: 'Zhejiang',
    children: [
      {
        text: '杭州',
        value: 'Hangzhou',
        children: [
          { text: '西湖区', value: 'Xihu' },
          { text: '余杭区', value: 'Yuhang' }
        ]
      },
      {
        text: '温州',
        value: 'Wenzhou',
        children: [
          { text: '鹿城区', value: 'Lucheng' },
          { text: '瓯海区', value: 'Ouhai' }
        ]
      }
    ]
  },
  {
    text: '福建',
    value: 'Fujian',
    children: [
      {
        text: '福州',
        value: 'Fuzhou',
        children: [
          { text: '鼓楼区', value: 'Gulou' },
          { text: '台江区', value: 'Taijiang' }
        ]
      },
      {
        text: '厦门',
        value: 'Xiamen',
        children: [
          { text: '思明区', value: 'Siming' },
          { text: '海沧区', value: 'Haicang' }
        ]
      }
    ]
  }
]
const columnsDisabled = [
  { text: '杭州', value: 'Hangzhou', disabled: true },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' }
]
const columnsCustom = [
  {
    cityName: '浙江',
    cities: [
      {
        cityName: '杭州',
        cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }]
      },
      {
        cityName: '温州',
        cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }]
      }
    ]
  },
  {
    cityName: '福建',
    cities: [
      {
        cityName: '福州',
        cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }]
      },
      {
        cityName: '厦门',
        cities: [{ cityName: '思明区' }, { cityName: '海沧区' }]
      }
    ]
  }
]

const customFieldName = {
  text: 'cityName',
  value: 'cityName',
  children: 'cities'
}
const loading = ref(true)

const selectedValues = ref(['Wenzhou'])
const onConfirm = ({ selectedValues }: any) => {
  showToast(`当前值: ${selectedValues.join(',')}`)
}
const onChange = ({ selectedValues }: any) => {
  showToast(`当前值: ${selectedValues.join(',')}`)
}
const onCancel = () => showToast('取消')

const fieldValue = ref('')
const showPicker = ref(false)

const onConfirmInput = ({ selectedOptions }: any) => {
  showPicker.value = false
  fieldValue.value = selectedOptions[0].text
}
</script>
