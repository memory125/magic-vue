<template>
    <div>
        <table class="table table-sm table-striped table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.price | currency }}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">
                            Edit
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <button class="btn btn-primary" v-on:click="createNew">
                Create New
            </button>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    data() {
        return {
            products: [
                {id: 1, name: "Apple", price: 34.88},
                {id: 2, name: "Peach", price: 36.88},
                {id: 3, name: "Banana", price: 37.88},
                {id: 4, name: "Grape", price: 38.88},
                {id: 5, name: "Kiwi", price: 39.88}
            ]
        }
    },
    filters: {
        currency(value) {
            return value.toFixed(2);
        }
    },
    methods: {
            createNew() {
                this.eventBus.$emit("create");
            },
            editProduct(product) {
                this.eventBus.$emit("edit", product);
            },
            processComplete(product) {
                let index = this.products.findIndex(p => p.id == product.id);
                if (index == -1) {
                    this.products.push(product);
                } else {
                    Vue.set(this.products, index, product);
                }
            }
        },
        inject: ["eventBus"],
        created() {
            this.eventBus.$on("complete", this.processComplete);
        }
}
    
</script>

<style scoped>
    
</style>