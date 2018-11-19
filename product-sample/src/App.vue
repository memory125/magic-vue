<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <product-display></product-display>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ProductDisplay from "./components/ProductDisplay.vue"

export default {
  name: 'app',
  components: {
    //HelloWorld,
    ProductDisplay
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
