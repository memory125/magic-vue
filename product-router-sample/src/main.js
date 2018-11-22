import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

import {RestDataSource} from "../restDataSource"
import store from "./store"
import router from "./router"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data() {
    return {
      eventBus: new Vue()
    }
  },
  store,
  router,
  provide() {
    return {
      eventBus: this.eventBus,
      restDataSource: new RestDataSource(this.eventBus)
    }
  }
}).$mount('#app')
