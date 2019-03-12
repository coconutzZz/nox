<template>
  <nav :class="['slide-' + this.activeSlide]" role="navigation">
    <mq-layout :mq="['xs','sm']">
      <HamburgerMenu v-if="this.$mq == 'sm'" :items="items" @show-cars="showCars()" />
    </mq-layout>
    <mq-layout mq="md+">
      <Menu :items="items" class="d-none d-lg-block" @show-cars="showCars()" />
    </mq-layout>
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
          link: '#',
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
