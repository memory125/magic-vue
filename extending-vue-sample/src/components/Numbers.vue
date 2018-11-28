<template>
    <div class="mx-5 border border-dark p-2">
        <h3 class="bg-success text-white text-center p-2">Numbers</h3>

        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <input v-colorize:bg-info.bg="first > 45" class="form-control" v-model.number="first" />
                </div>   
                <div class="col-1 h3">+</div>  
                <div class="col">
                    <input  v-colorize:bg-info="second > 30" class="form-control" v-model.number="second" />
                </div>           
                <div v-colorize.bg.text="total > 50" class="col h3">= {{ total | currencyUSD }}</div>                  
            </div> 
        </div>
    </div>
</template>

<script>
    
    import mixin from "../mixins/numbersMixin";
    import Vue from "vue";

    export default {      
        computed: {
            // total() {
            //    return this.first + this.second;
            // },
            total() {
               return Vue.sumValues(this.first, this.second);
            }
        },
       mixins: [mixin]
    }

</script>