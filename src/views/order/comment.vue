<template>
  <div class="comment">

    <nav-bar :name="name"></nav-bar>

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

      <button class="comment" @click="comment">评论</button>
    </div>
  </div>
</template>

<script>
  import navBar from  "./../../components/navBar"
  import "./../../assets/css/order/comment.css"
  export default {
    data(){
      return{
        name:"评论",
        val:""
      }
    },
    components: {
      navBar
    },
    methods:{
      comment(){
        this.$router.push({path:"/my"})
      }
    }
  }
</script>

