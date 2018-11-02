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
      <div class="bg-group p-3">
        <h2>----Text颜色----</h2>
        <p class="text-muted">我是muted</p>
        <p class="text-primary">我是primary</p>
        <p class="text-secondary">我是secondary</p>
        <p class="text-success">我是success</p>
        <p class="text-info">我是info</p>
        <p class="text-warning">我是warning</p>
        <p class="text-danger">我是danger</p>
        <p class="text-dark">我是dark</p>
        <p class="bg-secondary text-light">我是light</p>
        <h2>----背景颜色-----</h2>
        <p class="bg-primary text-white">重要的背景颜色。</p>
        <p class="bg-success text-white">执行成功背景颜色。</p>
        <p class="bg-info text-white">信息提示背景颜色。</p>
        <p class="bg-warning text-white">警告背景颜色</p>
        <p class="bg-danger text-white">危险背景颜色。</p>
        <p class="bg-secondary text-white">副标题背景颜色。</p>
        <p class="bg-dark text-white">深灰背景颜色。</p>
        <p class="bg-light text-dark">浅灰背景颜色。</p>
      </div>
      <div class="badge-group p -3">
        <h2>------Badge Samples----</h2>
        <span class="badge badge-default">Default</span>
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-secondary">Secondary</span>
        <span class="badge badge-success">Success</span>
        <span class="badge badge-danger">Danger</span>
        <span class="badge badge-warning">Warning</span>
        <span class="badge badge-info">Info</span>
        <span class="badge badge-light">Light</span>
        <span class="badge badge-dark">Dark</span>
        <h2>------Badge Pill Samples----</h2>
        <span class="badge badge-pill badge-default">Default</span>
        <span class="badge badge-pill badge-primary">Primary</span>
        <span class="badge badge-pill badge-secondary">Secondary</span>
        <span class="badge badge-pill badge-success">Success</span>
        <span class="badge badge-pill badge-info">Info</span>
        <span class="badge badge-pill badge-warning">Warning</span>
        <span class="badge badge-pill badge-danger">Danger</span>
        <span class="badge badge-pill badge-light">Light</span>
        <span class="badge badge-pill badge-dark">Dart</span>
      </div>
      <div class="breadcrumb-group p-3">
        <h2>------Breadcrumb Samples----</h2>
        <ol class="breadcrumb">
          <li class="breadcrumb-item active">Home</li>
        </ol>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active">Library</li>
        </ol>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active">Data</li>
        </ol>
        <nav class="breadcrumb">
          <a class="breadcrumb-item" href="#">Home</a>
          <a class="breadcrumb-item" href="#">Library</a>
          <a class="breadcrumb-item" href="#">Data</a>
          <span class="breadcrumb-item active">Bootstrap</span>        
        </nav>
      </div>

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
