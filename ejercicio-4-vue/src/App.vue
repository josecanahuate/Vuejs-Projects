<template>
  <!-- <PostList /> -->
  <!-- <h1>Composition API</h1> -->
  <!-- <PostListCompApi /> -->

  <!-- <h1>computed Option API</h1> -->
  <!-- <ComputedOptionApi /> -->

<!--   <h1>computed Composition API</h1>
  <ComputedCompositionApi /> -->

  <EjercicioFactura />

</template>

<script>
/* import PostList from './components/PostList.vue' */
/* import PostListCompApi from './components/PostListCompApi.vue'; */
/* import ComputedOptionApi from './components/ComputedOptionApi.vue'; */
/* import ComputedCompositionApi from './components/ComputedCompositionApi.vue'; */
import EjercicioFactura from './components/EjercicioFactura.vue';

export default {
  name: 'App',
  components: {
    /* PostList, */
    /* PostListCompApi, */
    /* ComputedOptionApi */
    /* ComputedCompositionApi */
    EjercicioFactura
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
