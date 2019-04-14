<template>
  <div id="contact" data-anchor="kontakt" class="section md-layout md-alignment-center-center">       
    <div id="contact-form" class="md-layout-item md-size-40 md-large-size-50 md-small-size-60 md-xsmall-size-90">
      <ActivateAnimationOnSlide :activate-on-slide="2">
        <template v-slot:default="animate">
          <AnimateTop :animate="animate.animate">
            <h1>Imate vprašanje?</h1>
          </AnimateTop>
        </template>
      </ActivateAnimationOnSlide>   
      <p v-if="$mq !== 'xs'" class="text">
        Pošljite informacije o avtomobilu, ki bi ga želeli prodati.
        Sporočili vam bomo okvirno ceno in vas kontaktirali za podrobnosti.
      </p>  
      <form id="contact-form" novalidate encType="multipart/form-data" @submit.prevent="validateMessage">
        <md-field :class="getValidationClass('name')">
          <label for="name">Naziv</label>
          <md-input id="name" v-model="form.name" name="name" :disabled="sending" />
          <span v-if="!$v.form.name.required" class="md-error">Naziv je obvezno polje</span>
          <span v-else-if="!$v.form.name.minlength" class="md-error">Vnesite naziv!</span>
        </md-field>

        <md-field :class="getValidationClass('email')">
          <label for="email">Elektronska pošta</label>
          <md-input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            :disabled="sending"
          />
          <span v-if="!$v.form.email.required" class="md-error">Elektronska pošta je obvezno polje</span>
          <span v-else-if="!$v.form.email.email" class="md-error">Napačna Elektronska pošta</span>
        </md-field>

        <md-field :class="getValidationClass('message')">
          <label for="message">Vprašanje...</label>
          <md-textarea
            id="message"
            v-model="form.message"
            name="message"
            autocomplete="email"
            :disabled="sending"
            md-counter="200"
          />          
          <span v-if="!$v.form.message.required" class="md-error">To polje je obvezno</span>          
          <span v-else-if="!$v.form.message.minlength || !$v.form.message.maxlength" class="md-error">Vnesite sporočilo</span>
        </md-field>
        <md-progress-spinner v-if="sending" md-mode="indeterminate" />
        <md-button v-else type="submit" class="forward md-raised md-primary" :disabled="sending">
          POŠLJI
        </md-button>  
        <md-snackbar md-position="left" :md-active.sync="messageSent">
          <span>Sporočilo je bilo poslano!</span>
        </md-snackbar>
      </form>    
    </div>
    <div v-if="$mq !== 'xs'" class="arrow down bounce" />
  </div>
</template>

<script>
import ActivateAnimationOnSlide from '~/components/ActivateAnimationOnSlide.vue'
import AnimateTop from '~/components/AnimateTop.vue'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  components: {
    ActivateAnimationOnSlide,
    AnimateTop
  },
  mixins: [validationMixin],
  data: () => ({
    form: {
      name: null,
      email: null,
      message: null
    },
    sending: false,
    messageSent: false
  }),
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(20),
        maxLength: maxLength(300)
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    sendMessage() {
      this.sending = true
      axios
        .post('https://mailthis.to/nox@siol.net', {
          email: this.email,
          _subject: this.name,
          message: this.message
        })
        .then(() => {
          this.sending = false
          this.messageSent = true
          this.clearForm()
        })
    },
    clearForm() {
      this.$v.$reset()
      this.form.name = null
      this.form.email = null
      this.form.message = null
    },
    validateMessage() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.sendMessage()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#contact {
  text-align: center;
  .md-layout-item {
    background-color: #fafafa;
    padding: 0 20px 20px 20px;
  }
  h1 {
    margin-top: 20px;
  }
  #contact-form {
    background-color: #f1f1f1;
  }
}
</style>
