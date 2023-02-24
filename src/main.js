import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import './assets/all.scss' // Load bootstrap scss

const app = createApp(App)

app.use(VueAxios, axios) // Load vueAxios
app.use(router)
app.component('VueLoading', Loading)
app.mount('#app')
