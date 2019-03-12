<template>
  <div id="services-second" data-anchor="services-2" class="slide">
    <b-row />
    <b-row>
      <b-col>
        <div class="desc-wrapper">
          <h1>Prodaja in odkup vozil</h1>
          <p>
            Od leta 2010 se ukvarjamo s prodajo in odkupom novih in rabljenih vozil. Vsa vozila, ki jih prodajamo so tehnično brezhibna, 
            pregledana in očiščena. Če prodajate vozilo, ga ocenimo in odkupimo s takojšnjim plačilom ali ga vzamemo v račun pri nakupu
            drugega vozila iz naše ponudbe. Podatke o vozilu, ki ga želite prodati, nam sporočite kar preko kontaktnega obrazca.
            Lahko uredimo tudi uvoz avtomobil iz tujine po vaših željah. Za dodatne informacije nas pokličite...
          </p>
          <b-button size="lg" variant="primary" href="#kontakt">
            KONTAKTIRAJTE NAS ZDAJ
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#services-second {
  .row {
    margin: 0;
    height: 50vh;
    &:first-child {
      background-image: url(../static/img/bg-bmws.jpg);
      background-position-y: bottom;
      background-size: cover;
    }
  }
  .desc-wrapper {
    top: 50%;
    transform: translateY(-50%);
    position: relative;
    z-index: 99;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    p {
      font-size: 20px;
    }
  }
}
</style>
