<template>
  <ServiceItem id="main-desc" classes="center-desc">
    <template v-slot:header>
      <ActivateAnimationOnSlide :activate-on-slide="1">
        <template v-slot:default="animate">
          <AnimateTop :animate="animate.animate">            
            <h1>Storitve</h1>
          </AnimateTop>
        </template>
      </ActivateAnimationOnSlide>
    </template>
    <template v-slot:subheader>
      <ActivateAnimationOnSlide :activate-on-slide="1">
        <template v-slot:default="animate">
          <AnimateTop :animate="animate.animate">            
            <h2>Vse kar potrebujete - takoj.</h2>
          </AnimateTop>
        </template>
      </ActivateAnimationOnSlide>
    </template>
    <template v-slot:text>
      <ActivateAnimationOnSlide :activate-on-slide="1">
        <template v-slot:default="animate">
          <AnimateTop :animate="animate.animate">          
            <p class="text">
              Pri nas v pisarni lahko ob nakupu vozila takoj uredimo financiranje 
              in zavarovanje. Vse na enem mestu. Potrudili se bomo, da vam 
              omogočimo najbolj ugodno ponudbo kredita oz. leasinga.
            </p>
          </AnimateTop>
        </template>
      </ActivateAnimationOnSlide>
    </template>
  </ServiceItem>
</template>

<script>
import ActivateAnimationOnSlide from '~/components/ActivateAnimationOnSlide.vue'
import AnimateTop from '~/components/AnimateTop.vue'
import ServiceItem from '~/components/ServiceItem.vue'
export default {
  components: {
    ActivateAnimationOnSlide,
    AnimateTop,
    ServiceItem
  }
}
</script>

<style lang="scss">
#main-desc {
  h1 {
    margin-bottom: 0px;
  }
  &.center-desc {
    top: 45%;
    transform: translateY(-45%);
    position: relative;
    z-index: 9;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
