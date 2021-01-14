<template>
  <div class="land-item">
    <img class="land-item-img" v-bind:src="itemData.coverImg" />
    <div class="land-item-info">
      <div class="name">{{ itemData.landName }}</div>
      <nut-progress
        class="progress"
        :percentage="itemData.progress"
        stroke-color="red"
        status="active"
      >
      </nut-progress>
      <p class="create-time">发布时间 {{ itemData.createTime }}</p>
      <nut-buttongroup class="made-btn">
        <van-button
          color="red"
          @click="made(itemData.landId)"
          size="small"
          round
          text="去定制"
        />
        <van-button
          v-if="isFavorite == false"
          color="orange"
          @click="addToFavorties(itemData.landId)"
          size="small"
          icon="star-o"
          round
        />
        <van-button
          v-if="isFavorite == true"
          color="orange"
          @click="deleteFromFavorties(itemData.landId)"
          size="small"
          icon="star-o"
          text="取消"
          round
        />
      </nut-buttongroup>
    </div>
  </div>
</template>
<script>
import { POST_QUERY, DELETE } from "@/api/methods";
import { LAND_FAVORITES } from "@/common/apiUrl";
export default {
  name: "Item",
  props: {
    itemData: Object,
    isFavorite: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    addToFavorties(landId) {
      const params = {
        landId: landId,
        userId: 1,
      };
      POST_QUERY(LAND_FAVORITES, params).then((res) => {
        if (res.data.code == 200) {
          this.$toast.success("收藏成功");
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    deleteFromFavorties(landId) {
      const params = {
        landId: landId,
        userId: 1,
      };
      DELETE(LAND_FAVORITES, params).then((res) => {
        if (res.data.code == 200) {
          this.$toast.success("取消成功");
          this.$emit("refresh");
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    made(landId) {
      this.$router.push({
        path: "/field/made",
        query: {
          landId: landId,
        },
      });
    },
  },
};
</script>
<style lang="less">
.land-item {
  color: #000000;
  width: 95%;
  height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &-img {
    height: 120px;
    width: 55%;
    border-radius: 5px;
  }
  &-info {
    width: 45%;
    .progress {
      margin-top: 5px;
      margin-left: 10px;
    }
    .create-time {
      text-align: left;
      font-size: 10px;
      padding-top: 5px;
      padding-left: 15px;
      color: #888888;
    }
    .name {
      margin-top: 5px;
      font-size: 16px;
      margin-left: 5px;
      text-align: left;
      padding-left: 5px;
    }
    .made-btn {
      margin-top: 15%;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
