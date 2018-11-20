<template>
    <div>
        <table class="table table-sm table-striped table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
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
            }
    },           
    inject: ["eventBus"]  
}
    
</script>

<style scoped>
    
</style>