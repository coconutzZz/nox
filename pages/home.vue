<template>
  <div id="home" data-anchor="domov" class="section">
    <div class="center-desc">
      <div class="headline overflow-container animate">
        <div class="overflow-inner" :class="animate">
          <h1>Prodaja in odkup vozil.<br> Ponujamo le najboljše!</h1>
        </div>
      </div>
      <div class="overflow-container">
        <div class="overflow-inner" :class="animate">
          <p class="text">
            Obiščite nas in se prepričajte!<br>
            Najdete nas v Murski Soboti na Markišavski ulici
          </p>
        </div>
      </div>
      <md-button class="forward md-raised md-primary big" @click="$emit('show-cars')">
        PREVERITE PONUDBO
      </md-button>
    </div>
    <div class="texture-bg" :class="animate" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      animate: ''
    }
  },
  watch: {
    activeSlide(newVal, oldVal) {
      if (newVal === 0) {
        this.addAnimationClass()
      } else {
        this.removeAnimationClass()
      }
    }
  },
  mounted() {
    this.addAnimationClass()
  },
  computed: {
    ...mapState('default', {
      activeSlide: state => state.activeSlide
    })
  },
  methods: {
    addAnimationClass() {
      setTimeout(() => {
        this.animate = 'animate'
      }, 300)
    },
    removeAnimationClass() {
      this.animate = ''
    }
  }
}
</script>

<style lang="scss" >
.overflow-container {
  overflow: hidden;
  display: block;
}
.overflow-inner {
  overflow: hidden;
  transform: translateY(100%);
  transition-delay: 1s;
  display: block;
  &.animate {
    transform: translateY(0);
    transition: transform 0.8s cubic-bezier(0.24, 0.72, 0.35, 1.01);
    transition-property: transform;
    transition-duration: 0.8s;
    transition-timing-function: cubic-bezier(0.24, 0.72, 0.35, 1.01);
  }
}
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
      line-height: 60px;
      color: #288096;
    }
    button {
      margin-top: 20px;
    }
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
      transform: translate(calc(-50% + 800px), calc(-50% - 800px))
        rotate(-45deg);
    }
    &:after {
      background-position: 0 2px;
      transform: translate(calc(-50% - 800px), calc(-50% + 800px))
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
