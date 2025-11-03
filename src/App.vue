<script setup>
 import {RouterView} from 'vue-router'

</script>

<template>
  <router-view/>
</template>

<style>
/* Estilos generales */
body {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
}

h1, h2 {
    text-align: center;
    color: #333;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>
