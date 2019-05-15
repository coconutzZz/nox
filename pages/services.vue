<template>
  <div class="slide fp-auto-height-responsive">
    <div class="md-layout md-alignment-center-center">
      <div class="md-layout-item md-size-100 first">
        <div class="md-layout md-alignment-center-center">
          <div class="md-layout-item md-xlarge-size-40 md-large-size-50 md-small-size-80 md-xsmall-size-90">
            <ServicesDescription />
            <sup v-if="$mq === 'xs'">Za več informacij, tapnite na storitev.</sup>
            <md-button v-else class="forward md-raised md-primary" @click="contactClick">
              KONTAKTIRAJTE NAS
            </md-button>
          </div>
        </div>
      </div>
      <div class="md-layout-item md-size-80 md-xlarge-size-60 second">        
        <div class="md-layout md-gutter md-alignment-center-center">          
          <div v-for="service in services" :key="service.id" class="services-desc md-layout-item md-xsmall-size-80 md-large-size-33" @click="showDialog(service.text)">
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
                <h2>
                  {{ service.title }}                  
                </h2>
              </template>
              <template v-if="$mq !== 'xs'" v-slot:text>
                <p>{{ service.text }}</p>
              </template>
            </ServiceItem>
          </div>
        </div>
      </div>
    </div>    
    <md-dialog :md-active.sync="showDescDialog" :md-fullscreen="false">
      {{ this.descDialogContent }}
    </md-dialog>
  </div>
</template>

<script>
import texts from '~/assets/texts.js'
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
  props: {
    fullpage: {
      default: null,
      type: Object
    }
  },
  data: () => {
    return {
      showDescDialog: false,
      descDialogContent: '',
      services: texts.services
    }
  },
  methods: {
    showDialog(text) {
      if (this.$mq !== 'xs') {
        return
      }
      this.showDescDialog = true
      this.descDialogContent = text
    },
    contactClick() {
      this.$router.push('kontakt')
    }
  }
}
</script>

<style lang="scss">
#services {
  background-image: url(../static/img/bg-bmws-bw.png);
  background-position-y: top;
  background-size: cover;
  .first {
    height: 50vh;
    text-align: center;
    .md-layout {
      height: 50vh;
    }
    .md-button {
      margin-top: 20px;
    }
  }
  .second {
    .md-layout {
      height: 50vh;
    }
    h2 {
      margin-bottom: 0;
    }
    height: 50vh;
    text-align: center;
    .icon-wrapper {
      margin-bottom: 20px;
      img {
        max-height: 60px;
      }
    }
    .services-desc {
      border-right: 2px solid #eee;
      &:last-child {
        border-right: none !important;
      }
    }
  }
}
.md-dialog-container {
  padding: 20px;
}
@media (max-width: 1280px) {
  #services {
    .first {
      height: 35vh;
      .md-layout {
        height: 35vh;
      }
    }
    .second {
      text-align: center;
      .icon-wrapper {
        margin-bottom: 0px;
        img {
          max-height: 35px;
        }
      }
      .services-desc {
        border-right: none !important;
      }
    }
  }
}
</style>
