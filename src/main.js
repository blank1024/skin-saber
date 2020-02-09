import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/api/index';   // 导入API
import "@/directives/highlight";    // 导入高亮代码指令
import * as filters from "@/filters";

import "@/assets/sass/common.scss";
import "@/assets/sass/reset.scss";
import "@/assets/sass/index.scss";

Vue.config.productionTip = false;

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
