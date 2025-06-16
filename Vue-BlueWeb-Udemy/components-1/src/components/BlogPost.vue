<script setup>
    import { defineProps } from 'vue'; // Importa defineProps desde Vue 3
    const props = defineProps(["title", "id", "body", "colorText", "colorBackground"]); // Define las propiedades
</script>

<template>
    <div class="card mb-4">
        <div class="card-body" :class="`bg-${colorBackground}`">
            <h5 class="card-title" :class="`text-${colorText}`" >{{ props.id }} - {{ props.title }}</h5>
            <p>{{ props.content }}</p>
        </div>
    </div>
</template>


<style scoped>

</style>