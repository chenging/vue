<template>
    <div v-cloak>
        <div class="video-list">
            <div class="video-item" v-for="(item,index) in videoList">
                <video :src="item.src" class="video-origin" controls></video>
                <!-- <iframe frameborder="0"  src="https://v.qq.com/iframe/player.html?vid=g0024ea62fb&tiny=0&auto=0" allowfullscreen class="video-origin" id="video"></iframe> -->
                <div class="video-detail">
                    <p class="detail-title">{{item.name}}</p>
                    <div class="interaction">
                        <div class="interaction-item">
                            <img src="../../../static/images/thumbs.png" alt="" class="interaction-item-img">
                            <p class="interaction-item-num">666</p>
                        </div>
                        <div class="interaction-item">
                            <img src="../../../static/images/comment.png" alt="" class="interaction-item-img">
                            <p class="interaction-item-num">355</p>
                        </div>
                        <div class="interaction-item-more">
                            <img src="../../../static/images/More.png" alt="" class="interaction-item-img">
                        </div>
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
            videoList: [],
            audioPlayStatus: false,//保存音频播放状态,在视频播放结束或暂停时还原音频播放状态
            pauseList:[]
        }
    },
    created: function() {
        // this.videoList = GlobalData.videoList;
        this.audioPlayStatus = GlobalData.AudioPlayStatus;
        //判断播放视频前音乐是否处于播放状态，如果处于播放状态，播放视频时暂停音频播放，并在视频播放结束或者暂停时还原音乐播放
        this.timer = setInterval(() => {
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
        }, 1000);

    },
    mounted: function() {

    },
    methods: {
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
            const videoPlayer = document.getElementsByClassName('video-origin');
            for (let i = 0, len = videoPlayer.length; i < len; i++) {
                arr[i] = videoPlayer[i];
            }
            return arr;
        }
    },
    destroyed: function() {
        clearInterval(this.timer);
    }
}
</script>
<style scoped>
.video-list {
    width: 100%;
    margin-top: 85px;
    overflow: hidden;
}

.video-item {
    width: 100%;
    overflow: hidden;
}

.video-item:last-child {
    margin-bottom: 65px;
}

.video-origin {
    width: 100%;
    height: 205px;
    /* background: #856bc9; */
}

.video-detail {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.detail-title {
    width: 61%;
    height: 47px;
    display: flex;
    align-items: center;
    margin-left: 3%;
}

.interaction {
    width: 35%;
    height: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin-right: 3%;
}

.interaction-item {
    overflow: hidden;
}

.interaction-item-img {
    width: 18px;
    height: 18px;
}

.interaction-item-more {
    display: flex;
    align-items: center;
    height: 35px;
}

.interaction-item-num {
    text-align: center;
    font-size: 10px;
    color: #515454;
}
</style>