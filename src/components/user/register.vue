<template>
    <div v-cloak>
        <div class="header">
            <img src="../../static/images/play-back.png" class="back" @click="back">
            <p class="header-title">手机号注册</p>
        </div>
        <div class="input-content">
            <p class="input-item">
                <img src="../../static/images/login-phone.png" class="login-icon">
                <input type="text" placeholder="请输入手机号" class="input-text" v-model="phone">
            </p>
            <p class="input-item">
                <img src="../../static/images/login-password.png" class="login-icon">
                <input type="password" placeholder="请输入密码" class="input-text" v-model="password">
            </p>
            <p class="input-item">
                <img src="../../static/images/login-password.png" class="login-icon">
                <input type="password" placeholder="请确认密码" class="input-text" v-model="confirmPassword">
            </p>
            <button class="login-btn" @click="register">注册</button>
        </div>
        <div class="info-notice-frame" v-if="isShow">
            <div class="info-notice-box">
                <p class="info-notice-box-title">温馨提示</p>
                <p class="info-notice-box-content">{{noticeContent}}</p>
                <div class="info-notice-box-btn">
                    <p class="info-notice-box-cancel-btn" @click="cancelBtn">取消</p>
                    <p class="info-notice-box-confirm-btn" @click="confirmBtn">确定</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            phone: '',
            password: '',
            confirmPassword:'',
            isShow:false,
            noticeContent:'',
            status:''
        }
    },
    created: function() {

    },
    methods: {
        back: function() {
            this.$router.go(-1);
        },
        register: function() {
            if (this.phone != '' && this.password != '') {
                this.publicHttp({phone:this.phone,password:this.password}, 'post', 'http://localhost:9999/register', (res) => {
                    this.status=res.data.status;
                    if (this.status == 200) {
                        this.noticeContent='注册成功，是否前往登录？';
                        this.isShow=true;
                    }else if(this.status==401){
                        this.noticeContent='注册失败，请稍候再试!';
                        this.isShow=true;
                    }else if(this.status==402){
                        this.noticeContent='您的手机号已注册，不能再次注册，是否前往登录？';
                        this.isShow=true;
                    }
                })
            }
        },
        //取消
        cancelBtn:function(){
            this.isShow=false;
        },
        //确定
        confirmBtn:function(){
            this.isShow=false;
            if(this.status==200||this.status==402){
                this.$router.push({name:'telephoneLogin'});
            }
        }
    }
}
</script>
<style scoped>
.header {
    width: 100%;
    height: 45px;
    background: #9374ee;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.back {
    width: 18px;
    height: 22px;
    margin-left: 3%;
}

.header-title {
    width: 90%;
    font-size: 18px;
    color: #fff;
    text-align: center;
}

.input-content {
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
}

.input-item {
    width: 94%;
    height: 45px;
    margin-left: 3%;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.login-icon {
    width: 17px;
    height: 20px;
    margin-left: 5px;
    margin-right: 12px;
}

.input-text {
    height: 43px;
    width: 85%;
    font-size: 16px;
    border: none;
    outline: none;
}

.login-btn {
    width: 94%;
    margin-left: 3%;
    margin-top: 30px;
    height: 40px;
    background: #9374ee;
    font-size: 18px;
    color: #ecd9ff;
    outline: none;
    border: none;
    border-radius: 40px;
}

.reset-password {
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #999;
    margin-top: 25px;
    text-decoration: underline;
}
</style>
