import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 全局样式表
import './assets/css/global.css'
import * as http from './api'
Vue.prototype.$http = http
// import axios from 'axios'
// axios.defaults.baseURL = 'http://baidu.com'
// Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
