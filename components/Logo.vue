<template>
  <md-card md-with-hover class="md-primary logo" :class="'active-slide-' + active">
    <md-ripple>
      <img class="img-fluid" src="../static/img/nox-logo.png" title="Nox d.o.o. - Prodaja Vozil" alt="Nox d.o.o. - Prodaja Vozil" @click="onClick">
    </md-ripple>
  </md-card>
</template>

<script>
export default {
  props: {
    logoClick: Function,
    active: Number
  },
  methods: {
    onClick() {
      this.logoClick()
    }
  }
}
</script>
