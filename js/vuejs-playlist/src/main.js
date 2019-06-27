import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import PrettyCheck from 'pretty-checkbox-vue/check';
// import axios from 'axios'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.component('p-check', PrettyCheck);
// Vue.prototype.$http = axios;
// Vue.use(VueAxios, axios);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '.resturantList',
  render: h => h(App),
  router: router
})
