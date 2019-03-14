<template>
  <md-card md-with-hover class="primary">
    <img class="img-fluid" src="../static/img/nox-logo.png" title="Nox d.o.o. - Prodaja Vozil" alt="Nox d.o.o. - Prodaja Vozil">
  </md-card>
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
.md-card {
  width: auto;
  margin: 4px;
  padding: 10px;
  vertical-align: top;
  background-color: $primary;
  float: left;
}
@media only screen and (min-width: 48em) {
}
</style>
