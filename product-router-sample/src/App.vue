<template>
  <div id="app">
    <img alt="Vue logo"  class="rounded-circle mx-auto d-block" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container-fluid">   
      <div class="row">
        <div class="col m-2">
           <router-view></router-view>
        </div>       
      </div>            
    </div>   
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import ProductDisplay from "./components/ProductDisplay.vue"
// import ProductEditor from "./components/ProductEditor.vue"
// import ErrorDisplay from "./components/ErrorDisplay.vue"
// import LoadingMessage from "./components/LoadingMessage.vue"

// const DataSummary = () => ({
//     component: import("./components/DataSummary.vue"),
//     loading: LoadingMessage,
//     delay: 100
//   });

//import {mapState, mapMutations} from "vuex";

export default {
  name: 'app',
  // components: {
  //   //HelloWorld,
  //   ProductDisplay,
  //   ProductEditor,
  //   ErrorDisplay,
  //   DataSummary,
  //   LoadingMessage
  // },
  // data() {
  //   return {
  //     selected: "table"
  //   }
  // },
  // methods: {
  //   ...mapMutations({
  //     selectComponent: "nav/selectComponent"
  //   })
  // },
  // computed: {
  //   ...mapState({
  //     selected: state => state.nav.selected
  //   }),
  //   selectedComponent() {
  //     switch (this.selected) {
  //       case "table":
  //         return ProductDisplay;

  //       case "editor":
  //         return ProductEditor;

  //       case "summary":
  //         return DataSummary;
  //     }
  //     //return this.selected == "table" ? ProductDisplay : ProductEditor;
  //   }
  // },
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
