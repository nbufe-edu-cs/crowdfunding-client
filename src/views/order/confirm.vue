<template>
  <div class="order-confirm">
    <van-nav-bar
      title="确认众筹信息"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="order-confirm-info">
      <div class="order-confirm-info-customer">
        <div class="customer-icon">
          <van-icon name="manager" color="red" size="50" />
        </div>
        <div class="customer-info">
          <p>吴晨浩</p>
          <p>13757231171</p>
        </div>
      </div>
      <div class="order-confirm-info-order">
        <van-cell title="订单编号：" value="202102030134280001" />
        <div class="order-land">
          <div class="land-img">
            <img src="http://agri.wuxiaohao.cn/banner/banner1.jpeg" alt="" />
          </div>
          <div class="land-info">
            <p class="info-title">众筹土地名称</p>
            <p class="info-total">¥ <span> 1234.00</span></p>
          </div>
        </div>
        <van-cell-group>
          <van-field v-model="email" label="电子邮箱" placeholder="用于接收电子合同" />
          <van-cell title="份额" value="5%" />
        </van-cell-group>
        <van-cell-group>
          <van-cell title="种植产品1" value="苹果" />
          <van-cell title="种植产品1" value="苹果" />
          <van-cell title="种植产品1" value="苹果" />
          <van-cell title="种植产品1" value="苹果" />
          <van-cell title="种植产品1" value="苹果" />
          <van-cell title="种植产品1" value="苹果" />
        </van-cell-group>
      </div>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>
<script>
export default {
  name: "confirm",
  components: {},
  data() {
    return {
      item: {},
      email: "",
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
<style lang="less">
.order-confirm {
  background-color: #ebebeb6b;
  height: 100vh;
  &-info {
    &-customer {
      margin: 0 auto;
      width: 90%;
      height: 100px;
      background-color: white;
      margin-top: 10px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .customer-icon {
        text-align: center;
        width: 25%;
      }
      .customer-info {
        width: 75%;
        p:nth-child(1) {
          font-size: 18px;
          letter-spacing: 2px;
        }
        p:nth-child(2) {
          font-size: 14px;
          color: #888888;
        }
      }
    }
    &-order {
      margin: 0 auto;
      width: 90%;
      margin-top: 10px;
      border-radius: 10px;
      .order-land {
        background-color: white;
        display: flex;
        justify-content: space-between;
        width: 95%;
        margin: 0 auto;
        padding: 10px;
        .land-img {
          height: 100px;
          img {
            overflow: hidden;
            height: 100%;
          }
        }
        .land-info {
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .info-title {
            font-size: 16px;
          }
          .info-total {
            margin-top: 5px;
            font-size: 14px;
            color: red;
            span {
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
