<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <img class="img" :src="imagen" alt="Imagen del post" />
        <input type="text" v-model="message">
        <button @click="handleClick">Di Hola</button>
    </div>
    </template>
    
    <script setup>
    import { defineProps, defineEmits, ref } from 'vue'
    
    const props = defineProps({
      title: { type: String, required: true },
      content: { type: String, required: true },
      imagen: { type: String},
    })
    
    const emit = defineEmits(['sayHi'])
    
    const handleClick = () => {
      // Comunicándonos con el componente padre
      emit("sayHi", message.value)
    }
    
    let message = ref('')
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