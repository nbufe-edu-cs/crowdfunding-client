<template>
    <div class="navbar">
      <nut-navbar class="my-nav"
        @on-click-back="back"
        :leftShow="left"
        :rightShow="right">
        {{name}}
        <a slot="left" @click="back"></a>
      </nut-navbar>


    </div>
</template>

<script>
export default {
  props:["name","left","right"],
  data(){
    return{
    }
  },
  components: {

  },
  methods:{
    back(){
      this.$router.go(-1)
    },

  }
}
</script>

<style type="text/css">
.my-nav{
  font-size: 14px;
  background-color: #f7f7f7;
}
.my-nav a{
  font-size: 15px;
}


</style>
