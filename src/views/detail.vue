<template>
  <div class="detail">

    <van-tabs v-model="activeName">
      <van-tab>
        <template #title name=""><img src="./../../static/left_arrow.png" class="left" @click="returnback"></template>
      </van-tab>
      <van-tab title="商品" name="a">

        <div class="container">
          <wc-swiper>
            <wc-slide>
              <img src="./../../static/1.jpg" style="width: 100%;height: 268px">
            </wc-slide>
            <wc-slide>
              <img src="./../../static/2.jpg" style="width: 100%;height: 268px">
            </wc-slide>
            <wc-slide>
              <img src="./../../static/3.jpg" style="width: 100%;height: 268px">
            </wc-slide>
          </wc-swiper>
          <div class="information">
            <div class="title">
              【农产品众筹】沙地蜜薯（大果）4.5-5斤
            </div>
            <div class="price">￥26.80</div>
          </div>
        </div>



        <div class="choose">
            <van-cell is-link title="规格 选择规格" @click="show = true" />
            <van-action-sheet v-model="show"  title="沙地蜜薯">
              <div class="in">
                <div class="top">
                  <img src="#">
                  <div>
                    <div class="price">￥26.80</div>
                    <div class="num">库存：100</div>
                  </div>
                </div>
                <div class="center">
                  <p>规格</p>
                  <button>4.5-5斤</button>
                </div>
                <div class="footer">
                  <p>购买数量<span>（限购50份）</span></p>
                  <van-stepper v-model="value" min="1" max="50" />
                </div>

                <div class="btn">
                  <button @click="cart">加入购物车</button>
                  <button @click="buy">立即购买</button>
                </div>
              </div>
            </van-action-sheet>
        </div>
        <div class="img">
          <ul>
            <li><img src="#" style="height:200px;width:100%"></li>
            <li><img src="#" style="height:200px;width:100%"></li>
            <li><img src="#" style="height:200px;width:100%"></li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="详情" name="b">
        <div class="img">
        <ul>
          <li><img src="#" style="height:200px;width:100%"></li>
          <li><img src="#" style="height:200px;width:100%"></li>
          <li><img src="#" style="height:200px;width:100%"></li>
        </ul>
      </div></van-tab>
      <van-tab title="评论" name="c">
        <div class="comment">
          <ul>
            <li>
              <div class="comment-top">
                <div class="a"><img src="#"><van-rate :v-model="2" readonly /></div>
                <div class="time">2020-8-17 20:21:21</div>
              </div>
              <p>
                评论方未及时做出评论，系统默认好评！
              </p>
            </li>
            <li>
              <div class="comment-top">
                <div class="a"><img src="#"><van-rate :v-model="2" readonly /></div>
                <div class="time">2020-8-17 20:21:21</div>
              </div>
              <p>
                评论方未及时做出评论，系统默认好评！
              </p>
            </li>
            <li>
              <div class="comment-top">
                <div class="a"><img src="#"><van-rate :v-model="2" readonly /></div>
                <div class="time">2020-8-17 20:21:21</div>
              </div>
              <p>
                评论方未及时做出评论，系统默认好评！
              </p>
            </li>
            <li>
              <div class="comment-top">
                <div class="a"><img src="#"><van-rate :v-model="2" readonly /></div>
                <div class="time">2020-8-17 20:21:21</div>
              </div>
              <p>
                评论方未及时做出评论，系统默认好评！
              </p>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="推荐" name="d">
        <p class="interest-title">推荐</p>
          <ul class="interest">
            <li @click="turnDetail">
              <img src="#">
              <div>
                <van-circle v-model="currentRate" :rate="50" :speed="100" :text="text" size="40px"  :stroke-width="100" />
                <p>商品名称</p>
              </div>
            </li>

            <li @click="turnDetail">
              <img src="#">
              <div>
                <van-circle v-model="currentRate" :rate="50" :speed="100" :text="text" size="40px"  :stroke-width="100" />
                <p>商品名称</p>
              </div>
            </li>
            <li @click="turnDetail">
              <img src="#">
              <div>
                <van-circle v-model="currentRate" :rate="50" :speed="100" :text="text" size="40px"  :stroke-width="100" />
                <p>商品名称</p>
              </div>
            </li>
            <li @click="turnDetail">
              <img src="#">
              <div>
                <van-circle v-model="currentRate" :rate="50" :speed="100" :text="text" size="40px"  :stroke-width="100" />
                <p>商品名称</p>
              </div>
            </li>



          </ul>

      </van-tab>

      <van-tab>
        <template #title>    <div class="cart">
          <a class="navbar-link navbar-cart-link" href="/cart">
            <svg class="cart-logo">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
            </svg>
          </a>
        </div></template>
      </van-tab>
    </van-tabs>
    <footer>
      <button @click="cart">加入购物车</button>
      <button @click="buy">立即购买</button>
    </footer>

    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-cart" viewBox="0 0 38 32">
          <title>cart</title>
          <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
          <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
          <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
          <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
        </symbol>
      </defs>
    </svg>
  </div>
</template>

<script>
  import "./../assets/css/detail.css"
  export default {
    data(){
      return{
        activeName: 'a',
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        show:false,
        value:2,  //购买的数量
        currentRate: 0,
      }
    },
    components: {

    },
    computed: {
      text(){
        return this.currentRate.toFixed(0) + '%';
      }
    },
    methods:{
      turnDetail(){
        this.$router.push({
          path:"/detail",
          params:{ //传入商品的编号
          }
        })
      },
      returnback(){
        this.$router.push({
          path:"/"
        })
      },
      cart(){
        this.$router.push({
          path:"/cart"
        })
      },
      buy(){
        this.$router.push({
          path:"/order"
        })
      }


    }
  }
</script>





