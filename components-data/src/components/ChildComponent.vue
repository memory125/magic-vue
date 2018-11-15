<template>
  <div class="bg-secondary text-white text-center m-2 p-2 h6">
      Child Component
      <div class="bg-primary text-white m-2 p-3">
          {{ message }}
      </div>
      <div class="form-group m-1">
          <input v-model="message" class="form-control" />
      </div>
      <div class="form-group m-1 text-left">
          <label>{{ labelText }}</label>
          <input v-model="message" class="form-control" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: ["labelText", "initialValue"],
  data() {
      return {
          //message: "This is child component!"
          message: this.initialValue     
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {border: 5px solid lightcyan;}

</style>
