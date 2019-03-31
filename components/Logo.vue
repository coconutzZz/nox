<template>
  <md-card md-with-hover class="md-primary logo">
    <md-ripple>
      <img class="img-fluid" src="../static/img/nox-logo.png" title="Nox d.o.o. - Prodaja Vozil" alt="Nox d.o.o. - Prodaja Vozil" @click="onClick">
    </md-ripple>
  </md-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('default', {
      activeSlide: state => state.activeSlide
    })
  },
  props: {
    logoClick: Function
  },
  methods: {
    onClick() {
      this.logoClick()
    }
  }
}
</script>

<style lang="scss">
.md-card {
  &.logo {
    width: 160px;
    z-index: 2;
  }
  .img-fluid {
    padding: 10px 15px;
  }
}
</style>
