<template>
  <div class="login" :style="{ height: windowHeight + 'px' }">
    <img  class="title" src="" style="width: 120px;height: 120px">
    <ul>
      <li>
        <button @click="wxLogin"><img src="#"></img>微信登录<div></div></button>
      </li>
      <li>
        <button @click="iphoneLogin"><img src="#"></img>手机号登录<div></div></button>
      </li>
      <li>
        <button @click="adminLogin"><img src="#"></img>管理员登录<div></div></button>
      </li>
    </ul>
  </div>
</template>

<script>
  import "./../../assets/css/login/login.css"
  export default {
    data() {
      return {
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
      }
    },
    methods:{
      wxLogin(){
        this.$router.push({
          path:"/wxLogin"
        })
      },
      iphoneLogin(){
        this.$router.push({
          path:"/iphoneLogin"
        })
      },
      adminLogin(){
        this.$router.push({
          path:"/admin/adminLogin"
        })
      }
    }
  }
</script>

