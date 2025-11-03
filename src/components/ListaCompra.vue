<script setup>
    import Item from './Item.vue';
    import AddItemForm from './AddItemForm.vue';
    import { useListaStore } from '@/stores/lista';

    const lista = useListaStore()


    async function doAddItem(nuevoNombre) {
        await lista.addItem(nuevoNombre)
    }
       
    async function doToggleItem(id) {
        let item = lista.items.find((item) => item.id == id)
        if (item) {
            await lista.updateComprado(id, !item.comprado)
        } 
    }

    async function doDeleteItem(id) {
        await lista.deleteItem(id)
    }
    
</script>

<template>
    <h2>Lista de la compra</h2>
    <add-item-form @add_item="doAddItem"/>
    <ul>
       <item v-for="i in lista.items" :="i"
        @toggle_item="doToggleItem"
        @delete_item="doDeleteItem" />
    </ul>
    <p>Te queda(n) {{ lista.pendientes.length }} cosa(s) por comprar</p>
</template>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    border: 2px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
}
</style>