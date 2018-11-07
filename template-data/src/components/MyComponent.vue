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
          hightaxRate: 20
      }
  },
  computed: {
      lowtotalPrice() {
          return this.getTotalPrice(this.lowtaxRate);
      },
      hightotalPrice() {
          return this.getTotalPrice(this.hightaxRate);
      }
  },
  methods: {
      getTotalPrice(taxRate) {
          //return (this.price + (this.price * (taxRate / 100 ))).toFixed(2);
          return (this.price + (this.price * (taxRate / 100 )));
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
#app {
}
</style>
