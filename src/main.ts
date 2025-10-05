import './assets/index.css'
import 'iconify-icon'

import { createApp } from 'vue'

import { createMetaManager } from 'vue-meta'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createMetaManager())

app.mount('#app')
