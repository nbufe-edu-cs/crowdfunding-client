<template>
  <div class="index">
    <Find></Find>
    <focus></focus>
    <ul class="container">

      <li @click="turnDetail">
        <img src="#">
        <div>
          <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" size="40px"  :stroke-width="100" />
          <p>商品名称</p>
        </div>
      </li>

      <li @click="turnDetail">
        <img src="#">
        <div>
          <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" size="40px"  :stroke-width="100" />
          <p>商品名称</p>
        </div>
      </li>

      <li @click="turnDetail">
        <img src="#">
        <div>
          <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" size="40px"  :stroke-width="100" />
          <p>商品名称</p>
        </div>
      </li>

      <li @click="turnDetail">
        <img src="#">
        <div>
          <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" size="40px"  :stroke-width="100" />
          <p>商品名称</p>
        </div>
      </li>

      <li @click="turnDetail">
        <img src="#">
        <div>
          <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" size="40px"  :stroke-width="100" />
          <p>商品名称</p>
        </div>
      </li>
      <li @click="turnDetail">
        <img src="#">
        <div>
          <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" size="40px"  :stroke-width="100" />
          <p>商品名称</p>
        </div>
      </li>
    </ul>





    <tabbar></tabbar>
  </div>
</template>
<script>
  import "./../assets/css/index.css"
  import Focus from "./../components/focus"
  import navBar from "./../components/navBar"
  import  Find  from "./../components/Find"
  import Tabbar from "./../components/Tabbar"
  import  axios from  "axios"
    export default {
      data(){
        return{
          currentRate: 0,
        }
      },
      components: {
        Focus,
        Find,
        navBar,
        Tabbar
      },
      computed: {
        text() {
          return this.currentRate.toFixed(0) + '%';
        },
      },
      methods:{
        turnDetail(){
          this.$router.push({
            path:"/detail",
            params:{ //传入商品的编号
            }

          })
        },

      }
    }
</script>


