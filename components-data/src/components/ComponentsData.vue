<template>
  <div class="bg-primary text-white text-center m-2 p-2 h5">
      Root Component    
      <div class="bg-primary text-white m-2 p-3">
          {{ message }}
      </div>  
      <ChildComponent></ChildComponent>
      <child-component></child-component>
      <MyFeature></MyFeature>
      <my-feature></my-feature>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue"
export default {
  name: 'ComponentsData',
  props: {
    msg: String
  },
  components: {
      ChildComponent,
      MyFeature: ChildComponent
  },
  data() {
      return {
          message: "This is the parent component!"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {border: 8px solid sandybrown}
</style>
