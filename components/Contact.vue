<template>
  <md-card :class="['contact','active-slide-' + this.activeSlide]">
    <md-card-header>
      <div><span class="bold">E:</span> {{ phone }} </div>
      <div><span class="bold">T:</span> {{ mail }} </div>
    </md-card-header>
  </md-card>
</template>

<script>
import { mapState } from 'vuex'
import texts from '~/assets/texts.js'
export default {
  data: () => {
    return {
      phone: texts.phone,
      mail: texts.mail
    }
  },
  computed: {
    ...mapState('default', {
      activeSlide: state => state.activeSlide
    })
  }
}
</script>

<style lang="scss">
.md-card {
  &.contact {
    left: 160px;
    z-index: 1;
    &.active-slide-0 {
      top: 0px;
    }
    transition: top 0.5s;
    transition-delay: 1s;
    top: -200px;
  }
}
</style>
