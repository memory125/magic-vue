<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <input v-model.number="value" class="form-control" />
    </div>
</template>

<script>
export default {
    props: ["label"],
    data() {
        return {
            value: ""
        }
    }
}    
</script>

<style scoped>
    
</style>