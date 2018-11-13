<template>
  <div class="container-fluid1">
      <div class="bg-primary text-white text-center m-2 p-3">
          <h3 v-on:click="name = 'Clicked!'">{{ name }}</h3>
          <h3 v-on:click="name = $event.type">{{ name }}</h3>  
          <h3 v-on:click="handleEvent1">{{ name }}</h3>      
          <h3 v-on:click="handleEvent2('Apple', $event)">{{ name }}</h3>     
      </div>   
       <div class="bg-primary text-white text-center m-2 p-3">
          <h3 v-on:click="handleEvent2('Pear', $event)">{{ name }}</h3>
        </div>
        <div class="container-fluid2">
            <h3 class="bg-primary text-white text-center mt-2 p-2">{{ message }}</h3>
            <table class="table table-sm table-striped table-bordered">
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="(name, index) in names" v-bind:key="name">
                    <td>{{index + 1}}</td>
                    <td>{{name}}</td>
                    <td>
                        <button class="btn btn-sm bg-primary text-white" v-on:click="handleClick(name)">
                            Select
                        </button>
                    </td>
                </tr>
            </table>
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
          name: "Apple",
          message: "Ready",
          names: ["Apple", "Peach", "Melon", "Banana"]
      }
  },
  methods: {
      handleEvent1($event) {
          this.name = $event.type;
      },
      handleEvent2(name, $event) {
          //this.name = '${name} - ${$event.type}';
          this.name = name + "-" + $event.type;
      },
      handleClick(name) {
          this.message = "Select: " + name;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
