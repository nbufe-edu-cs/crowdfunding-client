<template>
  <div class="adminLogin" :style="{ height: windowHeight + 'px' }">
    <div class="return"><a href="/login">返回</a></div>
    <img src="./../../../static/login.png"  style="width: 120px;height: 120px">
    <div class="title">管理员登录</div>
    <div class="user">
      账户:<input type="text"  v-model="user"/>
    </div>
    <div class="user">
      密码:<input type="password" v-model="password"/>
    </div>
    <router-link to="/admin" @click="login">登录</router-link>
  </div>
</template>

<script>
  import "./../../assets/css/login/adminLogin.css"
  export default {
    data() {
      return {
        user:"",
        password:"",
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
      }
    },
    methods:{
      login(){
        this.$router.push({
          path:"/admin"
        })
      },

    }
  }
</script>

<style scoped>

</style>
