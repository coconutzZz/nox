<template>
  <div id="services-first" data-anchor="services-1" class="slide">    
    <div class="center-desc">
      <h1>Storitve</h1>
      <div class="md-subheading">Vse kar potrebujete - takoj.</div>
      <div class="md-caption">
        Pri nas v pisarni lahko ob nakupu vozila takoj uredimo financiranje 
        in zavarovanje. Vse na enem mestu. Potrudili se bomo, da vam 
        omogočimo najbolj ugodno ponudbo kredita oz. leasinga.
      </div>
      <md-button class="forward md-raised md-primary">
        Kontaktirajte nas
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 'financiranje',
          title: 'Financiranje',
          text: `Za pridobite financiranja potrebujete:
          potrdilo o zaposlitvi, zadnje 3 plačilne 
          liste, osebni dokument, bančno kartico 
          in davčno številko.`
        },
        {
          id: 'zavarovanje',
          title: 'Zavarovanje',
          text: `Pri nas v pisarni lahko uredite 
          najugodnejše zavarovanje  vašega 
          vozila. Sodelujemo z zavarovalnico 
          Generali in zavarovalnico Sava.`
        },
        {
          id: 'garancija',
          title: 'Garancija',
          text: `Za vozila, ki jih kupite pri nas vam 
          zagotavljamo 12 mesečno jamstvo.`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#services-first {
  .md-subheading {
    text-transform: uppercase;
    color: #b13030;
    font-weight: 400;
  }
  .center-desc {
    top: 45%;
    transform: translateY(-45%);
    position: relative;
    z-index: 99;
    text-align: center;
    width: 70%;
    margin: 0 auto;
  }
  .texture-bg {
    position: relative;
    margin: 0 auto;
    width: 50%;
    height: 50%;
    background: url(../static/img/line-texture-bg-overlay.png);
    background-position-x: 0;
    background-position-y: 0;
    background-size: auto 10px;
    background-repeat: repeat;
    opacity: 0.3;
    filter: alpha(opacity=3); /* For IE8 and earlier */
  }
  button {
    margin-top: 40px;
  }
}
</style>
