<template>
  <div class="slide fp-auto-height-responsive">
    <div class="md-layout md-alignment-top-center">
      <div class="services-first md-layout-item md-size-100">
        <ServicesDescription />
      </div>
      <div class="services-desc-wrapper md-layout-item md-size-80">
        <div v-if="$mq !== 'xs'" class="md-layout">
          <div v-for="service in services" :key="service.id" class="services-desc md-alignment-top-center md-layout-item md-small-size-100 md-large-size-33">
            <ServiceItem>
              <template v-slot:icon>
                <ActivateAnimationOnSlide :activate-on-slide="1">
                  <template v-slot:default="animate">
                    <AnimateTop :animate="animate.animate">                  
                      <img :src="service.icon">
                    </AnimateTop>
                  </template>
                </ActivateAnimationOnSlide>
              </template>
              <template v-slot:header>
                <h2>{{ service.title }}</h2>
              </template>
              <template v-slot:text>
                <p>{{ service.text }}</p>
              </template>
            </ServiceItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ServicesDescription from './services-description.vue'
import ServiceItem from '~/components/ServiceItem.vue'
import ActivateAnimationOnSlide from '~/components/ActivateAnimationOnSlide.vue'
import AnimateTop from '~/components/AnimateTop.vue'
export default {
  components: {
    ServicesDescription,
    ServiceItem,
    ActivateAnimationOnSlide,
    AnimateTop
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
  .slide {
    &:first-child {
      background-image: url(../static/img/bg-audis.png);
      background-position-y: bottom;
      background-size: cover;
    }
  }
  .services-first {
    height: 50vh;
  }
  .services-desc-wrapper {
    .services-desc {
      text-align: center;
      padding: 20px;
      h2 {
        color: #b13030;
      }
      .icon-wrapper {
        margin-bottom: 20px;
        img {
          max-height: 60px;
        }
      }
      margin-bottom: 20px;
      p {
        padding: 0 30px;
      }
    }
  }
}
@media (max-width: 600px) {
  #services .services-first {
    height: 100vh !important;
  }
}
@media (min-width: 600px) and (max-width: 960px) {
  .fp-responsive #services {
    .slide {
      &:first-child {
        height: auto !important;
      }
    }
  }
}
@media (min-width: 600px) and (max-width: 1280px) {
  #services {
    .services-first {
      height: 100vh !important;
    }

    .services-desc-wrapper {
      max-width: 1800px;
      margin: 30px 30px 50px 30px;
      .services-desc {
        padding: 20px;
        &:first-child {
          border-right: 2px solid #e0dbd6;
        }
        &:last-child {
          border-left: 2px solid #e0dbd6;
        }
      }
    }
  }
}
@media (min-width: 1280px) {
  #services {
    .services-desc-wrapper {
      max-width: 1800px;
      margin: 50px;
      .services-desc {
        padding: 50px;
        &:first-child {
          border-right: 2px solid #e0dbd6;
        }
        &:last-child {
          border-left: 2px solid #e0dbd6;
        }
      }
    }
  }
}
</style>
