<template>
  <div class="sort">
    <nav-bar :name="name" :left="true"></nav-bar>
    <van-tree-select
      :height="100"
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      @click-item="click"
    />
    <tabbar></tabbar>
  </div>


</template>

<script>
  import "./../assets/css/my.css"
  import Tabbar from "./../components/Tabbar"
  import NavBar from "../components/navBar";
  export default {
    data(){
      return{
        name:"商品分类",
        activeId: 1,
        activeIndex: 0,
        items: [
          {
            // 导航名称
            text: '浙江',
            // 导航名称右上角徽标，2.5.6 版本开始支持

            // 导航节点额外类名
            className: 'my-class',
            // 该导航下所有的可选项
            children: [
              {
                // 名称
                text: '温州',
                // id，作为匹配选中状态的标识符
                id: 1,
              },
              {
                text: '杭州',
                id: 2,
              },
            ],
          },
          {
            // 导航名称
            text: '江苏',
            // 导航名称右上角徽标，2.5.6 版本开始支持
            badge: 3,
            // 是否在导航名称右上角显示小红点
            dot: true,
            // 导航节点额外类名
            className: 'my-class',
            // 该导航下所有的可选项
            children: [
              {
                // 名称
                text: '南京',
                // id，作为匹配选中状态的标识符
                id: 1,
              },
              {
                text: '杭州',
                id: 2,
              },
            ],
          },
        ],
      }
    },
    components: {
      NavBar,
      Tabbar
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      click(name){
         console.log(name.text)
         this.$router.push({
          path:"/findContainer",
          query:{
            value:name.text
          }
        })
      }

    }
  }
</script>


