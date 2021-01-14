<template>
  <div class="comment" :style="{ height: windowHeight + 'px' }">

    <van-nav-bar
      title="评论"
      left-arrow
      @click-left="comment"
    />

    <div class="content">
      <ul class="good">
        <li class="good-content">
          <img src="#">
          <ul class="detail" >
            <span class="name">商品名称</span>
            <li><span>规格：</span><p>5kg/箱</p></li>
            <li><span>单价：</span><p>￥29.9/箱</p></li>
            <li><span>数量：</span><p>1箱</p></li>
          </ul>
        </li>
      </ul>
      <textarea placeholder="请输入评论" v-bind="val"></textarea>
      <van-goods-action>
        <van-goods-action-button color="#7232dd" type="danger" text="评论" @click="comment" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
  import navBar from  "./../../components/navBar"
  import "./../../assets/css/order/comment.css"
  export default {
    data(){
      return{
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        val:""
      }
    },
    components: {
      navBar
    },
    methods:{
      comment(){
        this.$router.go(-1)
      }
    }
  }
</script>

