<script setup>
//https://pokeapi.co/api/v2/pokemon
//import axios from 'axios';
import { ref } from 'vue';
import {RouterLink} from 'vue-router'
import {useGetData} from '@/composables/getData';

//const pokemons = ref([])
const { data, getData, loading, errorData} = useGetData(); /* usando composables */


/* sin composables */
/* const getData = async () => {
    try {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        pokemons.value = data.results
    } catch (error) {
        console.log(error);
    }
};
getData();
*/

/* usando composables */
getData("https://pokeapi.co/api/v2/pokemon");
</script>


<template>
  <div class="about">
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando informacion ...</p>
    <div class="alert alert-danger" role="alert" v-if="errorData">
      {{ errorData }}
    </div>
      <div v-if="data">
        <ul class="list-group mb-3">
            <!-- <li v-for="poke in pokemons"> -->
            <li class="list-group-item" v-for="poke in data.results"> <!-- usando composables -->
                <router-link :to="`/pokemons/${poke.name}`">{{ poke.name }}</router-link>
            </li>
        </ul>
        <button :disabled="!data.previous" class="btn btn-success me-2" type="button" @click="getData(data.previous)">Previous</button>
        <button :disabled="!data.next" class="btn btn-primary" type="button" @click="getData(data.next)">Next</button>
      </div>
  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
