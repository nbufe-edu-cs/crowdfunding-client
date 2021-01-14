<template>
  <div>
    <nut-swiper
      :paginationVisible="true"
      direction="horizontal"
      :swiperData="bannerList"
      ref="demo1"
    >
      <div v-for="item in bannerList" :key="item" class="nut-swiper-slide">
        <img :src="item" alt="" style="width: 100%; height: 100%" />
      </div>
    </nut-swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerList: [
        "http://agri.wuxiaohao.cn/banner/banner1.jpeg",
        "http://agri.wuxiaohao.cn/banner/banner2.jpeg",
        "http://agri.wuxiaohao.cn/banner/banner3.jpeg",
      ],
    };
  },
};
</script>
<style type="text/css">
* {
  margin: 0;
  padding: 0;
}
.swiper {
  height: 150px;
}
</style>
