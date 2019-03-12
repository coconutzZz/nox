<template>
  <div :class="[logoClass, 'slide-' + this.activeSlide]">
    <div><span class="bold">E:</span> {{ phone }} </div>
    <div><span class="bold">T:</span> {{ mail }} </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    activeSlide: null
  },
  computed: {
    ...mapState('default', {
      phone: state => state.phone,
      mail: state => state.mail
    }),
    logoClass() {
      return {
        'nox-contact': true,
        hide: this.activeSlide !== null && this.activeSlide > 0
      }
    }
  }
}
</script>

<style lang="scss">
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
  transition: left 0.5s ease;
  div {
    display: inline-block;
  }
  &.hide {
    left: -300px;
  }
  &.slide-1,
  &.slide-2 {
    color: #21566b;
  }
}
</style>
