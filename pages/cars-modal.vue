<template>
  <div class="modal-wrapper">
    <md-button class="md-fab md-primary close" @click="hide()">
      <md-icon>close</md-icon>
    </md-button>
    <div class="md-layout">
      <div class="md-layout-item md-xlarge-size-20 md-large-size-30 md-small-size-100 filter">
        <md-field>
          <label for="brand">Znamka</label>
          <md-select id="brand" v-model="selectedModel" name="brand">
            <md-option v-for="model in models" :key="model.id" :value="model.id">
              {{ model.title }}
            </md-option>
          </md-select>
        </md-field>
        <md-field>
          <label for="type">Karoserijska izvedba</label>
          <md-select id="type" v-model="selectedType" name="type">
            <md-option v-for="type in types" :key="type.id" :value="type.id">
              {{ type.name }}
            </md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-small-size-100">
        <Cars :selected-model="selectedModel" :selected-type="selectedType" />
      </div>
    </div>
  </div>
</template>

<script>
import Cars from '~/pages/cars'

export default {
  components: {
    Cars
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
    hide() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.modal-wrapper {
  .close {
    position: absolute;
    bottom: 18px;
    right: 16px;
  }
  .md-layout {
    width: 100%;
    .filter {
      padding: 50px 20px;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: #fff;
}
</style>
