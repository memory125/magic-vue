<template>
  <div id="app">
    <img alt="Vue logo"  class="rounded-circle mx-auto d-block" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container-fluid">   
      <div class="row">
        <div class="col">
           <error-display></error-display>
        </div>       
      </div>
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
import ErrorDisplay from "./components/ErrorDisplay.vue"

export default {
  name: 'app',
  components: {
    //HelloWorld,
    ProductDisplay,
    ProductEditor,
    ErrorDisplay
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
