import Vue from "vue";
import VueRouter from "vue-router";

import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: "/", component: ProductDisplay},
        {path: "/edit", component: ProductEditor},
    ]
})