<template>
  <div class="bottomNarbar">
    <div class="bottom">
      <button class="btn"  :style="{ width: windowWidth/3 + 'px', backgroundColor:flag1?'lightgrey':'white'}" @click="click(1)">众筹</button>
      <button class="btn"  :style="{ width: windowWidth/3+ 'px' , backgroundColor:flag2?'lightgrey':'white'}" @click="click(2)">进展</button>
      <button class="btn"  :style="{ width: windowWidth/3+ 'px' , backgroundColor:flag3?'lightgrey':'white'}" @click="click(3)">我的</button>
    </div>
  </div>
</template>

<script>
  export default {
    props:["flag1","flag2","flag3"],
    data() {
      return {
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
      }
    },
    methods:{
      click(i){
        if (i==1){this.$router.push({path:"/admin"})}
        else if (i ==2){this.$router.push({path:"/admin/adminProcess"})}
        else if (i ==3){this.$router.push({path:"/admin/adminMy"})}


      }

    }
  }
</script>

<style type="text/css">
  .bottomNarbar{
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px lightgrey solid;
    height: 50px;
    width: 100%;
  }
  .bottomNarbar .btn{
    display: block;
    float: left;
    height: 50px;
    line-height: 50px;
    border: none;
    text-align: center;
    background-color: white;
  }

</style>
