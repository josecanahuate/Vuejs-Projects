<template>
    <div class="container">
        <h1 class="text-primary">Comunicacion Vertical Descendente - de Padre a Hijo - Props</h1> <br>
        <h1 class="text-secondary">Comunicacion Vertical Ascendente - de Hijo a Padre - Emits</h1> <br>
        <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" 
        :content="elm.content" :imagen="elm.imagen" @sayHi="showAlert" />
    </div>
</template>

<script setup>
import PostDetail from './PostDetail.vue'

let info = [
    {
    title: "Post 1", 
    content: "Texto de Ejemplo 1",
    imagen: "https://picsum.photos/536/354"
    }, 

    {
    title: "Post 2", 
    content: "Texto de Ejemplo 2",
    imagen: "https://picsum.photos/536/354"
    }, 

    {
    title: "Post 3", 
    content: "Texto de Ejemplo 3",
    imagen: "https://picsum.photos/536/354"
    }, 

    {
    title: "Post 4", 
    content: "Texto de Ejemplo 4",
    imagen: "https://picsum.photos/536/354"
    }, 

    {
    title: "Post 5", 
    content: "Texto de Ejemplo 5",
    imagen: "https://picsum.photos/536/354"
    }]

//comunicacion ascendente de hijo a padre
function showAlert(msg) {
     alert(msg)
}

</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}
</style>



