<template>
    <div v-cloak>
        <div class="login-page">
            <div class="logo-box">
                <img src="../../static/images/wangyi-logo.png" class="logo">
            </div>
            <div class="login-register">
                <button @click="telephoneLogin">手机号登录</button>
                <button @click="register">注册</button>
            </div>
        </div>
        <div class="other-login">
            <p class="tourist-use" @click="generateAccount">游客试用</p>
            <p class="other-login-title">
                <span></span>
                <span>其他登录方式</span>
                <span></span>
            </p>
            <div class="login-list">
                <div class="login-item">
                    <p class="login-item-name">
                        <img src="../../static/images/wechat pay.png" class="login-logo-icon">
                    </p>
                    <p class="login-item-name">微信</p>
                </div>
                <div class="login-item">
                    <p class="login-item-name">
                        <img src="../../static/images/QQ.png" class="login-logo-icon">
                    </p>
                    <p class="login-item-name">QQ</p>
                </div>
                <div class="login-item">
                    <p class="login-item-name">
                        <img src="../../static/images/sina.png" class="login-logo-icon">
                    </p>
                    <p class="login-item-name">新浪微博</p>
                </div>
                <div class="login-item">
                    <p class="login-item-name">
                        <img src="../../static/images/wangyi-mail.png" class="login-logo-icon">
                    </p>
                    <p class="login-item-name">网易邮箱</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userInfo:{
                phone:'',
                password:'',
                name:'游客'
            }
        }
    },
    created: function() {

    },
    methods: {
        //手机号登录
        telephoneLogin: function() {
            this.$router.push({ name: 'telephoneLogin' });
        },
        //注册
        register: function() {
            this.$router.push({ name: 'register' });
        },
        //游客试用，随机生成用户名和密码
        generateAccount:function(){
            // this.userInfo.password='123456';
            // localStorage.setItem('userInfo',JSON.stringify(this.userInfo));
            // this.$router.push('/userIndex');
        }
    }
}
</script>
<style scoped>
.login-page {
    width: 100%;
    overflow: hidden;
    background: #f9eeed;
}

.logo-box {
    width: 100%;
    height: 175px;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.logo {
    width: 82px;
    height: 82px;
}

.login-register {
    width: 100%;
    overflow: hidden;
}

.login-register button {
    width: 80%;
    height: 40px;
    border: 1px solid #a1433a;
    border-radius: 40px;
    outline: none;
    font-size: 16px;
    color: #de464e;
    background: #fff;
    display: block;
    margin-top: 20px;
    margin-left: 10%;
}

.other-login {
    width: 100%;
    background: #efefef;
    overflow: hidden;
}

.tourist-use {
    width: 100%;
    font-size: 16px;
    color: #666;
    text-align: center;
    text-decoration: underline;
    margin-top: 25px;
}

.other-login-title {
    width: 80%;
    margin-left: 10%;
    margin-top: 140px;
    font-size: 14px;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.other-login-title span:first-child {
    display: block;
    background: #c2c2c2;
    width: 33%;
    height: 1px;
    margin-right: 5px;
}

.other-login-title span:last-child {
    display: block;
    background: #c2c2c2;
    width: 33%;
    height: 1px;
    margin-left: 5px;
}

.login-list {
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
}

.login-item {
    overflow: hidden;
}

.login-item-name {
    text-align: center;
    color: #b0b0b0;
    font-size: 12px;
    margin-bottom: 5px;
}

.login-logo-icon {
    width: 40px;
    height: 40px;
}
</style>
