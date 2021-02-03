<template>
  <div class="center">
    <van-nav-bar title="个人中心" />
    <div class="center-info">
      <div class="center-info-avatar">
        <van-image
          round
          width="70px"
          height="70px"
          lazy-load
          fit="cover"
          src="http://agri.wuxiaohao.cn/avatar.png"
        />
      </div>
      <div class="center-info-name">
        <p class="wechat-nickname">昵称: <span class="nickname">狂野男孩</span></p>
        <div class="cumulative-income">
          我的余额: <span class="amount">1000.00</span>
          <a style="text-direction: none; color: #888888" href="">提现</a>
        </div>
      </div>
      <div class="center-info-store"></div>
    </div>
    <div class="center-statistics">
      <van-grid :border="false" :column-num="3">
        <van-grid-item icon="orders-o" text="订单明细" />
        <!-- <van-grid-item icon="friends-o" text="团队" /> -->
        <van-grid-item @click="to('/field/favorites')" icon="star-o" text="收藏夹" />
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  name: "Center",
  data() {
    return {};
  },
  methods: {
    to(path) {
      this.$router.push(path);
    },
    toSettingStore() {
      this.$router.push("/store");
    },
  },
};
</script>
<style lang="less">
.center {
  &-info {
    width: 98%;
    height: 150px;
    background-color: rgba(200, 150, 80, 0.7);
    border-radius: 15px 15px 50% 50%;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &-avatar {
      margin: 0 auto;
    }
    &-name {
      margin: 0 auto;
      margin-left: -5px;
      color: #ffffff;
      .wechat-nickname {
        padding-top: 10px;
        font-size: 14px;
        .nickname {
          font-size: 18px;
          font-weight: bolder;
        }
      }
      .cumulative-income {
        padding-top: 5px;
        font-size: 14px;
        .amount {
          font-size: 18px;
          font-weight: bolder;
        }
      }
    }
    &-store {
      margin: 0 auto;
      margin-top: 20px;
    }
  }
  &-statistics {
    border-radius: 10px;
    background-color: #ffffff;
    width: 95%;
    height: 90px;
    margin: 0 auto;
    margin-top: -50px;
    // &-balance {
    //   width: 85%;
    //   height: 50px;
    //   margin: 0 auto;
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   .balance {
    //     font-size: 14px;
    //     color: #888888;
    //     .amount {
    //       font-size: 20px;
    //       font-weight: bolder;
    //       color: #555555;
    //     }
    //   }
    // }
    // &-income {
    //   height: 80px;
    //   margin: 0 auto;
    //   text-align: center;
    //   display: flex;
    //   justify-content: space-around;
    //   align-items: center;
    //   .income-item {
    //     .item-text {
    //       font-size: 14px;
    //       color: #888888;
    //     }
    //     .item-amount {
    //       padding-top: 5px;
    //       font-size: 20px;
    //       font-weight: bolder;
    //       color: #555555;
    //     }
    //   }
    // }
  }
}
</style>
