<template>
<div>
    <div class="container">
        <editor-field label="ID" />
        <editor-field label="Name" />
        <editor-field label="Price" />
    </div>
    <div class="text-center">
        <button class="btn btn-primary" v-on:click="save">
            {{editing ? "Save" : "Create"}}
        </button>
        <button class="btn btn-secondary" v-on:click="cancel">
            Cancel
        </button>
    </div>
</div>
</template>

<script>
import EditorField from "./EditorField.vue";

export default {
    data() {
        return {
            editing: false,
            product: {
                id: 0,
                name: "",
                price: 0
            }
        }
    },
    components: {
        EditorField
    },
    methods: {
        startEdit(product) {
            this.editing = true;
            this.product = {
                id: product.id,
                name: product.name,
                price: product.price
            }
        },
        startCreate() {
            this.editing = false;
            this.product = {
                id: 0,
                name: "",
                price: 0
            };
        },
        save() {
            console.log("Edit Complete: " + JSON.stringify(this.product));
            this.startCreate();
        },
        camcel() {
            this.product = {};
            this.editing = false;
        }
    },
    provide() {
        return {
            colors: {
                bg: "bg-light",
                text: "text-danger"
            }
        }
    }
}
</script>

<style scoped>

</style>
