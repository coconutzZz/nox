<template>
  <ServiceItem :classes="slotClasses">
    <template v-slot:header>
      Storitve
    </template>
    <template v-slot:subheader>
      <div class="md-subheading">
        Vse kar potrebujete - takoj.
      </div>
    </template>
    <template v-slot:caption>
      Pri nas v pisarni lahko ob nakupu vozila takoj uredimo financiranje 
      in zavarovanje. Vse na enem mestu. Potrudili se bomo, da vam 
      omogočimo najbolj ugodno ponudbo kredita oz. leasinga.
    </template>
    <template v-slot:default>
      <md-button class="forward md-raised md-primary">
        Kontaktirajte nas
      </md-button>
    </template>
  </ServiceItem>
</template>

<script>
import ServiceItem from '~/components/ServiceItem.vue'
export default {
  components: {
    ServiceItem
  },
  data() {
    return {
      slotClasses: 'center-desc'
    }
  }
}
</script>

<style lang="scss">
#services-first {
  .md-subheading {
    font-weight: 400;
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
