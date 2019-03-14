<template>
  <div id="home" class="section">
    <div class="center-desc">
      <h1>Prodaja in odkup vozil Nox. Ponujamo le najboljše!</h1>
      <div class="md-subheading">
        Najdete nas v Murski Soboti<br>na Markišavski ulici
      </div>
      <md-button class="forward md-raised md-primary" @click="$emit('show-cars')">
        PREVERITE PONUDBO
      </md-button>
    </div>
    <div class="texture-bg" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#home {
  background-image: url(../static/img/main-bg.jpg);
  background-position-y: bottom;
  background-size: cover;
  .center-desc {
    top: 45%;
    transform: translateY(-45%);
    position: relative;
    z-index: 99;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    h1 {
      color: #f6e095;
    }
    .md-subheading {
      color: #fff;
    }
    button {
      margin-top: 10px;
    }
  }
  .texture-bg {
    position: absolute;
    left: 15%;
    width: 70%;
    height: 50%;
    top: 40%;
    transform: translate(0, -40%);
    background: url(../static/img/line-texture-bg-overlay.png);
    background-position-x: 0;
    background-position-y: 0;
    background-size: auto 10px;
    background-repeat: repeat;
    opacity: 0.65;
    filter: alpha(opacity=65); /* For IE8 and earlier */
  }
}
</style>
