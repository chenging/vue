<template>
    <div v-cloak>
        <header>
            <img src='../../static/images/friends.png' alt="" class="voice-img" @click="addFollow">
            <div class="search-box">
                <div class="switch-item" :class="{'checked':!ischecked}" @click="contentSwitch">动态</div>
                <div class="switch-item" :class="{'checked':ischecked}" @click="contentSwitch">附近</div>
            </div>
            <canvas id="rhythm" class="volum-img" @click="playing"></canvas>
        </header>
        <div class="dynamic-video">
            <div class="dynamic-box">
                <div class="dynamic-box-item">
                    <img src="../../static/images/edit.png" alt="" class="edit">
                    <p>发动态</p>
                </div>
            </div>
            <div class="dynamic-box">
                <div class="dynamic-box-item">
                    <img src="../../static/images/send-video.png" alt="" class="edit">
                    <p>发短视频</p>
                </div>
            </div>
        </div>
        <div class="hot-topic-box">
            <div class="hot-topic">
                <div class="hot-topic-title">
                    <p>热门话题</p>
                    <img src="../../static/images/next.png" alt="" class="next-img">
                </div>
                <div class="hot-topic-content">
                    <div class="hot-topic-detail">
                        <p>#那些不走寻常路的女歌手#</p>
                    </div>
                    <div class="hot-topic-detail">
                        <p>#那些不走寻常路的女歌手#</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="video-list">
            <div class="video-item" v-for="(item,index) in videoList">
                <img src="" alt="" class="publisher-portrait">
                <div class="video-item-content">
                    <div class="video-item-title">
                        <div class="video-title">
                            <p class="video-title-name">youtube翻唱...</p>
                            <p class="video-title-time">11:00</p>
                        </div>
                        <p class="video-release">发布短视频:</p>
                        <p class="follow-box">
                            <img src="../../static/images/plus.png" alt="" class="plus">
                            <span>关注</span>
                        </p>
                    </div>
                    <p class="video-detail-title">{{item.name}}</p>
                    <video :src="item.src" class="video" controls></video>
                    <p class="look-live">——观看精彩音乐live</p>
                    <div class="interaction-box">
                        <p>
                            <img src="../../static/images/thumbs.png" alt="" class="interaction-icon">
                            <span>43</span>
                        </p>
                        <p>
                            <img src="../../static/images/comment.png" alt="" class="interaction-icon">
                            <span>16</span>
                        </p>
                        <p>
                            <img src="../../static/images/share.png" alt="" class="interaction-icon">
                            <span>12</span>
                        </p>
                        <p>
                            <img src="../../static/images/More.png" alt="" class="interaction-icon">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ischecked: false,
            videoList:[],
            audioPlayStatus: false,//保存音频播放状态,在视频播放结束或暂停时还原音频播放状态
        }
    },
    created: function() {
        // this.videoList = GlobalData.videoList;
        this.audioPlayStatus = GlobalData.AudioPlayStatus;
        //判断播放视频前音乐是否处于播放状态，如果处于播放状态，播放视频时暂停音频播放，并在视频播放结束或者暂停时还原音乐播放
        this.timer = setInterval(() => {
            if (GlobalData.AudioPlayStatus) {
                this.drawRhythm();
            }
            if (this.audioOrVideo()!==true) {
                GlobalData.AudioPlayStatus = false;
                this.player.pause();
                // this.videoList.splice(this.audioOrVideo()[1],1);
            } else {
                if (this.audioPlayStatus) {
                    GlobalData.AudioPlayStatus = this.audioPlayStatus;
                    this.player.play();
                }
            }
        }, 1000)
    },
    mounted: function() {
        this.drawRhythm();
    },
    methods: {
        //切换显示附近和动态
        contentSwitch: function() {
            this.ischecked = !this.ischecked;
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
        //检测视频是否正处于播放状态
        audioOrVideo: function() {
            let arr = this.toArray();
            for (let i = 0, len = arr.length; i < len; i++) {
                if (!arr[i].paused) {
                    return [false,i]
                }
            }
            return true;
        },
        //将类数组转为数组
        toArray: function() {
            let arr = [];
            const videoPlayer = document.getElementsByClassName('video');
            for (let i = 0, len = videoPlayer.length; i < len; i++) {
                arr[i] = videoPlayer[i];
            }
            return arr;
        },
        //添加关注
        addFollow:function(){
            this.$router.push({name:'addFollow'});
        }
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
    z-index: 99999;
}

.voice-img {
    width: 23px;
    height: 22px;
    margin-left: 3%;
}

.search-box {
    width: 40%;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 30px;
    display: flex;
}

.switch-item {
    width: 50%;
    height: 100%;
    font-size: 15px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}

.checked {
    background: #fff;
    color: #9374f0;
}

.volum-img {
    width: 23px;
    height: 22px;
    margin-right: 3%;
}

.dynamic-video {
    width: 100%;
    height: 40px;
    display: flex;
    position: fixed;
    top: 45px;
    left: 0;
    background: #fff;
    border-bottom: 1px solid #eaeaea;
    z-index: 99999;
}

.dynamic-box {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dynamic-box-item {
    width: 100%;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eaeaea;
    font-size: 15px;
}

.edit {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.hot-topic-box {
    width: 100%;
    margin-top: 85px;
    background: #edf0f0;
    border-bottom: 1px solid #eaeaea;
    overflow: hidden;
}

.hot-topic {
    width: 100%;
    margin-top: 10px;
    background: #fff;
    overflow: hidden;
}

.hot-topic-title {
    margin-top: 20px;
    margin-left: 3%;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
}

.next-img {
    width: 13px;
    height: 13px;
    margin-left: 5px;
}

.hot-topic-content {
    width: 97%;
    margin-top: 10px;
    margin-left: 3%;
    display: flex;
    flex-wrap: nowrap;
}

.hot-topic-detail {
    width: 125px;
    height: 62px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #fff;
    background: #6e7276;
    margin-bottom: 20px;
    margin-right: 5px;
}

.hot-topic-detail p {
    width: 94%;
    margin-left: 3%;
    text-align: center;
}

.video-list {
    width: 100%;
    overflow: hidden;
}

.video-item {
    width: 100%;
    margin-top: 20px;
    display: flex;
}

.video-item:last-child {
    margin-bottom: 70px;
}

.publisher-portrait {
    width: 45px;
    height: 40px;
    border: 1px solid red;
    border-radius: 40px;
    margin-left: 3%;
}

.video-item-content {
    margin-right: 3%;
    margin-left: 10px;
    overflow: hidden;
}

.video-item-title {
    display: flex;
    width: 100%;
    align-items: flex-start;
}

.video-title {
    width: 39%;
}

.video-title-name {
    font-size: 15px;
    color: #526c98;
}

.video-title-time {
    font-size: 12px;
    color: #999;
}

.video-release {
    width: 28%;
    font-size: 15px;
    color: #666;
}

.follow-box {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 15px;
    color: #886ae1;
}

.plus {
    width: 12px;
    height: 12px;
}

.video-detail-title {
    font-size: 15px;
    color: #333;
    margin-top: 10px;
    margin-bottom: 5px;
}

.video {
    width: 100%;
    height: 165px;
}

.look-live {
    font-size: 14px;
    color: #999;
    margin-top: 10px;
}

.interaction-box {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.interaction-box p {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #999;
}

.interaction-icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}
</style>