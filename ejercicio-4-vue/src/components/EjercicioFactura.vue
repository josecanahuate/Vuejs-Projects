<template>
    <div>
        <h1>Factura - computed</h1>
        <label for="">Subtotal</label>
        <input type="number" v-model="subtotal">
        <h3>{{ total }} - {{ iva }}%</h3>
    </div>
</template>

<script setup>
import {ref, computed } from 'vue'

const iva = ref(21) // iva en porcentaje
const subtotal = ref(0)
const total = computed(() => (iva.value * subtotal.value) /  100)

</script>

<style scoped>

</style>