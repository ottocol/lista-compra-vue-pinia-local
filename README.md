# lista-compra-pocketbase-vue-router

Ejemplo de la lista de la compra usando pocketbase en el backend y Vue con Vue-router en el frontend.

Para ver el uso del router:

- En `src/router/index.js` tienes las rutas definidas. Cada ruta se asocia a un componente Vue. Ahí puedes ver también cómo chequea el router la autentificación para las rutas que la requieran (en nuestro caso solo `/lista`)
- En `App.vue`, la etiqueta `<router-view/>` es la que hace que aparezca "lo que diga el router en este momento".
- En `About.vue`tienes un ejemplo de cómo poner un enlace a una ruta del router con la etiqueta `<RouterLink/>`


##  Instalar

```sh
npm install
```

### Modo desarrollo

```sh
npm run dev
```

### Construir para modo producción

```sh
npm run build
```
