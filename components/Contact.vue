<template>
  <md-card md-with-hover :class="[logoClass, 'slide-' + this.activeSlide]">
    <div><span class="bold">E:</span> {{ phone }} </div>
    <div><span class="bold">T:</span> {{ mail }} </div>
  </md-card>
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
.md-card {
  width: auto;
  margin: 4px;
  padding: 10px;
  vertical-align: top;
  background-color: $primary;
  float: left;
}
</style>
