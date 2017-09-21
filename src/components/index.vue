<template>
    <div class="frame" v-cloak>
        <router-view></router-view>
        <ul class="footer" v-if="!isPlayView">
            <router-link tag="li" class="bottom-nav" to="/findMusicIndex/musicIndex" active-class="cur-index">
                <p class="bottom-nav-text">
                    <img src="../static/images/find-music.png" alt="" class="bottom-nav-img">
                </p>
                <p class="bottom-nav-text">发现音乐</p>
            </router-link>
             <router-link tag="li" class="bottom-nav" to="/myMusicIndex" active-class="cur-index">
                <p class="bottom-nav-text">
                    <img src="../static/images/music.png" alt="" class="bottom-nav-img">
                </p>
                <p class="bottom-nav-text">我的音乐</p>
            </router-link>
             <router-link tag="li" class="bottom-nav" to="/friendsIndex" active-class="cur-index">
                <p class="bottom-nav-text">
                    <img src="../static/images/invite friends.png" alt="" class="bottom-nav-img-friend">
                </p>
                <p class="bottom-nav-text">朋友</p>
            </router-link>
             <router-link tag="li" class="bottom-nav" :to="isLogin?{name:'userIndex'}:{name:'login'}" active-class="cur-index">
                <p class="bottom-nav-text">
                    <img src="../static/images/user.png" alt="" class="bottom-nav-img-user">
                </p>
                <p class="bottom-nav-text">账号</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navList: ['音乐', '视频', '电台'],
            isPlayView:false,
            isLogin:false
        }
    },
    created: function() {
        this.hasUserInfo();
    },
    methods: {
        //用户是否登录函数
        hasUserInfo:function(){
        if(localStorage.getItem('userInfo')){
            this.isLogin=true;
        }else{
            this.isLogin=false;
        }
        }
    },
    watch:{
        //监听路由变化，判断是否登录
        "$route":function(to,from){
            this.hasUserInfo();
        }
    }
}
</script>
<style scoped>
.frame {
    background: #fff;
    overflow: hidden;
}

.footer {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #393939;
    position: fixed;
    bottom: 0;
    left: 0;
    opacity: 0.98;
}

.bottom-nav {
    list-style: none;
    overflow: hidden;
    font-size: 12px;
   color: #a7a7a7;
}
.cur-index{
    color: #fff;
}
.bottom-nav-text {
    width: 100%;
    text-align: center;
}

.bottom-nav-img {
    width: 24px;
    height: 25px;
}

.bottom-nav-img-friend {
    width: 25px;
    height: 25px;
}

.bottom-nav-img-user {
    width: 25px;
    height: 25px;
}
</style>