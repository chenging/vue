<template>
    <div v-cloak>
        <div class="carousel-box">
            <img :src='imgSrc' class="carousel-img" id="carousel-img">
            <ul class="show-carousel">
                <li v-for="(item,imgIndex) in imgList" :class="{'current-img':imgIndex===curIndex}" @click="switchIndex(imgIndex)"></li>
            </ul>
        </div>
        <div class="radio-station">
            <div class="radio-station-item" @click="getIntoFm">
                <p><img src='../../../static/images/fm.png' class="radio-img" /></p>
                <p>私人FM</p>
            </div>
            <div class="radio-station-item" @click="dayRecommend">
                <p><img src='../../../static/images/ic_recommend.png' class="radio-img" /></p>
                <p>每日推荐</p>
            </div>
            <div class="radio-station-item" @click="songSheet">
                <p><img src='../../../static/images/sheet-check3-o.png' class="radio-img last" /></p>
                <p>歌单</p>
            </div>
            <div class="radio-station-item" @click="ranking">
                <p><img src='../../../static/images/ranking_icon-01.png' class="radio-img last" /></p>
                <p>排行榜</p>
            </div>
        </div>
        <div v-for="(item,index) in musicTitleList" class="music-list">
            <div class="classify-title">
                <p class="classify-title-bg"></p>
                <p class="classify-ttitle-content">{{item}}</p>
                <img src="../../../static/images/next.png" alt="" class="next-img">
            </div>
            <div class="classify-list">
                <div class="list-item" v-for="(item,index) in musicList" @click="selectMusicList(item.id)">
                    <div class="list-item-bg" :style="{backgroundImage: 'url(' + item.cover+ ')'}">
                        <div class="list-item-title">
                            <img src="../../../static/images/icon_listen.png" alt="" class="icon-listen">
                            <span>20万</span>
                        </div>
                    </div>
                    <p class="list-item-describe">{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            musicTitleList: ['推荐歌单', '独家放送', '最新音乐', '推荐MV', '精选专栏', '主播电台'],
            musicList: [],
            imgList: [
                'http://img5.imgtn.bdimg.com/it/u=3303490552,2643456935&fm=27&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=1783741574,2767026355&fm=27&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=4264003133,22410145&fm=27&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=1971117974,1313741860&fm=27&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2937188385,928082306&fm=27&gp=0.jpg'
            ],
            imgIndex: 0,
            imgSrc: '',
            curIndex: 0
        }
    },
    created: function() {
        //检测当前环境，本地环境下才调用接口
        const checkUrl = location.href.indexOf('localhost');
        if (checkUrl > 0) {
            this.getMusicList();
        } else {
            this.musicList = GlobalData.musicList;
        }
        this.imgSrc = this.imgList[this.imgIndex];
        this.timer = setInterval(() => {
            this.carouselFunc();
        }, 3000);
    },
    methods: {
        //跳转私人FM音乐播放界面
        getIntoFm: function() {
            this.$router.push({ name: 'fmPlayView' });
        },
        //每日推荐
        dayRecommend: function(e) {
            this.$router.push({ name: 'recommendIndex' });
        },
        //歌单
        songSheet: function() {
            this.$router.push({ name: 'songSheet' });
        },
        //排行榜
        ranking: function() {
            this.$router.push({ name: 'ranking' });
        },
        //选择歌单
        selectMusicList: function(id) {
            console.log(id);
        },
        //获取音乐列表
        getMusicList: function() {
            this.publicHttp({}, 'post', 'http://localhost:9999/musicList', (res) => {
                this.musicList = res.data.data;
            })
        },
        //轮播控制函数
        carouselFunc: function() {
            const img=document.getElementById('carousel-img');
            if (this.imgIndex < this.imgList.length - 1) {
                // img.style.animationPlayState='running';
                this.imgIndex++;

            } else {
                this.imgIndex = 0;
            }
            this.curIndex = this.imgIndex;
            this.imgSrc = this.imgList[this.imgIndex];
        },
        //点击轮播圆圈切换index
        switchIndex: function(index) {
            this.imgIndex = index;
            this.curIndex = this.imgIndex;
            this.imgSrc = this.imgList[this.imgIndex];
            clearInterval(this.timer);
            setTimeout(() => {
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    this.carouselFunc();
                }, 3000);
            }, 5000)
        }
    },
    destroyed: function() {
        clearInterval(this.timer);
    }
}
</script>
<style scoped>
.carousel-box {
    width: 100%;
    height: 140px;
    overflow: hidden;
    margin-top: 85px;
    position: relative;
}

.carousel-img {
    width: 100%;
    height: 100%;
    animation-name: switchImg;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-play-state: paused;
}
/* @keyframes switchImg {
    0%{
        opacity: 1;
    }
    25%{
        opacity: 0.7;
    }
    50%{
        opacity: 0.4;
    }
    75%{
        opacity: 0.1;
    }
    100%{
        opacity: 0;
    }
} */
.show-carousel {
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 20px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.show-carousel li {
    list-style: none;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #fff;
    margin: 0 8px;
}

.current-img {
    background: #9b85eb !important;
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

.list-item-describe {
    width: 94%;
    margin-left: 4%;
    font-size: 14px;
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

.list-item-bg {
    width: 100%;
    height: 118px;
    display: flex;
    justify-content: flex-end;
    background-size: 100% 100%;
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
    background: rgba(16, 1, 1, 0.7);
    opacity: 0.7;
    position: fixed;
    bottom: 0;
    left: 0;
}

.bottom-nav {
    overflow: hidden;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
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

.music-list:last-child {
    margin-bottom: 70px;
}
</style>