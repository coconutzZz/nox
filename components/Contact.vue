<template>
  <md-card :class="['contact','slide-' + this.activeSlide]">
    <md-card-header>
      <div><span class="bold">E:</span> {{ phone }} </div>
      <div><span class="bold">T:</span> {{ mail }} </div>
    </md-card-header>
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
    })
  }
}
</script>

<style lang="scss">
.md-card {
  &.contact {
    left: 160px;
    z-index: 1;
  }
}
</style>
