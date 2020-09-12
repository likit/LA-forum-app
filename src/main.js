import Vue from 'vue'
import App from './App.vue'
import router from './router'
import liff from '@line/liff'

Vue.config.productionTip = false
Vue.prototype.$liff = liff

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
