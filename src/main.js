// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from './router/index';

import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/display.css';

Vue.use(Element, { size: 'small', zIndex: 3000 });
//Vue.use(Router)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
});
