<template>
    <div class="frame" v-cloak>
        <header>
            <img src='../static/images/voice.png' alt="" class="voice-img" />
            <div class="search-box">
                <img src='../static/images/search.png' alt="" class="search-img" />
                <input type="text" class="search-input" placeholder="搜索歌词、音乐、电台" />
            </div>
            <img src='../static/images/volum.png' alt="" class="volum-img" />
        </header>
        <div class="music-nav">
            <ul class="nav">
                <router-link tag="li" to="/musicIndex" active-class="current-channel">音乐</router-link>
                <router-link tag="li" to="/videoIndex" active-class="current-channel">视频</router-link>
                <router-link tag="li" to="/radioIndex" active-class="current-channel">电台</router-link>
                <!-- <li v-for="(item,index) in navList" @click="curChannel(index)" :class="{'current-channel':index===curIndex}">{{item}}</li> -->
            </ul>
        </div>
        <router-view></router-view>
        <footer>
            <div class="bottom-nav">
                <p class="bottom-nav-text">
                    <img src="../static/images/find-music.png" alt="" class="bottom-nav-img">
                </p>
                <p class="bottom-nav-text">发现音乐</p>
            </div>
            <div class="bottom-nav">
                <p class="bottom-nav-text">
                    <img src="../static/images/music.png" alt="" class="bottom-nav-img">
                </p>
                <p class="bottom-nav-text">我的音乐</p>
            </div>
            <div class="bottom-nav">
                <p class="bottom-nav-text">
                    <img src="../static/images/invite friends.png" alt="" class="bottom-nav-img-friend">
                </p>
                <p class="bottom-nav-text">朋友</p>
            </div>
            <div class="bottom-nav">
                <p class="bottom-nav-text">
                    <img src="../static/images/user.png" alt="" class="bottom-nav-img-user">
                </p>
                <p class="bottom-nav-text">账号</p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navList: ['音乐', '视频', '电台'],
            index: 0,
            curIndex: 0
        }
    },
    created: function() {

    },
    methods: {
        curChannel: function(index) {
            this.curIndex = index;
            if (index === 0) {
                this.$router.push('/')
            } else if (index === 1) {
                this.$router.push('/videoIndex');
            } else {
                this.$router.push('/radioIndex');
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

header {
    width: 100%;
    height: 45px;
    background: #9374ee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
}

.voice-img {
    width: 23px;
    height: 22px;
    margin-left: 3%;
}

.search-box {
    width: 68%;
    height: 30px;
    background: #fff;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 13px;
}

.search-img {
    width: 14px;
    height: 14px;
    margin-left: 20%;
    margin-right: 10px;
}

.search-input {
    width: 65%;
    height: 100%;
    outline: none;
    border: none;
}

.volum-img {
    width: 23px;
    height: 22px;
    margin-right: 3%;
}

.music-nav {
    width: 100%;
    height: 40px;
    background: #f8f9f6;
    position: fixed;
    top: 45px;
    left: 0;
    border-bottom: 1px solid #dfdfdf;
}

.nav {
    width: 70%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-left: 15%;
}

.nav li {
    width: 15%;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    /* color: #000; */
    font-size: 13px;
    /* border-bottom:2px solid #fff;  */
    opacity: 0.9;
}

.current-channel {
    border-bottom: 2px solid #856bc9;
    color: #856bc9;
}

.current-page {
    color: #856bc9;
    border-bottom: 5px solid #856bc9;
}

.carousel-box {
    width: 100%;
    height: 140px;
    overflow: hidden;
}

.carousel-img {
    width: 100%;
    height: 100%;
}

.radio-station {
    width: 100%;
    height: 100px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: solid 1px #e5e8e8;
}

.radio-station-item {
    overflow: hidden;
}

.radio-station-item p {
    width: 100%;
    text-align: center;
    font-size: 12px;
}

.radio-img {
    width: 53px;
    height: 53px;
}

.classify-title {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
}

.classify-title-bg {
    width: 4px;
    height: 15px;
    background: #9b85eb;
    margin-right: 10px;
}

.next-img {
    width: 13px;
    height: 13px;
    margin-left: 10px;
}

.classify-list {
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
}

.list-item {
    width: 30%;
    overflow: hidden;
    margin-bottom: 20px;
}

.list-item:last-child {
    margin-bottom: 70px;
}

.list-item-bg {
    width: 100%;
    height: 118px;
    background: #9374ee;
    display: flex;
    justify-content: flex-end;
}

.list-item-title {
    height: 20px;
    display: flex;
    align-items: center;
    margin-right: 6px;
    font-size: 12px;
    color: #fff;
}

.icon-listen {
    width: 12px;
    height: 12px;
    margin-right: 5px;
}

footer {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #393939;
    position: fixed;
    bottom: 0;
    left: 0;
    opacity: 0.9;
}

.bottom-nav {
    overflow: hidden;
    font-size: 12px;
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