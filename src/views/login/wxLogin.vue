<template>
  <div class="wxLogin">
    <div class="return"><a href="/login">返回</a></div>
    <div class="container" :style="{ height: windowHeight + 'px' }">
      <img class="logo" src="./../../../static/login.png"  style="width: 120px;height: 120px">
      <p>正在调用微信授权</p>
      <button class="login">授权</button>
    </div>
  </div>
</template>

<script>
  import "./../../assets/css/login/wxLogin.css"
  export default {
    data() {
      return {
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
      }
    },

    methods:{

    },

  }
</script>
