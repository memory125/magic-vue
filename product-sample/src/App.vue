<template>
  <div id="app">
    <img alt="Vue logo"  class="rounded-circle mx-auto d-block" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container-fluid">
      <div class="text-right m-2">
        <button class="btn btn-primary" v-on:click="toggleColors">
          Toggle Colors
        </button>
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

export default {
  name: 'app',
  components: {
    //HelloWorld,
    ProductDisplay,
    ProductEditor
  },
  data() {
    return {
      reactiveColors: {
        bg: "bg-secondary",
        text: "text-white"
      }
    }
  },
  provide() {
    return {
      colors: this.reactiveColors,
      labelFormatter: (value) => "Enter " + value + ":"
    }
  },
  methods: {
    toggleColors() {
      if (this.reactiveColors.bg == "bg-secondary") {
        this.reactiveColors.bg = "bg-light";
        this.reactiveColors.text = "text-danger";
      } else {
        this.reactiveColors.bg = "bg-secondary";
        this.reactiveColors.text = "text-white";
      }
    }
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
