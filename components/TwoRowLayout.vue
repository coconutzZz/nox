<template>
  <div class="md-layout" :class="wrapperClass">
    <div class="md-layout-item md-size-100 first" />
    <div class="md-layout-item md-size-100 md-alignment-center-center second">
      <slot name="header" />
      <slot name="subheader" />      
      <slot name="default" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wrapperClass: {
      type: String,
      default: ''
    }
  }
}
</script>
