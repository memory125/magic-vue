<template>
  <div id="app">
    <img alt="Vue logo"  class="rounded-circle mx-auto d-block" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="m-2">
      <div class="text-center m-2">
        <div class="btn-group">
          <router-link tag="button" to="/display" exact-active-class="btn-warning" class="btn btn-secondary">
            Simple Display
          </router-link>
          <router-link tag="button" to="/list" exact-active-class="btn-info" class="btn btn-secondary">
            List Maker
          </router-link>
          <router-link tag="button" to="/numbers" exact-active-class="btn-success" class="btn btn-secondary">
            Numbers
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
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
