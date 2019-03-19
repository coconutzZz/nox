<template>
  <div id="home" data-anchor="domov" class="section">
    <div class="center-desc">
      <h1>Prodaja in odkup vozil Nox.<br> Ponujamo le najboljše!</h1>
      <div>
        <p class="text">
          Najdete nas v Murski Soboti<br>na Markišavski ulici
        </p>
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
    top: 35%;
    transform: translateY(-35%);
    position: relative;
    z-index: 99;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    h1 {
      color: #f6e095;
    }
    .md-caption {
      color: #fff;
    }
    button {
      margin-top: 20px;
    }
  }
  .texture-bg {
    position: absolute;
    width: 100%;
    height: 50%;
    top: 30%;
    transform: translateY(-30%);
    background: url(../static/img/line-texture-bg-overlay.png);
    background-position-x: 0;
    background-position-y: 0;
    background-size: auto 10px;
    background-repeat: repeat;
    opacity: 0.85;
    filter: alpha(opacity=85); /* For IE8 and earlier */
  }
  @media (min-width: 1280px) {
    .texture-bg {
      top: 20%;
      transform: translateY(-20%);
      height: 40%;
    }
    .center-desc {
      top: 25%;
      transform: translateY(-25%);
    }
  }
}
</style>
