<template>
    <div>
        <table class="table table-sm table-striped table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.category }}</td>
                    <td>{{ p.price | currency }}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">
                            Edit
                        </button>
                        <button class="btn btn-sm btn-danger" v-on:click="deleteProduct(p)">
                            Delete
                        </button>
                    </td>
                </tr>
                <tr v-if="products.length == 0">
                    <td colspan="5" class="text-center">
                         No Data
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
//import Axios from "axios";

//const baseUrl = "http://localhost:3500/products/";


export default {
    data() {
        return {
            products: []
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
            async deleteProduct(product) {
                await this.restDataSource.deleteProduct(product);
                let index = this.products.findIndex(p => p.id == product.id);
                this.products.splice(index, 1);
            },
            processProducts(newProducts) {
                this.products.splice(0);
                this.products.push(...newProducts);
            },
            async processComplete(product) {
                let index = this.products.findIndex(p => p.id == product.id);
                if (index == -1) {
                    await this.restDataSource.saveProduct(product);
                } else {
                    await this.restDataSource.updataProduct(product);
                    Vue.set(this.products, index, product);
                }
            }
    },           
    inject: ["eventBus", "restDataSource"],
    async created() {
        // Axios.get(baseUrl).then(resp => {
        //     this.processProducts(resp.data);
        //     console.log("HTTP Response: " + resp.status + " " + resp.statusText);
        //     console.log("Response Data: " + resp.data.length + " items");
        // });
        // let data = (await Axios.get(baseUrl)).data;
        // this.processProducts(data);
        this.processProducts(await this.restDataSource.getProducts());
        this.eventBus.$on("complete", this.processComplete);
   },
}
    
</script>

<style scoped>
    
</style>