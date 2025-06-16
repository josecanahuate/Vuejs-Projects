<template>
    <div class="mt-5">
        <h1>Ciclo de Vida - Uso de Hooks - Metodo Composition API</h1>
        <h3>Hola Mundo</h3>
    </div>
</template>

<script setup>
import { onMounted, onUpdated } from 'vue'

//cuando el elemento es montado
onMounted(() => {
    console.log("mounted")
})

//eventos del ciclo de vida
onUpdated(() => {
    console.log("updated")
})



</script>

<style scoped>

</style>