<template>
  <div id="about" data-anchor="kontakt" class="section">
    <div class="md-layout md-alignment-center-center">
      <div class="md-layout-item md-medium-size-50 md-small-size-100">
        <div class="md-layout-item md-small-size-100 box-wrapper">
          <div class="box">
            <h1>Kje smo:</h1>
            <div><span class="bold">NOX, </span>trgovina in storitve, d.o.o.</div>
            <div><span class="bold">Markišavska ulica 15</span></div>
            <div><span class="bold">9000 Murska Sobota</span></div>
          </div>
        </div>
        <div class="md-layout-item md-small-size-100 box-wrapper">
          <div class="box">
            <h1>Kontakt:</h1>
            <div><span class="bold">E:</span> +386 31 650 725</div>
            <div><span class="bold">T:</span> nox@siol.net</div>
          </div>
        </div>
      </div>
      <div class="md-layout-item md-medium-size-50 md-small-hide filter">
        <div class="map">
          <GmapMap
            id="location"
            :center="{lat: 46.669661, lng: 16.172074}"
            :zoom="20"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#about {
  .box-wrapper {
    height: 50vh;
    background-color: #21566b;
    color: #fff;
    h1 {
      color: #f6e095;
      margin-bottom: 20px;
    }
    &:first-child {
      background-color: #fff;
      h1 {
        color: #424242;
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
    #location {
      height: 100vh;
      width: 100%;
    }
  }
}
</style>
