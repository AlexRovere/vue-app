<template>
  <q-page class="q-pa-lg">
    <div class="flex-center text-center">
      <q-btn-group>
        <q-btn @click="sort" color="primary" glossy label="sort" />
        <q-btn color="primary" glossy label="map" />
        <q-btn color="primary" glossy label="filter" />
        <q-btn color="primary" glossy label="Fourth" />
      </q-btn-group>
      <h5 class="q-mt-none">Tableaux</h5>
      <pre>{{ arr }}</pre>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'page-array',
  setup () {
    const arr = ref([
      {
        id: 1,
        name: 'jean'
      },
      {
        id: 8,
        name: 'robert'
      },
      {
        id: 3,
        name: 'alex'
      },
      {
        id: 3,
        name: 'alex'
      }
    ])

    // const sort = () => arr.value = arr.value.sort((a, b) => a.id - b.id)
    const sort = () => arr.value = arr.value.sort((oldValue, newValue) => {
      if (oldValue.name > newValue.name) {
        console.log('first if')
        return 1 // si la valeur courante est supérieur à la suivante on le fait avancer dans le tableau
      }
      if (oldValue.name < newValue.name) {
        console.log('second if')
        return -1 // si la valeur courante est inférieur à la suivante on le fait reculer dans le tableau
      }
      return 0 // si c'est la meme valeur
    })

    return {
      arr,
      sort
    }
  }
})
</script>
