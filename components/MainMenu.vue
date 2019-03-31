<template>
  <nav role="navigation">
    <NavigationDrawer v-if="$mq === 'xs' || $mq === 'sm'" :items="items" :item-click="itemClick" />
    <Menu v-else :items="items" :item-click="itemClick" />
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import NavigationDrawer from './NavigationDrawer.vue'
import Menu from './Menu.vue'

export default {
  components: {
    NavigationDrawer,
    Menu
  },
  props: {
    fullpage: {
      default: null,
      type: Object
    }
  },
  data() {
    return {
      items: [
        { anchor: 'ponudba', text: 'Ponudba vozil' },
        { anchor: 'storitve', text: 'Storitve' },
        { anchor: 'kontakt', text: 'Kontakt' },
        { anchor: 'kje-smo', text: 'Kje smo' }
      ]
    }
  },
  methods: {
    ...mapActions('default', ['toggleCars']),
    itemClick(anchor) {
      if (this.showCars) {
        return
      }

      if (anchor === 'ponudba') {
        this.toggleCars()
      } else {
        this.fullpage.moveTo(anchor)
      }
    }
  },
  computed: {
    ...mapState('default', {
      showCars: state => state.showCars
    })
  }
}
</script>
