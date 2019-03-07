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
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins/breakpoints';
.nox-logo {
  background-color: #21566b;
  padding: 10px 20px;
  height: 100px;
  width: 260px;
  position: absolute;
  z-index: 70;
  top: 20px;
  transition: all 0.5s ease;
}
@include media-breakpoint-up(lg) {
  .nox-logo {
    &.nox-logo-small {
      top: 0px;
      transform: scale(0.6);
      transform-origin: left top;
    }
  }
}
@include media-breakpoint-down(md) {
  .nox-logo {
    top: 0px;
    transform: scale(0.5);
    transform-origin: left top;
  }
}
</style>
