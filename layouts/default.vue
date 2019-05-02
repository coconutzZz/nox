<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:bold,normal');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');
@import 'fullpage.js/dist/fullpage.css';
@import '~vue-material/dist/theme/engine';
@include md-register-theme(
  'default',
  (
    primary: $primary,
    accent: $secondary
  )
);
@import '~vue-material/dist/theme/all';
@import 'vue-material/dist/vue-material.min.css';
@import '~assets/custom.scss';
</style>
