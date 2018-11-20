<template>
    <div v-if="error" class="bg-danger text-white text-center h3 p-3" >
        An Error Has Occurred
        <h6>{{message}}</h6>
        <a href="/" class="btn btn-secondary">OK</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: false,
            message: ""
        }
    },
    methods: {
        handleError(err) {
            this.error = true;
            this.message = err;
        }
    },
    inject: ["eventBus"],
    created() {
        this.eventBus.$on("httpError", this.handleError);
    },
}

</script>

<style scoped>

</style>
