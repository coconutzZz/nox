<template>
  <div>
    <div class="text-center">
      <b-spinner label="Spinning" class="m-2" v-if="isLoading" />
      <iframe 
        id="avto-net"
        :class="{ 'loading': this.isLoading }"
        :key="key"
        :src="url"
        width="100%"
        border="0"
        @load="isLoaded()"
      />
    </div>
  </div>
</template>

<script>
require('format-unicorn')
export default {
  props: {
    selectedModel: {
      default: ''
    },
    selectedType: {
      default: ''
    }
  },
  data() {
    return {
      key: this.generateKey(),
      isLoading: true,
      urlBase:
        'http://www.avto.net/_DEALERPAGES/results.asp?broker=12125&izpis={view}&znamka={model}&oblika={type}'
    }
  },
  watch: {
    selectedModel() {
      this.key = this.generateKey()
    },
    selectedType() {
      this.key = this.generateKey()
    },
    url() {
      this.isLoading = true
    }
  },
  methods: {
    generateKey() {
      return crypto.getRandomValues(new Uint32Array(4)).join('-')
    },
    isLoaded() {
      this.isLoading = false
    }
  },
  computed: {
    url() {
      return this.urlBase.formatUnicorn({
        view: 1,
        model: this.selectedModel,
        type: this.selectedType
      })
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
