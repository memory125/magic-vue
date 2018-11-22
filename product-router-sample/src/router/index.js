import Vue from "vue";
import VueRouter from "vue-router";

import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        //{path: "/", component: ProductDisplay},
        //{path: "/", component: ProductDisplay, alias: "/list"},
        //{path: "/edit/:id", component: ProductEditor},
        //{path: "/create", component: ProductEditor},
        //{path: "/:op(create|edit)/:id(\\d+)?", component: ProductEditor},
        {name: "table", path: "/", component: ProductDisplay},
        //{path: "/", component: ProductDisplay, alias: "/list"},
        //{path: "/edit/:id", component: ProductEditor},
        //{path: "/create", component: ProductEditor},
        {name: "editor", path: "/:op(create|edit)/:id(\\d+)?", component: ProductEditor},
        {path: "*", redirect: "/"},
    ]
})