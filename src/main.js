import { createApp } from 'vue'

import './styles/base.css'
import './styles/text.css'

import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$base = import.meta.env.BASE_URL
app.mount('#app')
