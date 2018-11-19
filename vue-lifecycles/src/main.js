import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false

Vue.config.errorHandler = function(error, component, source) {
  console.log("Global Error Handler: " + error + " " + component + " " + source);
}

new Vue({
  // el: "#app",
  // components: {App},
  // template: '<App data-names="David, Alice, Peter, Dora" />',
  render: h => h(App),
}).$mount('#app')