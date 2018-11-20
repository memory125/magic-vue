import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {id: 1, name: "Apple", category: "Fruit", price: 34.88},
            {id: 2, name: "Peach", category: "Fruit", price: 36.88},
            {id: 3, name: "Banana", category: "Fruit", price: 37.88},
            {id: 4, name: "Grape", category: "Fruit", price: 38.88},
            {id: 5, name: "Kiwi", category: "Fruit", price: 39.88},
            {id: 6, name: "Melon", category: "Fruit", price: 32.88},
            {id: 7, name: "Orange", category: "Fruit", price: 33.88},
            {id: 8, name: "Pitaya", category: "Fruit", price: 39.88},
            {id: 9, name: "Durian", category: "Fruit", price: 40.88},
            {id: 10, name: "Litchi", category: "Fruit", price: 37.88},
            {id: 11, name: "Longan", category: "Fruit", price: 41.88},
            {id: 12, name: "Mango", category: "Fruit", price: 36.88}
        ]
    },
    mutations: {
        saveProduct(currentState, product) {
            let index = currentState.products.findIndex(p => p.id == product.id);
            if (index == -1) {
                currentState.products.push(product);
            } else {
                Vue.set(currentState.products, index, product);
            }
        },
        deleteProduct(currentState, product) {
            let index = currentState.products.findIndex(p => p.id == product.id);
            currentState.products.slice(index, 1);
        }
    },
    getters: {
        orderedProducts(state) {
            return state.products.concat().sort((p1, p2) => p2.price - p1.price);
        },
        filteredProducts(state, getters) {
            return (amount) => getters.orderedProducts.filter(p => p.price > amount);
        }
    }
})