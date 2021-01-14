<template>
  <div class="forum">
    <div class="top">
      <img src="./../../../static/fieldbackground.png" class="background">
      <div class="search">
        <nut-icon type="search" size="14px"></nut-icon>
        <input type="search" placeholder="搜索定制内容"/>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="./../../../static/lun4.png" style="width: 100%"></van-swipe-item>
        <van-swipe-item><img src="./../../../static/lun5.jpg" style="width: 100%"></van-swipe-item>
        <van-swipe-item><img src="./../../../static/lun6.jpg" style="width: 100%"></van-swipe-item>
      </van-swipe>
    </div>



    <ul class="container">
      <li @click="detail">
        <img src="./../../../static/lun1.png">
        <div class="xin">
          <div class="information">
            机械化，大规模耕作的利与弊，以及影响
          </div>
          <div class="user">
            <div>
              <van-icon name="user-o"  color="" size="16"/>
              <span>农户小吴</span>
            </div>
            <div>
              <van-icon name="like-o"  size="16"/>
              <span>999+</span>
            </div>
          </div>
        </div>
      </li>

      <li>
        <img src="./../../../static/lun1.png">
        <div class="xin">
          <div class="information">
            机械化，大规模耕作的利与弊，以及影响
          </div>
          <div class="user">
            <div>
              <van-icon name="user-o"  color="" size="16"/>
              <span>农户小吴</span>
            </div>
            <div>
              <van-icon name="like-o"  size="16"/>
              <span>999+</span>
            </div>
          </div>
        </div>
      </li>


      <li>
        <img src="./../../../static/lun1.png">
        <div class="xin">
          <div class="information">
            机械化，大规模耕作的利与弊，以及影响
          </div>
          <div class="user">
            <div>
              <van-icon name="user-o"  color="" size="16"/>
              <span>农户小吴</span>
            </div>
            <div>
              <van-icon name="like-o"  size="16"/>
              <span>999+</span>
            </div>
          </div>
        </div>
      </li>


      <li>
        <img src="./../../../static/lun1.png">
        <div class="xin">
          <div class="information">
            机械化，大规模耕作的利与弊，以及影响
          </div>
          <div class="user">
            <div>
              <van-icon name="user-o"  color="" size="16"/>
              <span>农户小吴</span>
            </div>
            <div>
              <van-icon name="like-o"  size="16"/>
              <span>999+</span>
            </div>
          </div>
        </div>
      </li>


    </ul>

    <field-navbar :flag1="false"  :flag2="true"></field-navbar>
  </div>
</template>

<script>
  import "./../../assets/css/field/forum.css"
  import  Find from "./../../components/Find"
  import FieldNavbar from "../../components/fieldNavbar";
  export default {
    data(){
      return{

      }
    },
    components: {
      FieldNavbar,
      Find
    },

    methods:{
      detail(){
        this.$router.push({
          path:"/field/forum/detail"
        })
      }
    }
  }
</script>
