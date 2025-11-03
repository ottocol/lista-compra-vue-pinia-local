<script setup>
    import {ref} from 'vue'

    defineEmits(["add_item"])
    let nuevo = ref("")
</script>

<template>
    <input type="text" v-model="nuevo"> 
    <button @click="$emit('add_item', nuevo)">Añadir</button>
</template>


<style scoped>
input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
}
</style>