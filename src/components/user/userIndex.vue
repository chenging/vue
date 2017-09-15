<template>
    <div v-cloak>
        <header>
            <p class="more-music"></p>
            <p class="title">账号</p>
            <canvas id="rhythm" class="volum-img" @click="playing"></canvas>
        </header>
        <div class="user-base-info">
            <div class="base-info-box">
                <img src="" alt="" class="portrait">
                <div class="username">
                    <p>chenging565</p>
                    <img src="../../static/images/LV5.png" alt="" class="level">
                </div>
            </div>
            <div class="sign">
                <img src="../../static/images/Gold.png" alt="" class="gold">
                <span>签到</span>
            </div>
        </div>
        <div class="interaction-info">
            <div class="info-item">
                <div class="info-item-detail">
                    <p class="info-item-detail-title">动态</p>
                    <p class="info-item-detail-num">
                        <strong>0</strong>
                    </p>
                </div>
            </div>
            <div class="info-item">
                <div class="info-item-detail">
                    <p class="info-item-detail-title">关注</p>
                    <p class="info-item-detail-num">
                        <strong>0</strong>
                    </p>
                </div>
            </div>
            <div class="info-item">
                <div class="info-item-detail">
                    <p class="info-item-detail-title">粉丝</p>
                    <p class="info-item-detail-num">
                        <strong>0</strong>
                    </p>
                </div>
            </div>
            <div class="info-item">
                <div class="info-item-detail-sp">
                    <p class="info-item-detail-title">
                        <img src="../../static/images/write.png" alt="" class="edit-data">
                    </p>
                    <p class="info-item-detail-title">我的资料</p>
                </div>
            </div>
        </div>
        <div class="user-function-list">
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/message.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav no-border">
                    <p>我的消息</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/vip.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav">
                    <p>会员中心</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/shoppingcar.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav">
                    <p>商城</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/free.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav no-border">
                    <p>在线听歌免流量</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item" style="margin-top:10px;">
                <div class="logo-box">
                    <img src="../../static/images/setting.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav">
                    <p>设置</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/scan.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav">
                    <p>扫一扫</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/clothes.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav">
                    <p>个性皮肤</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/user-bulb.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav">
                    <p>夜间模式</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/clock.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav">
                    <p>定时关闭</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/alarm2.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav">
                    <p>音乐闹钟</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/Car.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav no-border">
                    <p>驾驶模式</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item" style="margin-top:10px;">
                <div class="logo-box">
                    <img src="../../static/images/user-shares.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav">
                    <p>分享网易云音乐</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
                </div>
            </div>
            <div class="user-function-list-item">
                <div class="logo-box">
                    <img src="../../static/images/info.png" alt="" class="message">
                </div>
                <div class="user-function-list-item-nav no-border">
                    <p>关于</p>
                    <img src="../../static/images/collect-next.png" alt="" class="next">
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
        this.timer=setInterval(()=>{
            if(GlobalData.AudioPlayStatus){
                this.drawRhythm();
            }
        },1000)
    },
    mounted:function(){
        this.drawRhythm();
    },  
    methods: {
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
                ctx.lineTo(i, Math.abs(parseInt(Math.random()*cav.height)-5));
                ctx.stroke();
            }
            // GlobalData.isDrawRhythm=true;

        },
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
}

.volum-img {
    width: 23px;
    height: 22px;
    margin-right: 3%;
}

.user-base-info {
    width: 100%;
    margin-top: 45px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
}

.base-info-box {
    margin-left: 3%;
    height: 100%;
    display: flex;
    align-items: center;
}

.portrait {
    width: 58px;
    height: 58px;
    border-radius: 58px;
    border: 1px solid #eaeaea;
    margin-right: 10px;
}

.username {
    font-size: 18px;
    color: #333;
}

.level {
    width: 35px;
    height: 16px;
}

.sign {
    margin-right: 3%;
    width: 62px;
    height: 25px;
    border: 1px solid #8c80c5;
    color: #8c80c5;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
}

.gold {
    width: 12px;
    height: 12px;
    margin-right: 5px;
}

.interaction-info {
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid #eaeaea;
}

.info-item {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-item-detail {
    width: 100%;
    height: 35px;
    border-right: 1px solid #eaeaea;
    font-size: 12px;
    overflow: hidden;
}

.info-item-detail-sp {
    width: 100%;
    height: 100%;
    font-size: 12px;
    overflow: hidden;
}

.info-item-detail-title {
    width: 100%;
    text-align: center;
    color: #999;
}

.info-item-detail-num {
    width: 100%;
    text-align: center;
    color: #333;
}

.edit-data {
    width: 13px;
    height: 13px;
    margin-top: 8px;
}

.user-function-list {
    width: 100%;
    background: #efeff0;
    overflow: hidden;
}

.user-function-list-item {
    width: 100%;
    height: 45px;
    background: #fff;
    display: flex;
}

.user-function-list-item:first-child {
    margin-top: 10px;
    margin-bottom: 10px;
}

.user-function-list-item:last-child {
    margin-bottom: 70px;
}

.logo-box {
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.message {
    width: 17px;
    height: 16px;
}

.user-function-list-item-nav {
    width: 82%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: #333;
    border-bottom: 1px solid #eaeaea;
}

.next {
    width: 14px;
    height: 15px;
    margin-right: 3%;
}

.no-border {
    border: none;
}
</style>