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

    <!-- <div class="container">
        <editor-field label="ID" editorFor="id" />
        <editor-field label="Name" editorFor="name" />
        <editor-field label="Price" editorFor="price" />
    </div>
    <div class="text-center">
        <button class="btn btn-primary" v-on:click="save">
            {{editing ? "Save" : "Create"}}
        </button>
        <button class="btn btn-secondary" v-on:click="cancel">
            Cancel
        </button>
    </div> -->
</div>
</template>

<script>
    //import EditorField from "./EditorField";
    import Vue from "vue";

    export default {
        data: function () {
            return {
                editing: false,
                product: {}               
            }
        },
        // components: { EditorField },
        methods: {
            startEdit(product) {
                this.editing = true;
                this.product = {
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    price: product.price
                }
            },
            startCreate() {
                this.editing = false;
                this.product = {};
            },
            save() {
                this.eventBus.$emit("complete", this.product);
                this.startCreate();
                console.log(`Edit Complete: ${JSON.stringify(this.product)}`);
            },
            cancel() {
                this.product = {};
                this.editing = false;
            }
        },
        inject: ["eventBus"],
        created() {
            this.eventBus.$on("create", this.startCreate);
            this.eventBus.$on("edit", this.startEdit);            
        }
    }
</script>

<style scoped>

</style>
