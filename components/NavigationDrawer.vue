<template>
  <div class="drawer">
    <md-speed-dial class="md-bottom-right" :class="this.showNavigation ? 'active' : ''" md-event="click" md-direction="top">
      <md-speed-dial-target class="md-primary" @click="toggleMenu()">
        <md-icon v-if="!this.showNavigation">
          menu
        </md-icon>
        <md-icon v-else>
          close
        </md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
    <md-drawer :md-active.sync="showNavigation" :md-right="true" md-persistent="full">
      <img class="logo" src="../static/img/nox-logo.png" title="Nox d.o.o. - Prodaja Vozil" alt="Nox d.o.o. - Prodaja Vozil" @click="onClick('intro')">
      <md-list>
        <md-list-item v-for="item in items" :key="item.anchor" @click="onClick(item)">
          <span class="md-list-item-text">{{ item.text }}</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>  
</template>

<script>
export default {
  props: {
    items: Array,
    itemClick: Function
  },
  data() {
    return {
      showNavigation: false
    }
  },
  methods: {
    onClick(item) {
      this.showNavigation = false
      this.itemClick(item)
    },
    toggleMenu() {
      this.showNavigation = !this.showNavigation
    }
  }
}
</script>

<style lang="scss">
.drawer {
  .logo {
    margin: 0 auto;
    padding: 20px 0;
    cursor: pointer;
  }
  .md-speed-dial {
    z-index: 10;
    &.active {
      button {
        background-color: $secondary !important;
      }
    }
  }
  .md-drawer {
    text-align: center;
    padding-top: 100px;
    .md-list-item {
      display: block;
      .md-list-item-text {
        overflow: break-word;
        padding: 5px 20px 5px 15px;
        text-transform: uppercase;
        font-family: Heavitas, 'Arial Black', Helvetica, sans-serif;
        font-size: 20px;
        color: $primary;
        transform: translateY(0);
      }
    }
    &.md-active {
      .md-list-item {
        .md-list-item-text {
          transition: transform 0.5s cubic-bezier(0.24, 0.72, 0.35, 1.01);
        }
      }
    }
  }
}
</style>
