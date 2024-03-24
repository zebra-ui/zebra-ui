let globalZIndex = 2000
export const useGlobalZIndex = () => ++globalZIndex
export const setGlobalZIndex = (val: number) => {
  globalZIndex = val
}
