import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";
import SideBySide from "../components/SideBySide";

export default {
    path: "/named", component: SideBySide,
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
            },
            beforeEnter: (to, from, next) => {
                next("/products/list");
            }
        }
    ],
    beforeEnter: (to, from, next) => {
        if (to.path == "/named/tableleft") {
            next("/preferences");
        } else {
            next();
        }
    }
}