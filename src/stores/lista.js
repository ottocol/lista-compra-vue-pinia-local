import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

export const useListaStore = defineStore('lista', {
  state: () => ({
    items: [], // { id, nombre, comprado}
  }),

  getters: {
    total: (s) => s.items.length,
    comprados: (s) => s.items.filter(i => i.comprado),
    pendientes: (s) => s.items.filter(i => !i.comprado),
  },

  actions: {
    //si hubiera servidor, todas estas acciones deberían hacer los cambios en el servidor 
    //además de actualizar la variable items
    async addItem(nombre) {
      const nuevo = {
        id: nanoid(),  //librería para generar ids aleatorios con baja probabilidad de colisión
        nombre,
        comprado: false
      }
      this.items.push(nuevo)
      return nuevo
    },

    async updateComprado(id, comprado) {
      const it = this.items.find(i => i.id === id)
      if (!it) return null
      it.comprado = !!comprado
      return it
    },

    async updateItem(id, nombre) {
      const it = this.items.find(i => i.id === id)
      if (!it) return null
      it.nombre = nombre
      return it
    },

    async deleteItem(id) {
      const idx = this.items.findIndex(i => i.id === id)
      if (idx < 0) return false
      this.items.splice(idx, 1)
      return true
    },
  },

  // para el plugin pinia-plugin-persistedstate 
  // Por defecto se guarda en localStorage
  persist: true
})
