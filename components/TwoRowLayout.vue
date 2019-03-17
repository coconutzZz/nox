<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100 first" />
    <div class="md-layout-item md-size-100 second">
      <h1><slot name="header" /></h1>
      <slot name="subheader" />      
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.md-layout {
  .first {
    height: 30vh;
    background-color: green;
  }
  .second {
    text-align: center;
    padding: 30px;
  }
}
</style>
