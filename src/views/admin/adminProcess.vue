<template>
  <div class="adminProcess">
    <nav-bar :name="name" :left="true"></nav-bar>
    <div class="container">
      <div class="title">累计收益：XXX元</div>
      <ul>

        <li class="content">
          <van-checkbox :value="flag" icon-size="16"></van-checkbox>
          <div class="center">
            <img src="#">
            <ul>
              <li>名称：&#12288;&#12288;沙地蜜薯</li>
              <li>负责人：&#12288;XXX</li>
              <li>项目信息：XXXXXXXX</li>
              <li>时间：&#12288;&#12288;2020.9.1</li>
            </ul>
          </div>
          <nut-progress
            :percentage="30"
            :text-inside="false"
            stroke-color="#1890ff"
            status="active"
            size="large"
          ></nut-progress>
        </li>
        <li class="content">
          <van-checkbox :value="flag" icon-size="16"></van-checkbox>
          <div class="center">
            <img src="#">
            <ul>
              <li>名称：&#12288;&#12288;沙地蜜薯</li>
              <li>负责人：&#12288;XXX</li>
              <li>项目信息：XXXXXXXX</li>
              <li>时间：&#12288;&#12288;2020.9.1</li>
            </ul>
          </div>
          <nut-progress
            :percentage="30"
            :text-inside="false"
            stroke-color="#1890ff"
            status="active"
            size="large"
          ></nut-progress>
        </li>
        <li class="content">
          <van-checkbox :value="flag" icon-size="16"></van-checkbox>
          <div class="center">
            <img src="#">
            <ul>
              <li>名称：&#12288;&#12288;沙地蜜薯</li>
              <li>负责人：&#12288;XXX</li>
              <li>项目信息：XXXXXXXX</li>
              <li>时间：&#12288;&#12288;2020.9.1</li>
            </ul>
          </div>
          <nut-progress
            :percentage="30"
            :text-inside="false"
            stroke-color="#1890ff"
            status="active"
            size="large"
          ></nut-progress>
        </li>
        <li class="content">
          <van-checkbox :value="flag" icon-size="16"></van-checkbox>
          <div class="center">
            <img src="#">
            <ul>
              <li>名称：&#12288;&#12288;沙地蜜薯</li>
              <li>负责人：&#12288;XXX</li>
              <li>项目信息：XXXXXXXX</li>
              <li>时间：&#12288;&#12288;2020.9.1</li>
            </ul>
          </div>
          <nut-progress
            :percentage="30"
            :text-inside="false"
            stroke-color="#1890ff"
            status="active"
            size="large"
          ></nut-progress>
        </li>
      </ul>

      <div class="btn">
        <button>修改</button>
        <button>结束</button>
      </div>





    </div>
    <bottom-narbar :flag1="false"  :flag2="true"  :flag3="false"></bottom-narbar>
  </div>
</template>

<script>
  import "./../../assets/css/admin/adminProcess.css"
  import bottomNarbar from  "./../../components/bottomNarbar"
  import navBar from "./../../components/navBar"
  export default {
    data(){
      return{
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        name:"项目进展",
        flag:true
      }
    },
    components: {
      bottomNarbar,
      navBar,
    },
  }
</script>

