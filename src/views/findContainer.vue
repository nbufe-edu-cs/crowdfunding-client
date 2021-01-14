<template>
  <div class="findContainer">

    <nut-navbar style="background-color:#f7f7f7;height: 45px"
                @on-click-back="back"
                :leftShow="true"
                :rightShow="true">
      <div class="search_d">
        <nut-searchbar
          v-model="value"
          placeText="搜索的内容"
          :hasIcon="true"
          :hasTextButton="true"
          textInfo="搜索"
          customClass="search_demo"
          searchIconSize='14px'
          @submit="onSearch"
        ></nut-searchbar>

      </div>

        <a slot="left" @click="back"></a>
      </nut-navbar>
    <div class="container">
      <div class="nav">
        <!--<div class="left">-->
          <!--<button class="left-left">综合</button>-->
          <!--<button class="left-right">销量</button>-->
        <!--</div>-->
        <!--<div class="right">-->
          <!--<button>筛选</button>-->
        <!--</div>-->
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </div>




      <ul class="good">
      <li>
        <img src="./../../static/1.jpg">
        <div class="right" :style="{ width: windowWidth*0.95-100  + 'px' }">
          <div class="title">香蕉</div>
          <div class="right-bottom">
            <div class="right-bottom-left">
              ￥29.9/斤
            </div>
            <div class="right-bottom-right">
              <van-circle v-model="currentRate"
                          :rate="val"
                          :speed="100"
                          :text="text"
                          size="80px"
                          :stroke-width="100" />
            </div>
          </div>
        </div>

      </li>
      <li>
        <img src="./../../static/1.jpg">
        <div class="right" :style="{ width: windowWidth*0.95-100  + 'px' }">
          <div class="title">香蕉</div>
          <div class="right-bottom">
            <div class="right-bottom-left">
              ￥29.9/斤
            </div>
            <div class="right-bottom-right">
              <van-circle v-model="currentRate"
                          :rate="val"
                          :speed="100"
                          :text="text"
                          size="80px"
                          :stroke-width="100" />
            </div>
          </div>
        </div>

      </li>
      <li>
        <img src="./../../static/1.jpg">
        <div class="right" :style="{ width: windowWidth*0.95-100  + 'px' }">
          <div class="title">香蕉</div>
          <div class="right-bottom">
            <div class="right-bottom-left">
              ￥29.9/斤
            </div>
            <div class="right-bottom-right">
              <van-circle v-model="currentRate"
                          :rate="val"
                          :speed="100"
                          :text="text"
                          size="80px"
                          :stroke-width="100" />
            </div>
          </div>
        </div>

      </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import "./../assets/css/findContainer.css"
  export default {
    data(){
      return{
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        value:"",
        currentRate: 0,
        val:"80",

        value1: 0,
        value2: 'a',
        option1: [
          { text: '综合', value: 0 },
          { text: '信用', value: 1 },
          { text: '价格降序', value: 3 },
          { text: '价格升序', value: 4 },
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '销量排序', value: 'b' },
        ],
      }
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '%';
      },
    },
    methods:{
      onSearch(){
        var addressId=this.$route.query.addressId
      },
      back(){
        this.$router.go(-1)
      },
    }

  }
</script>


