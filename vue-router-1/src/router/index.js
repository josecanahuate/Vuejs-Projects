import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue'),
    },
    {
      path: '/pokemons/:name', //:name es un params que viaja a pokeview
      name: 'poke',
      component: () => import('../views/PokeView.vue'),
    },
      {
      path: '/favoritos', //:name es un params que viaja a pokeview
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue'),
    },
    {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
   },
  ],
})

export default router
