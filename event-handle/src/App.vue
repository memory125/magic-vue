<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <EventHandle msg="Event Handle Sample"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import EventHandle from "./components/EventHandle.vue"

export default {
  name: 'app',
  components: {
   // HelloWorld,
   EventHandle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
