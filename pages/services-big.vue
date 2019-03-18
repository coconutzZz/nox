<template>
  <div id="services" data-anchor="storitve" class="section">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <ServicesDescription />
      </div>
      <div class="md-layout-item md-size-100">
        <div v-for="service in services" :key="service.id" class="md-layout-item md-size-33">
          <ServiceItem classes="">
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
