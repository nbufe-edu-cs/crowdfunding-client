<template>
  <div :style="{ height: windowHeight + 'px' }">
    <nav-bar :name="name" :left="true"></nav-bar>

    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      area-placeholder
      :address-info="addressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-default="isDefault"
    />

  </div>
</template>

<script>
  import NavBar from "../components/navBar";
  import area from "./../../static/areaList"
  export default {
    components: {NavBar},
    data() {
      return {
        name:"地址编辑",
        searchResult: [],
        windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
        windowHeight: document.documentElement.clientHeight,   //实时屏幕高度

        areaList:{
          province_list:area.province_list,
          city_list:area.city_list,
          county_list: area.county_list
        },
        addressInfo:{
          name: '',			//姓名
          tel: '',	//电话
          province:"",
          city:"",
          county:"",
          areaCode:'',	//北京市
          addressDetail:'',	//详细地址
          postalCode:"",
        },
        Default:""
      };
    },
    methods: {
      onSave(content) {
        console.log(content)
      },
      onDelete() {
        Toast('delete');
      },
      isDefault(value){
        this.Default = value
      }
    },
  };
</script>
<style type="text/css">
  .van-address-edit > *{
    border: none;
  }
</style>


