<template>
    <div v-cloak>
        <header>
            <img src="../../static/images/play-back.png" alt="" class="back" @click="back">
            <p class="title">添加关注</p>
            <canvas id="rhythm" class="volum-img" @click="playing"></canvas>
        </header>
        <div class="add-follow-box">
            <div class="search-box">
                <img src='../../static/images/search.png' alt="" class="search-img" />
                <input type="text" class="search-input" placeholder="搜索用户" />
            </div>
        </div>
        <div class="user-list">
            <div class="user-item">
                <p class="add-user-box">
                    <img src="../../static/images/add-user.png" class="add-user-logo">
                </p>
                <div class="user-item-detail">
                    <p class="user-item-detail-title">认识的人</p>
                    <p class="user-item-detail-num">
                        <span>31</span>
                        <img src="../../static/images/collect-next.png" class="add-next">
                    </p>
                </div>
            </div>
            <div class="user-item">
                <p class="add-user-box">
                    <img src="../../static/images/add-star.png" class="add-user-logo">
                </p>
                <div class="user-item-detail">
                    <p class="user-item-detail-title">明星用户</p>
                    <p class="user-item-detail-num">
                        <span>401</span>
                        <img src="../../static/images/collect-next.png" class="add-next">
                    </p>
                </div>
            </div>
            <div class="user-item">
                <p class="add-user-box">
                    <img src="../../static/images/add-singer.png" class="add-user-logo">
                </p>
                <div class="user-item-detail">
                    <p class="user-item-detail-title">音乐人</p>
                    <p class="user-item-detail-num">
                        <span>827</span>
                        <img src="../../static/images/collect-next.png" class="add-next">
                    </p>
                </div>
            </div>
            <div class="user-item">
                <p class="add-user-box">
                    <img src="../../static/images/add-super-singer.png" class="add-user-logo">
                </p>
                <div class="user-item-detail">
                    <p class="user-item-detail-title">音乐达人</p>
                    <p class="user-item-detail-num">
                        <span>1520</span>
                        <img src="../../static/images/collect-next.png" class="add-next">
                    </p>
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
.add-follow-box{
    width: 100%;
    height: 45px;
    background: #e5e8e8;
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.search-box {
    width: 94%;
    height: 30px;
    background: #fff;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 13px;
}

.search-img {
    width: 14px;
    height: 14px;
    margin-left: 35%;
    margin-right: 10px;
}

.search-input {
    width: 65%;
    height: 100%;
    outline: none;
    border: none;
}
.user-list{
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
}
.user-item{
    width: 97%;
    height: 60px;
    margin-left: 3%;
    display: flex;
}
.add-user-box{
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
}
.add-user-logo{
    width: 35px;
    height: 35px;
}
.user-item-detail{
    width: 85%;
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
}
.user-item-detail-title{
    font-size: 18px;
}
.user-item-detail-num{
    margin-right: 3%;
    height: 100%;
    font-size: 12px;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
}
.add-next{
    width: 13px;
    height: 13px;
    margin-left: 10px;
}
</style>