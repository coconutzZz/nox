<template>
  <div>
    <Header :active-slide="active" />
    <MainMenu :active-slide="active" @show-cars="showCars = true" />
    <CarsModal v-if="showCars" @close="showCars = false" />
    <div id="fullpage">
      <Home @show-cars="showCars = true" />
      <Services />
      <About />
    </div>
  </div>
</template>

<script>
import Fullpage from 'fullpage.js'
import MainMenu from '~/components/MainMenu.vue'
import Header from '~/components/Header.vue'
import Home from '~/pages/Home.vue'
import Services from '~/pages/Services.vue'
import About from '~/pages/About.vue'
import CarsModal from '~/pages/Cars-Modal.vue'
import Vue from 'vue'
import VueMq from 'vue-mq'
/*
import {
  MdButton,
  MdCard,
  MdSpeedDial,
  MdIcon,
  MdDrawer,
  MdList,
  MdField,
  MdMenu
} from 'vue-material/dist/components'
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdSpeedDial)
Vue.use(MdIcon)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdField)
Vue.use(MdMenu) */
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)
Vue.use(VueMq)
export default {
  components: {
    Header,
    MainMenu,
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
