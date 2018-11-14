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
          otherValue2: ""
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
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
