 <template>
    <div class="bg-secondary text-white text-center m-2 p-2 h6">
      Child Component 2
      <h3>Product Sample Snippet</h3>
      <slot name="header">
           <h4>Use the form fields to edit the data</h4> 
      </slot>
      <div class="form-group m-1 text-left">
          <label>Name</label>
          <input v-model="product.name" class="form-control" />
      </div>
        <div class="form-group m-1 text-left">
          <label>Category</label>
          <input v-model="product.category" class="form-control" />
      </div>
        <div class="form-group m-1 text-left">
          <label>Price</label>
          <input v-model.number="product.price" class="form-control" />
      </div>
      <slot name="footer"></slot>
      <div class="mt-2">
          <button class="btn btn-info" v-on:click="doSubmit">
              Submit
          </button>
      </div>      
    </div>    
</template>

<script>
export default {
  name: 'ChildComponent2',
  props: ["initialProduct"],
  data() {
      return {
          product: this.initialProduct || {}
      }
  },
  methods: {
      doSubmit() {
          this.$emit("productSubmit", this.product);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {border: 5px solid darkcyan;}

</style>
