<template>
    <div v-cloak>
        <div class="ad">
            <img src="../../../static/images/carousel-two.jpg" alt="" class="carousel-img">
        </div>
        <div class="radio-nav">
            <div class="radio-nav-box">
                <div class="radio-nav-item">
                    <img src="../../../static/images/classify .png" alt="" class="classify">
                    <p>电台分类</p>
                </div>
            </div>
            <div class="radio-nav-box">
                <div class="radio-nav-item">
                    <img src="../../../static/images/icon-ranking.png" alt="" class="classify">
                    <p>电台排行</p>
                </div>
            </div>
        </div>
        <div class="classify-title">
            <p class="classify-title-bg"></p>
            <p class="classify-ttitle-content">推荐歌单</p>
            <img src="../../../static/images/next.png" alt="" class="next-img">
        </div>
        <div class="pay-item">
            <img src="" alt="" class="radio-person">
            <div class="pay-item-detail">
                <p class="pay-item-detail-title">
                    <strong>采铜.好书精读</strong>
                    <span>￥99</span>
                </p>
                <p class="pay-item-detail-content">每周帮你消化一本好书</p>
                <p class="pay-item-detail-content">9月12日更新</p>
                <p class="pay-item-detail-content">
                    <img src="../../../static/images/play.png" alt="" class="play-img">
                    <span>深度工作：四种模式，帮你快速...</span>
                </p>
            </div>
        </div>
        <div class="pay-item">
            <img src="" alt="" class="radio-person">
            <div class="pay-item-detail">
                <p class="pay-item-detail-title">
                    <strong>陈立客厅</strong>
                    <span>￥99</span>
                </p>
                <p class="pay-item-detail-content">影响你未来的100次心理谈话</p>
                <p class="pay-item-detail-content">9月11日更新</p>
                <p class="pay-item-detail-content">
                    <img src="../../../static/images/play.png" alt="" class="play-img">
                    <span>意识的目的和动机：请和我保持距离...</span>
                </p>
            </div>
        </div>
        <div class="classify-title">
            <p class="classify-title-bg"></p>
            <p class="classify-ttitle-content">电台个性推荐</p>
        </div>
        <div class="classify-list">
            <div class="list-item">
                <div class="list-item-bg">
                    <div class="list-item-title">
                        姑娘对你说晚安
                    </div>
                </div>
                <p class="list-item-describe">夏至|忽而今夏又一季</p>
            </div>
        </div>
        <div v-for="(item,index) in radioList">
            <div class="classify-title">
                <p class="classify-title-bg"></p>
                <p class="classify-ttitle-content">{{item}}</p>
                <img src="../../../static/images/next.png" alt="" class="next-img">
            </div>
            <div class="classify-list">
                <div class="list-item">
                    <div class="list-item-bg">
                        <div class="list-item-title">
                            姑娘对你说晚安
                        </div>
                    </div>
                    <p class="list-item-describe">夏至|忽而今夏又一季</p>
                </div>
                <div class="list-item">
                    <div class="list-item-bg">
                        <div class="list-item-title">
                            姑娘对你说晚安
                        </div>
                    </div>
                    <p class="list-item-describe">夏至|忽而今夏又一季</p>
                </div>
                <div class="list-item">
                    <div class="list-item-bg">
                        <div class="list-item-title">
                            姑娘对你说晚安
                        </div>
                    </div>
                    <p class="list-item-describe">夏至|忽而今夏又一季</p>
                </div>
            </div>
        </div>
        <div class="classify-title">
            <p class="classify-title-bg"></p>
            <p class="classify-ttitle-content">热门分类</p>
        </div>
        <div class="aggregate-box-list">
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/radio-book.png" alt="" class="hot-icon">
                        <p>有声书</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/bulb-1.png" alt="" class="hot-icon">
                        <p>知识技能</p>
                    </div>
                </div>
            </div>
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/trend.png" alt="" class="hot-icon">
                        <p>商业财经</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/Sailboat.png" alt="" class="hot-icon">
                        <p>人文历史</p>
                    </div>
                </div>
            </div>
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/abc.png" alt="" class="hot-icon">
                        <p>外语世界</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/baby.png" alt="" class="hot-icon">
                        <p>亲子宝贝</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="classify-title">
            <p class="classify-title-bg"></p>
            <p class="classify-ttitle-content">更多分类</p>
        </div>
        <div class="aggregate-box-list">
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/kalaok.png" alt="" class="hot-icon">
                        <p>创作|翻唱</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/radio-music.png" alt="" class="hot-icon">
                        <p>音乐故事</p>
                    </div>
                </div>
            </div>
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/Headset-1.png" alt="" class="hot-icon">
                        <p>3D|电子</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/fan.png" alt="" class="hot-icon">
                        <p>相声曲艺</p>
                    </div>
                </div>
            </div>
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/smile.png" alt="" class="hot-icon">
                        <p>情歌调频</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/hot-book.png" alt="" class="hot-icon">
                        <p>美文读物</p>
                    </div>
                </div>
            </div>
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/G-Talking.png" alt="" class="hot-icon">
                        <p>脱口秀</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/hot-radio.png" alt="" class="hot-icon">
                        <p>广播剧</p>
                    </div>
                </div>
            </div>
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/erciyuan.png" alt="" class="hot-icon">
                        <p>二次元</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/icon_anchor_homepage.png" alt="" class="hot-icon">
                        <p>明星做主播</p>
                    </div>
                </div>
            </div>
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/hot-recommend.png" alt="" class="hot-icon">
                        <p>娱乐|影视</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/science_technology.png" alt="" class="hot-icon">
                        <p>科技科学</p>
                    </div>
                </div>
            </div>
            <div class="aggregate-box">
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/doctor.png" alt="" class="hot-icon">
                        <p>校园|教育</p>
                    </div>
                </div>
                <div class="aggregate-box-item">
                    <div class="aggregate-item">
                        <img src="../../../static/images/aircraft.png" alt="" class="hot-icon">
                        <p>旅途|城市</p>
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
            radioList: ['有声书', '知识技能', '商业财经', '人文历史', '外语世界', '亲子宝贝', '创作|翻唱'
                , '音乐故事', '3D|电子', '相声曲艺', '情歌调频', '美文读物', '脱口秀', '广播剧', '二次元', '娱乐|影视',
                '科技科学', '校园|教育', '旅途|城市']
        }
    },
    created: function() {
       
    },
    methods: {

    }
}
</script>
<style scoped>
.ad {
    width: 100%;
    height: 140px;
    margin-top: 85px;
}

.carousel-img {
    width: 100%;
    height: 100%;
}

.radio-nav {
    width: 100%;
    height: 58px;
    display: flex;
    border-bottom: 1px solid #eaeaea;
}

.radio-nav-box {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.radio-nav-item {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.radio-nav-item:first-child {
    border-right: 1px solid #eaeaea;
}

.classify {
    width: 26px;
    height: 26px;
    margin-right: 15px;
}

.classify-title {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    margin-top: 10px;
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

.pay-item {
    width: 100%;
    height: 118px;
    display: flex;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 5px;
}

.radio-person {
    width: 33%;
    height: 100%;
    border: 1px solid #eaeaea;
}

.pay-item-detail {
    width: 61%;
    margin-left: 3%;
    margin-right: 3%;
    height: 100%;
    overflow: hidden;
}

.pay-item-detail-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #353536;
    margin-top: 10px;
}

.pay-item-detail-title span {
    color: #d84f5e;
}

.pay-item-detail-content {
    font-size: 12px;
    margin-top: 10px;
    color: #838686;
    display: flex;
    align-items: center;
}

.play-img {
    width: 12px;
    height: 14px;
    margin-right: 10px;
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
    margin-top: 90px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #fff;
    justify-content: flex-start;
    width: 94%;
    margin-left: 3%;
}

.list-item-describe {
    width: 94%;
    margin-left: 4%;
    font-size: 14px;
}

.aggregate-box-list {
    width: 100%;
    border-top: 1px solid #dfdfdf;
}
.aggregate-box-list:last-child{
    margin-bottom: 70px;
}
.aggregate-box {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
     border-bottom: 1px solid #eaeaea;
}

.aggregate-box-item {
    width: 50%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.aggregate-box-item:first-child{
    border-right: 1px solid #dfdfdf;
}
.aggregate-item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 16%;
}
.hot-icon{
    width: 24px;
    height: 26px;
    margin-right: 15px;
}
</style>