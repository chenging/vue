<template>
  <div class="frame" v-cloak>
    <header>
      <img src='../static/images/voice.png' alt="" class="voice-img" />
      <div class="search-box">
        <img src='../static/images/search.png' alt="" class="search-img" />
        <input type="text" class="search-input" placeholder="搜索歌词、音乐、电台" />
      </div>
      <img src='../static/images/volum.png' alt="" class="volum-img" />
    </header>
    <ul class="nav">
      <li>个性推荐</li>
      <li>歌单</li>
      <li>主播电台</li>
      <li>排行榜</li>
    </ul>
    <div class="carousel-box">
      <img src='../static/images/carousel-two.jpg' class="carousel-img" />
    </div>
    <div class="radio-station">
      <div class="radio-station-item">
        <p><img src='../static/images/fm.png' class="radio-img" /></p>
        <p>私人FM</p>
      </div>
      <div class="radio-station-item">
        <p><img src='../static/images/fm.png' class="radio-img" /></p>
        <p>每日歌曲推荐</p>
      </div>
      <div class="radio-station-item">
        <p><img src='../static/images/fm.png' class="radio-img last" /></p>
        <p>云音乐热歌榜</p>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'hello world'
    }
  },
  created: function() {

  },
  methods: {

  }
}
</script>
<style scoped>
.frame{
  background: #fff;
  overflow: hidden;
}
header {
    width: 100%;
    height: 45px;
    background: #9374ee;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.voice-img {
    width: 23px;
    height: 22px;
   margin-left: 3%;
}

.search-box {
    width: 68%;
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
    margin-left: 20%;
    margin-right: 10px;
}

.search-input {
    width: 65%;
    height: 100%;
    outline: none;
    border: none;
}

.volum-img {
    width: 23px;
    height: 22px;
    margin-right: 3%;
}

.nav {
    width: 94%;
    height: 40px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 3%;
}

.nav li {
    list-style: none;
    color: #000;
    font-size: 13px;
}

.current-page {
    color: #856bc9;
    border-bottom: 5px solid #856bc9;
}

.carousel-box {
    width: 100%;
    height: 140px;
    overflow: hidden;
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
.radio-station-item{
  overflow: hidden;
}
.radio-station-item p{
  width: 100%;
  text-align: center;
  font-size: 12px;
}
.radio-img{
  width: 53px;
  height: 53px;
}
</style>


