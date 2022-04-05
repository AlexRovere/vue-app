<template>
  <q-page class="q-pa-lg">
    <div class="flex-center full-width text-center column">
      <h4 class="q-mt-none">API</h4>
      <q-btn @click="getUserApi">Cliquez pour avoir l'utilisateur</q-btn>
      <q-card v-if="user" class="my-card q-ma-lg text-center">
        <q-card-section class="text-h5">{{ user.name.first }} {{ user.name.last }}</q-card-section>
        <q-card-section>{{ user.gender }}</q-card-section>
        <q-card-section>{{ user.phone }} {{ user.email }}</q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'
import { useCounterStore } from 'src/stores/example-store'

export default defineComponent({
  name: 'page-api',

  setup () {

    let user = ref()
    const $store = useCounterStore()

    const getUserApi = () => {
      api.get('https://randomuser.me/api/')
        .then(response => {
          user.value = $store.user = response.data.results[0]
          console.log($store.user)
        }).catch(e => console.log(e))
    }


    return {
      getUserApi,
      user
    }
  }
})
</script>
