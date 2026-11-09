import { createRouter, createWebHistory } from 'vue-router';
import ListaCompra from '@/components/ListaCompra.vue';
import About from '@/components/About.vue';

// Definición de rutas
//cada ruta tiene asociado un path en la URL, un nombre simbólico y un componente a mostrar
const routes = [
  //en este caso si el usuario intenta ir a "/" lo mandamos a la lista de la compra
  {
    path: '/',
    redirect: {name:"Lista"}
  },
  //si la URL es "/lista", queremos mostrar el componente ListaCompra
  {
    path: '/lista',
    name: 'Lista',
    component: ListaCompra
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;