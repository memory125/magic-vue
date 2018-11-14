<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
        Value: {{ dataValue1 }}
    </div>
    <div class="bg-primary m-2 p-2 text-white">
        <div class="form-check">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" v-on:change="handleChange1"/>
                Data Value
            </label>
        </div>     
    </div>
    <div class="text-center m-2">
        <button class="btn btn-secondary" v-on:click="reset1">
            Reset1
        </button>
    </div>
    <div class="bg-info m-2 p-2 text-white">
        Data Value: {{ dataValue2 }}
    </div>
    <div class="bg-info m-2 p-2 text-white">
        Other Value: {{ otherValue1 }}
    </div>
    <div class="bg-primary m-2 p-2 text-white">
        <div class="form-check">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" v-on:change="handleChange2" v-bind:checked="dataValue2"/>
                Data Value
            </label>
        </div>     
    </div>
    <div class="bg-primary m-2 p-2">       
        <input type="text" class="form-control" v-on:input="handleChange2" v-bind:value="otherValue1" />
    </div>
    <div class="text-center m-2">
        <button class="btn btn-secondary" v-on:click="reset2">
            Reset2
        </button>
    </div>
    <div class="bg-info m-2 p-2 text-white">
        Data Value: {{ dataValue3 }}
    </div>
    <div class="bg-info m-2 p-2 text-white">
        Other Value: {{ otherValue2 }}
    </div>
    <div class="bg-primary m-2 p-2 text-white">
        <div class="form-check">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" v-model="dataValue3" />
                Data Value
            </label>
        </div>     
    </div>
    <div class="bg-primary m-2 p-2">       
        <input type="text" class="form-control" v-model="otherValue2" />
    </div>
    <div class="text-center m-2">
        <button class="btn btn-secondary" v-on:click="reset3">
            Reset3
        </button>
    </div>
    <div class="bg-info m-2 p-2 text-white">
        <div>Name: {{ name }}</div>
        <div>Password: {{ password }}</div>
        <div>Details: {{ details }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
        <div class="form-group">            
            <label>Name</label>
            <input class="form-control" v-model="name" />           
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" />
        </div>
        <div class="form-group">
            <label>Details</label>
            <textarea class="form-control" v-model="details" />
        </div>
    </div>
    <div class="bg-info m-2 p-2 text-white">
        <div>Name: {{ name }}</div>
        <div>Has Admin Access: {{ hasAdminAccess }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
        <div class="form-check">            
            <input class="form-check-input" type="radio" v-model="name" value="David" />
            <label class="form-check-label">David</label>         
        </div>
       <div class="form-check">            
            <input class="form-check-input" type="radio" v-model="name" value="Alice" />
            <label class="form-check-label">Alice</label>         
        </div>
        <div class="form-check">            
            <input class="form-check-input" type="checkbox" v-model="hasAdminAccess" />
            <label class="form-check-label">Has Admin Access?</label>         
        </div>
    </div>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Name: {{ name }}</div>
        </div>
        <div class="bg-primary m-2 p-2 text-white">
            <div class="form-check" v-for="n in allNames" v-bind:key="n">
                <input type="radio" class="form-check-input" v-model="name" v-bind:value="n" />
                <label class="form-check-label">{{ n }}</label>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Name: {{ name }}</div>
        </div>
        <div class="bg-primary m-2 p-2 text-white">
            <div class="form-group">
                <label>Selected Names</label>
                <select class="form-control" v-model="name">
                    <option value="all">Everyone</option>
                    <option v-for="n in allNames" v-bind:key="n" v-bind:value="n">
                        Just {{n}}
                    </option>
                </select>
            </div>            
        </div>
    </div>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Amount: {{ amount }}, Amount + 10 = {{ amount + 10 }}</div>
        </div>
        <div class="form-group">
            <label>Amount</label>
            <input type="number" class="form-control" v-model.number="amount" />
            <!-- <input type="number" class="form-control" v-model.number.lazy="amount" /> -->
        </div>
    </div>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Name: **{{name}}** </div>
        </div>
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model.trim="name" />           
        </div>
    </div>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Selected Cities: {{ cities }}</div>
        </div>
        <div class="form-check m-2" v-for="city in cityNames" v-bind:key="city">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="cities" v-bind:value="city" />
                {{ city }}
            </label>                    
        </div>
        <div class="text-center">
            <button v-on:click="reset4" class="btn btn-info">
                Reset4
            </button>
        </div>
    </div>
    <div class="container-fluid">
        <div class="form-control">
            <label>City: {{cityLen}}</label>
            <select multiple class="form-control" v-model="cities">
                <option v-for="city in cityNames" v-bind:key="city">
                    {{city}}
                </option>
            </select>
        </div>        
    </div>
    <div v-for="city in cityNames" v-bind:key="city">
        <h3 class="p-1"></h3>        
    </div>
    <div class="container-fluid">
        <div class="m-2 p-2 text-white" v-bind:class="elemClass">
            <div>Value: {{ elemClass }}</div>
        </div>
        <div class="form-check m-2">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="dataValue4" />
                Dark Color
            </label>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelHandle',
  props: {
    msg: String
  },
  data() {
      return {
          dataValue1: false,
          dataValue2: false,
          dataValue3: false,
          otherValue1: "",
          otherValue2: "",
          name: "David",
          password: "123456",
          details: "Has admin access",
          hasAdminAccess: true,
          allNames: ["David", "Alice", "Joe"],
          amount: 100,
          cityNames: ["London", "New York", "Paris", "Berlin", "Seattle", "Washington", "Beijing", "Munich"],
          cities: [],
          dataValue4: false
      }
  },
  computed: {
      elemClass() {
          return this.dataValue4 ? "bg-primary" : "bg-info";
      },
      cityLen() {
          return this.cityNames.length;
      }
  },
  methods: {
      reset1() {
          this.dataValue1 = false;
      },
      handleChange1($event) {
          this.dataValue1 = $event.target.checked;
      },
      reset2() {
          this.dataValue2 = false;
          this.otherValue = "";
      },
      handleChange2($event) {
          if ($event.target.type == "checkbox") {
              this.dataValue2 = $event.target.checked;
          } else {
              this.otherValue = $event.target.value
          }          
      },
      reset3() {
          this.dataValue3 = false;
          this.otherValue2 = "";
      },
      reset4() {
          this.cities = [];
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
