<template>
  <div>
    <div id="dev">
      current: {{ $mq }}
    </div>
    <Header :logo-click="this.intro" />
    <MainMenu :fullpage="this.fullpage" />
    <CarsModal v-if="showCars" />
    <div id="fullpage">
      <Home />
      <div id="services" data-anchor="storitve" class="section fp-auto-height-responsive">
        <Services />
        <div v-if="isMobile" class="slide">
          test
        </div>
        <CarSale />
        <div class="arrow down bounce" />
      </div>
      <Contact />
      <About />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import VueMq from 'vue-mq'
import {
  MdRipple,
  MdButton,
  MdCard,
  MdSpeedDial,
  MdIcon,
  MdDrawer,
  MdList,
  MdField,
  MdMenu,
  MdProgress,
  MdSnackbar
} from 'vue-material/dist/components'
import Fullpage from 'fullpage.js'
import MainMenu from '~/components/MainMenu.vue'
import Header from '~/components/Header.vue'
import Home from '~/pages/Home.vue'
import Services from '~/pages/Services.vue'
import CarSale from '~/pages/Car-Sale.vue'
import About from '~/pages/About.vue'
import Contact from '~/pages/Contact.vue'
import CarsModal from '~/pages/Cars-Modal.vue'

Vue.use(MdRipple)
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdSpeedDial)
Vue.use(MdIcon)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdProgress)
Vue.use(MdSnackbar)
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
    CarsModal,
    Contact
  },
  data() {
    return {
      fullpage: null,
      isMobile: false
    }
  },
  watch: {
    $mq(newVal, oldVal) {
      // eslint-disable-next-line
      console.log(newVal, oldVal)
      if (newVal === 'xs') {
        this.isMobile = true
        this.fullpage.destroy('all')
        this.initFullpage()
      }
    }
  },
  mounted() {
    this.initFullpage()
  },
  computed: {
    ...mapState('default', {
      showCars: state => state.showCars,
      services: state => state.services
    })
  },
  methods: {
    ...mapActions('default', ['setActiveSlide']),
    onLeave(origin, destination, direction) {
      this.setActiveSlide(destination.index)
    },
    initFullpage() {
      const fullpage = new Fullpage('#fullpage', {
        licenseKey: '26B1D363-7EA74CB6-9C33B3FF-EE11C3FD',
        verticalCentered: false,
        loopHorizontal: false,
        responsiveSlides: true,
        menu: '#main-menu',
        onLeave: (origin, destination, direction) => {
          if (this.showCars) {
            return false
          }

          this.onLeave(origin, destination, direction)
        }
      })
      this.fullpage = fullpage
      this.setActiveSlide(0)
    },
    intro() {
      this.fullpage.moveTo('intro')
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
