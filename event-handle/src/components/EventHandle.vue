<template>
  <div class="container-fluid">
      <div class="bg-primary text-white text-center m-2 p-3">
          <h3 v-on:click="name = 'Clicked!'">{{ name }}</h3>
          <h3 v-on:click="name = $event.type">{{ name }}</h3>  
          <h3 v-on:click="handleEvent1">{{ name }}</h3>      
          <h3 v-on:click="handleEvent2('Apple', $event)">{{ name }}</h3>     
      </div>   
       <div class="bg-primary text-white text-center m-2 p-3">
          <h3 v-on:click="handleEvent2('Pear', $event)">{{ name }}</h3>
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
  },
  methods: {
      handleEvent($event) {
          this.name = $event.type;
      },
      handleEvent2(name, $event) {
          this.name = name - $event.type;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
