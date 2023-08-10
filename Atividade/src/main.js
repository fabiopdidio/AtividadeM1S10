import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './routes/routes'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

createApp(App)
.use(router)
.use(BootstrapVue)
.use(IconsPlugin)
.mount('#app')
