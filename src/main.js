import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'
import liff from '@line/liff'
import store from "./store";

Vue.config.productionTip = false
Vue.prototype.$liff = liff
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
