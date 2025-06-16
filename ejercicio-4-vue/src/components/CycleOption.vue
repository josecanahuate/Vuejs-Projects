<template>
    <div>
        <h1>Ciclo de Vida - Metodo Option API</h1>
        <h3>Hola Mundo</h3>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "CycleOption",

    created() {
        console.log("created");
    },

    mounted() {
        console.log("mounted");
    },

    updated() {
        console.log("updated");
    },
    
    unmounted() {
        console.log("unmounted");
    }


})
</script>

<style scoped>

</style>