<script setup>
//import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router' //useRoute es el unico que tiene acceso a parametros
import {useGetData} from '@/composables/getData';

const route = useRoute();
const router = useRouter();

const { data, getData, loading, errorData} = useGetData(); /* usando composables */

const poke = ref([])

const back = () => {
    router.push('/pokemons')
}

/* sin composables */
/* const getData = async () => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        poke.value = data;
    } catch (error) {
        console.log(error);
        poke.value = null;
    }
};
getData(); */

/* usando composables */
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>


<template>
    <!-- <div v-if="poke"> -->
        <p v-if="loading">Cargando informacion ...</p>
           <div class="alert alert-danger" role="alert" v-if="errorData">
                No existe el Pokemon
            </div>

            <div v-if="data" class="card mt-5" style="width:50%">
                <!-- <img :src="poke.sprites?.front_default" alt=""/> -->
              <img :src="data.sprites?.front_default" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                <h5 class="card-title text-dark">Pokemon Name</h5>
                <h6 class="card-subtitle mb-2 text-muted ">{{ $route.params.name }}</h6>                 <!-- agregando ? : la info se mostrara si esta disponible sino no -->
            </div>
           </div>
        <button @click="back" class="btn btn-primary mt-2">Atras</button>
</template>

