<template>
  <div class="container-fluid">
      <div class="bg-primary text-white text-center m-2 p-3">
          <h3 v-on:click="name = 'Clicked!'">{{ name }}</h3>
      </div>   
  </div>
</template>

<script>
export default {
  name: 'EventHandle',
  props: {
    msg: String
  },
  data() {
      return {
          name: "Apple"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
