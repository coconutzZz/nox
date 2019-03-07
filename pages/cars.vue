<template>
  <div>    
    <iframe
      id="avto-net"
      :key="key"
      :src="url + selectedBrand"
      width="100%"
      border="0"
    />    
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: this.generateKey(),
      selectedBrand: 504,
      url:
        'http://www.avto.net/_DEALERPAGES/results.asp?broker=12125&izpis=1&znamka='
    }
  },
  watch: {
    selectedBrand() {
      this.key = this.generateKey()
    }
  },
  methods: {
    generateKey() {
      return crypto.getRandomValues(new Uint32Array(4)).join('-')
    }
  }
}
</script>
<style lang="scss">
#avto-net {
  width: 100%;
  height: 100vh;
  border: none;
}
</style>
