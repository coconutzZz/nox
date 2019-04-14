<template>
  <div>
    <vue-friendly-iframe
      id="avto-net"
      ref="cars"
      :src="url"
      :style="this.iframeStyle"
      @load="isLoaded"
      @document-load="isLoaded"
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
      isLoading: true,
      urlBase:
        'http://www.avto.net/_DEALERPAGES/results.asp?broker=12125&izpis={view}&znamka={model}&oblika={type}',
      height: 0,
      width: 0
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
      if (this.$mq === 'xs') {
        if (this.width <= 600 && this.width > 480) {
          return {
            height: this.height * 1.1 + 'px',
            width: this.width * 1 + 'px'
          }
        }
        return {
          height: this.height * 2 + 'px',
          width: this.width * 2 + 'px'
        }
      } else if (this.$mq === 'sm') {
        return {
          height: this.height * 1.1 + 'px',
          width: this.width * 1 + 'px'
        }
      }
      return {
        height: this.height + 'px'
      }
    }
  },
  watch: {
    url() {
      this.isLoading = true
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  mounted() {
    // eslint-disable-next-line
    console.log(this.$refs.cars)
  },
  methods: {
    isLoaded() {
      this.isLoading = false
    },
    handleResize() {
      this.height = window.innerHeight
      this.width = window.innerWidth
    }
  }
}
</script>
<style lang="scss">
#avto-net {
  width: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  iframe {
    width: 100%;
    border: none;
    height: inherit;
  }
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/
/*
@media (min-width: 1025px) and (max-width: 1280px) {
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
*/
/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
/*
@media (min-width: 768px) and (max-width: 1024px) {
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
}*/

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  #avto-net {
    iframe {
      -ms-zoom: 1;
      -moz-transform: scale(1);
      -moz-transform-origin: 0 0;
      -o-transform: scale(1);
      -o-transform-origin: 0 0;
      -webkit-transform: scale(1);
      -webkit-transform-origin: 0 0;
    }
  }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  #avto-net {
    iframe {
      -ms-zoom: 0.9;
      -moz-transform: scale(0.9);
      -moz-transform-origin: 0 0;
      -o-transform: scale(0.9);
      -o-transform-origin: 0 0;
      -webkit-transform: scale(0.9);
      -webkit-transform-origin: 0 0;
    }
  }
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
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
</style>
