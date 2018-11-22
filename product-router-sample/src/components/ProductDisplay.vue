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
                <th></th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.category }}</td>
                    <td>{{ p.price | currency }}</td>
                    <td> 
                        <!-- <router-link v-bind:to="'/edit/' + p.id" class="btn btn-sm m-1" v-bind:class="editClass"> -->
                        <router-link v-bind:to="{name: 'editor', params: {op: 'edit', id: p.id}}" class="btn btn-sm m-1" v-bind:class="editClass">
                            Edit
                        </router-link>
                        <button class="btn btn-sm m-1" v-bind:class="deleteClass" v-on:click="deleteProduct(p)">
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
            <!-- <router-link to="/create" class="btn btn-primary"> -->
            <router-link v-bind:to="{name: 'editor', params: {op: 'create'}}" class="btn btn-primary"> 
                Create New
            </router-link>
        </div>
    </div>
</template>

<script>

import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

export default {
    computed: {
        ...mapState(["products"]),
        ...mapState({
            useStripedTable: state => state.prefs.stripedTable
        }),
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
                selectProduct: "selectProduct",
                //selectComponent: "nav/selectComponent",
                setEditButtonColor: "prefs/setEditButtonColor",
                setDeleteButtonColor: "prefs/setDeleteButtonColor"              
            }),
            ...mapActions({
                deleteProduct: "deleteProductAction"
            }),
            createNew() {
                this.selectProduct();
                this.$router.push("/edit");
            },
            editProduct(product) {
                console.log("ProductDisplay" + product);
                this.selectProduct(this.$route);
                this.$router.push("/edit");
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
        this.setEditButtonColor(false);
        this.setDeleteButtonColor(false);
    },    
}
    
</script>

<style scoped>
    
</style>