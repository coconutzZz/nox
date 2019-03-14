<template>
  <div id="home" class="section">
    <div class="home-center">
      <h1>Prodaja in odkup vozil Nox.<br>Ponujamo le najboljše!</h1>
      <div class="desc-big">
        Najdete nas v Murski Soboti<br>na Markišavski ulici
      </div>
      <md-button class="md-raised md-primary" @click="$emit('show-cars')">
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
  .home-center {
    top: 40%;
    transform: translateY(-40%);
    position: relative;
    z-index: 99;
    text-align: center;
    h1 {
      color: #f6e095;
    }
    .desc-big {
      color: #fff;
      font-size: 25px;
    }
    button {
      margin-top: 20px;
    }
  }
  .texture-bg {
    position: absolute;
    width: 100%;
    height: 400px;
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
