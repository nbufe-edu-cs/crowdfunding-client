<template>
  <div class="admin" >
    <nav-bar :name="name" :left="true"></nav-bar>

    <div class="container" :style="{ height: windowHeight-50 + 'px' }">
      <ul>
        <li>项目名称：&#12288;<input type="text"></li>
        <li>项目信息：&#12288;<input type="text"></li>
        <li>发起人信息：<input type="text" ></li>
        <li>众筹数量：&#12288;<input type="text"></li>
        <li>价格：&#12288;&#12288;&#12288;<input type="text"></li>
        <nut-imagepicker
          @imgMsg="imgMsg"
          delMode="longtap"
          :longTapTime="500"
          :max="1"
        >
        </nut-imagepicker>
      </ul>
      <button  class="b" type="button">提交众筹申请</button>
    </div>
    <bottom-narbar :flag1="true"  :flag2="false"  :flag3="false"></bottom-narbar>
  </div>
</template>

<script>
  import "./../../assets/css/admin/admin.css"
  import bottomNarbar from  "./../../components/bottomNarbar"
  import navBar from "./../../components/navBar"
  export default {
    data(){
      return{
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        name:"发起众筹",
        projcetName:"",
        projectInfo:"",
        imgMsg:""
      }
    },
    components: {
      bottomNarbar,
      navBar
    },
    methods:{

    }
  }
</script>
