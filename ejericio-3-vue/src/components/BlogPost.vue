<script setup>
//Props Objeto
defineProps({
    title: String,
    id: Number,
    body: {
        type: String,
        default: "Sin descripcion",
    }
});

// defineEmits: emitir/pasar un evento desde el componente secundario al principal
const emit = defineEmits(['cambiarFavoritoNombre']);
</script>

<template>
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">{{ id }} - {{ title }}</h5>
        <p>{{ body }}</p>
        <button
            @click="emit('cambiarFavoritoNombre', title)"
            class="btn btn-outline-primary">
            Favorito
        </button>
    </div>
    </div>
</template>

<style scoped>

</style>