<template>
  <div id="contact" class="section">
    <div class="column">
      <div class="info-wrapper">
        <div class="info">
          <h1>Kje smo:</h1>
          <div><span class="bold">NOX, </span>trgovina in storitve, d.o.o.</div>
          <div><span class="bold">Markišavska ulica 15</span></div>
          <div><span class="bold">9000 Murska Sobota</span></div>
        </div>
      </div>
      <div class="info-wrapper blue">
        <div class="info">
          <h1>Kontakt:</h1>
          <div><span class="bold">E:</span> +386 31 650 725</div>
          <div><span class="bold">T:</span> nox@siol.net</div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="map">
        <GmapMap
          id="location"
          :center="{lat: 46.669661, lng: 16.172074}"
          :zoom="20"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#contact {
  display: flex;
  flex-direction: row;
  .column {
    display: flex;
    width: 50%;
    flex-direction: column;
    > div {
      flex: 1;
      font-size: 20px;
    }
    .info-wrapper {
      &.blue {
        background-color: #21566b;
        color: #fff;
        h1 {
          color: #f6e095;
        }
      }
      .info {
        width: 40%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: left;
        margin: 0 auto;
      }
    }
    .map {
      #location {
        height: 100vh;
        width: 100%;
      }
    }
  }
}
</style>
