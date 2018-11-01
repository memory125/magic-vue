import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// require("../node_modules/bootstrap/dist/css/bootstrap.min.css")

// let counter = 1;

// let container = document.createElement("div");
// container.classList.add("text-center", "p-3");

// let msg = document.createElement("h1");
// msg.classList.add("bg-primary", "text-white", "p-3");
// msg.textContent = "Button Not Pressed";

// let btnPress = document.createElement("button");
// btnPress.textContent = "Press Me";
// btnPress.classList.add("btn", "btn-secondary");
// btnPress.onclick = () => msg.textContent = "Button Presses: " + counter++;

// let txtInput = document.createElement("input");
// txtInput.classList.add("bg-secondary", "text-bold", "p-2");
// txtInput.textContent = msg.textContent;
// txtInput.onchange = () => txtInput.textContent ="Button Presses: " + counter++;
// txtInput.classList.add("", "btn-secondary");

// container.appendChild(msg);
// container.appendChild(btnPress);
// container.appendChild(txtInput);

// let app = document.getElementById("app");
// app.parentElement.replaceChild(container, app);