<template>
  <div class="made" :style="{ minHeight: windowHeight + 'px' }">
    <van-nav-bar
      :title="land.landName + `土地定制`"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="message">
      <img :src="land.coverImg" />
      <div class="desc">
        {{ land.landDesc }}
      </div>
      <div class="price">
        土地面积 <span style="font-weight: 900">{{ land.landArea }}</span> 亩
      </div>
    </div>
    <nut-progress
      class="zc-progress"
      percentage="20"
      stroke-color="red"
      stroke-width="20"
      status="active"
    >
    </nut-progress>
    <p class="zc-time">众筹时间 {{ land.createTime }} - {{ land.endDate }}</p>

    <div style="background-color: #f7f7f7; margin-bottom: 55px">
      <!--种植方式-->
      <nut-cell
        class="manage-mode"
        :title="`土地管理模式：` + landManageMode.modeName"
        :desc="`管理费用：¥` + landManageMode.price"
      >
      </nut-cell>

      <!--品种选择-->
      <div class="product-item" v-for="product in landProducts" :key="product.productId">
        <nut-checkbox class="product-item-checkbox" v-model="checkbox" disabled
          >{{ product.productName }} (单价 {{ product.price }})</nut-checkbox
        >
        <van-stepper
          class="product-item-num"
          disable-input
          v-model="product.recommendNum"
          :min="product.minNum"
          :max="product.maxNum"
          @plus="addProductNum(product.price)"
          @minus="minusProductNum(product.price)"
        />
      </div>
      <div class="total-price">
        <van-submit-bar
          label="合计（含肥料费用）"
          :price="totalPrice * 100"
          button-text="立即参加"
          @submit="participateCrowdfunfing()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/field/made.css";
import { GET } from "@/api/methods";
import { LAND_DETAIL, LAND_MANAGE_MODE, LAND_PRODUCT } from "@/common/apiUrl";
export default {
  data() {
    return {
      checkbox: true,
      landId: "",
      land: {},
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight, //实时屏幕高度
      message: "",
      landManageMode: {},
      landProducts: [],
      totalPrice: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    participateCrowdfunfing() {
      this.$router.push("/order/confirm");
    },
    init() {
      this.landId = this.$route.query.landId;
      const params = {
        landId: this.landId,
      };
      GET(LAND_DETAIL, params).then((res) => {
        if (res.data.code == 200) {
          this.land = res.data.data.land;
        }
      });
      GET(LAND_MANAGE_MODE, params).then((res) => {
        if (res.data.code == 200) {
          this.landManageMode = res.data.data;
          this.totalPrice = this.landManageMode.price;
        } else {
          this.$toast.fail("服务器或网络错误");
        }
      });
      GET(LAND_PRODUCT, params).then((res) => {
        if (res.data.code == 200) {
          this.landProducts = res.data.data;
          let tempTotalPrice = this.totalPrice;
          tempTotalPrice = parseFloat(tempTotalPrice);
          this.landProducts.forEach((product) => {
            tempTotalPrice +=
              parseFloat(product.recommendNum) * parseFloat(product.price);
          });
          this.totalPrice = tempTotalPrice;
        } else {
          this.$toast.fail("服务器或网络错误");
        }
      });
    },
    minusProductNum(price) {
      let tempTotalPrice = this.totalPrice;
      tempTotalPrice = parseFloat(tempTotalPrice);
      tempTotalPrice -= parseFloat(price);
      this.totalPrice = tempTotalPrice;
    },
    addProductNum(price) {
      let tempTotalPrice = this.totalPrice;
      tempTotalPrice = parseFloat(tempTotalPrice);
      tempTotalPrice += parseFloat(price);
      this.totalPrice = tempTotalPrice;
    },
  },
};
</script>

<style type="text/css">
.van-field {
  border: none;
  font-size: 15px;
}
.zc-time {
  font-size: 12px;
  color: #555555;
  text-align: center;
}
.zc-progress {
  margin: 10px 5px 10px 5px;
}
.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 5px;
  width: 100%;
  height: 40px;
}
.product-item-checkbox {
  margin-left: 5%;
}
.product-item-num {
  margin-right: 5%;
}
.manage-mode {
  margin: 10px 0px 10px 0px;
}
.nut-price {
  color: red;
  margin: 0px 10px 0px 10px;
}
.price-symbol {
  font-size: 22px !important;
}
.price-big {
  font-size: 24px !important;
}
.price-point {
  font-size: 24px !important;
}
.price-small {
  font-size: 22px !important;
}
.nut-cell-desc {
  color: red;
  font-size: 16px;
}
.total-price {
  width: 95%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #f7f7f7;
  margin: 0px 20px 0px 10px;
}
</style>
