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
                        <button class="btn btn-sm bg-primary text-white" v-on:click="handleClick(name)"
                        v-on:mousemove="handleMouseEvent1(name, $event)" v-on:mouseleave="handleMouseEvent1(name, $event)">
                            Select1
                        </button>
                          <button class="btn btn-sm bg-primary text-white" v-on="buttonEvents" v-bind:data-name="name">
                            Select2
                        </button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="container-fluid3">
            <h2 class="bg-primary text-white text-center mt-2 p-2">{{ message2 }}</h2>
            <div id="outer-element" class="bg-primary p-4 text-white h3" v-on:click="handleClick2">
                Outer Element
                    <div id="middle-element" class="bg-secondary p-4" v-on:click="handleClick2">
                        Middle Element
                            <div id="inner-element" class="bg-info p-4" v-on:click="handleClick2">
                                Inner Element
                            </div>
                    </div>
            </div>
        </div>
        <div class="container-fluid3">
            <h2 class="bg-primary text-white text-center mt-2 p-2">{{ message3 }}</h2>
            <div id="outer-element" class="bg-primary p-4 text-white h3" v-on:click.capture="handleClick3">
                Outer Element
                    <div id="middle-element" class="bg-secondary p-4" v-on:click.capture="handleClick3">
                        Middle Element
                            <div id="inner-element" class="bg-info p-4" v-on:click="handleClick3">
                                Inner Element
                            </div>
                    </div>
            </div>
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
          names: ["Apple", "Peach", "Melon", "Banana"],
          counter: 0,
          buttonEvents: {
              click: this.handleClickEvent,
              mousemove: this.handleMouseEvent2,
              mouseleave: this.handleMouseEvent2
          },
          message2: "Bubble Event",
          message3: "Capture Event"
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
          this.message = "Select 1: " + name;
      },
      handleMouseEvent1(name, $event) {
          if ($event.type == "mousemove") {
              this.message = "Mouse Move 1: in " + name + this.counter++;
          } else {
              this.count = 0;
              this.message = "Ready";
          }
      },
      handleClickEvent($event) {
          let name = $event.target.dataset.name;
          this.message = "Select 2: " + name;
      },
      handleMouseEvent2($event) {
          let name = $event.target.dataset.name;
          if ($event.type == "mousemove") {
              this.message = "Mouse Move 2: in " + name + this.counter++;
          } else {
              this.count = 0;
              this.message = "Ready";
          }
      },
      handleClick2($event) {
          //console.log("handleClick2 target: " + $event.target.id + "CurrentTarget: " + $event.currentTarget.id);
          this.message2 = "handleClick2 target: " + $event.target.id + " CurrentTarget: " + $event.currentTarget.id;
      },
      handleClick3($event) {
          //console.log("handleClick2 target: " + $event.target.id + "CurrentTarget: " + $event.currentTarget.id);
          this.message3 = "handleClick3 Capture target: " + $event.target.id + " CurrentTarget: " + $event.currentTarget.id;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
