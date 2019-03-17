<template>
  <div id="services" class="section">
    <div id="services-first" class="slide">
      <ServicesDescription />
    </div>
    <div v-for="service in services" :key="service.id" class="services-desc slide">
      <ServiceItem :classes="getServiceItemResponsiveClass()">
        <template v-slot:icon>
          <img :src="service.icon">
        </template>
        <template v-slot:header>
          {{ service.title }}
        </template>
        <template v-slot:caption>
          {{ service.text }}
        </template>
      </ServiceItem>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ServicesDescription from './services-description.vue'
import ServiceItem from '~/components/ServiceItem.vue'
export default {
  components: {
    ServicesDescription,
    ServiceItem
  },
  computed: {
    ...mapState('default', {
      services: state => state.services
    })
  },
  methods: {
    getResponsiveClass() {
      if (this.$mq === 'xs' || this.$mq === 'sm') {
        return 'slide'
      }
      return ''
    },
    getServiceItemResponsiveClass() {
      if (this.$mq === 'xs' || this.$mq === 'sm') {
        return 'center-desc'
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
#services {
  background-image: url(../static/img/bg-audis.png);
  background-position-y: bottom;
  background-size: cover;
  .md-caption {
    margin-top: 20px;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
  .center-desc {
    padding: 10px 20px;
  }
  .services-desc {
    h1 {
      color: #b13030;
    }
  }
}
</style>
