<template>
  <div id="app">
    <img alt="Vue logo" class="rounded-circle mx-auto d-block" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Numbers />
    <Subtraction />
    <maths operation="Divide" firstVal="20" secondVal="5" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Numbers from "./components/Numbers.vue"
import Subtraction from './components/Subtraction.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    Numbers,
    Subtraction
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
