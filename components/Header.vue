<template>
  <div>
    <Logo />
    <Contact />
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Contact from './Contact.vue'
export default {
  components: {
    Logo,
    Contact
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
