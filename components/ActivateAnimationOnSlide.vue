<template>
  <div>
    <slot :animate="animate" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    activateOnSlide: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      animate: ''
    }
  },
  computed: {
    ...mapState('default', {
      activeSlide: state => state.activeSlide
    })
  },
  mounted() {
    this.$store.watch(
      state => state.default.activeSlide,
      (newValue, oldValue) => {
        this.removeAnimationClass()
        if (newValue === this.activateOnSlide) {
          this.addAnimationClass()
        }
      }
    )
  },
  methods: {
    addAnimationClass() {
      setTimeout(() => {
        this.animate = 'animate'
      }, 300)
    },
    removeAnimationClass() {
      this.animate = ''
    }
  }
}
</script>
