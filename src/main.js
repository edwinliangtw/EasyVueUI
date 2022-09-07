import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const app = createApp(App)
app.config.globalProperties.$config = reactive({ ez: { debugImage: true } })
app.use(router)
app.mount('#app')
