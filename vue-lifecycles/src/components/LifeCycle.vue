<template>
  <div class="bg-primary text-white text-center m-2 p-2">
      <div class="form-check">
          <input type="checkbox" class="form-check-input" v-model="checked" />
          <label>Checkbox</label>
      </div>
      Checked Value: {{ checked }}
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  props: {
    msg: String
  },
  data() {
      return {
          checked: true
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
