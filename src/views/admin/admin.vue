<template>
  <div class="admin" >
    <find></find>
    <div>
      <wc-swiper class="swiper">
        <wc-slide>
          <img src="./../../../static/1.jpg" style="width: 100%;height: 268px">
        </wc-slide>
        <wc-slide>
          <img src="./../../../static/2.jpg" style="width: 100%;height: 268px">
        </wc-slide>
        <wc-slide>
          <img src="./../../../static/3.jpg" style="width: 100%;height: 268px">
        </wc-slide>
      </wc-swiper>
    </div>

    <div class="container">
      <div class="title">众筹咨询</div>
      <ul>
        <li>XXXX公司 XX产品 众筹获利</li>
        <li>XXXX地区农户靠众筹实现农产品品牌化</li>
      </ul>
    </div>
    <div class="submit">
      <button  @click="submit">发起众筹</button>
    </div>
    <bottom-narbar :flag1="true"  :flag2="false"  :flag3="false"></bottom-narbar>
  </div>
</template>

<script>
  import "./../../assets/css/admin/admin.css"
  import bottomNarbar from  "./../../components/bottomNarbar"
  import Find from "./../../components/Find"
  export default {
    data(){
      return{
        value:""
      }
    },
    components: {
      bottomNarbar,
      Find
    },
    methods:{

      submit(){
        this.$router.push({
          path:"/admin/submit",

        })
      }
    }
  }
</script>
