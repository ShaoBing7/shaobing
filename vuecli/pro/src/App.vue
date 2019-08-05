<template>
  <div id="app">
  <Navagation :activeObj="initActive"></Navagation>
  <router-view @changeActive="thisActive"/>
  </div>
</template>
<script>
import Navagation from "@/components/Navagation.vue"
export default {
  data() {
    return {
      initActive:{
        title:"电影",
        navName:"movie"
      }
    }
  }, 
   components:{
    Navagation
  },
  methods: {
    thisActive(obj){
      this.initActive = obj;
  },
 
  }
}
</script>
<style>
  *{
    margin : 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .clearfix::after{
    content: "";
    display:block;
    clear: both;
  }
   body{
    padding:1rem 0;
  }
</style>
