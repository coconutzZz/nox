<template>
  <div>
    <div id="dev">
      current: {{ $mq }}
    </div>
    <Header :active-slide="active" />
    <MainMenu :active-slide="active" @show-cars="showCars = true" />
    <CarsModal v-if="showCars" @close="showCars = false" />
    <div id="fullpage">
      <Home @show-cars="showCars = true" />
      <Services />
      <CarSale />
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
import CarSale from '~/pages/Car-Sale.vue'
import About from '~/pages/About.vue'
import CarsModal from '~/pages/Cars-Modal.vue'
import Vue from 'vue'
import VueMq from 'vue-mq'
import {
  MdButton,
  MdCard,
  MdSpeedDial,
  MdIcon,
  MdDrawer,
  MdList,
  MdField,
  MdMenu,
  MdProgress
} from 'vue-material/dist/components'
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdSpeedDial)
Vue.use(MdIcon)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdProgress)
/*
import VueMaterial from 'vue-material'
Vue.use(VueMaterial) */
Vue.use(VueMq, {
  breakpoints: {
    xs: 599,
    sm: 1023, // 600 - 1023
    md: 1439, // 1024 - 1439
    lg: 1919, // 1440 - 1919
    xl: Infinity
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})
export default {
  components: {
    Header,
    MainMenu,
    Home,
    Services,
    CarSale,
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
  watch: {
    $mq(newVal, oldVal) {
      // eslint-disable-next-line
      console.log(newVal, oldVal)
      if (newVal === 'xs') {
        // eslint-disable-next-line no-undef
        fullpage_api.destroy('all')
        this.initFullpage()
      }
    }
  },
  mounted() {
    this.initFullpage()
  },
  methods: {
    onLeave(origin, destination, direction) {
      this.active = destination.index
    },
    initFullpage() {
      const fullpage = new Fullpage('#fullpage', {
        licenseKey: '26B1D363-7EA74CB6-9C33B3FF-EE11C3FD',
        verticalCentered: false,
        loopHorizontal: false,
        responsiveWidth: 600,
        responsiveSlides: true,
        menu: '#main-menu',
        onLeave: (origin, destination, direction) => {
          this.onLeave(origin, destination, direction)
        }
      })
      this.fullpage = fullpage
    }
  }
}
</script>

<style lang="scss">
#dev {
  position: fixed;
  top: 0;
  right: 150px;
  font-size: 12px;
  z-index: 999;
  font-weight: bolder;
  background-color: yellow;
}
</style>
