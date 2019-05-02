<template>  
  <ul v-if="!showCars" id="main-menu" :class="'active-slide-' + activeSlide">
    <li v-for="item in items" :key="item.anchor">      
      <a :href="item.link" @click="onClick(item)">{{ item.text }}</a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    items: Array,
    itemClick: Function
  },
  computed: {
    ...mapState('default', {
      activeSlide: state => state.activeSlide,
      showCars: state => state.showCars
    })
  },
  methods: {
    onClick(item) {
      this.itemClick(item)
    }
  }
}
</script>

<style lang="scss">
#main-menu {
  &.active-slide-0 {
    li {
      a {
        color: #fff;
        &:after {
          background-color: #fff;
        }
      }
      padding: 0 10px;
    }
    top: 20px;
    right: 20px;
  }
  top: 5px;
  right: 5px;
  position: fixed;
  z-index: 70;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  letter-spacing: 1px;
  font-size: 1.1em;
  font-weight: 400;
  transition: all 0.3s;
  li {
    padding: 0 5px;
    display: inline-block;
    a {
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
      position: relative;
      color: $primary;
      &:after {
        height: 0px;
        background-color: $primary;
        display: block;
        position: absolute;
        content: '';
        bottom: -5px;
        left: 50%;
        width: 0px;
        transition: all 0.3s;
      }
      &.active,
      &:hover {
        &:after {
          height: 3px;
          width: 40px;
          transform: translate(-20px);
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
