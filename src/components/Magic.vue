<template>
  <div class="text-center p-3">
    <div class="button-group">
       <h1 class="bg-primary text-white p-3">
         {{ message }}
        </h1>
        <button class="btn btn-secondary text-info p-3" v-on:click="handleClick">
          Press Me
        </button>  
        <p></p>      
    </div>
     <h1 class="bg-secondary text-white p-3">
        Input Samples
        </h1>
    <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Button</span>
          <input type="button" class="form-control">
     </div>
    <br>
    <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Text</span>
          <input type="text" class="form-control" placeholder="twitterhandle">
     </div>
     <br>
     <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Password</span>
          <input type="password" class="form-control" placeholder="**">
      </div>
      <br>
      <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">File</span>
          <input type="file" class="form-control" placeholder="twitterhandle">
     </div>
     <br>
      <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Checkox</span>
          <input type="checkbox" class="form-control">
      </div>
      <br>
      <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Color</span>
          <input type="color" class="form-control">
      </div>
      <br>
       <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Date</span>
          <input type="date" class="form-control">
      </div>
      <br>  
      <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Datetime</span>
          <input type="datatime" class="form-control">
      </div>
      <br>
        <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Email</span>
          <input type="email" class="form-control">
      </div>
      <br>
        <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Radio</span>
          <input type="radio" class="form-control">
      </div>
      <br>
         <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Range</span>
          <input type="range" class="form-control">
      </div>
      <br>
      <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Submit</span>
          <input type="submit" class="form-control">
      </div>
      <br>
          <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Url</span>
          <input type="url" class="form-control">
      </div>
      <br>
          <div class="bg-secondary text-muted p-3">
          <span class="input-group-addon text-info p-3">Month</span>
          <input type="month" class="form-control">
      </div>
      <br>
  </div>
</template>

<script>
export default {
  data:function() {
    return {
      counter: 0
    }
  },
  methods: {
    handleClick() {
      this.counter++;
    }
  },
  props: {
    msg: String
  },
  computed: {
    message() {
      return this.counter == 0 ? "Button Not Pressed" : "Button Presses: " + this.counter;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
