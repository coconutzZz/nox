<template>
  <div id="services-first" data-anchor="services-1" class="slide">
    <b-row>
      <b-col>
        <div class="desc-wrapper">
          <h1>Storitve</h1>
          <p>
            Pri nas v pisarni lahko ob nakupu vozila takoj uredimo financiranje 
            in zavarovanje. Vse na enem mestu. Potrudili se bomo, da vam 
            omogočimo najbolj ugodno ponudbo kredita oz. leasinga.
          </p>
        </div>
        <div class="texture-bg" />
      </b-col>
    </b-row>
    <b-row class="service-desc">
      <b-col md="12" lg="4" class="service">
        <h2>Izberite financiranje</h2>
        <p>
          Za pridobite financiranja potrebujete:
          potrdilo o zaposlitvi, zadnje 3 plačilne 
          liste, osebni dokument, bančno kartico 
          in davčno številko.
        </p>
      </b-col>
      <b-col md="12" lg="4" class="service">
        <h2>Uredite zavarovanje</h2>
        <p>
          Pri nas v pisarni lahko uredite 
          najugodnejše zavarovanje  vašega 
          vozila. Sodelujemo z zavarovalnico 
          Generali in zavarovalnico Sava.
        </p>
      </b-col>
      <b-col md="12" lg="4" class="service">
        <h2>Garancija za vsa vozila</h2>
        <p>
          Za vozila, ki jih kupite pri nas vam 
          zagotavljamo 12 mesečno jamstvo.
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#services-first {
  background-image: url(../static/img/bg-audis.png);
  background-position-y: bottom;
  background-size: cover;
  .row:first-child {
    height: 50vh;
  }
  .service-desc {
    margin-top: 20px;
    .service {
      text-align: center;
      padding: 2% 6%;
      &:first-child {
        border-right: 1px solid #424242;
      }
      &:last-child {
        border-left: 1px solid #424242;
      }
      h2 {
        color: #b13030;
        font-size: 26px;
        padding: 20px;
      }
    }
  }
  .desc-wrapper {
    top: 50%;
    transform: translateY(-50%);
    position: relative;
    z-index: 99;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    p {
      font-size: 20px;
    }
  }
  .texture-bg {
    position: absolute;
    margin: 0 auto;
    width: 60%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../static/img/line-texture-bg-overlay.png);
    background-position-x: 0;
    background-position-y: 0;
    background-size: auto 10px;
    background-repeat: repeat;
    opacity: 0.65;
    filter: alpha(opacity=65); /* For IE8 and earlier */
  }
}
</style>
