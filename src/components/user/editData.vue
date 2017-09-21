<template>
    <div v-cloak>
        <header>
            <img src="../../static/images/play-back.png" alt="" class="back" @click="back">
            <p class="title">我的资料</p>
            <canvas id="rhythm" class="volum-img" @click="playing"></canvas>
        </header>
        <div class="notice-info">上传头像并完善个人信息，即可获得积分~</div>
        <div class="data-box">
            <div class="data-list">
                <div class="data-item">
                    <p class="data-item-title">头像</p>
                    <p class="data-item-detail">
                        <img :src="userInfo.portrait" alt="" class="portrait">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
                <div class="data-item">
                    <p class="data-item-title">个人主页背景</p>
                    <p class="data-item-detail">
                        <img :src="userInfo.background" alt="" class="user-index-bg">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
                <div class="data-item">
                    <p class="data-item-title">昵称</p>
                    <p class="data-item-detail">
                        <input type="text" class="input-data" placeholder="输入昵称" v-model="userInfo.username">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
                <div class="data-item">
                    <p class="data-item-title">性别</p>
                    <p class="data-item-detail">
                        <input type="text" class="input-data" placeholder="输入性别" v-model="userInfo.sex">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
                <div class="data-item sp">
                    <p class="data-item-title">二维码</p>
                    <p class="data-item-detail">
                        <img :src="userInfo.qrcode" alt="" class="qrcode">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
            </div>
            <div class="data-list">
                <div class="data-item">
                    <p class="data-item-title">生日</p>
                    <p class="data-item-detail">
                        <input type="text" class="input-data" placeholder="输入生日信息" v-model="userInfo.birth">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
                <div class="data-item">
                    <p class="data-item-title">地区</p>
                    <p class="data-item-detail">
                        <input type="text" class="input-data" placeholder="输入地区" v-model="userInfo.area">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
                <div class="data-item sp">
                    <p class="data-item-title">大学</p>
                    <p class="data-item-detail">
                        <input type="text" class="input-data" placeholder="未填写" v-model="userInfo.colleage">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
            </div>
            <p class="privacy-info">此三项可以在"消息和隐私设置"中设为隐私</p>
            <div class="data-list">
                <div class="data-item">
                    <p class="data-item-title">介绍</p>
                    <p class="data-item-detail"></p>
                </div>
                <textarea class="input-user-introduce" placeholder="个人介绍" v-model="userInfo.introduce"></textarea>
            </div>
            <div class="data-list">
                <div class="data-item">
                    <p class="data-item-title">账号和绑定设置</p>
                    <p class="data-item-detail">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
                <div class="data-item sp">
                    <p class="data-item-title">消息和隐私设置</p>
                    <p class="data-item-detail">
                        <img src="../../static/images/collect-next.png" class="next">
                    </p>
                </div>
            </div>
            <button @click="submitData" class="submit-data">提交</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userInfo:{}
        }
    },
    created: function() {
        this.getUserInfo();
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
        //提交资料
        submitData:function(){
            this.publicHttp(this.userInfo, 'post', 'http://localhost:9999/submitData', (res) => {
                if(res.data.status==200){
                    this.userInfo=res.data.data;
                }
            })
        },
        //获取用户信息
        getUserInfo:function(){
            const id=JSON.parse(localStorage.getItem('userInfo')).userId;
            this.publicHttp({userId:id}, 'post', 'http://localhost:9999/getUserInfo', (res) => {
                if(res.data.status==200){
                    this.userInfo=res.data.data;
                }
            })
        }
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

.notice-info {
    width: 100%;
    height: 35px;
    margin-top: 45px;
    background: #dfebfc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
}

.data-box {
    width: 100%;
    background: #edf0f0;
    overflow: hidden;
}
.data-list{
    width: 100%;
    background: #fff;
    margin-top: 10px;
}
.data-list:last-child{
    margin-bottom: 10px;
}
.data-item {
    width: 97%;
    margin-left: 3%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
}
.sp{
    border: none;
}
.data-item-title {
    font-size: 16px;
}

.data-item-detail {
    margin-right: 3%;
    display: flex;
    height: 100%;
    align-items: center;
}

.portrait {
    width: 40px;
    height: 40px;
    border-radius: 40px;
}
.user-index-bg{
    width: 40px;
    height: 40px;
}
.qrcode{
    width: 20px;
    height: 20px;
}
.input-data{
    height: 95%;
    border: none;
    outline: none;
    font-size: 15px;
    color: #999;
    text-align: right;
}
.next {
    width: 13px;
    height: 13px;
    margin-left: 10px;
}
.privacy-info{
    width: 100%;
    height: 25px;
    font-size: 13px;
   display: flex;
   align-items: center;
   padding-left: 3%;
}
.input-user-introduce{
    width: 97%;
    height: 120px;
    margin-left: 3%;
    font-size: 16px;
    color: #999;
    padding-top: 15px;
    border: none;
    outline: none;
}
.submit-data{
    width: 100%;
    height: 45px;
    background: #9374ee;
    font-size: 18px;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    outline: none;
}
</style>