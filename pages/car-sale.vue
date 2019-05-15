<template>
  <div id="car-sale" class="slide md-layout md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-40 md-large-size-50 md-small-size-60 md-xsmall-size-90">
      <h1>Prodaja in odkup vozil</h1>
      <p class="text">
        Od leta 2010 se ukvarjamo s prodajo in odkupom novih in rabljenih vozil. Vsa vozila, ki jih prodajamo so tehnično brezhibna, 
        pregledana in očiščena. Če prodajate vozilo, ga ocenimo in odkupimo s takojšnjim plačilom ali ga vzamemo v račun pri nakupu
        drugega vozila iz naše ponudbe. Podatke o vozilu, ki ga želite prodati, nam sporočite kar preko kontaktnega obrazca.
        Lahko uredimo tudi uvoz avtomobil iz tujine po vaših željah. Za dodatne informacije nas pokličite...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullpage: {
      default: null,
      type: Object
    }
  }
}
</script>

<style lang="scss">
#car-sale {
  background-image: url(../static/img/bg-bmws.png);
  background-position-y: top;
  background-size: cover;
  height: 100vh;
  text-align: center;
  .md-layout-item {
    padding: 20px;
    background-color: #fff;
  }
}
</style>
