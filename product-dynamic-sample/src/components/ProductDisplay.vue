<template>
    <div>
        <!-- <table class="table table-sm table-striped table-bordered" v-bind:class="tableClass"> -->
        <table class="table table-sm table-striped table-bordered" 
            v-bind:class="'table-striped' == useStripedTable">
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
                        <button class="btn btn-sm" v-bind:class="editClass" v-on:click="editProduct(p)">
                            Edit
                        </button>
                        <button class="btn btn-sm" v-bind:class="deleteClass" v-on:click="deleteProduct(p)">
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
            <button class="btn btn-primary" v-on:click="createNew()">
                Create New
            </button>
        </div>
    </div>
</template>

<script>

import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

export default {
    // data() {
    //     return {
    //         products: []
    //     }
    // },
    computed: {
        // products() {
        //    // return this.$store.getters.filteredProducts(33);
        //    return this.$store.state.products;
        // },
        ...mapState(["products"]),
        ...mapState({
            useStripedTable: state => state.prefs.stripedTable
        }),
        //...mapGetters(["tableClass", "editClass", "deleteClass"]),
        ...mapGetters({
            tableClass: "prefs/tableClass", 
            editClass: "prefs/editClass", 
            deleteClass: "prefs/deleteClass"
            })
    },
    filters: {
        currency(value) {
            return value.toFixed(2);
        }
    },
    methods: {
            ...mapMutations({
                editProduct: "selectProduct",
                createNew: "selectProduct",
                setEditButtonColor: "prefs/setEditButtonColor",
                setDeleteButtonColor: "prefs/setDeleteButtonColor"
            }),
           // ...mapMutations("setEditButtonColor", "setDeleteButtonColor"),
            ...mapActions({
               // getProducts: "getProductsAction",
                deleteProduct: "deleteProductAction"
            }),
            createNew() {
                this.$store.commit("selectProduct");
            },
            editProduct(product) {
                 this.$store.commit("selectProduct", product);
            },
            deleteProduct(product) {
                this.$store.commit("deleteProductAction", product);
            },
            processProducts(newProducts) {
                this.products.splice(0);
                this.products.push(...newProducts);
            }
    },
    created() {
        //this.$store.dispatch("getProductsAction");
        //this.getProducts();
        this.setEditButtonColor(false);
        this.setsetDeleteButtonColor(false);
    },    
}
    
</script>

<style scoped>
    
</style>