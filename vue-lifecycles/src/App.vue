<template>
  <div id="app">
    <img alt="Vue logo" class="rounded-circle mx-auto d-block" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <life-cycle></life-cycle>
  <div class="bg-info p-2" v-if="checked">
    <message-display></message-display>
  </div>  
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import LifeCycle from './components/LifeCycle.vue'
import MessageDisplay from './components/MessageDisplay.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
    LifeCycle,
    MessageDisplay
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
