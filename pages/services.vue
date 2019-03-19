<template>
  <div id="services" class="section fp-auto-height-responsive">
    <div class="md-layout">
      <div id="services-first" class="md-layout-item md-size-100">
        <ServicesDescription />
      </div>
      <div v-for="service in services" :key="service.id" class="services-desc md-layout-item md-small-size-100 md-large-size-33">
        <ServiceItem classes="center-desc">
          <template v-slot:icon>
            <img :src="service.icon">
          </template>
          <template v-slot:header>
            {{ service.title }}
          </template>
          <template v-slot:text>
            {{ service.text }}
          </template>
        </ServiceItem>
      </div>
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
@media (min-width: 600px) and (max-width: 960px) {
  .fp-responsive #services {
    height: auto !important;
  }
}
</style>
