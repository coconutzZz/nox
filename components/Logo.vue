<template>
  <md-card md-with-hover class="md-primary logo">
    <img class="img-fluid" src="../static/img/nox-logo.png" title="Nox d.o.o. - Prodaja Vozil" alt="Nox d.o.o. - Prodaja Vozil">
  </md-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('default', {
      activeSlide: state => state.activeSlide
    })
  }
}
</script>

<style lang="scss">
.md-card {
  &.logo {
    padding: 10px 15px;
    width: 160px;
    z-index: 2;
  }
}
</style>
