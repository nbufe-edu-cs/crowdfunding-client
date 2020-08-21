<template>
  <div>
    <wc-swiper class="swiper">
      <wc-slide>
        <img src="./../../static/1.jpg" style="width: 100%;height: 268px">
      </wc-slide>
      <wc-slide>
        <img src="./../../static/2.jpg" style="width: 100%;height: 268px">
      </wc-slide>
      <wc-slide>
        <img src="./../../static/3.jpg" style="width: 100%;height: 268px">
      </wc-slide>
    </wc-swiper>
    <!--<van-swipe :autoplay="3000">-->
      <!--<van-swipe-item v-for="(image, index) in images" :key="index">-->
        <!--<img v-lazy="image"  src="./../../static/1.jpg"/>-->
      <!--</van-swipe-item>-->
    <!--</van-swipe>-->
  </div>
</template>
<script>

    export default {
      data(){
        return{
          images: [
            "./../../static/3.jpg",
            "./../../static/1.jpg",
            "./../../static/2.jpg",
            "./../../static/3.jpg",
            "./../../static/1.jpg",
          ],
        }
      },


    }
</script>
<style type="text/css">
  *{
    margin: 0;
    padding: 0;
  }
  .swiper {
    height: 150px;
  }
  /*.van-swipe{*/
    /*margin:  0 auto;*/
    /*width: 100%;*/
    /*height: 150px;*/
  /*}*/
  /*.van-swipe .van-swipe-item {*/
    /*color: #fff;*/
    /*font-size: 20px;*/
    /*line-height: 150px;*/
    /*text-align: center;*/
    /*background-color: #39a9ed;*/
  /*}*/
</style>


