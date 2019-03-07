<template>
  <div :class="[logoClass, 'slide-' + this.activeSlide]">
    <div><span class="bold">E:</span> +386 31 650 725</div>
    <div><span class="bold">T:</span> nox@siol.net</div>
  </div>
</template>

<script>
export default {
  props: {
    activeSlide: null
  },
  computed: {
    logoClass() {
      return {
        'nox-contact': true,
        small: this.activeSlide !== null && this.activeSlide > 0
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins/breakpoints';
.nox-contact {
  background-color: #fff;
  color: #21566b;
  height: 100px;
  width: 260px;
  padding: 15px 20px;
  position: absolute;
  top: 20px;
  left: 270px;
  z-index: 70;
  font-size: 1.3em;
  transition: all 0.5s ease;
  div {
    display: inline-block;
  }
}
@include media-breakpoint-down(md) {
  .nox-contact {
    background-color: transparent;
    color: #fff;
    font-size: 1em;
    width: 300px;
    top: 0px;
    padding: 0;
    left: 140px;
  }
}
@include media-breakpoint-up(lg) {
  .nox-contact {
    &.small {
      background-color: transparent;
      color: #fff;
      font-size: 1em;
      width: 300px;
      top: 0px;
      padding: 0;
      left: 180px;
      &.slide-1 {
        color: #21566b;
      }
    }
  }
}
</style>
