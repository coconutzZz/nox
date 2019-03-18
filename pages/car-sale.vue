<template>
  <div id="car-sale" data-anchor="prodaja-odkup" class="section">
    <TwoRowLayout>
      <template v-slot:header>
        Prodaja in odkup vozil
      </template>
      <template v-slot:default>
        Od leta 2010 se ukvarjamo s prodajo in odkupom novih in rabljenih vozil. Vsa vozila, ki jih prodajamo so tehnično brezhibna, 
        pregledana in očiščena. Če prodajate vozilo, ga ocenimo in odkupimo s takojšnjim plačilom ali ga vzamemo v račun pri nakupu
        drugega vozila iz naše ponudbe. Podatke o vozilu, ki ga želite prodati, nam sporočite kar preko kontaktnega obrazca.
        Lahko uredimo tudi uvoz avtomobil iz tujine po vaših željah. Za dodatne informacije nas pokličite...
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
  h1 {
    font-size: 30px;
    line-height: 30px;
  }
  .first {
    background-image: url(../static/img/bg-bmws.jpg);
    background-position-y: bottom;
    background-size: cover;
    height: 30vh;
  }
  .second {
    margin-top: 20px;
    text-align: center;
    padding: 10px;
  }
  @media (min-width: 600px) and (max-width: 1280px) {
    h1 {
      font-size: 50px;
      margin-bottom: 20px;
    }
    .first {
      height: 40vh;
    }
    .second {
      p.text {
        margin: 0 auto;
        width: 60%;
      }
    }
    button {
      margin-top: 20px;
    }
  }
  @media (min-width: 1280px) {
    h1 {
      font-size: 50px;
      margin-bottom: 20px;
    }
    .first {
      height: 50vh;
    }
    .second {
      p.text {
        margin: 0 auto;
        width: 60%;
      }
    }
    button {
      margin-top: 20px;
    }
  }
}
</style>
