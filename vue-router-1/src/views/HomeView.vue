<script setup>
import { useCounterStore } from '@/store/counter.js'
import {storeToRefs} from 'pinia';

const useCounter = useCounterStore();
const { increment } = useCounter;
const { count, double } = storeToRefs(useCounter);
//para destructurar procesos computados se debe hacer con StoretoRefs
</script>

<template>
  <main>
    <h1>Home</h1>

    <!-- <h1>Home Counter: {{ useCounter.count }}</h1> -->
    <!-- <h2>Double: {{ useCounter.double }}</h2> -->
    <h1>Home Counter: {{ count }}</h1> <!-- StoretoRefs -->
    <h2>Double: {{ double }}</h2> <!-- StoretoRefs -->
    <button @click="useCounter.increment">Increment</button>
    <!-- <button @click="increment">Increment</button> -->
  </main>
</template>


<!-- Detalles -->
<!--
1 - se esta usando pinia.

2 - para incrementar se estan usando las opciones no destructuradas : const useCounter = useCounterStore();.
y destructuradas:
const { increment } = useCounter;

3 - para destructurar un computed se debe obligatoriamente usar storeToRefs.
const { count, double } = storeToRefs(useCounter);

-->