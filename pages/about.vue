<template>
  <div id="contact" class="section">
    <b-row>
      <b-col md-6>
        <b-row>
          <b-col md-12 class="info">
            <b-row>
              <b-col>
                <div class="about-info">
                  <h1>Obiščite nas:</h1>
                  <div />
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <div class="about-info">
                  <h1>Kontakt:</h1>
                  <div><span class="bold">E:</span> +386 31 650 725</div>
                  <div><span class="bold">T:</span> nox@siol.net</div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col md-6 class="map">
        <GmapMap
          id="location"
          :center="{lat: 46.669661, lng: 16.172074}"
          :zoom="20"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#contact {
  .info {
    .row {
      height: 50vh;
      font-size: 20px;
      h1 {
        font-size: 45px;
      }
      &:last-child {
        background-color: #21566b;
        color: #fff;
        h1 {
          color: #f6e095;
        }
      }
      .about-info {
        width: 40%;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .map {
    height: 100vh;
    padding: 0;
    #location {
      height: 100vh;
      width: 100%;
    }
  }
}
</style>
