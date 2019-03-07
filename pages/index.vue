<template>
  <div>
    <MainMenu :active-slide="active" @show-cars="showCars = true" />
    <div class="container-fluid">
      <Logo :active-slide="active" />
      <Contact :active-slide="active" />
      <CarsModal v-if="showCars" @close="showCars = false" />
      <div id="fullpage">
        <Home @show-cars="showCars = true" />
        <Services />
        <About />
      </div>
    </div>
  </div>
</template>

<script>
import Fullpage from 'fullpage.js'
import Logo from '~/components/Logo.vue'
import MainMenu from '~/components/MainMenu.vue'
import Home from '~/pages/Home.vue'
import Services from '~/pages/Services.vue'
import About from '~/pages/About.vue'
import Contact from '~/components/Contact.vue'
import CarsModal from '~/pages/Cars-Modal.vue'
import Vue from 'vue'
import { Layout } from 'bootstrap-vue/es/components'

Vue.use(Layout)
export default {
  components: {
    Logo,
    MainMenu,
    Contact,
    Home,
    Services,
    About,
    CarsModal
  },
  data() {
    return {
      fullpage: null,
      active: 0,
      showCars: false
    }
  },
  computed: {
    activeSlide() {
      if (this.fullpage === null) {
        return 0
      }
      // eslint-disable-next-line
      console.log(fullpage_api.getActiveSection())
      // eslint-disable-next-line no-undef
      return fullpage_api.getActiveSection().anchor
    }
  },
  mounted() {
    this.fullpage = new Fullpage('#fullpage', {
      licenseKey: '26B1D363-7EA74CB6-9C33B3FF-EE11C3FD',
      verticalCentered: false,
      loopHorizontal: false,
      menu: '#main-menu',
      anchors: ['top', 'storitve', 'kontakt'],
      onLeave: (origin, destination, direction) => {
        this.onLeave(origin, destination, direction)
      }
    })
  },
  methods: {
    onLeave(origin, destination, direction) {
      this.active = destination.index
    }
  }
}
</script>

<style>
</style>
