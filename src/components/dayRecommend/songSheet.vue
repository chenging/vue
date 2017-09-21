<template>
    <div v-cloak>
        <header>
            <img src="../../static/images/play-back.png" alt="" class="back" @click="back">
            <p class="title">歌单</p>
            <img src="../../static/images/sheet-more.png" class="help">
            <canvas id="rhythm" class="volum-img" @click="playing"></canvas>
        </header>
        <div class="song-sheet">
            <div class="play-number">
                <p class="listen-box">
                    <img src="../../static/images/icon_listen.png" alt="" class="listen-img">
                    <span>85万</span>
                </p>
                <img src="../../static/images/sheet-info.png" alt="" class="sheet-info">
            </div>
            <div class="song-sheet-detail">
                <p class="detail-title">思念止于唇齿，却不愿随风而散</p>
                <p class="detail-content">
                    <img src="" alt="" class="user-portrait">
                    <span>你的半杯</span>
                    <img src="../../static/images/sheet-next.png" alt="" class="next">
                </p>
            </div>
        </div>
        <div class="operation-box-bg">
            <div class="operation-box">
                <div class="operation-item">
                    <p class="icon-align">
                        <img src="../../static/images/sheet-collection.png" alt="" class="sheet-icon">
                    </p>
                    <p class="icon-align">7004</p>
                </div>
                <div class="operation-item">
                    <p class="icon-align">
                        <img src="../../static/images/play-comment.png" alt="" class="sheet-icon">
                    </p>
                    <p class="icon-align">0</p>
                </div>
                <div class="operation-item">
                    <p class="icon-align">
                        <img src="../../static/images/play-Share.png" alt="" class="sheet-icon">
                    </p>
                    <p class="icon-align">72</p>
                </div>
                <div class="operation-item">
                    <p class="icon-align">
                        <img src="../../static/images/play-download.png" alt="" class="sheet-icon">
                    </p>
                    <p class="icon-align">14</p>
                </div>
            </div>
        </div>
        <div class="play-box">
            <div class="play-box-left">
                <img src="../../static/images/recommend-play.png" alt="" class="play-img">
                <span>播放全部(共3首)</span>
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

.song-sheet {
    width: 100%;
    height: 175px;
    margin-top: 45px;
    background: #9374ee;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.play-number {
    width: 40%;
    height: 140px;
    margin-left: 3%;
    background: url('../../static/cover-img/test6.png')no-repeat;
    background-size: 100% 100%;
    position: relative;
}

.listen-box {
    width: 100%;
    font-size: 14px;
    color: #fff;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.listen-img {
    width: 14px;
    height: 14px;
    margin-right: 5px;
}

.listen-box span {
    display: block;
    margin-right: 10px;
}

.sheet-info {
    width: 21px;
    height: 21px;
    position: absolute;
    right: 5px;
    bottom: 5px;
}

.song-sheet-detail {
    width: 50%;
    margin-right: 3%;
    overflow: hidden;
}

.detail-title {
    font-size: 18px;
    color: #fff;
}

.detail-content {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
}

.user-portrait {
    width: 32px;
    height: 32px;
    border: 1px solid red;
    border-radius: 32px;
}

.next {
    width: 15px;
    height: 15px;
}
.operation-box-bg{
    width: 100%;
    height: 50px;
    background: #9374ee;
    overflow: hidden;
    margin-top: -1px;
}
.operation-box {
    width: 80%;
    margin-left: 10%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.icon-align{
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
}
.icon-align:last-child{
    margin-top: 5px;
}
.sheet-icon{
    width: 20px;
    height: 20px;
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
    height: 10px;
    margin-right: 3%;
}
</style>