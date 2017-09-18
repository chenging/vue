<template>
    <div v-cloak>
        <div class="header">
            <img src="../../static/images/play-back.png" class="back" @click="back">
            <p class="header-title">手机号登录</p>
        </div>
        <div class="input-content">
            <p class="input-item">
                <img src="../../static/images/login-phone.png" class="login-icon">
                <input type="text" placeholder="手机号" class="input-text" v-model="userInfo.phone">
            </p>
            <p class="input-item">
                <img src="../../static/images/login-password.png" class="login-icon">
                <input type="password" placeholder="密码" class="input-text" v-model="userInfo.password">
            </p>
            <button class="login-btn" @click="login">登录</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userInfo:{
                phone:'',
                password:''
            }
        }
    },
    created: function() {

    },
    methods: {
        back: function() {
            this.$router.go(-1);
        },
        login: function() {
            if (this.userInfo.phone != '' && this.userInfo.password != '') {
                localStorage.setItem('userInfo',JSON.stringify(this.userInfo));
                this.$router.push('/userIndex');
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
</style>
