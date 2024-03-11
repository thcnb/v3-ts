import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgIcon from '@/components/svgicon/index.vue'
export default {
  install(app: App): void {
    //注册icon图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(`ele-${key}`, component)
    }
    app.component('SvgIcon',SvgIcon)
  }
}
