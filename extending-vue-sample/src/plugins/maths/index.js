import filters from "./filters";
import directives from "./directives";
import globals from "./globals";
import componentFeatures from "./componentFeatures";
import Operation from "./Operation";


export default {
    install(Vue) {
        Vue.filter("currencyUSD", filters.currencyUSD);
        Vue.filter("currencyCNY", filters.currencyCNY);
        Vue.filter("noDecimal", filters.noDecimal);

        Vue.directive("borderize", directives.borderize);
        Vue.component("maths", Operation);

        Vue.sumValues = globals.sumValues;
        Vue.getSymbol = globals.getSymbol;

        Vue.prototype.$calc = componentFeatures.$calc;
    }
}