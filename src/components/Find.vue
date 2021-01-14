<template>
<div class="find">

  <nut-searchbar
    v-model="value"
    placeText="请输入要搜索的内容"
    :hasIcon="true"
    :hasTextButton="true"
    textInfo="搜索"
    customClass="search_demo"
    searchIconSize='14px'
    @submit="onSearch"
  ></nut-searchbar>

</div>
</template>
<script>
  export default {
    data(){
      return{
        value:"",
      }
    },
    methods:{
      onSearch(){
        this.$router.push({
          path:"/findContainer",
          query:{
            value:this.value
          }
        })
      }
    }

  }
</script>
<style type="text/css">
  * {
    margin: 0;
    padding: 0;
  }
  .find{
    width: 90%;
    margin: 10px auto ;
  }
.search_demo{
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
}


</style>

