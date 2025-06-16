<template>
<div class="post">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <img class="img" :src="imagen" alt="Imagen del post" />
    <input type="text" v-model="message">
    <button @click="handleClick">Di Hola</button>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'PostDetail',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
            default: "Este Post no tiene contenido"
        },

        imagen: {
            type: String,
            required: true,
        },
    },
    //uso de emits para enviar eventos al padre
    emits: ["sayHi"], //comunicacion ascendente
    setup(props, {emit}) {
        const handleClick = () => {
            //comunicandonos con el compt padre
           emit("sayHi", message.value)
        }

        let message = ref('')
        return {props, message, handleClick}
    }
})


</script>

<style scoped>
.post{
    width: 300px;
    height: 300px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}

.img{
    width: 12rem;
    margin-bottom: 20px;
}
</style>