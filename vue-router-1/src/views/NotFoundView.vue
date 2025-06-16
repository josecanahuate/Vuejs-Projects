<script setup>

import { useRouter } from 'vue-router' //useRoute es el unico que tiene acceso a parametros

const router = useRouter();

const back = () => {
    router.push('/')
}
</script>

<template>
    <h1>404 No encontrado</h1>
    <button @click="back">Atras</button>
</template>