<template>
  <div class="modal-wrapper">
    <b-row>
      <b-col md="12" lg="9" xl="8">
        <Cars />
      </b-col>
      <b-col md="12" lg="3" xl="4">
        <div class="close-modal" @click="this.hide">
          <span />
          <span />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Cars from '~/pages/cars'

export default {
  components: {
    Cars
  },
  methods: {
    hide() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: #fff;
}
.close-modal {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  span {
    display: block;
    width: 40px;
    height: 4px;
    background-color: #21566b;
    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg) translate(2px, -3px);
    }
  }
}
</style>
