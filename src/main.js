import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueAxios from 'vue-axios'
import axios from 'axios'
import Vant from 'vant'
import { Button } from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant) 
Vue.use(Button);
Vue.use(vueAxios, axios)
axios.defaults.baseURL='/api'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')