import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

import '@/assets/css/base_style.scss'
import '@/assets/css/page2.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
