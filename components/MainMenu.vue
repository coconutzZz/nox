<template>
  <nav role="navigation">
    <NavigationDrawer v-if="$mq === 'xs' || $mq === 'sm'" :items="items" :item-click="itemClick" />
    <Menu v-else :items="items" :item-click="itemClick" />
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
    fullpage: {
      default: null,
      type: Object
    }
  },
  data() {
    return {
      items: [
        { anchor: 'ponudba-vozil', text: 'Ponudba vozil', router: true },
        { anchor: 'storitve', text: 'Storitve' },
        { anchor: 'kontakt', text: 'Kontakt', router: true },
        { anchor: 'kje-smo', text: 'Kje smo' }
      ]
    }
  },
  methods: {
    itemClick(item) {
      if (
        item.router &&
        item.anchor === 'ponudba-vozil' &&
        this.$device.isIos
      ) {
        window.location.href =
          'http://www.avto.net/_DEALERPAGES/results.asp?broker=12125&izpis=1'
        return
      }
      if (item.router) {
        this.$router.push({ path: item.anchor })
      } else {
        this.fullpage.moveTo(item.anchor)
      }
    }
  }
}
</script>
