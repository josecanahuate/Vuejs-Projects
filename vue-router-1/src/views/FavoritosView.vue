<script setup>
import { useFavoritosStore } from '@/store/favoritos.js';
import {storeToRefs} from 'pinia';
import {RouterLink} from 'vue-router';

const useFavoritos = useFavoritosStore();
const {favoritos} = storeToRefs(useFavoritos);
const {remove} = useFavoritos;
</script>

<template>
    <div>
        <h1>Pokemones Favoritos</h1>
        <p v-if="favoritos.length === 0">Sin Favoritos</p>
        <ul class="list-group" v-else>
            <li class="list-group-item text-dark" v-for="poke in favoritos" :key="poke.id">
                <div>
                    {{ poke.name }}
                </div>

                <div>
                     <router-link :to="`/pokemons/${poke.name}`" class="btn btn-sm btn-primary">Mas Informacion</router-link>
                </div>

                <div>
                    <button class="btn btn-sm btn-danger" @click="remove(poke.id)">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>