import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';

//引入入口文件
import App from './src/components/App.vue';
//引入路由文件
import routes from './src/config/router';
//使用路由及axios请求
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
// 使用配置文件规则
const router = new VueRouter({
  routes
});

Vue.prototype.imgSrc='https://github.com/chenging/vue/tree/master/src/static/images';

//挂载实例
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
