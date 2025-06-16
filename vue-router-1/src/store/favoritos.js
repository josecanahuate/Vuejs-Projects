import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore("favoritos", () => {
    //state
    const favoritos = ref([]);

    if(localStorage.getItem("favoritos")){
        favoritos.value = JSON.parse(localStorage.getItem("favoritos"));
    }

    // actions
    const addfavoritos = (poke) => {
        favoritos.value.push(poke);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    };

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));

    }

    /* BUSCAR POKEMON */
    const findPoke = name => favoritos.value.find(item => item.name === name)

    return {
        favoritos,
        addfavoritos,
        remove,
        findPoke
    };
});