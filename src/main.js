import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all.js';
import vIntersect from 'vue-intersect'

Vue.config.productionTip = false

new Vue({
  vIntersect,
  render: h => h(App),
}).$mount('#app')
