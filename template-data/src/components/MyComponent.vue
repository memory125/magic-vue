<template>
  <div class="bg-primary text-white text-center m-2 p-3">
      <h3>This is my component!</h3>
        <div class="bg-primary text-info p-3">
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
        <div class="bg-primary text-white p-3">
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
        <div class="bg-primary text-white m-2 p-3">
            <h3>
            <button v-on:click="handleClick" class="btn btn-primary">
                Click Me
            </button>
            </h3>
            <h3> Message: {{msg}} </h3>
        </div>
        <div class="bg-primary text-white m-2 p-3">
          <h2 v-bind:class="elemClasses">Product: {{ name }}</h2>
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
          highlight: false
      }
  },
  computed: {
      lowtotalPrice() {
          return this.getTotalPrice(this.lowtaxRate);
      },
      hightotalPrice() {
          return this.getTotalPrice(this.hightaxRate);
      },
      elemClasses() {
          return this.highlight ? ["bg-light", "text-dark", "display-4"] :  ["bg-dark", "text-light", "p-2"];
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
          this.highlight = !this.highlight;
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
</style>
