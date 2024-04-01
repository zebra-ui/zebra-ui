import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import DemoBlock from './components/DemoBlock/DemoBlock.vue'
import DemoItem from './components/DemoItem/DemoItem.vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.component('DemoBlock', DemoBlock)
  app.component('DemoItem', DemoItem)
  return {
    app,
    Pinia
  }
}
