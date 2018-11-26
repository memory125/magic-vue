<template>
    <div class="mx-5 border border-dark p-2">
        <h3 class="bg-warning text-white text-center p-2">Display</h3>

        <div v-if="show" class="h4 bg-info text-center p-2">Hello, David</div>

        <div class="text-center">
            <button class="btn btn-primary" v-on:click="toggle">
                Toggle Visibility
            </button>
        </div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        },
        methods: {
            toggle() {
                this.show != this.show;
            }
        }
    }

</script>