import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
//引入全局变量
import './src/config/global';
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
//创建全局播放器
const music=document.createElement('audio');
music.src='';
Vue.prototype.player=music;
//挂载实例
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
