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
        <div class="col text-center m-2">
          <div class="btn-group btn-group-toggle">
              <label class="btn btn-info" v-bind:class="{active: (selected == 'table')}" >
                  <input type="radio" v-model="selected" value="table" />
                  Table
              </label>
              <label class="btn btn-info" v-bind:class="{active: (selected == 'editor')}" >
                  <input type="radio" v-model="selected" value="editor" />
                  Editor
              </label>
          </div>         
        </div>        
      </div>
      <div class="row">
        <div class="col">
           <component v-bind:is="selectedComponent"></component>
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
  },
  data() {
    return {
      selected: "table"
    }
  },
  computed: {
    selectedComponent() {
      return this.selected == "table" ? ProductDisplay : ProductEditor;
    }
  },
  created() {
    this.$store.dispatch("getProductsAction");
  },  
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
