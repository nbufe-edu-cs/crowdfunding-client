<template>
  <div class="made" :style="{ minHeight: windowHeight + 'px' }">
    <van-nav-bar
      :title="land.landName + `土地定制`"
      left-text="返回"
      left-arrow
      @click-left="go"
    />
    <div class="message">
      <img :src="land.coverImg" />
      <div class="desc">
        {{ land.landDesc }}
      </div>
      <div class="price">土地面积 {{ land.landArea }} 亩</div>
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
        <nut-checkbox class="product-item-checkbox" v-model="checkbox"
          >{{ product.productName }} (单价 {{ product.price }})</nut-checkbox
        >
        <nut-stepper
          class="product-item-num"
          :value="product.minNum"
          :simple="false"
          @change="changeProductNum()"
        ></nut-stepper>
      </div>

      <div class="total-price">
        <p>总计:</p>
        <nut-price :price="totalPrice" :needSymbol="true" :thousands="false" />
      </div>

      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <div @click="collect(collectionFlag)" v-bind:class="{ hide: !collectionFlag }">
          <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        </div>
        <div @click="collect(collectionFlag)" v-bind:class="{ hide: collectionFlag }">
          <van-goods-action-icon icon="star-o" text="收藏" />
        </div>
        <van-goods-action-button type="danger" text="定制" native-type="submit" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import "@/assets/css/field/made.css";
import { GET } from "@/api/methods";
import { LAND_DETAIL, LAND_MANAGE_MODE, LAND_PRODUCT } from "@/common/apiUrl";
import axios from "axios";
export default {
  data() {
    return {
      checkbox: false,
      mode: "false",
      num: 0,
      landId: "",
      land: {},
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight, //实时屏幕高度
      radio: "1",
      value: "", //品种
      showPicker: false,
      date: "",
      show: false,
      message: "",
      collectionFlag: false,
      landManageMode: {},
      landProducts: [],
      defaultValueData: null,
      totalPrice: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
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
          this.$toast.fail("网络错误");
        }
      });
      GET(LAND_MANAGE_MODE, params).then((res) => {
        if (res.data.code == 200) {
          this.landManageMode = res.data.data;
          this.totalPrice = this.landManageMode.price;
        } else {
          this.$toast.fail("网络错误");
        }
      });
      GET(LAND_PRODUCT, params).then((res) => {
        if (res.data.code == 200) {
          this.landProducts = res.data.data;
        } else {
          this.$toast.fail("网络错误");
        }
      });
    },
    changeProductNum() {},
    go() {
      this.$router.go(-1);
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onClickIcon() {},
    collect(flag) {
      if (flag == true) {
        //收藏失败
        this.collectionFlag = false;
      }
      if (flag == false) {
        //收藏成功
        this.collectionFlag = true;
      }
    },
  },
};
</script>

<style type="text/css">
.van-field {
  border: none;
  /*background-image: url("./../../../static/bg.png");*/
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
