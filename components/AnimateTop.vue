<template>
  <div class="overflow-container">
    <div class="overflow-inner" :class="animate">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    animate: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.overflow-container {
  overflow: hidden;
  display: block;
}
.overflow-inner {
  overflow: hidden;
  transform: translateY(100%);
  transition-delay: 2s;
  display: block;
  &.animate {
    transform: translateY(0);
    transition: transform 0.8s cubic-bezier(0.24, 0.72, 0.35, 1.01);
    transition-property: transform;
    transition-duration: 0.8s;
    transition-timing-function: cubic-bezier(0.24, 0.72, 0.35, 1.01);
  }
}
</style>
