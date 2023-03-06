import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

/* 這裡是新增的fontawesome 套件 */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import './assets/all.scss' // Load bootstrap scss

const app = createApp(App)

/* 官方文件說要新增一個library */
/* add icons to the library */
library.add(faUserSecret)

app.use(VueAxios, axios) // Load vueAxios
app.use(router)
app.component('VueLoading', Loading, FontAwesomeIcon) // FontAwesomeIcon是新增的
app.mount('#app')
