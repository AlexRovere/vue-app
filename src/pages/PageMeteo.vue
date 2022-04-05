<template>
  <q-page class="q-pa-lg">
    <div class="flex-center full-width text-center column">
      <h4 class="q-mt-none">Méteo</h4>
      <q-input class="q-pa-lg" @keypress.enter="getMeteoApi" outlined bottom-slots v-model="city" label="Rechercher par ville">
        <template v-slot:prepend>
          <q-icon name="cloud" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="city = ''" class="cursor-pointer" />
        </template>
      </q-input>
      <q-btn @click="getMeteoApi">Cliquez pour avoir la météo</q-btn>
      <div v-if="meteo" style="max-width: 300px" class="row q-pa-lg flex-center">
        <q-card class="my-card">
          <img v-if="tempMessage.isCold" src="src/assets/img/froid.jpeg" />
          <img v-else src="src/assets/img/soleil.jpeg" />
          <q-card-section class="text-center">
            <div class="text-h6">{{ meteo.name }}</div>
            <div class="text-subtitle2">{{ meteo.weather[0].description }}</div>
            <div>Il fait actuellement {{ temperature }} degrès, {{ tempMessage.message }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none"></q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { api } from 'boot/axios'
import { useCounterStore } from 'src/stores/example-store'

export default defineComponent({
  name: 'page-meteo',

  setup () {

    let meteo = ref()
    let city = ref('Perpignan')
    const $store = useCounterStore()

    const temperature = computed(() => meteo.value.main.temp)


    const tempMessage = computed(() => {
      const message = temperature.value < 10 ? "ça caille !" : "La plage se rapproche"
      const isCold = temperature.value < 10 ? true : false
      return {
        message,
        isCold
      }
    })

    const getMeteoApi = () => {
      api.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&lang=fr&appid=b6668a9eea5fb863283b0927ac82f222`)
        .then(response => {
          meteo.value = response.data
          $store.meteo.isCold = tempMessage.value.isCold
          console.log(meteo.value)
        }).catch(e => console.log(e))
    }

    getMeteoApi()

    return {
      getMeteoApi,
      temperature,
      tempMessage,
      meteo,
      city
    }
  }
})
</script>
