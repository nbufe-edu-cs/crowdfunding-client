<template>

</template>
<script type="text/javascript">
  export default{
    name: 'Item',
    props:{
      txt:{
        type:String
      },
      page:{
        type:String
      },
      sel:{
        type:String
      }
    },
    computed:{
      bol: function(){
        if(this.sel == this.page){
          return true;
        }
        return false;
      }
    },
    methods:{
      changePage:function(){
        //点击跳转对应的页面
        this.$router.push('/'+this.page);
        this.$emit('change',this.page)
      }
    }
  }
</script>
<style type="text/css">

</style>
