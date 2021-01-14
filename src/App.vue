<template>
  <div>
    <router-view />
    <Tabbar :active2="2"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
export default {
  name: "App",
  components: {
    Tabbar,
  },
};
</script>

<style></style>
