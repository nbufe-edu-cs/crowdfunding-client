<template>
  <nut-tabbar @tab-switch="tabSwitch" :tabbar-list="tabList" :bottom="true"> </nut-tabbar>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          tabTitle: "土地定制",
          curr: true,
          icon:
            "http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg",
          activeIcon:
            "http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg",
          href: "/field",
        },
        {
          tabTitle: "土地论坛",
          curr: false,
          icon:
            "http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg",
          activeIcon:
            "http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg",
          href: "/field/forum",
        },
      ],
    };
  },
  methods: {
    tabSwitch: function (value, index) {
      console.log(index);
    },
  },
};
</script>

<style type="css"></style>
