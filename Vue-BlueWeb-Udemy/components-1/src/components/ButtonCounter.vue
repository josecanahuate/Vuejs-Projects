<template>
    <div>
        <button class="btn btn-primary" @click="increment">Counter {{ counter }}</button>
    </div>
</template>

<script setup>
import  { ref } from 'vue';
const counter = ref(0);
const increment = () => counter.value++;
</script>

<style scoped>

</style>