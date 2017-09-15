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
const music = document.createElement('audio');
music.src = '';
Vue.prototype.player = music;
//定义全局点击动画
Vue.prototype.clickAnimation = (e) => {
    if (!document.getElementById('animationCanvas')) {
        const cav = document.createElement('canvas');
        const ctx = cav.getContext('2d');
        const x = e.clientX + document.body.scrollLeft - document.body.clientLeft;
        const y = e.clientY + document.body.scrollTop - document.body.clientTop;
        cav.id = 'animationCanvas';
        cav.width = screen.width;
        cav.height = screen.height;
        cav.style.position = 'fixed';
        cav.style.top = 0;
        cav.style.left = 0;
        document.body.appendChild(cav);
        //绘制点击动画
        ctx.beginPath();
        var i=0;
        const animationTime=setInterval(()=>{
            i+=6;
            ctx.strokeStyle = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
            ctx.arc(x, y, i, 0, 2 * Math.PI);
            ctx.stroke();
            if(i>=cav.width/2){
                clearInterval(animationTime);
                cav.remove();
            }
        },x/8);
    }
}
//挂载实例
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
