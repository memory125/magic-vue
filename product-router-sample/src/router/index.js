import Vue from "vue";
import VueRouter from "vue-router";

import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";
import Preferences from "../components/Preferences";
import Products from "../components/Products";
import SideBySide from "../components/SideBySide";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        //{path: "/", component: ProductDisplay},
        //{path: "/", component: ProductDisplay, alias: "/list"},
        //{path: "/edit/:id", component: ProductEditor},
        //{path: "/create", component: ProductEditor},
        //{path: "/:op(create|edit)/:id(\\d+)?", component: ProductEditor},
        //{name: "table", path: "/", component: ProductDisplay},
        //{path: "/", component: ProductDisplay, alias: "/list"},
        //{path: "/edit/:id", component: ProductEditor},
        //{path: "/create", component: ProductEditor},
        //{name: "editor", path: "/:op(create|edit)/:id(\\d+)?", component: ProductEditor},
        //{path: "*", redirect: "/"},
        {path: "/preferences", component: Preferences},
        {path: "/products", component: Products, 
            children:[
                {name: "table", path: "list", component: ProductDisplay},
                {name: "editor", path: "/:op(create|edit)/:id(\\d+)?", component: ProductEditor},
                {path: "", redirect: "list"}
        ]},
        {path: "/edit/:id", redirect: to => "products/edit/" + to.params.id},
        {path: "/named",  component: SideBySide,
            children: [
                {
                    path: "tableLeft", 
                    components: {
                        left: ProductDisplay,
                        right: ProductEditor
                    }
                },
                {
                    path: "tableRight", 
                    components: {
                        left: ProductEditor,
                        right: ProductDisplay
                    }
                }
            ]
        },
        {path: "*", redirect: "/products/list"}
    ]
})