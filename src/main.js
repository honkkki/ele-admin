import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://127.0.0.1:3001',

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
