<template>
    <div v-cloak>
        <header>
            <img src="../../static/images/play-back.png" alt="" class="back" @click="back">
            <p class="title">排行榜</p>
            <canvas id="rhythm" class="volum-img" @click="playing"></canvas>
        </header>
        <div class="classify-title">
            <p class="classify-title-bg"></p>
            <p class="classify-title-content">云音乐官方榜</p>
        </div>
        <div class="rank-list">
            <div class="rank-item">
                <div class="rank-item-title">
                    <p class="rank-item-title-list">飙升榜</p>
                    <p class="update-cycle">每天更新</p>
                </div>
                <div class="rank-item-music-name">
                    <p>1、男孩</p>
                    <p>2、我喜欢上你时的内心活动-陈绮贞</p>
                    <p>3、歌谣-李荣浩</p>
                </div>
            </div>
            <div class="rank-item">
                <div class="rank-item-title-1">
                    <p class="rank-item-title-list">新歌榜</p>
                    <p class="update-cycle">每天更新</p>
                </div>
                <div class="rank-item-music-name">
                    <p>1、男孩</p>
                    <p>2、我喜欢上你时的内心活动-陈绮贞</p>
                    <p>3、歌谣-李荣浩</p>
                </div>
            </div>
            <div class="rank-item">
                <div class="rank-item-title-2">
                    <p class="rank-item-title-list">原创榜</p>
                    <p class="update-cycle">每天更新</p>
                </div>
                <div class="rank-item-music-name">
                    <p>1、男孩</p>
                    <p>2、我喜欢上你时的内心活动-陈绮贞</p>
                    <p>3、歌谣-李荣浩</p>
                </div>
            </div>
            <div class="rank-item">
                <div class="rank-item-title-3">
                    <p class="rank-item-title-list">热歌榜</p>
                    <p class="update-cycle">每天更新</p>
                </div>
                <div class="rank-item-music-name">
                    <p>1、男孩</p>
                    <p>2、我喜欢上你时的内心活动-陈绮贞</p>
                    <p>3、歌谣-李荣浩</p>
                </div>
            </div>
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
        back: function() {
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

        },
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


.back {
    width: 18px;
    height: 22px;
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

.classify-title {
    display: flex;
    height: 50px;
    margin-top: 45px;
    align-items: center;
    justify-content: flex-start;
    font-size: 18px;
}

.classify-title-bg {
    width: 4px;
    height: 18px;
    background: #9b85eb;
    margin-right: 10px;
}
.rank-list{
    width: 100%;
    overflow: hidden;
    margin-bottom: 60px;
}
.rank-item{
    width: 97%;
    height: 125px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 5px;
}
.rank-item-title{
    width: 34%;
    height: 100%;
    background: #5d8fd9;
    overflow: hidden;
}
.rank-item-title-1{
    width: 34%;
    height: 100%;
    background: #4cb8db;
    overflow: hidden;
}
.rank-item-title-2{
    width: 34%;
    height: 100%;
    background: #c8486a;
    overflow: hidden;
}
.rank-item-title-3{
    width: 34%;
    height: 100%;
    background: #b15445;
    overflow: hidden;
}
.rank-item-title-list{
    width: 100%;
    font-size: 34px;
    color: #fff;
    text-align: center;
    margin-top: 30px;
    font-weight: 600;
}
.update-cycle{
    font-size: 12px;
    color: #fff;
    width: 100%;
    text-indent: 10px;
    margin-top: 30px;
}
.rank-item-music-name{
    width: 63%;
    height: 100%;
}
.rank-item-music-name p{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}
</style>