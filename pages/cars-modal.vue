<template>
  <div class="modal-wrapper">
    <md-button class="md-fab md-primary close" @click="toggleCars()">
      <md-icon>close</md-icon>
    </md-button>
    <div class="md-layout md-alignment-top-center md-gutter">
      <div v-if="$mq !== 'xs' && $mq !== 'sm' " class="md-layout-item md-large-size-40 md-medium-size-100 md-small-size-100 filter">
        <div class="md-layout md-gutter md-alignment-center-center">
          <div class="md-layout-item md-size-50">
            <md-field>
              <label for="brand">Znamka</label>
              <md-select id="brand" v-model="selectedModel" name="brand">
                <md-option v-for="model in models" :key="model.id" :value="model.id">
                  {{ model.title }}
                </md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50">
            <md-field>
              <label for="type">Karoserija</label>
              <md-select id="type" v-model="selectedType" name="type">
                <md-option v-for="t in types" :key="t.id" :value="t.id">
                  {{ t.name }}
                </md-option>
              </md-select>
            </md-field>
          </div>
        </div>
      </div>
      <div class="md-layout-item md-large-size-60 md-medium-size-80 md-small-size-100">
        <Cars :selected-model="selectedModel" :selected-type="selectedType" />        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {
    Cars: () => import('~/pages/cars')
  },
  data() {
    return {
      selectedModel: '',
      selectedType: '',
      models: [
        { id: '', title: 'Vse znamke' },
        { id: 502, title: 'Audi' },
        { id: 504, title: 'BMW' },
        { id: 509, title: 'Citroen' },
        { id: 521, title: 'Ford' },
        { id: 523, title: 'Honda' },
        { id: 532, title: 'Kia' },
        { id: 542, title: 'Mazda' },
        { id: 544, title: 'Mercedes' },
        { id: 547, title: 'Mini' },
        { id: 553, title: 'Opel' },
        { id: 555, title: 'Peugeot' },
        { id: 562, title: 'Renault' },
        { id: 576, title: 'Škoda' },
        { id: 582, title: 'Toyota' },
        { id: 585, title: 'Volkswagen' }
      ],
      types: [
        { id: '', name: 'Vse' },
        { id: 11, name: 'limuzina' },
        { id: 12, name: 'kombilimuzina / hatchback' },
        { id: 13, name: 'karavan' },
        { id: 14, name: 'enoprostorec / van' },
        { id: 15, name: 'terensko vozilo / SUV' },
        { id: 16, name: 'coupe' },
        { id: 17, name: 'cabriolet' },
        { id: 18, name: 'pick-up' }
      ]
    }
  },
  methods: {
    ...mapActions('default', ['toggleCars'])
  }
}
</script>

<style lang="scss">
.modal-wrapper {
  .close {
    position: absolute;
    bottom: 50px;
    right: 0px;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background-color: #fff;
}
@media (min-width: 481px) and (max-width: 767px) {
  .modal-wrapper {
    .close {
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .modal-wrapper {
    .close {
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }
}
</style>
