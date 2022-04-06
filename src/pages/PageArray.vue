<template>
  <q-page class="q-pa-lg">
    <div class="flex-center text-center column">
      <q-btn-group>
        <q-btn @click="sort" color="primary" glossy label="sort" />
        <q-btn @click="map" color="primary" glossy label="map" />
        <q-btn @click="filter" color="primary" glossy label="filter" />
      </q-btn-group>
      <h5 class="q-mt-none">Tableaux</h5>
      <div class="col-6">
        <q-input outlined v-model="query"></q-input>
      </div>
      <pre>{{ filteredArray }}</pre>
      <div v-if="mappedArr">
        <h3>MappedArray</h3>
        <pre>{{ mappedArr }}</pre>
      </div>
    </div>
  </q-page>
</template>

<script>
import { resetTracking } from '@vue/reactivity'
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'page-array',
  setup () {
    const query = ref('')
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
        id: 8,
        name: 'elly'
      }
    ])
    const mappedArr = ref()

    const filteredArray = computed(() => arr.value.filter(item => item.name.includes(query.value)))

    // const sort = () => arr.value = arr.value.sort((a, b) => a.id - b.id)
    const sort = () => arr.value = arr.value.sort((oldValue, newValue) => {
      if (oldValue.name > newValue.name) {
        return 1 // si la valeur courante est supérieur à la suivante on le fait avancer dans le tableau
      }
      if (oldValue.name < newValue.name) {
        return -1 // si la valeur courante est inférieur à la suivante on le fait reculer dans le tableau
      }
      return 0 // si c'est la meme valeur
    })

    const filter = () => {
      arr.value = arr.value.filter(item => item.name.includes(query.value))
    }

    const map = () => {
      mappedArr.value = arr.value.map(item => {
        let rItem = {}
        rItem[item.name] = item.id
        rItem[item.id] = item.name
        return rItem
      })
      console.log(mapppedArr.value)
    }

    return {
      query,
      sort,
      filter,
      map,
      filteredArray,
      mappedArr
    }
  }
})
</script>
