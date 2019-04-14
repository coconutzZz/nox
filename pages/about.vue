<template>
  <div id="about" data-anchor="kje-smo" class="section">
    <div class="md-layout md-alignment-center-center">
      <div class="md-layout-item md-medium-size-50 md-small-size-100">
        <div class="md-layout-item md-small-size-100 box-wrapper" :style="{ height: height/2 + 'px' }">
          <div class="box">
            <h1>Kje smo:</h1>
            <div><span class="bold">NOX, </span>trgovina in storitve, d.o.o.</div>
            <div><span class="bold">Markišavska ulica 15</span></div>
            <div><span class="bold">9000 Murska Sobota</span></div>
          </div>
        </div>
        <div class="md-layout-item md-small-size-100 box-wrapper" :style="{ height: height/2 + 'px' }">
          <div class="box">
            <h1>Kontakt:</h1>
            <div><span class="bold">E:</span> nox@siol.net</div>
            <div><span class="bold">T:</span> +386 31 650 725</div>
          </div>
        </div>
      </div>
      <div class="md-layout-item md-medium-size-50 md-small-hide filter">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.882881490937!2d16.1719643158264!3d46.6685733602936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f3eeb421cae89%3A0xca0ba612203d6d71!2sMarki%C5%A1avska+ulica+15%2C+9000+Murska+Sobota!5e0!3m2!1ssl!2ssi!4v1458568789861"            
            frameborder="0"            
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return { height: 0 }
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
      this.height = window.innerHeight
    }
  }
}
</script>

<style lang="scss">
#about {
  .box-wrapper {
    background-color: #21566b;
    color: #fff;
    h1 {
      color: #fff;
      margin-bottom: 20px;
    }
    &:first-child {
      background-color: #fff;
      h1 {
        color: $primary;
      }
      color: #424242;
    }
    .box {
      width: 60%;
      text-align: left;
      margin: 0 auto;
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
  .map {
    iframe {
      border: 0;
      height: 100vh;
      width: 100%;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .box {
      font-size: 16px;
    }
  }
  @media (min-width: 960px) and (max-width: 1280px) {
    .box {
      font-size: 18px;
    }
  }
  @media (min-width: 1280px) {
    .box {
      font-size: 20px;
    }
  }
}
</style>
