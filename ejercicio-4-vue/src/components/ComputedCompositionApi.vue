<template>
    <div>
        <h1>Datos Computados - computed</h1>
        <input type="text" v-model="message" name="" id="">
        <h3>{{ message }}</h3>
        <h3>{{ reverse }}</h3>
    </div>
</template>

<script setup>
import {ref, computed } from 'vue'
    let message = ref('')
    const reverse = computed(() => message.value.split('').reverse().join(''))
</script>

<style scoped>

</style>