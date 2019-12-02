import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/api/index';   // 导入API

import "@/assets/sass/common.scss";
import "@/assets/sass/reset.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
