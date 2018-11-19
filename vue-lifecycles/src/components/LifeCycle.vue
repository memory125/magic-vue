<template>
  <div id="lifcycle">
    <div class="bg-danger text-white text-center h3 p-2" v-if="errorInfo.occurred">
            An Error Has occurred
            <h4>
                Error : "{{errorInfo.error}}" ({{errorInfo.source}})
            </h4>
      </div>
      <div class="bg-primary text-white text-center m-2 p-2">
        <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="checked" />
            <label>Checkbox</label>
        </div>
        Checked Value: {{ checked }}
        <div class="bg-info p-2">
            Names:
            <ul>
                <li v-for="name in names" v-bind:key="name">
                    {{ name }}
                </li>
            </ul>
        </div>
        <div class="text-white center my-2">
            <button class="btn btn-light" v-on:click="doChange">
                Change
            </button>
        </div>
        <div class="bg-info p-2" v-if="checked">
            <message-display></message-display>
        </div>  
      </div>    
    </div>  
</template>

<script>
import Vue from "vue";
import MessageDisplay from './MessageDisplay.vue'

export default {
  name: 'LifeCycle',
  props: {
    msg: String
  },
  components: {
    MessageDisplay
  },
  data() {
      return {
          checked: true,
          names: ["David", "Alice", "Peter", "Dora"],
          errorInfo: {
              occurred: false,
              error: "",
              source: ""
          }
      }
  },
  beforeCreate() {
      console.log("beforeCreate method called " + this.checked);
  },
  created() {
       console.log("created method called " + this.checked);
  },
  mounted() {
    //   (this.$el.dataset.names || "").split(",")
    //   .forEach(name => this.names.push(name));
      console.log("mounted method called " + this.checked);
  },
  beforeUpdate() {
      console.log("beforeUpdate method called " + this.checked + " Name: " + 
      this.names[0] + " List Elements: " + this.$el.getElementsByTagName("li").length);
  },
  updated() {
      console.log("updated method called " + this.checked + " Name: " + 
      this.names[0] + " List Elements: " + this.$el.getElementsByTagName("li").length);
  },
  errorCaptured(error, component, source) {
      this.errorInfo.occurred = true;
      this.errorInfo.error = error;
      this.errorInfo.source = source;
      return false;
  },
  methods: {
      doChange() {
          this.checked = !this.checked;
          this.names.reverse();
          Vue.nextTick(() => console.log("Callback Invoked."));
      }
  },
  watch: {
      checked(newValue, oldValue) {
          console.log("Checked Watch, Old: " + oldValue + ", New: " + newValue);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
