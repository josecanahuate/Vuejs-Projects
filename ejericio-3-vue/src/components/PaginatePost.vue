<script setup>
    const emit = defineEmits(['previous', 'next']);

    defineProps(['inicio', 'fin', 'maxLenght']);
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button @click="emit('previous')" type="button" class="btn btn-outline-primary" :disabled="inicio <= 0">Previous</button>
    <button @click="emit('next')" type="button" class="btn btn-outline-primary" :disabled="fin >= maxLenght">Next</button>
</div>
</template>