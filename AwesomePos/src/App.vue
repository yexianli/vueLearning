<template>
  <div id="app">
<leftNav></leftNav>
  <div class="main">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
  import leftNav from '@/components/common/leftNav'
export default {
  name: 'app',
  components:{
  	leftNav
  }
}
</script>

<style>
  .main{
    width: 95%;
    float: left;
  background-color: #EFF2F7;
    height: 100%;
    overflow: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
