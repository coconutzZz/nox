<template>
  <div class="modal-wrapper">
    <div>
      <Cars :selected-model="selectedModel" :selected-type="selectedType" />
    </div>
    <div>
      <div class="close-modal" @click="this.hide">
        <span />
        <span />
      </div>
      <select v-model="selectedModel" class="form-control">
        <option v-for="model in models" :key="model.id" :value="model.id">
          {{ model.title }}
        </option>
      </select>
      <select v-model="selectedType" class="form-control">
        <option v-for="type in types" :key="type.id" :value="type.id">
          {{ type.name }}
        </option>
      </select>
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
        { id: '', title: 'Znamka' },
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
        { id: '', name: 'Karoserijska izvedba' },
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: #fff;
  display: flex;
  > div {
    flex: 1;
  }
  .filter {
    padding: 100px 50px 0px 30px;
    select {
      margin-top: 20px;
    }
  }
}
.close-modal {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  span {
    display: block;
    width: 40px;
    height: 4px;
    background-color: #21566b;
    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg) translate(2px, -3px);
    }
  }
}
</style>
