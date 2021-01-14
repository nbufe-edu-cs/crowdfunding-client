<template>
    <div class="collection">

      <van-nav-bar
        title="收藏夹"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      >
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>

      <van-tabs v-model="active">
        <van-tab title="农产品">
          <div class="nongchanping">
            <ul class="good">

              <van-swipe-cell :before-close="beforeClose">
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
                <template #right>
                  <van-button square text="删除" type="danger" class="delete-button" />
                </template>
              </van-swipe-cell>


              <van-swipe-cell :before-close="beforeClose">
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
                <template #right>
                  <van-button square text="删除" type="danger" class="delete-button" />
                </template>
              </van-swipe-cell>

            </ul>
          </div>
        </van-tab>
        <van-tab title="土地">
          <div class="tudi">
            <ul class="good">
              <van-swipe-cell :before-close="beforeClose">
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
                <template #right>
                  <van-button square text="删除" type="danger" class="delete-button" />
                </template>
              </van-swipe-cell>
            </ul>
          </div>
        </van-tab>

      </van-tabs>


    </div>
</template>

<script>
  import "./../assets/css/collection.css"
    export default {
      data(){
        return{
          windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
          windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
          active: 0,
          currentRate: 0,
          val:"80",
        }
      },
      mounted(){

      },
      computed: {
        text() {
          return this.currentRate.toFixed(0) + '%';
        },
      },
      methods:{
        onClickLeft(){
          this.$router.push({path:"/my"})
        },

        // position 为关闭时点击的位置
        // instance 为对应的 SwipeCell 实例
        beforeClose({ position, instance }) {
          switch (position) {
            case 'right':
              console.log("删除成功")
              break;
          }
        },




      },
    }
</script>

<style type="text/css">
  .van-nav-bar{
    background-color: #f7f7f7;
  }

  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }

</style>
