export default {    
    currencyUSD(value) {
        return new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(value);
    },
    currencyCNY(value) {
        return new Intl.NumberFormat("zh-CN", {style: "currency", currency: "CNY"}).format(value);
    },
    noDecimal(value) {
        return Number(value).toFixed(0);
    }
}