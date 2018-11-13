<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ModelHandle />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ModelHandle from './components/ModelHandle.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    ModelHandle
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
