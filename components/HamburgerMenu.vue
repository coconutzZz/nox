<template>
  <div id="menuToggle">
    <input type="checkbox" v-model="checked">
    <md-button class="md-fab md-primary" @click="!checked">
      <md-icon>menu</md-icon>
    </md-button>
    <ul id="menu">
      <a v-for="item in items" :key="item.link" :href="item.link" @click="onClick(item.id)">
        <li>{{ item.text }}</li>
      </a>
    </ul>
  </div>  
</template>

<script>
export default {
  props: {
    items: Array
  },
  data() {
    return {
      checked: false
    }
  },
  methods: {
    onClick(id) {
      if (id === 1) {
        this.$emit('show-cars')
      }
    }
  }
}
</script>

<style lang="scss">
#menuToggle {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
    &:checked {
      ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(7px, -3px);
        background-color: #21566b;
        z-index: 1;
        &:nth-last-child(3) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }
        &:nth-last-child(2) {
          transform: rotate(-45deg) translate(2px, 8px);
        }
      }
      ~ #menu {
        transform: none;
      }
    }
  }
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #fff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }
}
#menu {
  position: absolute;
  width: 400px;
  height: 110vh;
  background-color: #fff;
  margin: -100px 0 0 0;
  padding: 50px;
  padding-top: 125px;
  right: -100px;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 100% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 0;
  a {
    text-decoration: none;
    color: #21566b;
  }
  li {
    padding: 10px 0;
    font-size: 22px;
  }
}
</style>
