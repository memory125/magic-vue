<template>
    <div class="bg-dark text-white text-center m-2 p-2">
        <div>
            Counter Value: {{ counter }}
        </div>
        <button class="btn btn-secondary" v-on:click="handleClick">
            Increment
        </button>
    </div>
</template>

<script>
export default {
    name: "MessageDisplay",
    props: {
        msg: String
     },
     data() {
         return {
             counter: 0
         }
     },
     created() {
         console.log("MessageDisplay: created");
     },
     beforeDestroy() {
         console.log("MessageDisplay: beforeDestroy");
     },
     destroyed() {
         console.log("MessageDisplay: destroyed");
     },
     methods: {
         handleClick() {
             this.counter++;
         }
     }
    }
</script>

<style scoped>
    
</style>