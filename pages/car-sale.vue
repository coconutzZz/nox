<template>
  <div id="car-sale" class="slide">
    <div class="md-layout">
      <div class="md-layout-item md-size-100 first" />
      <div class="md-layout-item md-size-100 second">
        <div class="md-layout md-alignment-center-center">
          <div class="md-layout-item md-size-80 md-xsmall-size-100">
            <h1>Prodaja in odkup vozil</h1>
            <p class="text">
              Od leta 2010 se ukvarjamo s prodajo in odkupom novih in rabljenih vozil. Vsa vozila, ki jih prodajamo so tehnično brezhibna, 
              pregledana in očiščena. Če prodajate vozilo, ga ocenimo in odkupimo s takojšnjim plačilom ali ga vzamemo v račun pri nakupu
              drugega vozila iz naše ponudbe. Podatke o vozilu, ki ga želite prodati, nam sporočite kar preko kontaktnega obrazca.
              Lahko uredimo tudi uvoz avtomobil iz tujine po vaših željah. Za dodatne informacije nas pokličite...
              <md-button v-if="$mq !== 'xs'" class="forward md-raised md-primary">
                KONTAKTIRAJTE NAS
              </md-button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#car-sale {
  .first {
    background-image: url(../static/img/bg-bmws.jpg);
    background-position-y: bottom;
    background-size: cover;
    height: 30vh;
  }
  .second {
    padding: 20px;
    h1 {
      text-align: center;
    }
  }
  @media (min-width: 600px) and (max-width: 1280px) {
    .first {
      height: 40vh;
    }
  }
  @media (min-width: 1280px) {
    .first {
      height: 50vh;
    }
  }
}
</style>
