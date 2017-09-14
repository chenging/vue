<template>
    <div v-cloak class="play-bg">
        <div class="play-title">
            <img src="../../static/images/play-back.png" alt="" class="back" @click="back">
            <p class="song-name">歌曲名称</p>
            <img src="../../static/images/play-Share.png" alt="" class="share">
        </div>
        <canvas id="playAnimation">
            <img src="../../static/images/record.png" id="record" class="play-animation">
        </canvas>
        <div class="interaction-box">
            <img src="../../static/images/play-collection.png" alt="" class="interaction-icon">
            <img src="../../static/images/play-download.png" alt="" class="interaction-icon">
            <p class="comment">
                <img src="../../static/images/play-comment.png" alt="" class="interaction-icon">
                <span>999+</span>
            </p>
            <img src="../../static/images/play-more.png" alt="" class="interaction-icon">
        </div>
        <div class="play-progress">
            <p class="played-time" v-cloak>{{curPlayTime}}</p>
            <canvas class="current-progress" id="playProgress"></canvas>
            <p class="surplus-time" v-cloak>{{totalPlayTime}}</p>
        </div>
        <div class="play-controll">
            <img src="../../static/images/play-random.png" alt="" class="play-controll-icon-edge">
            <img src="../../static/images/play-last.png" alt="" class="play-controll-icon-switch" @click="lastSong">
            <img v-if="playStatus" @click="play" src="../../static/images/play-pause.png" alt="" class="play-controll-icon-play">
            <img v-if="!playStatus" @click="play" src="../../static/images/play-playing.png" alt="" class="play-controll-icon-play">
            <img src="../../static/images/play-next.png" alt="" class="play-controll-icon-switch" @click="nextSong">
            <img src="../../static/images/play-list-more.png" alt="" class="play-controll-icon-edge">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            playStatus: false,
            src: [
                'http://m10.music.126.net/20170914184206/2e2c2700252281ce220fb5db4930dd8f/ymusic/80cd/afaa/0422/f323d3e939261677ce1b383e3194c751.mp3',
                'http://up.xzdown.com/mp3/2017-09-14/1505390954.mp3', 'http://up.xzdown.com/mp3/2017-09-14/1505386184.mp3',
                'http://up.xzdown.com/mp3/2017-09-14/1505383763.mp3', 'http://up.xzdown.com/mp3/2017-09-14/1505383305.mp3',
                'http://up.xzdown.com/mp3/2017-09-14/1505367381.mp3'
            ],
            curPlayTime: '00:00',//当前已播放时长
            totalPlayTime: '00:00',//总时长
        }
    },
    created: function() {
        this.initPlayer();
        //将全局播放状态值赋值给当前播放器
        this.playStatus = GlobalData.AudioPlayStatus;
        //定时器，用于获取已播放和总时长及绘制canvas播放动画
        this.timer = setInterval(() => {
            this.listenPlayStatus();
            this.drawProgress();
            if (this.playStatus) {
                this.drawAnimation();
            }
        }, 1000)
    },
    mounted: function() {
        if (this.player.duration) {
            this.listenPlayStatus();
        }
        this.drawProgress();
        this.drawAnimation();
    },
    methods: {
        back: function() {
            history.back(1);
        },
        //播放、暂停
        play: function() {
            //播放器就绪后可进行播放操作
            if (this.player.readyState == 4) {
                this.playStatus = !this.playStatus;
                if (this.playStatus) {
                    this.player.play();
                } else {
                    this.player.pause();
                }
                //播放暂停改变全局播放状态
                GlobalData.AudioPlayStatus = this.playStatus;
            }
        },
        //上一曲
        lastSong: function() {
            if (GlobalData.index > 0) {
                GlobalData.index -= 1;
            }
            this.player.src = this.src[GlobalData.index];
            this.player.play();
            this.playStatus = true;
            GlobalData.AudioPlayStatus = this.playStatus;
        },
        //下一曲
        nextSong: function() {
            if (GlobalData.index < this.src.length - 1) {
                GlobalData.index += 1;
            } else {
                GlobalData.index = 0;
            }
            this.player.src = this.src[GlobalData.index];
            this.player.play();
            this.playStatus = true;
            GlobalData.AudioPlayStatus = this.playStatus;
        },
        //音频顺序控制函数
        audioOrder:function(index){
            const len=this.src.length;
            if(index<len-1){

            }
        },
        //根据isAudioSrc判断是否已经初始化播放器，如果为false则注入歌曲链接
        initPlayer: function() {
            if (!GlobalData.isAudioSrc) {
                this.player.src = this.src[GlobalData.index];
                GlobalData.isAudioSrc = true;
            }
        },
        //将音频秒数转为分钟数
        transformToMinutes: function(second) {
            if (second) {
                const m = parseInt(parseInt(second) / 60);
                const s = parseInt(second) - m * 60;
                return `${(m >= 10 ? m : `0${m}`)}:${(s >= 10 ? s : `0${s}`)}`;
            } else {
                return '00:00'
            }
        },
        //监听播放状态,获取当前播放时间和总时间
        listenPlayStatus: function() {
            this.curPlayTime = this.transformToMinutes(this.player.currentTime);
            this.totalPlayTime = this.transformToMinutes(this.player.duration);
            if (this.player.duration) {
                if (this.curPlayTime === this.totalPlayTime) {
                    if (GlobalData.index < this.src.length - 1) {
                        GlobalData.index += 1;
                        this.player.src = this.src[GlobalData.index];
                        this.player.play();
                        this.playStatus = true;
                    } else {
                        GlobalData.index = 0;
                        this.player.src = this.src[GlobalData.index];
                        this.player.pause();
                        this.playStatus = false;
                    }
                    GlobalData.AudioPlayStatus = this.playStatus;

                }
            }

        },
        //使用canvas绘制播放进度条
        drawProgress: function() {
            const cav = document.getElementById('playProgress');
            const ctx = cav.getContext('2d');
            const curTime = parseInt(this.player.currentTime);
            const totalTime = parseInt(this.player.duration);
            cav.width = parseInt(screen.width) * 65 / 100;
            cav.height = '30';
            //计算进度条
            const progress = parseInt(curTime * (cav.width - cav.height) / totalTime);
            //画未播放时的进度条
            ctx.beginPath();
            ctx.strokeStyle = '#bab3b3';
            ctx.lineWidth = '3';
            ctx.moveTo(0, cav.height / 2);
            ctx.lineTo(cav.width, cav.height / 2);
            ctx.stroke();
            //画播放时滑动的圆
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            if (progress) {
                ctx.arc(cav.height / 2 + progress, cav.height / 2, cav.height / 2, 0, 2 * Math.PI);
            } else {
                ctx.arc(cav.height / 2, cav.height / 2, cav.height / 2, 0, 2 * Math.PI);
            }
            ctx.fill();
            //画里面的同心小圆
            ctx.beginPath();
            ctx.fillStyle = "#9275dc";
            if (progress) {
                ctx.arc(cav.height / 2 + progress, cav.height / 2, 3, 0, 2 * Math.PI);
            } else {
                ctx.arc(cav.height / 2, cav.height / 2, 3, 0, 2 * Math.PI);
            }
            ctx.fill();
            //绘制已播放的进度条
            ctx.beginPath();
            ctx.strokeStyle = '#9275dc';
            ctx.lineWidth = '3';
            ctx.moveTo(0, cav.height / 2);
            ctx.lineTo(progress, cav.height / 2);
            ctx.stroke();
        },
        //canvas绘制播放动画
        drawAnimation: function() {
            const cav = document.getElementById('playAnimation');
            const ctx = cav.getContext('2d');
            const img = document.getElementById('record');
            cav.width = parseInt(screen.width);
            cav.height = parseInt(screen.height * 60 / 100);

            //绘制同心圆
            ctx.beginPath();
            ctx.fillStyle = '#bab3b3';
            ctx.arc(cav.width / 2, cav.height / 2, cav.height * 40 / 100, 0, 2 * Math.PI);
            ctx.fill();

            //绘制可旋转的其他同心圆
            const r = cav.height * 40 / 100;
            for (let i = r * 90 / 100; i >= r * 50 / 100; i -= 5) {
                ctx.beginPath();
                // ctx.strokeStyle=`rgb(${27+i},${27+i},${28+i})`;
                ctx.strokeStyle = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
                ctx.arc(cav.width / 2, cav.height / 2, i, 0, 2 * Math.PI);
                ctx.stroke();
            }
            //绘制旋转的图片
            //计算最内侧圆弧上图片起始坐标点
            const imgX = (cav.width / 2) - Math.cos(45 * Math.PI / 180) * r * 50 / 100;
            const imgY = (cav.height / 2) - Math.sin(45 * Math.PI / 180) * r * 50 / 100;
            //计算最内侧圆弧上图片终点坐标点
            const imgTarX = (cav.width / 2) + Math.cos(-45 * Math.PI / 180) * r * 50 / 100;
            const imgTarY = (cav.width / 2) + Math.sin(-45 * Math.PI / 180) * r * 50 / 100;
            // ctx.beginPath();
            // ctx.fillStyle='#fff';
            // ctx.arc(imgTarX,imgTarY,5,0,2*Math.PI);
            // ctx.fill();
            img.onload = function() {
                ctx.drawImage(img, imgX, imgY, imgTarX - imgX, imgX - 10);
            }
            ctx.drawImage(img, imgX, imgY, imgTarX - imgX, imgX - 10);
        }
    },
    destroyed: function() {
        clearInterval(this.timer);
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

.song-name {
    width: 68%;
    font-size: 15px;
    color: #fff;
    text-align: center;
}

.share {
    width: 22px;
    height: 28px;
    margin-right: 3%;
}

.interaction-box {
    width: 70%;
    margin-left: 15%;
    bottom: 125px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    margin-left: 3%;
}

.played-time {
    color: #fff;
}

.surplus-time {
    color: #bab3b3;
}

.play-animation {
    display: none;
}

.play-controll {
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

.play-controll-icon-edge {
    width: 20px;
    height: 20px;
}

.play-controll-icon-switch {
    width: 24px;
    height: 24px;
}

.play-controll-icon-play {
    width: 46px;
    height: 46px;
}
</style>