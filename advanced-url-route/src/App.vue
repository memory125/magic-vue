<template>
  <div id="app">
    <img alt="Vue logo"  class="rounded-circle mx-auto d-block" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container-fluid">   
      <div class="row">
        <div class="col text-center m-2">
            <div class="btn-group">
             <router-link tag="button" to="/products" active-class="btn-info" class="btn btn-primary" >
                Products
             </router-link>
             <router-link tag="button" to="/preferences" active-class="btn-info" class="btn btn-primary" >
                Preferences
             </router-link>
             <router-link to="/named/tableleft" active-class="btn-info" class="btn btn-primary" >
                Table Left
             </router-link>
             <router-link to="/named/tableright" active-class="btn-info" class="btn btn-primary" >
                Table Right
             </router-link>
             <router-link to="/filter/All" active-class="btn-info" class="btn btn-primary" >
                Filtered Data
             </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col m-2">
          <h3 class="bg-warning text-white text-center p-2" v-if="componentLoading">
            Loading Component...
          </h3>
           <router-view v-show="!componentLoading"></router-view>
        </div>       
      </div>            
    </div>   
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'app',
  computed: {
    ...mapState(["componentLoading"]),
  },
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
