<template>
  <div id="app">
    <img alt="Vue logo" class="rounded-circle mx-auto d-block" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ComponentsData />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ComponentsData from "./components/ComponentsData.vue"

export default {
  name: 'app',
  components: {
    //HelloWorld,
    ComponentsData
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
