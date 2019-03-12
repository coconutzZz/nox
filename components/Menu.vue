<template>  
  <ul id="main-menu">
    <li v-for="item in items" :key="item.link">
      <a :href="item.link" :data-menuanchor="item.anchor" @click="onClick(item.id)">{{ item.text }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array
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
#main-menu {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 70;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  letter-spacing: 1px;
  font-size: 1.1em;
  font-weight: 400;
  li {
    padding: 0 10px;
    display: inline-block;
    a {
      text-decoration: none;
      text-transform: uppercase;
      position: relative;
      color: #fff;
      &:after {
        height: 0px;
        background-color: #fff;
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
