<template>
    <div v-cloak>
        <div class="carousel-box">
            <img src='../../../static/images/carousel-two.jpg' class="carousel-img" />
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
            <div class="radio-station-item" @click="dayRecommend">
                <p><img src='../../../static/images/sheet-check3-o.png' class="radio-img last" /></p>
                <p>歌单</p>
            </div>
            <div class="radio-station-item" @click="dayRecommend">
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
                    <div class="list-item-bg">
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
            musicList:[]
        }
    },
    created: function() {
        this.musicList=GlobalData.musicList;
    },
    methods: {
        //跳转私人FM音乐播放界面
        getIntoFm: function() {
            this.$router.push({ name: 'fmPlayView' });
        },
        //每日推荐
        dayRecommend: function(e) {
            this.clickAnimation(e);
        },
        //选择歌单
        selectMusicList:function(id){
            console.log(id)
        }
    }
}
</script>
<style scoped>
.carousel-box {
    width: 100%;
    height: 140px;
    overflow: hidden;
    margin-top: 85px;
}

.carousel-img {
    width: 100%;
    height: 100%;
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
    background: #9374ee;
    display: flex;
    justify-content: flex-end;
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