<template>
  <a href="#top" :class="logoClass">
    <img class="img-fluid" src="../static/img/nox-logo.png" title="Nox d.o.o. - Prodaja Vozil" alt="Nox d.o.o. - Prodaja Vozil">
  </a>
</template>

<script>
export default {
  props: {
    activeSlide: null
  },
  computed: {
    logoClass() {
      return {
        'nox-logo': true,
        'nox-logo-small': this.activeSlide !== null && this.activeSlide > 0
      }
    }
  }
}
</script>

<style lang="scss">
@import 'flexboxgrid-sass/flexboxgrid.scss';

.nox-logo {
  background-color: $primary;
  padding: 10px 20px;
  height: 100px;
  width: 260px;
  position: absolute;
  z-index: 75;
  top: 20px;
  transition: all 0.5s ease;
}
@media only screen and (min-width: 48em) {
}
</style>
