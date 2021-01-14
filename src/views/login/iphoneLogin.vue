<template>
  <div class="iphoneLogin" :style="{ height: windowHeight + 'px' }" >
    <div class="return" @click="returnLogin"><img src="./../../../static/left_arrow.png"></div>
    <div class="" >
      <div class="title">密码登录</div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="手机号"
          left-icon="user-o"
          size="large"
          placeholder="手机号"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          size="large"
          label="密码"
          left-icon="notes-o"
          placeholder="密码"
        />
        <div class="forget" @click="forget">
          忘记密码？
        </div>
        <div style="margin: 16px;">
          <van-button round block
                      size="large"
                      type="info" native-type="submit">
            登录
          </van-button>
        </div>
        <div class="qiehuan" @click="qiehuan">
          <div>
            验证码登录
          </div>
        </div>
      </van-form>
    </div>








  </div>
</template>

<script>
  import "./../../assets/css/login/iphoneLogin.css"
  import { Toast } from 'vant';
  export default {
    data() {
      return {

        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        username: '',
        password: '',
      }
    },
    methods: {
      onSubmit(values) {
        if(this.username == ""){
          Toast({
            message: '请输入手机号',
            position: 'bottom',
          });
        }else{
          if (this.username.length !=11){
            Toast({
              message: '手机号格式错误',
              position: 'bottom',
            });
          }
          else if(this.password.length ==""){
            Toast({
              message: '密码不能为空',
              position: 'bottom',
            });
          }
          else if(this.password.length <6 &&this.password.length>0){
            Toast({
              message: '密码低于6位',
              position: 'bottom',
            });
          }
          else{
            //请求
          }


        }


      },

      forget(){

      },
      qiehuan(){

      },
      returnLogin(){
        this.$router.push({
          path:"/login"
        })
      },

    }
  }
</script>

<style  type="text/css">
.van-field{
  border: none;
}
</style>
