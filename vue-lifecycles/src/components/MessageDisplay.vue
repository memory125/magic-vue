<template>
    <div class="bg-dark text-white text-center m-2 p-2">
        <div>
            Counter Value: {{ counter }}
        </div>
        <button class="btn btn-secondary" v-on:click="handleClick">
            Increment
        </button>
        <button class="btn btn-secondary" v-on:click="generateError">
            Generate Error
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
             counter_base: 0,
             generate_error: false
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
             this.counter_base++;
         },
         generateError() {
             this.generate_error = true;
         }
     },
    computed: {
        counter() {
            if (this.generate_error) {
                throw "My Component Error";
            } else {
                return this.counter_base;
            }
        }   
    }
}
</script>

<style scoped>
    
</style>