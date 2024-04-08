# Sticky sticky layout

### introduce

The Sticky component has the same effect as the `position: sticky` property in CSS. When the component is within the screen range, it will be arranged according to the normal layout. When the component scrolls out of the screen range, it will always be fixed at the top of the screen.

> When customizing the navigation bar, you need to specify the custom-navbar attribute.

## Code Demo

### Basic usage

Just wrap the content in a `Sticky` component.

```html
<z-sticky custom-navbar>
   <z-button type="primary">Basic usage</z-button>
</z-sticky>
```

### Ceiling distance

The `offset-top` property can be used to set the distance between the component and the top when it is ceiling-mounted.

```html
<z-sticky custom-navbar :offset-top="50">
   <z-button type="primary" :custom-style="{ 'margin-left': '30%' }"
     >Basic usage</z-button
   >
</z-sticky>
```

###Specify container

The container of the component can be specified through the `container` attribute. When the page is scrolled, the component will always remain within the scope of the container. When the component is about to exceed the bottom of the container, it will be fixed to the bottom of the container.

```html
<view id="container" style="height: 300rpx; background-color: #fff">
   <z-sticky custom-navbar :container="container">
     <z-button
       type="warning"
       :custom-style="{ 'margin-left': '300rpx' }"
     >
       Specify container
     </z-button>
   </z-sticky>
</view>
```

```js
import { ref, onMounted } from 'vue'
const container = ref({})
onMounted(() => {
   const query = uni.createSelectorQuery()
   query
     .select('#container')
     .boundingClientRect((data) => {
       container.value = data
     })
     .exec()
})
```

### Used nested within scroll-view

When used in the `scroll-view` component, you need to listen to the `scroll` event and pass `scrollTop` and the top of the content layout to the component.

```html
<scroll-view
   @scroll="onScroll"
   scroll-y
   id="scroller"
   style="height: 400rpx; background-color: #fff"
>
   <view style="height: 800rpx; padding-top: 50px">
     <z-sticky :scroll-top="scrollTop" :offset-top="offsetTop">
       <z-button type="danger"> Nested within scroll-view </z-button>
     </z-sticky>
   </view>
</scroll-view>
```

```js
const scrollTop = ref(0)
const offsetTop = ref(0)

const onScroll = (event: any) => {
   uni
     .createSelectorQuery()
     .select('#scroller')
     .boundingClientRect((res: any) => {
       scrollTop.value = event.detail.scrollTop
       offsetTop.value = res.top
     })
     .exec()
}
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| offset-top | The distance from the top when ceiling is mounted, supports `rpx` unit, default is `px` | _number \| string_ | `0` |
| offset-bottom | The distance from the bottom when sucking the bottom, supports `rpx` unit, default `px` | _number \| string_ | `0` |
| z-index | z-index when ceiling | _number \| string_ | `99` |
| container | Layout information corresponding to the container | _object_ | - |
| custom-navbar | Whether to customize the navigation bar | _boolean_ | `false` |

### Events

| Event name | Description | Callback parameters |
| ------ | -------------------- | ------------------------------------------ |
| scroll | Triggered when scrolling | _{ scrollTop: number, isFixed: boolean }_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| -------------------- | ------ | ---- |
| --z-sticky-z-index | _99_ | - |