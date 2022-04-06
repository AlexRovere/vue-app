<template>
  <q-page class="q-pa-lg flex-center column">
    <h5 class="q-mt-none">Créer un suivi</h5>
    <div class="q-pa-md">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="mood" label="Votre humeur" hint="humeur du jour ?" lazy-rules :rules="[val => val && val.length > 0 || 'Please type something']" />
        <q-input type="number" filled v-model="quantity" label="Your name *" hint="Name and surname" lazy-rules :rules="[val => val && val.length > 0 || 'Please type something']" />
        <q-input filled v-model="medication" label="Your name *" hint="Name and surname" lazy-rules :rules="[val => val && val.length > 0 || 'Please type something']" />

        <q-input
          filled
          v-model="comment"
          label="Your age *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Créer" type="submit" color="primary" />
          <q-btn label="Réitinialiser" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>

import { ref } from "vue"

export default ({
  name: 'page-follow-create',

  setup () {
    const mood = ref('')
    const quantity = ref('')
    const medication = ref('')
    const comment = ref('')

    const onSubmit = () => {
      console.log('envoyé')
    }

    const onReset = () => {
      console.log('reset')
    }

    return {
      mood,
      quantity,
      medication,
      comment,
      onSubmit,
      onReset
    }
  }
})
</script>
