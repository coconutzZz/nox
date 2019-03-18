<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100 first" />
    <div class="md-layout-item md-size-100 second">
      <h1><slot name="header" /></h1>
      <slot name="subheader" />      
      <p class="text"><slot name="default" /></p>
    </div>
  </div>
</template>

<script>
export default {}
</script>
