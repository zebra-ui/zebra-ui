<template>
  <DemoPage title="Cascader">
    <view class="demo-cascader">
      <demo-block title="基础用法">
        <z-field
          v-model="fieldValue"
          is-link
          readonly
          label="地区"
          placeholder="请选择所在地区"
          @click="showCascader()"
        />
        <z-popup v-model:show="show" round position="bottom">
          <z-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </z-popup>
      </demo-block>
      <demo-block title="完整省市区数据">
        <z-field
          v-model="fieldValueAll"
          is-link
          readonly
          label="地区"
          placeholder="请选择所在地区"
          @click="showCascaderAll()"
        />
        <z-popup v-model:show="showAll" round position="bottom">
          <z-cascader
            v-model="cascaderValueAll"
            title="请选择所在地区"
            :options="optionsAll"
            @close="showAll = false"
            @finish="onFinishAll"
          />
        </z-popup>
      </demo-block>
      <demo-block title="自定义颜色">
        <z-field
          v-model="fieldValueColor"
          is-link
          readonly
          label="地区"
          placeholder="请选择所在地区"
          @click="showCascaderColor()"
        />
        <z-popup v-model:show="showColor" round position="bottom">
          <z-cascader
            v-model="cascaderValueColor"
            title="请选择所在地区"
            :options="optionsColor"
            active-color="#ee0a24"
            @close="showColor = false"
            @finish="onFinishColor"
          />
        </z-popup>
      </demo-block>
      <demo-block title="异步加载选项">
        <z-field
          v-model="fieldValueAsync"
          is-link
          readonly
          label="地区"
          placeholder="请选择所在地区"
          @click="showCascaderAsync()"
        />
        <z-popup v-model:show="showAsync" round position="bottom">
          <z-cascader
            v-model="cascaderValueAsync"
            title="请选择所在地区"
            :options="optionsAsync"
            @close="showAsync = false"
            @change="onChangeAsync"
            @finish="onFinishAsync"
          />
        </z-popup>
      </demo-block>
      <demo-block title="自定义字段名">
        <z-field
          v-model="fieldValueCustom"
          is-link
          readonly
          label="地区"
          placeholder="请选择所在地区"
          @click="showCascaderCustom()"
        />
        <z-popup v-model:show="showCustom" round position="bottom">
          <z-cascader
            v-model="cascaderValueCustom"
            title="请选择所在地区"
            :options="optionsCustom"
            :field-names="fieldNames"
            @close="showCustom = false"
            @finish="onFinishCustom"
          />
        </z-popup>
      </demo-block>
      <demo-block title="自定义选项上方内容">
        <z-field
          v-model="fieldValueTop"
          is-link
          readonly
          label="地区"
          placeholder="请选择所在地区"
          @click="showCascaderTop()"
        />
        <z-popup v-model:show="showTop" round position="bottom">
          <z-cascader
            v-model="cascaderValueTop"
            title="请选择所在地区"
            :options="optionsTop"
            @close="showTop = false"
            @finish="onFinishTop"
          >
            <template #options-top="{ tabIndex }">
              <div class="current-level">当前为第 {{ tabIndex + 1 }} 级</div>
            </template>
          </z-cascader>
        </z-popup>
      </demo-block>
    </view>
  </DemoPage>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from '../../uni_modules/zebra-ui'
import { useCascaderAreaData } from '../../common/js/area'
const toast = useToast()
const show = ref(false)
const showColor = ref(false)
const showAsync = ref(false)
const showCustom = ref(false)
const showTop = ref(false)
const showAll = ref(false)
const fieldValue = ref('')
const fieldValueColor = ref('')
const fieldValueAsync = ref('')
const fieldValueCustom = ref('')
const fieldValueTop = ref('')
const fieldValueAll = ref('')
const cascaderValue = ref('')
const cascaderValueColor = ref('')
const cascaderValueAsync = ref('')
const cascaderValueCustom = ref('')
const cascaderValueTop = ref('')
const cascaderValueAll = ref('')
// 选项列表，children 代表子选项，支持多级嵌套
const options = ref<any>([])
const optionsColor = ref<any>([])
const optionsAsync = ref<any>([])
const optionsCustom = ref<any>([])
const optionsTop = ref<any>([])
const optionsAll = ref<any>([])
const fieldNames = {
  text: 'name',
  value: 'code',
  children: 'items'
}
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }: any) => {
  show.value = false
  fieldValue.value = selectedOptions.map((option: any) => option.text).join('/')
}
const onFinishColor = ({ selectedOptions }: any) => {
  showColor.value = false
  fieldValueColor.value = selectedOptions
    .map((option: any) => option.text)
    .join('/')
}
const onFinishAsync = ({ selectedOptions }: any) => {
  showAsync.value = false
  fieldValueAsync.value = selectedOptions
    .map((option: any) => option.text)
    .join('/')
}
const onFinishCustom = ({ selectedOptions }: any) => {
  showCustom.value = false
  fieldValueCustom.value = selectedOptions
    .map((option: any) => option.name)
    .join('/')
}
const onFinishTop = ({ selectedOptions }: any) => {
  showTop.value = false
  fieldValueTop.value = selectedOptions
    .map((option: any) => option.text)
    .join('/')
}
const onFinishAll = ({ selectedOptions }: any) => {
  showAll.value = false
  fieldValueAll.value = selectedOptions
    .map((option: any) => option.text)
    .join('/')
}

const showCascader = () => {
  options.value = [
    {
      text: '浙江省',
      value: '330000',
      children: [{ text: '杭州市', value: '330100' }]
    },
    {
      text: '江苏省',
      value: '320000',
      children: [{ text: '南京市', value: '320100' }]
    }
  ]
  show.value = true
}
const showCascaderAll = () => {
  optionsAll.value = useCascaderAreaData()
  showAll.value = true
}
const showCascaderColor = () => {
  optionsColor.value = [
    {
      text: '浙江省',
      value: '330000',
      children: [{ text: '杭州市', value: '330100' }]
    },
    {
      text: '江苏省',
      value: '320000',
      children: [{ text: '南京市', value: '320100' }]
    }
  ]
  showColor.value = true
}
const showCascaderCustom = () => {
  optionsCustom.value = [
    {
      name: '浙江省',
      code: '330000',
      items: [{ name: '杭州市', code: '330100' }]
    },
    {
      name: '江苏省',
      code: '320000',
      items: [{ name: '南京市', code: '320100' }]
    }
  ]
  showCustom.value = true
}
const showCascaderAsync = () => {
  optionsAsync.value = [
    {
      text: '浙江省',
      value: '330000',
      children: []
    }
  ]
  showAsync.value = true
}
const showCascaderTop = () => {
  optionsTop.value = [
    {
      text: '浙江省',
      value: '330000',
      children: [{ text: '杭州市', value: '330100' }]
    },
    {
      text: '江苏省',
      value: '320000',
      children: [{ text: '南京市', value: '320100' }]
    }
  ]
  showTop.value = true
}
const onChangeAsync = ({ value }: any) => {
  if (
    value === optionsAsync.value[0].value &&
    optionsAsync.value[0].children.length === 0
  ) {
    // 模拟数据请求
    toast.showLoadingToast('加载中...')
    setTimeout(() => {
      optionsAsync.value[0].children = [
        { text: '杭州市', value: '330100' },
        { text: '宁波市', value: '330200' }
      ]
      toast.closeToast()
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.demo-cascader {
  .current-level {
    padding: 32rpx 32rpx 0;
    font-size: 28rpx;
    color: var(--z-gray-6);
  }
}
</style>
