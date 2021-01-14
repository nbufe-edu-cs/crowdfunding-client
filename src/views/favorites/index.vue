<template>
  <div class="favorites">
    <van-nav-bar title="土地收藏夹" left-arrow @click-left="go" />
    <div class="collection">
      <LandItem
        v-for="item in favoriteList"
        :key="item.land.landId"
        :itemData="item.land"
        :isFavorite="isFavorite"
        @refresh="init"
      />
    </div>
  </div>
</template>
<script>
import LandItem from "@/components/land/item";
import { GET } from "@/api/methods";
import { LAND_FAVORITES } from "@/common/apiUrl";
export default {
  name: "Favorites",
  components: {
    LandItem,
  },
  data() {
    return {
      favoriteList: [],
      isFavorite: false,
    };
  },
  created() {
    this.init();
    if (this.$route.path == "/field/favorites") {
      this.isFavorite = true;
    }
  },
  methods: {
    init() {
      const params = {
        userId: 1,
      };
      GET(LAND_FAVORITES, params).then((res) => {
        if (res.data.code == 200) {
          this.favoriteList = res.data.data;
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    go() {
      this.$router.push({ path: "/my" });
    },
  },
};
</script>
<style lang="less">
.favorites {
  .collection {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 55px;
  }
}
</style>
