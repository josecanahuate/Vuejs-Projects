<script setup>
import { ref, computed, onMounted } from 'vue';

import BlogPost from "./components/BlogPost.vue";
import PaginatePost from "./components/PaginatePost.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const posts = ref([]);

/* PAGINACION */
const postsXpage = 10;
const inicio = ref(0);
const fin = ref(postsXpage);
const loading = ref(true);

const next = () => {
  inicio.value = inicio.value + postsXpage;
  fin.value = fin.value + postsXpage;
};

const previous = () => {
  inicio.value = inicio.value - postsXpage;
  fin.value = fin.value - postsXpage;
};

/* TAMAÑO DEL ARRAY DE LOS POSTS */
const maxLenght = computed(() => posts.value.length)
/* END PAGINACION */


/* FAVORITOS */
const favorito = ref('');
const cambiarFavorito = (title) => {
  favorito.value = title
};


/* API POST CON ASYNC & ON MOUNTED */
// onMounted espera que se termine de cargar todo y luego lo muestra
onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts.value = await res.json();
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }

});

/* API POST CON FETCH */
/* fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => {
    posts.value = data
  })
  .finally(() => loading.value = false); */
</script>

<template>
  <LoadingSpinner v-if="loading"/>

  <div class="container" v-else>
     <h1>App</h1>
     <h2>Mi Post Favorito:  {{ favorito }}</h2>

     <PaginatePost
      @next="next"
      @previous="previous"
      :inicio = "inicio"
      :fin = "fin"
      :maxLenght = "maxLenght"
      class="mt-2 mb-2"/>

     <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @cambiarFavoritoNombre="cambiarFavorito"
      class="mb-2 mt-2"
      />
  </div>
</template>

<style scoped>

</style>
