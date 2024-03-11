import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
//引入icon图标
import useIcon from './utils/setGlobai'
//引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入scss
import './styles/index.scss'
app.use(createPinia())
app.use(ElementPlus, {
  locale: zhCn
})
app.use(useIcon)
app.use(router)

app.mount('#app')
