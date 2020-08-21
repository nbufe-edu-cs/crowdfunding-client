<template>
  <div>
    <nav-bar :name="name" :left="true"></nav-bar>

    <div class="my">
      <div class="photo">
        <img src="./../../static/1.jpg">
      </div>

      <p class="name">昵称：<span>00000000</span></p>
      <p class="userId">账号：<span>00000000</span></p>

      <div class="do">
        <div @click="oreder(1)"><img src="./../../static/1.jpg"><p>购物车</p></div>
        <div @click="oreder(2)"><img src="./../../static/1.jpg"><p>未完成订单</p></div>
        <div @click="oreder(3)"><img src="./../../static/1.jpg"><p>待评价</p></div>
        <div @click="oreder(4)"><img src="./../../static/1.jpg"><p>全部订单</p></div>
      </div>

      <div class="foot">
        <ul>
          <li>个人信息</li>
          <li>关于我们</li>
          <li>版本号 V 1.0</li>
        </ul>
      </div>
    </div>







    <tabbar></tabbar>
  </div>
</template>

<script>
  import "./../assets/css/my.css"
  import Tabbar from"./../components/Tabbar"
  import NavBar from "../components/navBar";
  export default {
    data(){
      return{
        name:"我"
      }
    },
    components: {
      NavBar,
      Tabbar,
    },
    methods:{
      oreder(i){
        if(i ==1){this.$router.push({path:"/cart"})}
        if(i ==2){this.$router.push({path:"/order/unfinshed"})}
        if(i ==3){this.$router.push({path:"/order/uncomment"})}
        if(i ==4){this.$router.push({path:"/order/all"})}
      }
    }
  }
</script>
