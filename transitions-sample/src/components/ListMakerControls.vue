<template>
    <tfroot>
        <tr v-if="showAdd">
            <td></td>
            <td>
                <input class="form-control" v-model="currentItem" />
            </td>
            <td>
                <button id="add" class="btn btn-sm btn-info" v-on:click="handleAdd">
                    Add
                </button>
                <button id="cancel" class="btn btn-sm btn-secondary" v-on:click="showAdd = false">
                    Cancel
                </button>
            </td>
        </tr>
        <tr v-else>
            <td colspan="4" class="text-center p-2">
                <button class="btn btn-info" v-on:click="showAdd = true">
                    Show Add
                </button>
            </td>
        </tr>
    </tfroot>
</template>

<script>
    export default {
        data() {
            return {
                showAdd: false,
                currentItem: ""
            }
        },
        methods: {
            handleAdd() {
                this.$emit("add", this.currentItem);
                this.showAdd = false;
            }
        }
    }
</script>