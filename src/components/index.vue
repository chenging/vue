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
             <router-link tag="li" class="bottom-nav" to="/userIndex" active-class="cur-index">
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
            isPlayView:false
        }
    },
    created: function() {

    },
    methods: {
        
    },
    watch:{
        //监听路由变化，动态切换播放界面和功能页
        "$route":function(to,from){
            const curRoute=this.$route.name;
            if(curRoute==='playView'||curRoute==='fmPlayView'){
                this.isPlayView=true;
            }else{
                this.isPlayView=false;
            }
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
    width: 22px;
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