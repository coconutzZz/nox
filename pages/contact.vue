<template>
  <div id="contact" class="section">
    <div class="contact-outer">
      <h1>Imate vprašanje<br> za nas?</h1>
      <p class="text">
        Pošljite informacije o avtomobilu, ki bi ga želeli prodati.<br>
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
        <md-button type="submit" class="forward md-raised md-primary big" :disabled="sending">
          POŠLJI
        </md-button>  
        <md-snackbar md-position="left" :md-active.sync="messageSent">
          <span>Sporočilo je bilo poslano!</span>
        </md-snackbar>
      </form>    
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
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
      setTimeout(() => {
        this.sending = false
        this.messageSent = true
        this.clearForm()
      }, 1000)
      /*
          $.post('https://mailthis.to/test@example.com', {
            email: this.email,
            _subject: this.name,
            message: this.message
          }).then(function () {
            this.sending = false
            this.clearForm()
          });
          */
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
  padding: 50px;
  text-align: center;
  .contact-outer {
    max-width: 800px;
    padding: 20px;
    top: 50%;
    margin: 0 auto;
  }
}
</style>
