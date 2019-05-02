<template>
  <div class="iframe-wrapper">
    <div v-if="documentLoading" class="iframe-loading">
      <md-progress-spinner md-mode="indeterminate" />
    </div>
    <vue-friendly-iframe
      id="avto-net"
      ref="cars"
      :src="url"
      :style="this.iframeStyle"
      @load="onLoad"
      @document-load="onDocumentLoad"
    />
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
      urlBase:
        'http://www.avto.net/_DEALERPAGES/results.asp?broker=12125&izpis={view}&znamka={model}&oblika={type}',
      size: {
        height: 0,
        width: 0
      },
      iframeLoading: true,
      documentLoading: true
    }
  },
  computed: {
    url() {
      return this.urlBase.formatUnicorn({
        view: 1,
        model: this.selectedModel,
        type: this.selectedType
      })
    },
    iframeStyle() {
      if (this.size.width >= 600 && this.size.width < 768) {
        return {
          height: this.size.height + this.size.height * 0.25 - 48 + 'px',
          width: this.size.width + this.size.width * 0.25 + 'px',
          margin: 0 + ' auto',
          display: this.iframeLoading ? 'none' : 'block'
        }
      }
      if (this.size.width < 600) {
        return {
          height: (this.size.height - 48) * 2 + 'px',
          width: this.size.width * 2 + 'px',
          margin: 0 + ' auto',
          display: this.iframeLoading ? 'none' : 'block'
        }
      }
      return {
        height: this.size.height - 48 + 'px',
        margin: 0 + ' auto',
        display: this.iframeLoading ? 'none' : 'block'
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.size.height = window.innerHeight
      this.size.width = window.innerWidth
    },
    onLoad() {
      this.iframeLoading = false
    },
    onDocumentLoad() {
      this.documentLoading = false
    }
  }
}
</script>
<style lang="scss">
.iframe-loading {
  z-index: 1;
  position: relative;
  .md-progress-spinner {
    left: 50%;
    transform: translate(50, 50);
    margin-top: 20px;
  }
}
#avto-net {
  width: 100%;
  height: 100vh;
  -webkit-overflow-scrolling: touch !important;
  overflow-y: scroll !important;
  iframe {
    width: 100%;
    border: none;
    height: inherit;
    position: relative;
    z-index: 1;
  }
}
@media (min-width: 320px) and (max-width: 599px) {
  #avto-net {
    iframe {
      -ms-zoom: 0.5;
      -moz-transform: scale(0.5);
      -moz-transform-origin: 0 0;
      -o-transform: scale(0.5);
      -o-transform-origin: 0 0;
      -webkit-transform: scale(0.5);
      -webkit-transform-origin: 0 0;
    }
  }
}
@media (min-width: 600px) and (max-width: 767px) {
  #avto-net {
    iframe {
      -ms-zoom: 0.75;
      -moz-transform: scale(0.75);
      -moz-transform-origin: 0 0;
      -o-transform: scale(0.75);
      -o-transform-origin: 0 0;
      -webkit-transform: scale(0.75);
      -webkit-transform-origin: 0 0;
    }
  }
}
</style>
