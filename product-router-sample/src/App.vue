<template>
  <div id="app">
    <img alt="Vue logo"  class="rounded-circle mx-auto d-block" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container-fluid">   
      <div class="row">
        <div class="col text-center m-2">
          <!-- <ol>
            <router-link tag="li" event="mouseenter" to="/list" class="m-1" >List</router-link>
            <router-link tag="li" event="mouseenter" to="/create" class="m-1">Create</router-link>
            <router-link tag="li" event="mouseenter" to="/edit" class="m-1" exact>Edit</router-link>
            <router-link tag="li" event="mouseenter" to="/edit/1" class="m-1">Edit Apple</router-link>
          </ol> -->
          <!-- <div class="btn-group">
            <router-link tag="button" event="mouseenter" to="/list" exact-active-class="btn-info" class="btn btn-secondary" >List</router-link>
            <router-link tag="button" event="mouseenter" to="/create" exact-active-class="btn-info" class="btn btn-secondary">Create</router-link>
            <router-link tag="button" event="mouseenter" to="/edit" exact-active-class="btn-info" class="btn btn-secondary" exact>Edit</router-link>
            <router-link tag="button" event="mouseenter" to="/edit/1" exact-active-class="btn-info" class="btn btn-secondary">Edit Apple</router-link>
          </div> -->
          <div class="btn-group">
             <router-link tag="button" to="/products" active-class="btn-info" class="btn btn-primary" >
                Products
             </router-link>
              <router-link tag="button" to="/preferences" active-class="btn-info" class="btn btn-primary" >
                Preferences
             </router-link>
          </div>
        </div>
      </div>
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

<style scoped>
router-link {text-align: right;  color: yellow; background-color: red;}
li {text-align: left; color: blue; background-color: lightblue}
.router-link-active {font-size: xx-large;}
.router-link-exact-active {font-weight: bolder;}
</style>
