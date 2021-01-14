<template>
  <div class="order">
    <nav-bar :name="name" :left="true"></nav-bar>

    <div class="content">
      <div class="information">
        <div class="title">订单信息</div>
        <div>
          <ul>
            <li>项目名称：&#12288;</li>
            <li>项目信息：&#12288;</li>
            <li>发起人信息：</li>
            <li>众筹数量：&#12288;</li>
            <li>价格：&#12288;&#12288;&#12288;</li>

          </ul>
        </div>
      </div>
      <ul class="good">
        <li class="good-content">
          <img src="../../../static/1.jpg">
          <ul class="detail" >
            <span class="name">商品名称</span>
            <li><span>单价：</span><p>￥29.9/箱</p></li>
            <li><span>数量：</span><p>1箱</p></li>
          </ul>
        </li>
      </ul>


      <ul class="orderMessage">
        <li><span>订单号：&#12288;               </span><p>0000000000</p></li>
        <li><span>下单时间：                      </span><p>0000-00-00</p></li>
        <li><span>备注： &#12288;&#12288;       </span><p>XXXXXXXXXX</p></li>
      </ul>

      <div class="submit-order">
        <p>所需款项：<span>￥59.8</span></p>
        <button class="submit" @click="click">提交订单</button>
      </div>

    </div>
  </div>
</template>

<script>
  import "../../assets/css/admin/information.css"
  import NavBar from "../../components/navBar";
  export default {
    data(){
      return{
        name:"确认订单"
      }
    },
    components: {
      NavBar,

    },
    methods:{
      returnback(){
        this.$router.go(-1)
      },
      click(){
        this.$router.push({
          path:"/admin/adminProcess"
        })
      },
    }
  }
</script>

<style type="text/css">

</style>
