<template>
  <div class="cart">
    <div class="title">
      <div class="top-title">购物车</div>
      <div class="small-title">共<span>{{totalNum}}</span>件宝贝
      </div>
    </div>

    <div class="container">
      <div class="all-check">
        <a href="#">
          <van-checkbox :value="true"  icon-size="20"shape="square" @click="checkedAll">全选</van-checkbox>
        </a>
      </div>
      <ul>

        <div>
          <nut-leftslip ref='demo1'>
            <div slot="slip-main" class="slip-main">
              <li>
                <div class="left">
                  <van-checkbox :value="checkedFlag" icon-size="18" @click="checked"></van-checkbox>
                  <img src="./../../static/sort.png" class="photo">
                  <div>
                    <span>商品名称</span>
                    <div class="old">￥39.9</div>
                    <div class="new">￥29.9</div>
                  </div>
                </div>
                <div class="num">
                  <nut-stepper
                    :value="num"
                    :transition="false"
                    :simple="false"
                    :min="1"
                    @add="add"
                    @reduce="reduce"
                  ></nut-stepper>
                </div>
              </li>


            </div>
            <div slot="slipbtns" class="slipbtns"><a href="javascript:;" @click="delSlipItem">删除</a><a href="javascript:;" class="favorite">收藏</a></div>
          </nut-leftslip>

          <nut-leftslip ref='demo1'>
            <div slot="slip-main" class="slip-main">
              <li>
                <div class="left">
                  <van-checkbox :value="checkedFlag" icon-size="18" @click="checked"></van-checkbox>
                  <img src="./../../static/sort.png" class="photo">
                  <div>
                    <span>商品名称</span>
                    <div class="old">￥39.9</div>
                    <div class="new">￥29.9</div>
                  </div>
                </div>
                <div class="num">
                  <nut-stepper
                    :value="num"
                    :transition="false"
                    :simple="false"
                    :min="1"
                    @add="add"
                    @reduce="reduce"
                  ></nut-stepper>
                </div>
              </li>


            </div>
            <div slot="slipbtns" class="slipbtns"><a href="javascript:;" @click="delSlipItem">删除</a><a href="javascript:;" class="favorite">收藏</a></div>
          </nut-leftslip>

          <nut-leftslip ref='demo1'>
            <div slot="slip-main" class="slip-main">
              <li>
                <div class="left">
                  <van-checkbox :value="checkedFlag" icon-size="18" @click="checked"></van-checkbox>
                  <img src="./../../static/sort.png" class="photo">
                  <div>
                    <span>商品名称</span>
                    <div class="old">￥39.9</div>
                    <div class="new">￥29.9</div>
                  </div>
                </div>
                <div class="num">
                  <nut-stepper
                    :value="num"
                    :transition="false"
                    :simple="false"
                    :min="1"
                    @add="add"
                    @reduce="reduce"
                  ></nut-stepper>
                </div>
              </li>


            </div>
            <div slot="slipbtns" class="slipbtns"><a href="javascript:;" @click="delSlipItem">删除</a><a href="javascript:;" class="favorite">收藏</a></div>
          </nut-leftslip>


        </div>


      </ul>

      <button @click="goOrder">购买</button>
    </div>


    <div class="interest">
        <div class="interest-title">
          <div></div>
          <span>推荐</span>
          <div></div>
        </div>
        <ul class="nei">

          <li @click="turnDetail">
            <img src="#">
            <div>
              <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" size="40px"  :stroke-width="100" />
              <p>商品名称</p>
            </div>
          </li>
          <li @click="turnDetail">
            <img src="#">
            <div>
              <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" size="40px"  :stroke-width="100" />

              <p>商品名称</p>
            </div>
          </li>

        </ul>
      </div>
    <tabbar :active2="1"></tabbar>
  </div>
</template>

<script>
  import Tabbar from"./../components/Tabbar"
  import "./../assets/css/cart.css"
  export default {
    data(){
      return{
        totalNum:"5",
        checked:"false",
        num:2,
        checkedAllFlag:false,
        checkedFlag:true,
        currentRate: 0,
      }
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '%';
      },
    },
    components: {
      Tabbar,
    },
    methods:{
      delSlipItem(e) {
        alert('确定删除吗？')
        this.$refs.demo1.sliderEle.remove()
      },

      checkedAll(){
        this.checkedAllFlag = !this.checkedAllFlag
        if(this.checkedAllFlag == true){
          this.checkedFlag = true
        }else {
          this.checkedFlag = false
        }

      },
      add(){
        console.log("+++++++++++")
      },
      reduce(){
        console.log("----------")
      },
      goOrder(){
        this.$router.push({
          path:"/order"
        })
       },
      turnDetail(){
        this.$router.push({
          path:"/detail"
        })
      },
    }
  }
</script>

