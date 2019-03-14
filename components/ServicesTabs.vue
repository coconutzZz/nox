<template>
  <md-tabs class="md-default" md-alignment="centered">
    <md-tab v-for="service in services" :key="service.id" :id="'tab-' + service.id" :md-label="service.title">
      <div>{{ service.text }}</div>
    </md-tab>
  </md-tabs>
</template>

<script>
export default {
  props: {
    services: Array
  }
}
</script>

<style lang="scss">
.md-tabs {
  width: 100%;
  .button {
    width: 30%;
  }
  .md-content {
    div {
      padding: 20px;
    }
  }
}
</style>
