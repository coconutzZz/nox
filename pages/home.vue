<template>
  <div id="home" data-anchor="intro" class="section">
    <div class="md-layout md-gutter md-alignment-center-center">
      <div class="md-layout-item md-size-80 md-xsmall-size-100">
        <ActivateAnimationOnSlide :activate-on-slide="0">
          <template v-slot:default="animate">
            <AnimateTop :animate="animate.animate">
              <h1>
                Prodaja in odkup vozil.<br> Ponujamo le najboljše!
              </h1>
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
        <md-button class="forward md-raised md-primary big" @click="toggleCars()">
          PREVERITE PONUDBO
        </md-button>
      </div>
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
import { mapActions } from 'vuex'
import ActivateAnimationOnSlide from '~/components/ActivateAnimationOnSlide.vue'
import AnimateTop from '~/components/AnimateTop.vue'
export default {
  components: {
    ActivateAnimationOnSlide,
    AnimateTop
  },
  methods: {
    ...mapActions('default', ['toggleCars'])
  }
}
</script>

<style lang="scss">
#home {
  background-image: url(../static/img/main-bg.jpg);
  background-position-y: bottom;
  background-size: cover;
  .md-layout {
    height: 100vh;
    text-align: center;
  }
  h1 {
    color: $secondary;
  }
  button {
    margin-top: 20px;
  }

  .texture-bg {
    position: absolute;
    width: 50%;
    height: 60%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    opacity: 0.85;
    z-index: 0;
    filter: alpha(opacity=85); /* For IE8 and earlier */
    &:before,
    &:after {
      content: '';
      background: url(../static/img/line-texture-horizontal.png);
      background-position-x: 0;
      background-position-y: 0;
      background-size: auto 10px;
      background-repeat: repeat;
      width: 200%;
      height: 200%;
      transition-delay: 1s;
      left: 50%;
      top: 50%;
      position: absolute;
    }
    &:before {
      background-position: 0 0;
      transform: translate(calc(-50% + 1200px), calc(-50% - 1200px))
        rotate(-45deg);
    }
    &:after {
      background-position: 0 2px;
      transform: translate(calc(-50% - 1200px), calc(-50% + 1200px))
        rotate(-45deg);
    }
    &.animate {
      &:before,
      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
        transition: transform 1s cubic-bezier(0.24, 0.72, 0.35, 1.01);
        transition-delay: 0.75s;
      }
    }
  }
}
</style>
