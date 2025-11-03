<script setup>
    defineProps(['id', 'nombre', 'comprado'])
    defineEmits(["toggle_item", "delete_item"])
</script>


<template>
    <li > 
        <div :class="{tachado:comprado}" @click="$emit('toggle_item', id)">
            {{ nombre }}
        </div>
        <button @click="$emit('delete_item', id)" class="delete-btn">
            Eliminar
        </button>
    </li>
</template>

<style scoped>
 li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: white;
    border-bottom: 1px solid #ddd;
    font-size: 20px;
}

li:last-child {
    border-bottom: none;
}

.tachado {
 text-decoration: line-through;
 color: lightgrey;
}

.delete-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

.delete-btn:hover {
    background-color: #d32f2f;
}


</style>