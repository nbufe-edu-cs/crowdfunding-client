<template>
  <div class="field">
    <van-nav-bar title="土地" left-arrow @click-left="go" />
    <Find />
    <Focus></Focus>
    <ul class="container">
      <li v-for="item in landList" :key="item.landId">
        <router-link :to="`/field/made?landId=` + item.landId">
          <LandItem :itemData="item" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { GET, POST_QUERY } from "@/api/methods";
import { LAND_LIST, LAND_FAVORITES } from "@/common/apiUrl";
import "@/assets/css/field/field.css";
import Find from "@/components/Find";
import Focus from "@/components/focus";
import FieldNavbar from "@/components/fieldNavbar";
import LandItem from "@/components/land/item";
export default {
  components: {
    FieldNavbar,
    Find,
    Focus,
    LandItem,
  },
  data() {
    return {
      landSearchKey: "",
      landList: [],
      swipeImgList: [],
    };
  },
  mounted() {
    this.init();
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
    init() {
      GET(LAND_LIST).then((res) => {
        if (res.data.code == 200) {
          this.landList = res.data.data;
        } else {
          this.$toast.fail("网络错误");
        }
      });
    },
    go() {
      this.$router.push({ path: "/my" });
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
<style lang="css">
.land-progress {
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  margin-left: 10px;
}
.land-search {
  margin: 0 auto;
  width: 95%;
  margin-top: 5px;
}
</style>
