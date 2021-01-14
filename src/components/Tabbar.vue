<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/">精选</van-tabbar-item>
    <van-tabbar-item icon="home-o" to="/field">土地</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/my">我</van-tabbar-item>
  </van-tabbar>
</template>
<script type="text/javascript">
import Item from "./Item.vue";
export default {
  props: ["active2"], //接受父组件传进来的值
  components: {
    Item,
  },
  data: function () {
    return {
      active: "0",
    };
  },
  mounted() {
    this.b();
  },
  methods: {
    b() {
      this.active = this.active2;
    },
  
  },
};
</script>