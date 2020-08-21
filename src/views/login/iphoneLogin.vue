<template>
  <div class="iphoneLogin">
    <van-field
      v-model="number"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
    />
    <van-button size="small" type="primary">发送验证码</van-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        number:""
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
