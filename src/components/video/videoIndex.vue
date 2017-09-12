<template>
    <div v-cloak>
       <div class="video-list">
           <div class="video-item">
               <video src="" class="video-origin"></video>
               <div class="video-detail">
                   <p class="detail-title">老游戏大战新游戏</p>
                   <div class="interaction">
                       <div class="interaction-item">
                           <img src="../../static/images/thumbs.png" alt="" class="interaction-item-img">
                           <p class="interaction-item-num">666</p>
                       </div>
                       <div class="interaction-item">
                           <img src="../../static/images/comment.png" alt="" class="interaction-item-img">
                           <p class="interaction-item-num">355</p>
                       </div>
                       <div class="interaction-item-more">
                           <img src="../../static/images/More.png" alt="" class="interaction-item-img">
                       </div>
                   </div>
               </div>
           </div>
           <div class="video-item">
               <video src="" class="video-origin"></video>
               <div class="video-detail">
                   <p class="detail-title">老游戏大战新游戏</p>
                   <div class="interaction">
                       <div class="interaction-item">
                           <img src="../../static/images/thumbs.png" alt="" class="interaction-item-img">
                           <p class="interaction-item-num">666</p>
                       </div>
                       <div class="interaction-item">
                           <img src="../../static/images/comment.png" alt="" class="interaction-item-img">
                           <p class="interaction-item-num">355</p>
                       </div>
                       <div class="interaction-item-more">
                           <img src="../../static/images/More.png" alt="" class="interaction-item-img">
                       </div>
                   </div>
               </div>
           </div>
           <div class="video-item">
               <video src="" class="video-origin"></video>
               <div class="video-detail">
                   <p class="detail-title">老游戏大战新游戏</p>
                   <div class="interaction">
                       <div class="interaction-item">
                           <img src="../../static/images/thumbs.png" alt="" class="interaction-item-img">
                           <p class="interaction-item-num">666</p>
                       </div>
                       <div class="interaction-item">
                           <img src="../../static/images/comment.png" alt="" class="interaction-item-img">
                           <p class="interaction-item-num">355</p>
                       </div>
                       <div class="interaction-item-more">
                           <img src="../../static/images/More.png" alt="" class="interaction-item-img">
                       </div>
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
            
        }
    },
    created: function() {

    },
    methods: {

    }
}
</script>
<style scoped>
.video-list{
    width: 100%;
    margin-top: 85px;
    overflow: hidden;
}
.video-item{
    width: 100%;
    overflow: hidden;
}
.video-item:last-child{
    margin-bottom: 65px;
}
.video-origin{
    width: 100%;
    height: 205px;
    background: #856bc9;
}
.video-detail{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.detail-title{
    width: 61%;
    height: 47px;
    display: flex;
    align-items: center;
    margin-left: 3%;
}
.interaction{
    width: 35%;
    height: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin-right: 3%;
}
.interaction-item{
    overflow: hidden;
}
.interaction-item-img{
    width: 18px;
    height: 18px;
}
.interaction-item-more{
    display: flex;
    align-items: center;
    height: 35px;
}
.interaction-item-num{
    text-align: center;
    font-size: 10px;
    color: #515454;
}
</style>