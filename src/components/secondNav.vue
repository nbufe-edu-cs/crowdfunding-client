<template>
  <div >
    <div class="secondNav" id="box">
      <div class="on"  @click="on(0)"><p>首页</p></div>
      <div @click="on(1)"><p>首页</p></div>
      <div @click="on(2)"><p>首页</p></div>
      <div @click="on(3)"><p>首页</p></div>
      <div @click="on(4)"><p>首页</p></div>
      <div @click="on(5)"><p>首页</p></div>
      <div @click="on(6)"><p>首页</p></div>
    </div>

    <div class="sortImg">
      <img src="./../../static/sort.png" @click="turntoSort">
    </div>
    <div class="fugai">
    </div>
  </div>
</template>
<script>
  import "./../assets/css/seconedNav.css"
  import "./../assets/js/seconedNav"
  export default {
    data() {
      return {
      }
    },
    methods:{
      turntoSort(){
        this.$router.push({
          path:"/sort"
        })
      },
      on(num){
          var box=document.getElementById("box")
          var oLis=box.getElementsByTagName("div");
          var len =oLis.length
          console.log(oLis[1])
          for(var i=0;i<len;i++){
            oLis[i].className=""
        }
        oLis[num].className="on"
      }


    }
  }
</script>

