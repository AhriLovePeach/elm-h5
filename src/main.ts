// import './assets/main.css'
import 'vant/lib/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(createPinia())
app.use(router)

const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = `${(deviceWidth / rootWidth) * rootValue}px`

app.mount('#app')
