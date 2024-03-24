import { ref, Ref } from 'vue'

let width: Ref<number>
let height: Ref<number>

export function useWindowSize() {
  if (!width) {
    width = ref(0)
    height = ref(0)

    const { windowHeight } = uni.getSystemInfoSync()
    const { windowWidth } = uni.getSystemInfoSync()

    const update = () => {
      width.value = windowWidth
      height.value = windowHeight
    }

    update()
    // #ifdef APP || H5 || MP-WEIXIN
    uni.onWindowResize(update)
    // #endif
  }

  return { width, height }
}
