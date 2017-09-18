<template>
    <div v-cloak class="play-bg">
        <div class="play-title">
            <img src="../../static/images/play-back.png" alt="" class="back" @click="back">
            <div class="fm-title">
                <div class="fm-item">
                    <img src="../../static/images/play-radio.png" alt="" class="play-radio">
                    <p>私人FM</p>
                </div>
                <div class="fm-item">
                    <img src="../../static/images/run.png" alt="" class="play-radio">
                    <p>跑步FM</p>
                </div>
            </div>
            <img src="../../static/images/play-Share.png" alt="" class="share">
        </div>
        <div class="play-animation">

        </div>
        <div class="song-box">
            <p class="song-name">歌曲名称</p>
            <p class="songer-name">演唱者</p>
        </div>
        <div class="play-progress">
            <p class="played-time">00:00</p>
            <div class="current-progress"></div>
            <p class="surplus-time">04:00</p>
        </div>
        <div class="play-controll">
            <img src="../../static/images/approval-recovery.png" alt="" class="play-controll-icon-edge">
            <img src="../../static/images/play-collection.png" alt="" class="play-controll-icon-switch">
            <img v-if="isPlaying"   @click="play" src="../../static/images/play-playing.png" alt="" class="play-controll-icon-play">
            <img v-if="!isPlaying"  @click="play" src="../../static/images/play-pause.png" alt="" class="play-controll-icon-play">
            <img src="../../static/images/play-next.png" alt="" class="play-controll-icon-switch">
            <p class="comment">
                <img src="../../static/images/play-comment.png" alt="" class="interaction-icon">
                <span>999+</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isPlaying:true
        }
    },
    created: function() {

    },
    methods: {
        back: function() {
            this.$router.go(-1);
        },
        play:function(){
            this.isPlaying=!this.isPlaying;
        }
    }
}
</script>
<style scoped>
.play-bg {
    background: #413f4d;
    min-height: 667px;
}

.play-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    background: #413f4d;
    border-bottom: 1px solid #786e6e;
}

.back {
    width: 18px;
    height: 22px;
    margin-left: 3%;
}
.fm-title{
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.fm-item{
    overflow: hidden;
    text-align: center;
    color: #fff;
    font-size: 12px;
}
.play-radio{
    width: 18px;
    height: 16px;
}
.share {
    width: 22px;
    height: 28px;
    margin-right: 3%;
}

.play-animation {
    width: 100%;
    height: 435px;
}
.song-box{
    width: 100%;
    overflow: hidden;
}
.song-name{
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    text-align: center;
}
.songer-name{
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #bab3b3;
    margin-top: 5px;
}
.interaction-icon {
    width: 22px;
    height: 22px;
}

.comment {
    display: flex;
    align-items: flex-start;
    font-size: 10px;
    color: #fff;
}

.comment span {
    margin-left: -7px;
    background: #413f4d;
}

.play-progress {
    width: 94%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 80px;
    left: 0;
    font-size: 12px;
}

.played-time {
    margin-left: 3%;
    color: #fff;
}

.current-progress {
    width: 65%;
    background: #bab3b3;
    height: 3px;
}

.surplus-time {
    color: #bab3b3;
}
.play-controll{
    width: 94%;
    height: 50px;
    margin-left: 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 20px;
    left: 0;
}
.play-controll-icon-edge{
    width: 20px;
    height: 20px;
}
.play-controll-icon-switch{
    width: 24px;
    height: 24px;
}
.play-controll-icon-play{
    width: 46px;
    height: 46px;
}
</style>