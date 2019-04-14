<template>
  <div>
    <Logo :logo-click="this.logoClick" :class="animateClass" />
    <Contact v-if="$mq !== 'xs'" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from './Logo.vue'
import Contact from './Contact.vue'
export default {
  components: {
    Logo,
    Contact
  },
  props: {
    logoClick: Function
  },
  computed: {
    ...mapState('default', {
      activeSlide: state => state.activeSlide
    }),
    animateClass() {
      if (this.$mq === 'xs' && this.activeSlide !== 0) {
        return 'animate'
      }
      if (this.activeSlide !== 0) {
        return 'small'
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.md-card {
  &.logo {
    &.small {
      transform: scale(0.7) translate(-30%);
    }
    width: 160px;
    height: 70px;
    z-index: 2;
    transition: all 0.5s;
    top: 0;
    transition-delay: 0.5s;
    &.animate {
      top: -200px;
      transition-delay: 0s;
    }
  }
  &.contact {
    height: 70px;
  }
  .img-fluid {
    padding: 10px 15px;
  }
  margin: 0px;
  vertical-align: middle;
  position: absolute;
}
</style>
