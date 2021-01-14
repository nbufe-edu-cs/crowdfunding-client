<template>
  <div class="my" :style="{ height: windowHeight + 'px' }">
    <div class="top">
      <div class="user">
        <img src="./../../static/user.png" class="userImg" />
        <div>
          <p>未登录</p>
          <button>点击登录/注册</button>
        </div>
      </div>
      <div class="setting">
        <van-icon name="setting-o" color="white" size="20" />
        <p>设置</p>
      </div>
    </div>

    <div class="container">
      <div class="track">
        <div @click="collect">
          <span>17</span>
          <p>收藏夹</p>
        </div>
        <div>
          <span>17</span>
          <p>关注店铺</p>
        </div>
        <div>
          <span>17</span>
          <p>足迹</p>
        </div>
      </div>

      <div class="do">
        <div @click="oreder(1)">
          <van-icon name="shopping-cart-o" size="28px" />
          <p>购物车</p>
        </div>
        <div @click="oreder(2)">
          <van-icon name="apps-o" size="28px" />
          <p>未完成订单</p>
        </div>
        <div @click="oreder(3)">
          <van-icon name="comment-o" size="28px" />
          <p>待评价</p>
        </div>
        <div @click="oreder(4)">
          <van-icon name="qr" size="28px" />
          <p>全部订单</p>
        </div>
      </div>

      <div class="foot">
        <ul>
          <li @click="toField">土地个人定制</li>
          <li>个人信息</li>
          <li>关于我们</li>
          <li>版本号 V 1.0</li>
        </ul>
      </div>
    </div>

    <tabbar :active2="2"></tabbar>
  </div>
</template>

<script>
import "@/assets/css/my.css";
import Tabbar from "./../components/Tabbar";
import NavBar from "../components/navBar";
export default {
  data() {
    return {
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight, //实时屏幕高度
    };
  },
  components: {
    NavBar,
    Tabbar,
  },
  methods: {
    oreder(i) {
      if (i == 1) {
        this.$router.push({ path: "/cart" });
      }
      if (i == 2) {
        this.$router.push({ path: "/order/unfinshed" });
      }
      if (i == 3) {
        this.$router.push({ path: "/order/uncomment" });
      }
      if (i == 4) {
        this.$router.push({ path: "/order/all" });
      }
    },
    toField() {
      this.$router.push({ path: "/field" });
    },
    collect() {
      this.$router.push({ path: "/my/collection" });
    },
  },
};
</script>
<style type="text/css">
.do .van-icon {
  margin-bottom: 8px;
}
</style>
