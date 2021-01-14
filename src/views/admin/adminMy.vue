<template>
<div class="adminMy">
  <nav-bar :name="name" :left="true"></nav-bar>
  <div class="container">
    <div class="user">
      <img class="photo" src="./../../../static/1.jpg">
      <ul >
        <li>负责人昵称：XXXX</li>
        <li>负责人账号： XXXXXX</li>
      </ul>
    </div>

      <div class="project">
        <div class="title">我的项目：</div>
        <ul>
          <li class="content">
            <div class="center">
              <img src="#">
              <ul>
                <li>名称：&#12288;&#12288;沙地蜜薯</li>
                <li>负责人：&#12288;XXX</li>
                <li>项目信息：XXXXXXXX</li>
                <li>时间：&#12288;&#12288;2020.9.1</li>
              </ul>
            </div>
          </li>
          <li class="content">
            <div class="center">
              <img src="#">
              <ul>
                <li>名称：&#12288;&#12288;沙地蜜薯</li>
                <li>负责人：&#12288;XXX</li>
                <li>项目信息：XXXXXXXX</li>
                <li>时间：&#12288;&#12288;2020.9.1</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

  </div>
  <bottom-narbar :flag1="false"  :flag2="false"  :flag3="true"></bottom-narbar>
</div>
</template>

<script>
  import "./../../assets/css/admin/adminMy.css"
  import bottomNarbar from  "./../../components/bottomNarbar"
  import navBar from "./../../components/navBar"
  export default {
    data(){
      return{
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        name:"我的",

      }
    },
    components: {
      bottomNarbar,
      navBar
    },
  }
</script>


