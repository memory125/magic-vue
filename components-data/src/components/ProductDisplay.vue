<template>
    <ul>
        <li v-for="prop in Object.keys(product)" v-bind:key="prop">
            <slot v-bind:propname="prop" v-bind:propvalue="product[prop]">
                {{ prop }}: {{ product[prop] }}
            </slot>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'ProductDisplay',
  props: ["product"],
  methods: {    
  }
}
</script>

<style scoped>
    
</style>