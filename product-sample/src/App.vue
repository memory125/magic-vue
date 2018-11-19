<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 m-3">
           <product-display></product-display>
        </div>
        <div class="col m-3">
          <product-editor></product-editor>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ProductDisplay from "./components/ProductDisplay.vue"
import ProductEditor from "./components/ProductEditor.vue"

export default {
  name: 'app',
  components: {
    //HelloWorld,
    ProductDisplay,
    ProductEditor
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
