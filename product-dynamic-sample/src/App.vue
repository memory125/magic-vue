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
      <div class="col">
        <div class="col text-center m-2">
          <button class="btn btn-primary" v-on:click="selectComponent('table')">
            Stanard Features
          </button>
          <button class="btn btn-primary" v-on:click="selectComponent('summary')">
            Advanced Features
          </button>
        </div>
      </div>
      <!-- <div class="row">
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
      </div> -->
      <div class="row">
        <div class="col">
          <!-- <keep-alive> -->
             <component v-bind:is="selectedComponent"></component>
          <!-- </keep-alive>           -->
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

const DataSummary = () => import("./components/DataSummary.vue");

import {mapState, mapMutations} from "vuex";

export default {
  name: 'app',
  components: {
    //HelloWorld,
    ProductDisplay,
    ProductEditor,
    ErrorDisplay,
    DataSummary
  },
  // data() {
  //   return {
  //     selected: "table"
  //   }
  // },
  methods: {
    ...mapMutations({
      selectComponent: "nav/selectComponent"
    })
  },
  computed: {
    ...mapState({
      selected: state => state.nav.selected
    }),
    selectedComponent() {
      switch (this.selected) {
        case "table":
          return ProductDisplay;

        case "editor":
          return ProductEditor;

        case "summary":
          return DataSummary;
      }
      //return this.selected == "table" ? ProductDisplay : ProductEditor;
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
