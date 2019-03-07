<template>
  <nav :class="['slide-' + this.activeSlide]" role="navigation">
    <HamburgerMenu :items="items" class="d-lg-none" />
    <Menu :items="items" class="d-none d-lg-block" @show-cars="showCars()" />
  </nav>    
</template>

<script>
import HamburgerMenu from './HamburgerMenu.vue'
import Menu from './Menu.vue'

export default {
  components: {
    HamburgerMenu,
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
          link: '#top',
          anchor: 'top',
          text: 'Ponudba vozil'
        },
        { id: 2, link: '#storitve', anchor: 'storitve', text: 'Storitve' },
        { id: 3, link: '#kontakt', anchor: 'kontakt', text: 'Kontakt' }
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
