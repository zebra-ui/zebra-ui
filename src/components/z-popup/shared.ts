import {
  truthProp,
  unknownProp,
  Interceptor,
  numericProp
} from '../../libs/utils'
import type { PropType } from 'vue'

export const popupSharedProps = {
  show: Boolean,
  zIndex: numericProp,
  overlay: truthProp,
  duration: {
    type: Number,
    default: 300
  },
  lockScroll: truthProp,
  lazyRender: truthProp,
  beforeClose: Function as PropType<Interceptor>,
  overlayStyle: Object as PropType<any>,
  overlayClass: unknownProp,
  overlayBackGroud: truthProp,
  transitionAppear: Boolean,
  closeOnClickOverlay: truthProp
}

export type PopupSharedPropKeys = Array<keyof typeof popupSharedProps>

export const popupSharedPropKeys = Object.keys(
  popupSharedProps
) as PopupSharedPropKeys
