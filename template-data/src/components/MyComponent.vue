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
        </div>
        <div class="container-fluid">
            <h2 class="bg-primary text-white text-center p-3">Products</h2>
            <table class="table table-sm table-bordered table-striped text-left">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tbody>
                    <tr v-for="p in products" v-bind:key="p.name">
                        <td>{{ p.name }}</td>
                        <td>{{ p.price | currencyUSD1}}</td>
                    </tr>
                </tbody>
            </table>
            <button v-on:click="handlePush" class="btn btn-primary">
                Push
            </button>
            <h2 class="bg-primary text-white text-center p-3">Products</h2>
            <table class="table table-sm table-bordered table-striped text-left">
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tbody>
                    <tr v-for="(p, i) in products" v-bind:key="p.name" v-bind:odd="i % 2 == 0">
                        <td>{{ i + 1 }}</td>
                        <td>{{ p.name }}</td>
                        <td>{{ p.price | currencyUSD1}}</td>
                    </tr>
                </tbody>
            </table>
             <button v-on:click="handleFilter" class="btn btn-primary">
                Filter
            </button>
            <button v-on:click="handleUpdateData" class="btn btn-primary">
                Update Data
            </button>
            <table class="table table-sm table-bordered table-striped text-left">
                <tr>
                    <th>Index</th>                  
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tbody>
                    <tr v-for="(p, key, i) in products2" v-bind:key="p.name">
                        <td>{{ i + 1 }}</td>                       
                        <td>{{ p.name }}</td>
                        <td>{{ p.price | currencyUSD1}}</td>
                    </tr>
                </tbody>           
            </table>
            <button v-on:click="handleSetData" class="btn btn-primary">
                Set Data
            </button>
            <table class="table table-sm table-bordered table-striped text-left">
                <tr>
                    <th>Index</th>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tbody>
                    <tr v-for="(p, key, i) in products3" v-bind:key="p.name">
                        <td>{{ i + 1 }}</td>
                        <td>{{ key }}</td>
                        <td>{{ p.name }}</td>
                        <td>{{ p.price | currencyUSD1}}</td>
                    </tr>
                </tbody>           
            </table>
            <table class="table table-sm table-bordered table-striped text-left">
                <tr>
                    <th>Index</th>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tbody>
                    <tr v-for="(p, key, i) in products3" v-bind:key="p.name">
                        <td>{{ i + 1 }}</td>
                        <td>{{ key }}</td>
                        <td>{{ p.name }}</td>
                        <td>{{ p.price | currencyUSD1}}</td>
                    </tr>
                </tbody>           
            </table>
            <div class="text-center">
                <button v-for="i in 5" v-on:click="handleBTNClick(i)" class="btn btn-primary m-1" v-bind:key="i">
                    BTN {{ i }}
                </button>
            </div>
             <table class="table table-sm table-bordered table-striped text-left">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tbody>
                    <tr v-for="p in pageItems1" v-bind:key="p.name">                      
                        <td>{{ p.name }}</td>
                        <td>{{ p.price | currencyUSD1}}</td>
                    </tr>
                </tbody>           
            </table>
            <div class="text-center">
                <button v-for="i in pageCount1" v-on:click="selectPage(i)" class="btn btn-primary m-1" v-bind:key="i" v-bind:class="{'bg-primary': currentPage == i}">
                    {{ i }}
                </button>
            </div>
            <table class="table table-sm table-bordered table-striped text-left">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tbody>
                    <tr v-for="p in pageItems2" v-bind:key="p.name">                      
                        <td>{{ p.name }}</td>
                        <td>{{ p.price | currencyUSD1}}</td>
                    </tr>
                </tbody>           
            </table>
            <div class="text-center">
                <button class="btn btn-secondary m-1" v-on:click="togg;eSort"  v-bind:class="{'bg-primary': sort}">
                    Toggle Sort
                </button>
                <button class="btn btn-secondary m-1" v-on:click="toggleFilter"  v-bind:class="{'bg-primary': sort}">
                    Toggle Filter
                </button>
                <button v-for="i in pageCount1" v-on:click="selectPage(i)" class="btn btn-primary m-1" v-bind:key="i" v-bind:class="{'bg-primary': currentPage == i}">
                    {{ i }}
                </button>
            </div>
        </div>
  </div>
</template>

<script>
import Vue from "vue";

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
          highlight2: false,
          products: [
              {name: "Pear", price: 39.9},
              {name: "Apple", price: 48.95},
              {name: "Orange", price: 32.99},
              {name: "Peach", price: 30.49},
              {name: "Grape", price: 36.99},
              {name: "Watermelon", price: 38.99}
          ],
          products2: {
              1: {name: "Pear", price: 39.9},
              2: {name: "Apple", price: 48.95},
              3: {name: "Orange", price: 32.99},
              4: {name: "Peach", price: 30.49},
              5: {name: "Grape", price: 36.99},
              6: {name: "Watermelon", price: 38.99}
          },
          products3: {
              "pear": {name: "Pear", price: 39.9},
              2: {name: "Apple", price: 48.95},
              3: {name: "Orange", price: 32.99},
              4: {name: "Peach", price: 30.49},
              "5": {name: "Grape", price: 36.99},
              6: {name: "Watermelon", price: 38.99}
          },
          pageSize: 3,
          currentPage: 1,
          products4: [
              {name: "Pear", price: 39.9},
              {name: "Apple", price: 48.95},
              {name: "Orange", price: 32.99},
              {name: "Peach", price: 30.49},
              {name: "Grape", price: 36.99},
              {name: "Watermelon", price: 38.99},
              {name: "Banana", price: 42.99},
              {name: "Chestnut", price: 37.99},
              {name: "Plum", price: 43.99},
              {name: "Kiwi", price: 46.99},
          ],
          filter: false,
          sort: false,
          products5: [
              {name: "Pear", price: 39.9},
              {name: "Apple", price: 48.95},
              {name: "Orange", price: 32.99},
              {name: "Peach", price: 30.49},
              {name: "Grape", price: 36.99},
              {name: "Watermelon", price: 38.99},
              {name: "Banana", price: 42.99},
              {name: "Chestnut", price: 37.99},
              {name: "Plum", price: 43.99},
              {name: "Kiwi", price: 46.99},
              {name: "Pitaya", price: 49.99}
          ]
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
      pageCount1() {
          return Math.ceil(this.products4.length / this.pageSize);
      },
      pageItems1() {
          let start = (this.currentPage - 1) * this.pageSize;
          return this.products4.slice(start, start + this.pageSize);
      },
      pageCount2() {
          return Math.ceil(this.dataItems.length / this.pageSize);
      },
      pageItems2() {
          let start = (this.currentPage - 1) * this.pageSize;
          return this.dataItems.slice(start, start + this.pageSize);
      },
      dataItems() {
          let data = this.fileter ? this.products5.filter(p => p.price > 30) : this.products5;
          return this.sort ? data.concat().sort((p1, p2) => p2.price - p1.price) : data;
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
      },
      handlePush() {
          this.products.push(this.products.shift());
      },
      handleFilter() {
          this.products = this.products.filter(p => p.price > 33);
      },
      handleUpdateData() {
          //this.products[1] = {name: "Grapefruit", price: 38.99};
          Vue.set(this.products, 1, {name: "Grapefruit", price: 38.99});
      },
      handleSetData() {
           Vue.set(this.products2, 7, {name: "Banana", price: 42.99});
      },
      selectPage(page) {
          this.currentPage = page;
      },
      toggleSort() {
          this.sort = !this.sort;
          this.currentPage = 1;
      },
      toggleFilter() {
          this.filter = !this.filter;
          this.currentPage = 1;
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
    #tagged {background-color: coral}
    [odd] {background-color: lightblue}
</style>
