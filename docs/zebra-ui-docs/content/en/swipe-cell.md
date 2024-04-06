# SwipeCell sliding cell

### introduce

Cell components that can be swiped left or right to display action buttons.

## Code Demo

### Basic usage

The `SwipeCell` component provides two slots, `left` and `right`, for defining the contents of the sliding areas on both sides.

```html
<z-swipe-cell>
   <template #left>
     <z-button square type="primary" text="select" />
   </template>
   <z-cell :border="false" title="cell" value="content" />
   <template #right>
     <z-button square type="danger" text="Delete" />
     <z-button square type="primary" text="Collection" />
   </template>
</z-swipe-cell>
```

### Custom content

`SwipeCell` can nest any content, such as nesting a product card.

```html
<z-swipe-cell>
   <z-card title="title" :cover="cover" header-bordered>
     This is a text
     <template #actions>
       <z-button type="primary" size="mini">Operation</z-button>
     </template>
   </z-card>
   <template #right>
     <z-button
       square
       type="danger"
       text="delete"
       :custom-style="{ height: '100%' }"
     />
   </template>
</z-swipe-cell>
```

```js
import { ref } from 'vue'
const cover = ref(
   'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg'
)
```

### Asynchronous shutdown

By passing in the `before-close` callback function, you can customize the behavior when the sliding content on both sides is closed.

```html
<z-swipe-cell :before-close="beforeClose">
   <template #left>
     <z-button square type="primary" text="select" />
   </template>
   <z-cell :border="false" title="cell" value="content" />
   <template #right>
     <z-button square type="danger" text="Delete" />
   </template>
</z-swipe-cell>
```

```js
import { useDialog } from '../../uni_modules/zebra-ui'
const dialog = useDialog()
const beforeClose = ({ position }: { position: string }) => {
   switch (position) {
     case 'left':
     case 'cell':
     case 'outside':
       return true
     case 'right':
       return new Promise<boolean>((resolve) => {
         dialog
           .showConfirmDialog({
             title: 'Are you sure to delete'
           })
           .then(() => resolve(true))
           .catch(() => resolve(false))
       })
   }
}
```

## API

### Props

| Parameters | Description | Type | Default value |
| --- | --- | --- | --- |
| name | Identifier, usually a unique string or number, which can be obtained in the event parameters | _number \| string_ | `''` |
| left-width | Specifies the width of the left sliding area in `px` | _number \| string_ | `auto` |
| right-width | Specifies the width of the right sliding area, in `px` | _number \| string_ | `auto` |
| before-close | Callback function before closing, return `false` to prevent closing, support returning Promise | _(args) => boolean \| Promise\<boolean\>_ | - |
| disabled | Whether to disable sliding | _boolean_ | `false` |

### Slots

| Name | Description |
| ------- | ------------------ |
| default | Content displayed by default |
| left | Contents of the left sliding area |
| right | Contents of the right sliding area |

### Events

| Event name | Description | Callback parameters |
| --- | --- | --- |
| click | Triggered when clicked | _position: 'left' \| 'right' \| 'cell' \| 'outside'_ |
| open | Triggered when opened | _{ name: string \| number, position: 'left' \| 'right' }_ |
| close | Triggered when closed | _{ name: string \| number, position: 'left' \| 'right' \| 'cell' \| 'outside' }_ |

### beforeClose parameter

The first parameter of beforeClose is an object, which contains the following properties:

| Parameter name | Description | Type |
| -------- | ---------------- | ----------------------------------------- |
| name | identifier | _string \| number_ |
| position | Click position when closing | _'left' \| 'right' \| 'cell' \| 'outside'_ |

### method

Through ref, you can get the SwipeCell instance and call the instance method.

| Method name | Description | Parameters | Return value |
| ------ | ---------------- | -------------------------- | ------ |
| open | Open the cell sidebar | position: `left \| right` | - |
| close | Collapse cell sidebar | - | - |