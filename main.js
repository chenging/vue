import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import qs from 'qs';
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
        var i = 0;
        const animationTime = setInterval(() => {
            i += 6;
            ctx.strokeStyle = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
            ctx.arc(x, y, i, 0, 2 * Math.PI);
            ctx.stroke();
            if (i >= cav.width / 2) {
                clearInterval(animationTime);
                cav.remove();
            }
        }, x / 8);
    }
}
/*
  参数说明：
  obj：自定义需要传递给后台的参数对象，如let obj={name:'xxxx',age:'xxx'}

  method: http请求方式


  url：需请求的后台接口地址
*/
//封装全局http请求函数
Vue.prototype.publicHttp = (obj = {}, method, url, callback) => {
    Vue.axios({
        method: method,
        url: url,
        data: qs.stringify(obj),
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }).then((res) => {
        callback(res);
    }).catch((err) => {
        if (!document.getElementById('toast')) {
            const toast = document.createElement('p');
            toast.id = 'toast';
            toast.innerHTML = '请求超时，请稍后再试！';
            toast.style.backgroundColor = 'red';
            toast.style.color = '#fff';
            toast.style.fontSize = '18px';
            toast.style.width = '60%';
            toast.style.position = 'absolute';
            toast.style.top = '40%';
            toast.style.left = '20%';
            toast.style.textAlign = 'center';
            document.body.appendChild(toast);
        }
        setTimeout(() => {
            toast.remove();
        }, 2000)
    })
};

//挂载实例
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
