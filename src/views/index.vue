<template>
  <div class="index">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <Find></Find>
      <!-- <second-nav></second-nav> -->
      <focus></focus>
      <div class="noticebar">
        <nut-noticebar
          text="2020-01-10 农业和互联网融合绝不是“1+1”！当前发展火热的有六大模式"
        ></nut-noticebar>
      </div>
      <div class="products">
        <div class="product-item" v-for="item in products" :key="item.product">
          <lazy-component>
            <img class="product-img" :src="item.image" />
          </lazy-component>
          <nut-progress :percentage="item.percentage"> </nut-progress>
          <div class="product-info">
            <p class="product-name">{{ item.product }}</p>
            <p class="product-price">单价 ¥{{ item.price }}</p>
          </div>
        </div>
      </div>
    </van-pull-refresh>
    <tabbar :active2="0"></tabbar>
  </div>
</template>
<script>
import Focus from "@/components/focus";
import navBar from "@/components/navBar";
import Find from "@/components/Find";
import Tabbar from "@/components/Tabbar";
import { Toast } from "vant";
import "@/assets/css/animate.css";
export default {
  components: {
    Focus,
    Find,
    navBar,
    Tabbar,
  },
  data() {
    return {
      currentRate: 0,
      count: 0,
      isLoading: false,
      products: [
        {
          product: "西瓜",
          image: "http://agri.wuxiaohao.cn/products/watermelon.jpeg",
          percentage: 14,
          price: 2.4,
        },
        {
          product: "苹果",
          image: "http://agri.wuxiaohao.cn/products/apple.jpeg",
          percentage: 64,
          price: 6.4,
        },
        {
          product: "辣椒",
          image: "http://agri.wuxiaohao.cn/products/chili.jpeg",
          percentage: 48,
          price: 1.1,
        },
        {
          product: "西红柿",
          image: "http://agri.wuxiaohao.cn/products/tomato.jpeg",
          percentage: 95,
          price: 1.8,
        },
        {
          product: "土鸡蛋",
          image: "http://agri.wuxiaohao.cn/products/egg.jpg",
          percentage: 49,
          price: 14.8,
        },
        {
          product: "地瓜/红薯",
          image: "http://agri.wuxiaohao.cn/products/sweet_potato.jpeg",
          percentage: 100,
          price: 3.6,
        },
        {
          product: "香梨",
          image: "http://agri.wuxiaohao.cn/products/pear.jpeg",
          percentage: 59,
          price: 6.5,
        },
        {
          product: "橘子",
          image: "http://agri.wuxiaohao.cn/products/orange.jpg",
          percentage: 38,
          price: 2.3,
        },
      ],
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    },
  },
  methods: {
    turnDetail() {
      this.$router.push({
        path: "/detail",
        params: {
          //传入商品的编号
        },
      });
    },

    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>
<style lang="css">
.index {
  background-image: url("../../static/bg.png");
}
.products {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 55px;
}
.product-item {
  margin: 0 auto;
  width: 40%;
  height: 140px;
  margin-bottom: 15px;
  margin-top: 10px;
}
.product-img {
  border-radius: 10px;
  width: 100%;
  height: 120px;
}
.product-name {
  font-size: 14px;
  color: #555555;
}
.product-price {
  font-size: 12px;
  color: red;
}
.product-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
