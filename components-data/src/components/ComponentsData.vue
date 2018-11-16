<template>
  <div class="bg-primary text-white text-center m-2 p-2 h5">
      Root Component    
      <div class="bg-primary text-white m-2 p-3">
          {{ message1 }}
      </div>
      <!-- <ChildComponent></ChildComponent>
      <child-component></child-component> -->
      <MyFeature labelText="Name" initialValue="Apple"></MyFeature>
      <my-feature label-text="Category" initial-value="Banana"></my-feature>
      <div class="bg-info text-white m-2 p-3">
          {{ message2 }}
      </div>
      <my-display v-bind:product="product">
          <div slot-scope="data" class="bg-info text-left">
              {{ data.propname }} is {{ data.propvalue }}
          </div>
      </my-display>
      <my-product v-bind:initial-product="product" v-on:productSubmit="updateProduct">
          <div slot="header" class="bg-warning m-2 p-2 h3 text-dark">
              Product Editor
          </div>
          <div slot="footer" class="bg-warning m-2 p-2 h3 text-dark">
              Check Details Before Submitting
          </div>
      </my-product>
  </div>
</template>

<script>
import ChildComponent1 from "./ChildComponent1.vue"
import ChildComponent2 from "./ChildComponent2.vue"
import ProductDisplay from "./ProductDisplay.vue"

export default {
  name: 'ComponentsData',
  props: {
    msg: String
  },
  components: {
    //   ChildComponent1,
      MyFeature: ChildComponent1,
      MyProduct: ChildComponent2,
      MyDisplay: ProductDisplay
  },
  data() {
      return {
          message1: "This is the parent component!",
          product: {
              name: "Apple",
              category: "Fruit",
              price: 49.99
          },
          message2: ""
      }
  },
  methods: {
    updateProduct(newProduct) {
        this.message2 = JSON.stringify(newProduct);
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {border: 8px solid gray}
</style>
