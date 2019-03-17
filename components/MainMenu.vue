<template>
  <nav :class="['slide-' + this.activeSlide]" role="navigation">
    <NavigationDrawer :items="items" @show-cars="showCars()" />
    <Menu v-if="false" :items="items" class="d-none d-lg-block" @show-cars="showCars()" />
  </nav>
</template>

<script>
import NavigationDrawer from './NavigationDrawer.vue'
import Menu from './Menu.vue'

export default {
  components: {
    NavigationDrawer,
    Menu
  },
  props: {
    activeSlide: null
  },
  data() {
    return {
      items: [
        {
          id: 1,
          link: '#',
          text: 'Ponudba vozil'
        },
        { id: 2, link: '#storitve', anchor: 'storitve', text: 'Storitve' },
        {
          id: 3,
          link: '#prodaja-odkup',
          anchor: 'prodaja-odkup',
          text: 'Prodaja in odkup vozil'
        },
        { id: 4, link: '#kontakt', anchor: 'kontakt', text: 'Kontakt' }
      ]
    }
  },
  methods: {
    showCars() {
      this.$emit('show-cars')
    }
  }
}
</script>
