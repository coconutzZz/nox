<template>
  <div :class="classes">
    <div class="icon-wrapper">
      <slot name="icon" />
    </div>
    <slot name="header" />
    <slot name="subheader" />
    <slot name="text" />
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
