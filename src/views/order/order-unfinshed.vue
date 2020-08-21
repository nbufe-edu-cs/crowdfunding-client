<template>
  <div class="unfinshed">

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
          <div class="price">￥29.9</div>
        </li>
        <li class="good-content">
          <img src="#">
          <ul class="detail" >
            <span class="name">商品名称</span>
            <li><span>规格：</span><p>5kg/箱</p></li>
            <li><span>单价：</span><p>￥29.9/箱</p></li>
            <li><span>数量：</span><p>1箱</p></li>
          </ul>
          <div class="price">￥29.9</div>
        </li>

      </ul>
      <button class="pay" >付款</button>
    </div>
  </div>
</template>

<script>
  import navBar from  "./../../components/navBar"
  import "./../../assets/css/order/unfinshed.css"
  export default {
    data(){
      return{
        name:"未完成订单"
      }
    },
    components: {
      navBar
    },
    methods:{

    }
}
</script>

