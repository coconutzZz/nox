<template>
  <div id="car-sale" data-anchor="prodaja-odkup" class="section">
    <TwoRowLayout>
      <template v-slot:header>
        Prodaja in odkup vozil
      </template>
      <template v-slot:default>
        <p>
          Od leta 2010 se ukvarjamo s prodajo in odkupom novih in rabljenih vozil. Vsa vozila, ki jih prodajamo so tehnično brezhibna, 
          pregledana in očiščena. Če prodajate vozilo, ga ocenimo in odkupimo s takojšnjim plačilom ali ga vzamemo v račun pri nakupu
          drugega vozila iz naše ponudbe. Podatke o vozilu, ki ga želite prodati, nam sporočite kar preko kontaktnega obrazca.
          Lahko uredimo tudi uvoz avtomobil iz tujine po vaših željah. Za dodatne informacije nas pokličite...
        </p>
        <md-button class="forward md-raised md-primary">
          KONTAKTIRAJTE NAS
        </md-button>
      </template>
    </TwoRowLayout>
  </div>
</template>

<script>
import TwoRowLayout from '~/components/TwoRowLayout.vue'
export default {
  components: {
    TwoRowLayout
  }
}
</script>

<style lang="scss">
#car-sale {
  .first {
    background-image: url(../static/img/bg-bmws.jpg);
    background-position-y: bottom;
    background-size: cover;
  }
}
</style>
