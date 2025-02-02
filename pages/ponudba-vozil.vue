<template>
  <div id="car-sale">
    <md-toolbar class="md-dense md-primary">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button" @click="toggleMenu()">
          <md-icon>search</md-icon>
        </md-button>
        <div v-if="$mq !== 'xs' && $mq !== 'sm'">
          Podrobno iskanje
        </div>
        <md-button class="md-icon-button" @click="mailTo()">
          <md-icon>email</md-icon>
        </md-button>
        <div v-if="$mq !== 'xs' && $mq !== 'sm'">
          {{ mail }}
        </div>
        <md-button class="md-icon-button" @click="phoneTo()">
          <md-icon>phone</md-icon>
        </md-button>
        <div v-if="$mq !== 'xs' && $mq !== 'sm'">
          {{ phone }}
        </div>
      </div>

      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button" @click="closeThis()">
          <md-icon>close</md-icon>
        </md-button>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" class="filter md-primary md-elevation-10 md-scrollbar" md-persistent="full" :style="{ height: this.drawerHeight }">      
      <md-toolbar class="md-transparent" md-elevation="0">
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button md-primary" @click="toggleMenu">
            <md-icon>close</md-icon>
          </md-button>
        </div>
      </md-toolbar>     
      
      <md-list md-expand-single="true">
        <md-list-item md-expand>
          <span class="md-list-item-text">Znamka</span>

          <md-list slot="md-expand">
            <md-list-item v-for="m in models" :key="m.id" :class="{'md-inset': true, 'md-active': selectedModel == m.id}" @click="selectedModel = m.id">
              {{ m.title }}
            </md-list-item>
          </md-list>
        </md-list-item>
        
        
        <md-list-item md-expand>
          <span class="md-list-item-text">Karoserija</span>
          <md-list slot="md-expand">            
            <md-list-item v-for="t in types" :key="t.id" :class="{'md-inset': true, 'md-active': selectedModel == t.id}" @click="selectedType = t.id">
              {{ t.name }}
            </md-list-item>
          </md-list>
        </md-list-item>
      </md-list>
    </md-drawer>    
    <Cars :selected-model="selectedModel" :selected-type="selectedType" :height="height" :width="width" />
  </div>
</template>

<script>
import texts from '~/assets/texts.js'
import Vue from 'vue'
import { mapState } from 'vuex'
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
  MdToolbar
} from 'vue-material/dist/components'
import VueMq from 'vue-mq'
Vue.use(MdRipple)
Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdSpeedDial)
Vue.use(MdIcon)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdField)
Vue.use(MdMenu)
Vue.use(MdToolbar)
Vue.use(MdProgress)
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
    Cars: () => import('~/components/Cars.vue')
  },
  data() {
    return {
      phone: texts.phone,
      mail: texts.mail,
      showNavigation: false,
      height: 0,
      width: 0,
      windowHeight: 0,
      selectedModel: '',
      selectedType: '',
      models: [
        { id: '', title: 'Vse znamke' },
        { id: 502, title: 'Audi' },
        { id: 504, title: 'BMW' },
        { id: 509, title: 'Citroen' },
        { id: 521, title: 'Ford' },
        { id: 523, title: 'Honda' },
        { id: 532, title: 'Kia' },
        { id: 542, title: 'Mazda' },
        { id: 544, title: 'Mercedes' },
        { id: 547, title: 'Mini' },
        { id: 553, title: 'Opel' },
        { id: 555, title: 'Peugeot' },
        { id: 562, title: 'Renault' },
        { id: 576, title: 'Škoda' },
        { id: 582, title: 'Toyota' },
        { id: 585, title: 'Volkswagen' }
      ],
      types: [
        { id: '', name: 'Vse' },
        { id: 11, name: 'limuzina' },
        { id: 12, name: 'kombilimuzina / hatchback' },
        { id: 13, name: 'karavan' },
        { id: 14, name: 'enoprostorec / van' },
        { id: 15, name: 'terensko vozilo / SUV' },
        { id: 16, name: 'coupe' },
        { id: 17, name: 'cabriolet' },
        { id: 18, name: 'pick-up' }
      ]
    }
  },
  computed: {
    ...mapState('default', {
      activeAnchor: state => state.activeAnchor
    }),
    drawerHeight() {
      return this.windowHeight + 'px'
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    toggleMenu() {
      this.showNavigation = !this.showNavigation
    },
    closeThis() {
      this.$router.push({ path: '/#' + this.activeAnchor })
    },
    mailTo() {
      window.location.replace('mailto:' + this.mail)
    },
    phoneTo() {
      window.location.href = 'tel:' + this.phone
    },
    handleResize() {
      const height = window.innerHeight
      const width = window.innerWidth
      this.windowHeight = height
      if (width >= 600 && width < 768) {
        this.height = height + height * 0.25 - 48
        this.width = width + width * 0.25
      } else if (width < 600) {
        this.height = (height - 48) * 2
        this.width = width * 2
      } else {
        this.height = height - 48
        this.width = width
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  z-index: 10;
}
.filter {
  padding: 20px;
  z-index: 11;
}
.md-list {
  .md-list-item.md-active {
    div.md-list-item-content {
      color: $secondary;
    }
  }
}
.md-icon {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
