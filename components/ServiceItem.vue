<template>
  <div :class="classes">
    <div class="icon-wrapper">
      <slot name="icon" />
    </div>
    <h1><slot name="header" /></h1>
    <slot name="subheader" />
    <div>
      <p class="text">
        <slot name="text" />
      </p>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.md-subheading {
  text-transform: uppercase;
  color: #b13030;
}
.center-desc {
  top: 45%;
  transform: translateY(-45%);
  position: relative;
  z-index: 9;
  text-align: center;
  margin: 0 auto;
  .icon-wrapper {
    margin-bottom: 20px;
  }
}
</style>
