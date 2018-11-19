<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <input v-model.number="value" class="form-control"
                v-bind:class="[colors.bg, colors.text]"/>
    </div>
</template>

<script>
export default {
    props: ["label"],
    data() {
        return {
            value: ""
        }
    },
    inject: ["colors"]
}    
</script>

<style scoped>
    
</style>