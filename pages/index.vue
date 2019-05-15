<template>
  <div>
    <Header :logo-click="this.intro" />
    <MainMenu :fullpage="this.fullpage" />
    <div id="fullpage">
      <Home />
      <div id="services" data-anchor="storitve" class="section fp-auto-height-responsive">
        <Services :fullpage="this.fullpage" />
        <CarSale />
        <div class="arrow down bounce" />
      </div>
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
  MdSnackbar,
  MdDialog,
  MdToolbar
} from 'vue-material/dist/components'
import Fullpage from 'fullpage.js'
import MainMenu from '~/components/MainMenu.vue'
import Header from '~/components/Header.vue'
import Home from '~/pages/Home.vue'
import Services from '~/pages/Services.vue'
import CarSale from '~/pages/Car-Sale.vue'
import About from '~/pages/About.vue'

Vue.use(MdRipple)
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdSpeedDial)
Vue.use(MdIcon)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdSnackbar)
Vue.use(MdDialog)
Vue.use(MdToolbar)
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
    About
  },
  data() {
    return {
      fullpage: null
    }
  },
  mounted() {
    this.initFullpage()
  },
  destroyed() {
    this.fullpage.destroy('all')
    this.fullpage = null
    this.setActiveSlide({ index: -1 })
  },
  computed: {
    ...mapState('default', {
      services: state => state.services
    })
  },
  methods: {
    ...mapActions('default', ['setActiveSlide']),
    onLeave(origin, destination, direction) {
      // eslint-disable-next-line no-console
      console.log(destination)
      this.setActiveSlide(destination)
    },
    initFullpage() {
      const fullpage = new Fullpage('#fullpage', {
        licenseKey: '26B1D363-7EA74CB6-9C33B3FF-EE11C3FD',
        verticalCentered: false,
        loopHorizontal: false,
        menu: '#main-menu',
        onLeave: (origin, destination, direction) => {
          this.onLeave(origin, destination, direction)
        },
        fitToSection: false
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
#fullpage {
  overflow: hidden;
}
</style>
