<template>
  <div id="home" class="section">
    <div class="center-desc">
      <ActivateAnimationOnSlide :activate-on-slide="0">
        <template v-slot:default="animate">
          <AnimateTop :animate="animate.animate">
            <h1>Prodaja in odkup vozil.<br> Ponujamo le najboljše!</h1>
          </AnimateTop>
        </template>
      </ActivateAnimationOnSlide>
      <ActivateAnimationOnSlide :activate-on-slide="0">
        <template v-slot:default="animate">
          <AnimateTop :animate="animate.animate">
            <p class="text">
              Obiščite nas in se prepričajte!<br>
              Najdete nas v Murski Soboti na Markišavski ulici
            </p>            
          </AnimateTop>
        </template>
      </ActivateAnimationOnSlide>
      <md-button class="forward md-raised md-primary big" @click="$emit('show-cars')">
        PREVERITE PONUDBO
      </md-button>
    </div>
    <ActivateAnimationOnSlide :activate-on-slide="0">
      <template v-slot:default="animate">
        <div class="texture-bg" :class="animate.animate" />
      </template>
    </ActivateAnimationOnSlide>
    <div class="arrow down bounce" />
  </div>
</template>

<script>
import ActivateAnimationOnSlide from '~/components/ActivateAnimationOnSlide.vue'
import AnimateTop from '~/components/AnimateTop.vue'
export default {
  components: {
    ActivateAnimationOnSlide,
    AnimateTop
  }
}
</script>

<style lang="scss">
#home {
  background-image: url(../static/img/main-bg.jpg);
  background-position-y: bottom;
  background-size: cover;
  .center-desc {
    top: 50%;
    transform: translateY(-50%);
    position: relative;
    z-index: 99;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    h1 {
      color: $secondary;
    }
    button {
      margin-top: 20px;
    }
  }
}
</style>
