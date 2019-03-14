<template>
  <div>
    <Logo :active-slide="activeSlide" />
    <Contact :active-slide="activeSlide" />
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Contact from './Contact.vue'
export default {
  components: {
    Logo,
    Contact
  },
  props: {
    activeSlide: null
  }
}
</script>

<style lang="scss">
.md-card {
  margin: 0px;
  height: 70px;
  vertical-align: middle;
  position: absolute;
}
</style>
