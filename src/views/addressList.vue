<template>
  <div class="addressList" :style="{ height: windowHeight + 'px' }" style="background-image: url(./../../static/bg.png)">

    <van-nav-bar
      title="选择我的地址"
      left-arrow
      @click-left="back"
    />


    <van-address-list
      v-model="chosenAddressId"
      :list="list"

      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @click-item="select"
    />

  </div>
</template>

<script>
  import NavBar from "../components/navBar";
  export default {
    components: {NavBar},
    data() {
      return {
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
        name:"选择我的地址",
        chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号',
          },
        ],

      };
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      onAdd() {
        this.$router.push({
          path :"/addressList/addressEdit"
          }
        )
      },
      onEdit(item, index) {
        this.$router.push({
          path :"/addressList/addressEdit",
          query:{
            id:index
          }
        })
      },

      select(item, index){
        console.log(index)
        console.log(item)
      }


    },
  };
</script>



