<template>
    <div v-cloak>
        <header>
            <img src='../../static/images/voice.png' alt="" class="voice-img" @click="inputVoice"/>
            <div class="search-box">
                <img src='../../static/images/search.png' alt="" class="search-img" />
                <input type="text" class="search-input" placeholder="搜索歌词、音乐、电台" />
            </div>
            <canvas id="rhythm" class="volum-img" @click="playing"></canvas>
        </header>
        <div class="music-nav">
            <ul class="nav">
                <router-link tag="li" to="/findMusicIndex/musicIndex" active-class="current-channel">音乐</router-link>
                <router-link tag="li" to="/findMusicIndex/videoIndex" active-class="current-channel">视频</router-link>
                <router-link tag="li" to="/findMusicIndex/radioIndex" active-class="current-channel">电台</router-link>
                <!-- <li v-for="(item,index) in navList" @click="curChannel(index)" :class="{'current-channel':index===curIndex}">{{item}}</li> -->
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navList: ['音乐', '视频', '电台']
        }
    },
    created: function() {
        this.timer=setInterval(()=>{
            if(GlobalData.AudioPlayStatus){
                this.drawRhythm();
            }
        },1000)
    },
    mounted: function() {
       this.drawRhythm();
    },
    methods: {
        //进入音乐播放界面
        playing: function() {
            this.$router.push({ name: 'playView' });
        },
        //canvas绘制节奏动画
        drawRhythm: function() {
            const cav = document.getElementById('rhythm');
            const ctx = cav.getContext('2d');
            cav.width = '24';
            cav.height = '22';
            ctx.lineWidth = '2';
            ctx.strokeStyle = '#fff';
            //绘制频率线
            for (let i = 2; i < cav.width; i += 5) {
                ctx.beginPath();
                ctx.moveTo(i, cav.height);
                ctx.lineTo(i, Math.abs(parseInt(Math.random()*cav.height)-5));
                ctx.stroke();
            }
            // GlobalData.isDrawRhythm=true;

        },
        //输入语音
        inputVoice:function(e){
            // this.clickAnimation(e);
        }
    },
    destroyed: function() {
        clearInterval(this.timer);
    }
}
</script>
<style scoped>
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
    z-index: 99999;
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
    width: 24px;
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
    z-index: 99999;
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
</style>