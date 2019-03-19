<template>
  <div>
    <transition name="fade" appear>
      <vue-friendly-iframe id="avto-net" :src="url" @load="isLoaded" @document-load="isLoaded" />
    </transition>
  </div>
</template>

<script>
import VueFriendlyIframe from 'vue-friendly-iframe'
require('format-unicorn')

export default {
  components: {
    VueFriendlyIframe
  },
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
      isLoading: true,
      urlBase:
        'http://www.avto.net/_DEALERPAGES/results.asp?broker=12125&izpis={view}&znamka={model}&oblika={type}'
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
  },
  watch: {
    url() {
      this.isLoading = true
    }
  },
  methods: {
    isLoaded() {
      this.isLoading = false
    }
  }
}
</script>
<style lang="scss">
#cars-loader {
  width: 100%;
  height: 100vh;
  position: absolute;
  .md-progress-spinner {
    margin: 0 auto;
  }
}
#avto-net {
  iframe {
    width: 100%;
    height: 100vh;
    border: none;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
