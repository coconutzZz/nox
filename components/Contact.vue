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
  computed: {
    ...mapState('default', {
      phone: state => state.phone,
      mail: state => state.mail,
      activeSlide: state => state.activeSlide
    })
  }
}
</script>

<style lang="scss">
.md-card {
  &.contact {
    left: 0px;
    z-index: 1;
    &.slide-0 {
      left: 160px;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    &.contact {
      left: 160px;
    }
  }
  @media (min-width: 960px) and (max-width: 1280px) {
    &.contact {
      left: 160px;
    }
  }
  @media (min-width: 1280px) {
    &.contact {
      left: 160px;
    }
  }
}
</style>
