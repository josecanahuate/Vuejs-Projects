<script setup>
import { ref, computed } from "vue";

const name = "vUE DINAMICO"
const styleColor = "color: blue"
const arrayColores = ["blue", "red", "green"]
const activo = true;
const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];

//metodo - methods - eventos sin parametro
const handleClick = () => {
  console.log("Se ha hecho click");
}

//metodo - methods  - eventos con parametro
const handleClickp = (message) => {
  console.log(message);
}

const arrayFrutass = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
        icono: "🍎",
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
        icono: "🍌",
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
        icono: "🍓",
    },
];

const objetoFruta = 
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
        icono: "🍎",
    }


const counter = ref(0);
const arrayCounter = ref([]);

const increment = () => {
    counter.value++;
};

const decrement = () => {
    counter.value--;
};

const reset = () => {
    counter.value = 0;
};

const add = () => {
    arrayCounter.value.push(counter.value);
};

const blockNumber = computed(() => {
    const number = arrayCounter.value.find((num) => num === counter.value);
    return number || number === 0;
});

const classCounter = computed(() => {
    if (counter.value === 0) {
        return "zero";
    }
    return counter.value > 0 ? "positive" : "negative";
});


</script>

<template>
  <h1>{{ name.toUpperCase() }}</h1>
  <h2>{{ arrayColores }}</h2>
  <h2 :style="styleColor">soy azul</h2>
  <p v-if="activo">inactivo</p>
  <p v-else>inactivo</p>

  <h2>v-for </h2>
<p>En el v-for, primero se debe crear una variable y luego pasarla donde se almacenara el array, luego se debe 
  colocar el array de donde se esta tomando los valores y por ultimo, una atributo CON IDENTIFICADOR UNICO, 
  QUE NO SE REPITA, :key (USUALMENTE SE PASA EL index, ya que es UNICO)  </p>
<ul>
  <li v-for="(fruta, index) in arrayFrutas" :key="index"> {{ fruta }} </li>
</ul>


<h2>Array Ejercicio</h2>
<ul>
  <li v-for="(frutas, name) in arrayFrutass" :key="name">
    {{ frutas.name }} {{ frutas.icono }}<br>
    Precio: {{ frutas.price }}, <br>
    Stock: {{ frutas.stock }}, <br>
    Descripción: {{ frutas.description }}
  </li>  
</ul>

<ul>
  <li v-for="value in objetoFruta" :key="value">
  {{ objetoFruta }}
  </li>
</ul>

<h1>v-for + v-if</h1>
<p>el v-if tiene prioridad ante el v-for</p>
<p>Para usar v-for + v-if se debe envolver en un template</p>
<ul>
  <template v-for="item in arrayFrutass" :key="item.name">
    <li v-if="item.stock > 0"> {{ item.name}} - {{ item.price}}
  </li>
  </template>
</ul>


<h1>v-on ó @click</h1>
<p>Podemos usar la directiva v-on, que normalmente acortamos al símbolo @, para escuchar eventos DOM y ejecutar JavaScript cuando se activan. El uso sería v-on:click="handler" o con el atajo, @click="handler". </p>
<button @click="handleClick">Click me!</button>

<button @click="handleClickp('con este metodo se pasa () en el @click')">Click me! con parametro</button>

<h1 class="text-center mt-5">Contador con Computed + ref</h1>
<div class="container text-center mt-5 mb-5">
        <h2 :class="classCounter">
            {{ counter }}
        </h2>

        <div class="btn-group">
            <button @click="increment" class="btn btn-success">Incremet</button>
            <button @click="decrement" class="btn btn-danger">Decrement</button>
            <button @click="reset" class="btn btn-secondary">Reset</button>
            <button
                @click="add"
                :disabled="blockNumber"
                class="btn btn-primary"
            >
                Add
            </button>
        </div>
        <h2 class="mt-3">Mis Favoritos</h2>
        <ul class="list-group mt-2">
            <li
                class="list-group-item"
                v-for="(item, index) in arrayCounter"
                :key="index"
            >
                {{ item }}
            </li>
        </ul>
    </div>

    DEPLOY
    <p>npm run build </p>
<p>npm run preview </p>
<p>al ejecutar npm run run build se genera una carpeta 'dist', unicamente se subira esta carpeta a netlify </p>

</template>





<style>
h1 {
  color: red;
}

.negative {
    color: red;
}

.positive {
    color: green;
}

.zero {
    color: black;
}
</style>
