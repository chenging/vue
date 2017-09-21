<template>
    <div v-cloak>
        <header>
            <img src="../../static/images/play-back.png" alt="" class="back" @click="back">
            <p class="title">每日推荐</p>
            <img src="../../static/images/recommend-help.png" class="help">
            <canvas id="rhythm" class="volum-img" @click="playing"></canvas>
        </header>
        <img src="../../static/cover-img/test1.png" alt="" class="ad">
        <div class="play-box">
            <div class="play-box-left">
                <img src="../../static/images/recommend-play.png" alt="" class="play-img">
                <span>播放全部</span>
            </div>
            <div class="play-box-right">
                <img src="../../static/images/recommend-list.png" alt="" class="list-img">
                <span>多选</span>
            </div>
        </div>
        <ul class="music-list">
            <li>
                <div class="music-info">
                    <p class="song-name">歌曲名称</p>
                    <p class="singer">演唱者</p>
                </div>
                <img src="../../static/images/recommend-more.png" class="more">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created: function() {
        this.timer = setInterval(() => {
            if (GlobalData.AudioPlayStatus) {
                this.drawRhythm();
            }
        }, 1000)
    },
    mounted: function() {
        this.drawRhythm();
    },
    methods: {
        back:function(){
            this.$router.go(-1);
        },
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
                ctx.lineTo(i, Math.abs(parseInt(Math.random() * cav.height) - 5));
                ctx.stroke();
            }
            // GlobalData.isDrawRhythm=true;

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
}

.title {
    width: 68%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #fff;
    margin-left: 25px;
}

.volum-img {
    width: 23px;
    height: 22px;
    margin-right: 3%;
}

.back {
    width: 18px;
    height: 22px;
    margin-left: 3%;
}

.help {
    width: 25px;
    height: 25px;
    margin-right: 10px;
}

.ad {
    width: 100%;
    height: 150px;
}

.play-box {
    width: 97%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    margin-left: 3%;
    background: #fff;
}

.play-box-left {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
}

.play-img {
    width: 21px;
    height: 21px;
    margin-right: 10px;
}

.play-box-right {
    margin-right: 3%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
}

.list-img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.music-list {
    width: 97%;
    margin-left: 3%;
    overflow: hidden;
}

.music-list li {
    list-style: none;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
}

.music-info {
    overflow: hidden;
}

.song-name {
    font-size: 14px;
}

.singer {
    font-size: 12px;
    color: #727575;
    margin-top: 5px;
}

.more {
    width: 20px;
    height: 20px;
    margin-right: 3%;
}
</style>