<template>
    <div>
        <h1>Datos Computados - computed</h1>
        <input type="text" v-model="message" name="" id="">
        <h3>{{ message }}</h3>
        <h3>{{ reverse }}</h3>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'ComputedOptionApi',
    data() {
        return {
            message: "",
        }
    },
    computed: {
        reverse() {
            return this.message.split('').reverse().join('')
        }
    }
})

</script>

<style scoped>

</style>