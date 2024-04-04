# Built-in styles

### introduce

Zebra-ui includes some common styles by default, which can be used directly through className.

### Text omitted

When the text content length exceeds the maximum width of the container, the excess text is automatically omitted.

```html
<!-- Display at most one line -->
<view class="z-ellipsis">This is a paragraph of text. Ellipses will be displayed if it exceeds one line. This is a paragraph of text. Ellipses will be displayed if it exceeds one line</view>

<!-- Display up to two lines -->
<view class="text-top z-multi-ellipsis--l2">This is a paragraph of text. Ellipses will be displayed if it exceeds two lines. This is a paragraph of text, and ellipses will appear if it exceeds two lines. This is a paragraph of text. Ellipses will be displayed if it exceeds two lines</view>

<!-- Display up to three lines -->
<view class="z-multi-ellipsis--l3">
   xxxxx
</view>
```

### 1px border

Add a 1px border (i.e. hairline) under the Retina screen to the element, implemented based on the pseudo-class transform.

```html
<!-- Top border -->
<div class="z-hairline--top"></div>

<!-- Lower border -->
<div class="z-hairline--bottom"></div>

<!-- Left border -->
<div class="z-hairline--left"></div>

<!-- Right border -->
<div class="z-hairline--right"></div>

<!-- Upper and lower borders -->
<div class="z-hairline--top-bottom"></div>

<!-- full border -->
<div class="z-hairline--surround"></div>
```

### Safe place

Add safe zone adaptation to elements.

```html
<!-- Top safe area -->
<div class="z-safe-area-top"></div>

<!-- Bottom safety area -->
<div class="z-safe-area-bottom"></div>
```

### Touch feedback

Add a touch feedback effect to the element. After touching, the transparency of the element will be reduced.

Usually used on clickable elements such as buttons.

```html
<div class="z-haptics-feedback"></div>
```

### Clear float

Clear the float of elements in float layout,

```html
<div class="z-clearfix"></div>
```