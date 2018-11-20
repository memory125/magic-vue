<template>
<div>
    <div class="form-group">
        <label>ID</label>
        <input class="form-control" v-model="product.id" />
    </div>
    <div class="form-group">
        <label>Name</label>
        <input class="form-control" v-model="product.name" />
    </div>
    <div class="form-group">
        <label>Category</label>
        <input class="form-control" v-model="product.category" />
    </div>
    <div class="form-group">
        <label>Price</label>
        <input class="form-control" v-model.number="product.price" />
    </div>
    <div class="text-center">
        <button class="btn btn-primary" v-on:click="save">
            {{editing ? "Save" : "Create"}}
        </button>
    </div>
</div>
</template>

<script>

    export default {
        data: function () {
            return {
                editing: false,
                product: {}               
            }
        },       
        methods: {       
            save() {     
                this.$store.commit("saveProduct", this.product);
                this.product = {};           
            },
            cancel() {               
            }
        }
    }
</script>

<style scoped>

</style>
