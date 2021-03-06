import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";

//import Colorize from "./directives/colorize";
//import mixin from "./mixins/numbersMixin";

//Vue.directives("colorize", Colorize);
//Vue.mixin(mixin);

Vue.config.productionTip = false

import MathsPlugin from "./plugins/maths";
Vue.use(MathsPlugin);


new Vue({
  render: h => h(App),
}).$mount('#app')
