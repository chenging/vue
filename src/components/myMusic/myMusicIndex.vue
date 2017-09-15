<template>
    <div v-cloak>
        <header>
            <p class="more-music">更多</p>
            <p class="title">我的音乐</p>
            <canvas id="rhythm" class="volum-img" @click="playing"></canvas>
        </header>
        <div class="my-music-list">
            <div class="list-item">
                <div class="item-logo-box">
                    <img src="../../static/images/radio-music.png" alt="" class="item-logo">
                </div>
                <div class="item-detail">
                    <p class="item-detail-title">本地音乐</p>
                    <div class="item-detail-content">
                        <span>77</span>
                        <img src="../../static/images/next.png" alt="" class="next-img">
                    </div>
                </div>
            </div>
            <div class="list-item">
                <div class="item-logo-box">
                    <img src="../../static/images/recent-play.png" alt="" class="item-logo">
                </div>
                <div class="item-detail">
                    <p class="item-detail-title">最近播放</p>
                    <div class="item-detail-content">
                        <span>100</span>
                        <img src="../../static/images/next.png" alt="" class="next-img">
                    </div>
                </div>
            </div>
            <div class="list-item">
                <div class="item-logo-box">
                    <img src="../../static/images/my-radio.png" alt="" class="item-logo">
                </div>
                <div class="item-detail">
                    <p class="item-detail-title">我的电台</p>
                    <div class="item-detail-content">
                        <span>0</span>
                        <img src="../../static/images/next.png" alt="" class="next-img">
                    </div>
                </div>
            </div>
            <div class="list-item">
                <div class="item-logo-box">
                    <img src="../../static/images/center_mycollection.png" alt="" class="item-logo">
                </div>
                <div class="item-detail">
                    <p class="item-detail-title">我的收藏</p>
                    <div class="item-detail-content">
                        <span>0</span>
                        <img src="../../static/images/next.png" alt="" class="next-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="sheet-header">
            <img src="../../static/images/collect-next.png" alt="" class="collect-next-img">
            <span>我创建的歌单(3)</span>
        </div>
        <div class="sheet-list">
            <div class="sheet-item">
                <p class="sheet-item-logo-box">
                    <img src="" alt="" class="sheet-item-logo">
                </p>
                <div class="sheet-item-detail-box">
                    <p class="sheet-item-detail-title">我喜欢的音乐</p>
                    <p class="sheet-item-detail-content">
                        <img src="../../static/images/checked.png" alt="" class="downloaded">
                        <span>195首，已下载77首</span>
                    </p>
                </div>
                <div class="playing-box">
                    <img src="../../static/images/audio.png" alt="" class="playing">
                </div>
            </div>
            <div class="sheet-item">
                <p class="sheet-item-logo-box">
                    <img src="" alt="" class="sheet-item-logo">
                </p>
                <div class="sheet-item-detail-box">
                    <p class="sheet-item-detail-title">我喜欢的音乐</p>
                    <p class="sheet-item-detail-content">
                        <img src="../../static/images/checked.png" alt="" class="downloaded">
                        <span>195首，已下载77首</span>
                    </p>
                </div>
                <div class="playing-box">
                    <img src="../../static/images/audio.png" alt="" class="playing">
                </div>
            </div>
            <div class="sheet-item">
                <p class="sheet-item-logo-box">
                    <img src="" alt="" class="sheet-item-logo">
                </p>
                <div class="sheet-item-detail-box">
                    <p class="sheet-item-detail-title">我喜欢的音乐</p>
                    <p class="sheet-item-detail-content">
                        <img src="../../static/images/checked.png" alt="" class="downloaded">
                        <span>195首，已下载77首</span>
                    </p>
                </div>
                <div class="playing-box">
                    <img src="../../static/images/audio.png" alt="" class="playing">
                </div>
            </div>
        </div>
        <div class="sheet-header">
            <img src="../../static/images/collect-next.png" alt="" class="collect-next-img">
            <span>我收藏的歌单(3)</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created: function() {
        this.timer=setInterval(()=>{
            if(GlobalData.AudioPlayStatus){
                this.drawRhythm();
            }
        },1000)
    },
    mounted:function(){
        this.drawRhythm();
    },
    methods: {
        //进入音乐播放界面
        playing:function(){
            this.$router.push({name:'playView'});
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
    },
    destroyed:function(){
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

.more-music {
    width: 40px;
    font-size: 16px;
    color: #fff;
    margin-left: 3%;
}

.title {
    width: 68%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #fff;
}

.volum-img {
    width: 23px;
    height: 22px;
    margin-right: 3%;
}

.my-music-list {
    width: 100%;
    margin-top: 45px;
    overflow: hidden;
}

.list-item {
    width: 100%;
    display: flex;
    height: 54px;
}

.item-logo-box {
    width: 18%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-logo {
    width: 24px;
    height: 24px;
}

.item-detail {
    width: 82%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
}

.next-img {
    width: 14px;
    height: 14px;
    margin-left: 5px;
}

.item-detail-title {
    font-size: 18px;
    color: #383839;
}

.item-detail-content {
    display: flex;
    margin-right: 3%;
    font-size: 12px;
    color: #8f9292;
}
.sheet-header{
    width: 100%;
    height: 30px;
    background: #edf0f0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
    color: #666;
}
.collect-next-img{
    width: 12px;
    height: 12px;
    margin-left: 2%;
    margin-right: 10px;
}
.sheet-list{
    width: 100%;
    overflow: hidden;
}
.sheet-item{
    width: 100%;
    height: 58px;
    display: flex;
}
.sheet-item-logo-box{
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sheet-item-logo{
    width: 50px;
    height: 50px;
    border:1px solid red;
}
.sheet-item-detail-box{
    width: 72%;
    height: 100%;
    overflow: hidden;
    border-bottom: 1px solid #eaeaea;
}
.sheet-item-detail-title{
    font-size: 18px;
    color: #383839;
    margin-top: 7px;
}
.sheet-item-detail-content{
    font-size: 12px;
    color: #999;
    margin-top: 5px;
}
.downloaded{
    width: 12px;
    height: 12px;
}
.playing-box{
    width: 7%;
    margin-right: 3%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.playing{
    width: 15px;
    height: 15px;
}
</style>