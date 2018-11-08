<template>
  <div class="bg-primary text-white text-center m-2 p-3">
      <h3 style="text-align:center">This is my component!</h3>
        <div class="bg-primary text-info p-3" style="text-align:center">
            <!-- <h2>Product: {{name}}</h2> -->
            <h2>Product: {{name | reverse | capitalize}}</h2>
            <h2>Product: {{name | capitalize | reverse}}</h2>
            <h3>Low Price: ${{lowtotalPrice}}</h3>
            <h3>High Price: ${{hightotalPrice}}</h3>
            <!-- <h3>Low Price: ${{getTotalPrice(lowtaxRate)}}</h3>
            <h3>High Price: ${{getTotalPrice(hightaxRate)}}</h3> -->
            <h3>Low Price: {{lowtotalPrice | currencyUSD1}}</h3>
            <h3>High Price: {{hightotalPrice | currencyUSD1}}</h3>
            <h3>Low Price: {{lowtotalPrice * 6.20 | currencyCNY}}</h3>
            <h3>High Price: {{hightotalPrice * 6.20 | currencyCNY}}</h3>
            <h3>Low Price: {{lowtotalPrice  | currencyUSD2(3)}}</h3>
            <h3>High Price: {{hightotalPrice | currencyUSD2(4)}}</h3>
        </div>
        <div class="bg-primary text-white p-3" style="text-align:center">
            <h3>Product:
                <span v-text="name"></span>                    
            </h3>
            <h3 class="text-info">--- v-if test ---</h3>
            <h4 v-if="showElements">Name: {{name}}</h4>
            <h4 v-if="!showElements">Price: {{price}}</h4>
            <h3 class="text-info">--- v-if v-else test---</h3>
            <h4 v-if="showElements">Name: {{name}}</h4>
            <h4 v-else>Price: {{price}}</h4>
            <h3 class="text-info">--- v-if-else test---</h3>
            <h4 v-if="counter % 3 == 0">Name: {{name}}</h4>
            <h4 v-else-if="counter % 3 == 1">Price: {{price}}</h4>
            <h4 v-else>Category: {{category}}</h4>
            <h3 class="text-info">--- v-show test---</h3>
            <h4 v-show="counter % 2 == 0">Name: {{name}}</h4>
            <h4 v-show="counter % 2 == 1">Price: {{price}}</h4>            
            <ul class="text-left">
                <li>List item</li>
                <template v-if="showElements">
                    <li>{{ name }}</li>
                    <li>{{ price }}</li>
                </template>
                <li>Other list item</li>
            </ul>
            <span v-html="fragment"></span>
            <a></a>        
        </div>
        <div class="bg-primary text-white m-2 p-3" style="text-align:center">
            <h3>
            <button v-on:click="handleClick" class="btn btn-primary">
                Click Me
            </button>
            </h3>
            <h3> Message: {{msg}} </h3>
        </div>
        <div class="bg-primary text-white m-2 p-3">
          <h3 v-bind:class="elemClasses1">Product: {{ name }}</h3>          
          <h3 v-bind:class="elemClasses2" class="display-4">Name: {{ name }}</h3>
          <button v-on:click="handleClick1" class="btn btn-primary">
                Click 1
          </button>
          <button v-on:click="handleClick2" class="btn btn-primary">
                Click 2
           </button>
          <h3 v-bind:style="elemStyles" class="disply-4">Product: {{ name }}</h3>  
          <h3 v-bind:data-size="size" class="disply-4">Product: {{ name }}</h3>   
          <h3 v-bind="attrValues" class="disply-4">Product: {{ name }}</h3>
          <h3 v-bind:text-content.prop="textContent"></h3>  
        </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
      return {
          name: "Apple",
          price: 275,
          lowtaxRate: 12,
          hightaxRate: 20,
          msg: "",
          counter: 1,
          fragment: '<div class="form-group">Password: <input class="form-group type="password"></div>',
          showElements: true,
          category: "Watersports",
          highlight1: false,
          highlight2: false
      }
  },
  computed: {
      lowtotalPrice() {
          return this.getTotalPrice(this.lowtaxRate);
      },
      hightotalPrice() {
          return this.getTotalPrice(this.hightaxRate);
      },
      elemClasses1() {
          return this.highlight1 ? ["bg-light", "text-dark", "display-4"] :  ["bg-dark", "text-light", "p-2"];
      },
      elemClasses2() {
          return {
              "text-dark": this.highlight1,
              "bg-light": this.highlight2
          }
      },
      elemStyles() {
          return {
              "border": "5px solid red",
              "background-color": this.highlight2 ? "coral" : "green"
          }
      },
      size() {
          return this.highlight2 ? "big" : "small";
      },
      attrValues() {
          return {
              class: this.highlight2 ? ["bg-light", "text-dark"] : [],
              style: {
                  border: this.highlight2 ? "5px solid red" : ""
              },
              "data-size": this.highlight2 ? "big" : "small"
          }
      },
       textContent() {
           return this.highlight2 ? "Highlight!" : "Product: " + this.name;
       }
  },
  methods: {
      getTotalPrice(taxRate) {
          //return (this.price + (this.price * (taxRate / 100 ))).toFixed(2);
          return (this.price + (this.price * (taxRate / 100 )));
      },
      handleClick() {
          this.msg = "Button Clicked - " + this.counter++;
          this.showElements = !this.showElements;
          //this.highlight1 = !this.highlight1;
          //this.highlight2 = !this.highlight2;
      },
       handleClick1() {                 
          this.highlight1 = !this.highlight1;
      },
      handleClick2() {                 
          this.highlight2 = !this.highlight2;
      }
  },
  filters: {
      currencyUSD1(value) {
          return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(value);
      },
      currencyCNY(value) {
          return new Intl.NumberFormat("zh-CN", {style: "currency", currency: "CNY"}).format(value);
      },
      currencyUSD2(value, places) {
          return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD",
                                       minimumFractionDigits: places || 2,
                                       maximumFractionDigits: places || 2}).format(value);
      },
      capitalize(value) {
          return value[0].toUpperCase() + value.slice(1);
      },
      reverse(value) {
          return value.split("").reverse().join("");
      }
  }
}
</script>

<style>
    h3:first-child {
        background-color: aquamarine;
        padding: 10px;
        color: black;
    }
    [data-size=big] {font-size: 40pt}
    [data-size=small] {font-size: 20pt}
</style>
