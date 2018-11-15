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
    <div class="container-fluid">
        <div class="m-2 p-2 text-white" v-bind:class="dataValue5">
            <div>Value: {{ dataValue5 }}</div>
        </div>
         <div class="form-check m-2">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="dataValue5" true-value="bg-primary" false-value="bg-info" />
                Dark Color
            </label>
        </div>
    </div>
    <div class="container-fluid">
        <div class="m-2 p-2 text-white" v-bind:class="dataValue6">
            <div>Value: {{ dataValue6 }}</div>
        </div>
        <div class="form-check m-2">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="dataValue6" v-bind:true-value="darkColor" v-bind:false-value="lightColor" />
                Dark Color
            </label>
        </div>
        <div class="form-group m-2 p-2 bg-secondary">
            <label>Color</label>
            <select v-model="dataValue6" class="form-control">
                <option v-bind:value="darkColor">Dark Color</option>
                <option v-bind:value="lightColor">Light Color</option>
            </select>
        </div>
        <div class="form-check-inline m-2">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" v-model="dataValue6" v-bind:value="darkColor" />
                Dark Color
            </label>             
            <label class="form-check-label p-3">
                <input type="radio" class="form-check-input" v-model="dataValue6" v-bind:value="lightColor" />
                Light Color
            </label>        
        </div>
    </div>
    <h1>Store Sample Snippet</h1>
    <div class="container-fluid">
        <div class="bg-danger text-white my-2 p-2" v-if="errors">
            <h5>The following problems have been found:</h5>
            <ul>
                <template v-for="(errors) in validationErrors">
                    <li v-for="error in errors" v-bind:key="error">
                        {{ error }}
                    </li>
                </template>
            </ul>
        </div>
        <div class="btn-primary m-2 p-2 text-white" v-bind:class="dataValue5">
            Name: {{ pname }},
            Category: {{ pcategory }},
            Price: {{ pprice }}
        </div>

        <form v-on:submit.prevent="handleSubmit1">
            <div class="form-group">
                <label>Name</label>
                <input v-model="pname" class="form-control" />
            </div>
             <div class="form-group">
                <label>Category</label>
                <input v-model="pcategory" class="form-control" />
            </div>        
             <div class="form-group">
                <label>Price</label>
                <input type="number" v-model.number="pprice" class="form-control" />
            </div>
            <div class="text-center">
                <button class="btn btn-primary" type="submit">
                    Submit1
                </button>
            </div>
        </form>        
    </div>
    <div class="container-fluid">
        <div class="bg-danger text-white my-2 p-2" v-if="errors">
            <h5>The following problems have been found:</h5>
            <ul>
                <template v-for="(errors) in validationErrors">
                    <li v-for="error in errors" v-bind:key="error">
                        {{ error }}
                    </li>
                </template>
            </ul>
        </div>
        <div class="btn-primary m-2 p-2 text-white" v-bind:class="dataValue5">
            Name: {{ name2 }},
            Category: {{ category2 }},
            Price: {{ price2 }}
        </div>

        <form v-on:submit.prevent="handleSubmit2">
            <div class="form-group">
                <label>Name</label>
                <input v-model="name2" class="form-control" />
            </div>
             <div class="form-group">
                <label>Category</label>
                <input v-model="category2" class="form-control" />
            </div>        
             <div class="form-group">
                <label>Price</label>
                <input type="number" v-model.number="price2" class="form-control" />
            </div>
            <div class="text-center">
                <button class="btn btn-primary" type="submit">
                    Submit2
                </button>
            </div>
        </form>        
    </div>
  </div>
</template>

<script>

import validation from "../validationRules";
import Vue from "vue";

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
          dataValue4: false,
          dataValue5: "bg-info",
          darkColor: "bg-primary",
          lightColor: "bg-info",
          dataValue6: "bg-success",
          pname: "",
          pcategory: "",
          pprice: 0,
          validationErrors: {},
          hasSubmitted: false
      }
  },
  watch: {
      name2(value) {
          this.validataWatch("name", value)
      },
      category2(value) {
          this.validataWatch("category", value)
      },
      price2(value) {
           this.validataWatch("price", value)
      }
  },
  computed: {
      elemClass() {
          return this.dataValue4 ? "bg-primary" : "bg-info";
      },
      cityLen() {
          return this.cityNames.length;
      },
      errors() {
          return Object.values(this.validationErrors).length > 0;
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
      },
      handleSubmit1() {
          if (this.validateAll()) {
               //console.log("Form Submitted: " + this.pname + " - " + this.pcategory + " - " + this.pprice);
          }         
      },
      handleSubmit2() {
          this.handleSubmit2 = true;
          if (this.validateAll()) {
               //console.log("Form Submitted: " + this.pname + " - " + this.pcategory + " - " + this.pprice);
          }         
      },
      validate(propertyName, value) {
          let errors = [];
          Object(validation)[propertyName].forEach(v => {
              if (!v.validator(value)) {
                  errors.push(v.message);
              }
          });
          if (errors.length > 0) {
              Vue.set(this.validationErrors, propertyName, errors);
          } else {
              Vue.delete(this.validationErrors, propertyName);
          }
      },
      validateAll() {
          this.validate("name", this.pname);
          this.validate("category", this.pcategory);
          this.validate("price", this.pprice);
          return this.errors;
      },
      validataWatch(propertyName, value) {
          if (this.hasSubmitted) {
              this.validate(propertyName, value);
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
