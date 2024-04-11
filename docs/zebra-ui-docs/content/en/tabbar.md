# Tabbar tab bar

### introduce

Bottom navigation bar for switching between different pages.

## Code Demo

### Basic usage

`v-model` is bound to the index value of the selected tag by default, and the selected tag can be switched by modifying `v-model`.

```html
<z-tabbar :fixed="false" v-model="active">
   <z-tabbar-item icon="home">Tab</z-tabbar-item>
   <z-tabbar-item icon="search">Tab</z-tabbar-item>
   <z-tabbar-item icon="bell">Tab</z-tabbar-item>
   <z-tabbar-item icon="setting">Tab</z-tabbar-item>
</z-tabbar>
```

```js
import { ref } from 'vue';
const active = ref(0);
```

### Match by name

When a tag specifies a `name` attribute, the value of `v-model` is the `name` of the current tag.

```html
<z-tabbar :fixed="false" v-model="activeName">
   <z-tabbar-item name="home" icon="home"> tag </z-tabbar-item>
   <z-tabbar-item name="search" icon="search"> tag </z-tabbar-item>
   <z-tabbar-item name="friends" icon="bell"> tag </z-tabbar-item>
   <z-tabbar-item name="setting" icon="setting"> tag </z-tabbar-item>
</z-tabbar>
```

```js
import { ref } from 'vue';
const active = ref('home');
```

### Logo Tips

After setting the `dot` attribute, a small red dot will be displayed in the upper right corner of the icon; after setting the `badge` attribute, the corresponding logo will be displayed in the upper right corner of the icon.

```html
<z-tabbar :fixed="false" v-model="active2">
   <z-tabbar-item icon="home">Tab</z-tabbar-item>
   <z-tabbar-item icon="search" dot>Tab</z-tabbar-item>
   <z-tabbar-item icon="bell" badge="5"> tag </z-tabbar-item>
   <z-tabbar-item icon="setting" badge="20"> Tag </z-tabbar-item>
</z-tabbar>
```

### Custom icon

Customize the icon through the `icon` slot, and you can use `slot-scope` to determine whether the label is selected.

```html
<z-tabbar :fixed="false" v-model="active3">
   <z-tabbar-item badge="3">
     <text>Customized</text>
     <template #icon="props">
       <image
         class="image"
         :src="props.active ? icon.active : icon.inactive"
       />
     </template>
   </z-tabbar-item>
   <z-tabbar-item icon="search">Tab</z-tabbar-item>
   <z-tabbar-item icon="setting">Tab</z-tabbar-item>
</z-tabbar>
```

```js
import { ref } from 'vue';
const active = ref(0);
const icon = {
   active: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-select.png',
   inactive: 'https://cdn.zebraui.com/zebra-ui/images/assets/demo-noselect.png'
}
```

### Custom color

Set the color of selected tags through the `active-color` attribute, and set the color of unselected tags through the `inactive-color` attribute.

```html
<z-tabbar :fixed="false" v-model="active4" active-color="#ee0a24">
   <z-tabbar-item icon="home">Tab</z-tabbar-item>
   <z-tabbar-item icon="search">Tab</z-tabbar-item>
   <z-tabbar-item icon="bell">Tab</z-tabbar-item>
   <z-tabbar-item icon="setting">Tab</z-tabbar-item>
</z-tabbar>
```

### Listen for switching events

Use the `change` event to monitor changes in the selected tag.

```html
<z-tabbar :fixed="false" v-model="active5" @change="onChange">
   <z-tabbar-item icon="home">Tab 1</z-tabbar-item>
   <z-tabbar-item icon="search">Tab 2</z-tabbar-item>
   <z-tabbar-item icon="bell">Tab 3</z-tabbar-item>
   <z-tabbar-item icon="setting">Tab 4</z-tabbar-item>
</z-tabbar>
```

```js
import { ref } from 'vue';
import { useToast } from '../../uni_modules/zebra-ui'
const toast = useToast()
const onChange = (index: number) => {
   toast.showToast(`Tag ${index + 1}`)
}
```

### background

Specify the background via the `background` attribute.

```html
<z-tabbar :fixed="false" v-model="active6" background>
   <z-tabbar-item icon="home">Tab</z-tabbar-item>
   <z-tabbar-item icon="search">Tab</z-tabbar-item>
   <z-tabbar-item icon="bell">Tab</z-tabbar-item>
   <z-tabbar-item icon="setting" badge="5">Tab</z-tabbar-item>
</z-tabbar>
```

## API

### Tabbar Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| v-model | The name or index value of the currently selected tag | _number \| string_ | `0` |
| fixed | Whether to be fixed at the bottom | _boolean_ | `true` |
| border | Whether to display the outer border | _boolean_ | `true` |
| z-index | element z-index | _number \| string_ | `1` |
| active-color | The color of the selected tag | _string_ | `#1989fa` |
| inactive-color | The color of unselected tags | _string_ | `#7d7e80` |
| placeholder | Whether to generate a placeholder element of equal height at the label position when fixed at the bottom | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation, it is enabled by default when fixed is set | _boolean_ | `false` |
| before-change | Callback function before switching labels, return `false` to prevent switching, support returning Promise | _(name: number \| string) => boolean \| Promise\<boolean\>_ | - |

### Tabbar Events

| Event name | Description | Callback parameters |
| ------ | -------------- | -------------------------- |
| change | Triggered when switching tags | _active: number \| string_ |

### TabbarItem Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| name | Tag name, as matching identifier | _number \| string_ | Index value of the current tag |
| icon | Icon name or image link, equivalent to the [name attribute](/icon#props) of the Icon component | _string_ | - |
| icon-prefix | Icon class name prefix, equivalent to the [class-prefix attribute](/icon#props) of the Icon component | _string_ | `z-icon` |
| dot | Whether to display the small red dot in the upper right corner of the icon | _boolean_ | `false` |
| badge | The content of the logo in the upper right corner of the icon | _number \| string_ | - |
| badge-props | Customize the properties of the logo. The incoming object will be transparently passed to [Badge component props](/badge#props) | _BadgeProps_ | - |

### TabbarItem Slots

| Name | Description | Parameters |
| ---- | ---------- | ------------------ |
| icon | custom icon | _active: boolean_ |

## Theme customization

### Style variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider component](/config-provider).

| Name | Default | Description |
| ------------------------------------ | --------------------------- | ---- |
| --z-tabbar-height | _100rpx_ | - |
| --z-tabbar-z-index | _1_ | - |
| --z-tabbar-background| _var(--z-background-2)_  | -    |
| --z-tabbar-item-font-size          | _var(--z-font-size-sm)_  | -    |
| --z-tabbar-item-text-color         | _var(--z-text-color)_    | -    |
| --z-tabbar-item-active-color       | _var(--z-primary-color)_ | -    |
| --z-tabbar-item-active-background  | _var(--z-background-2)_  | -    |
| --z-tabbar-item-line-height        | _1_                        | -    |
| --z-tabbar-item-icon-size          | _44rpx_                     | -    |
| --z-tabbar-item-icon-margin-bottom | _var(--z-padding-base)_  | -    |