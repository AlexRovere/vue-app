<template>
  <q-page class="q-pa-lg">
    <div class="flex-center full-width text-center column">
      <h4>Compteur dans le composant</h4>
      <span class="text-h5 text-primary">{{ counter }}</span>
      <span>{{ oddOrEven }}</span>
      <div>
        <q-btn @click="descreaseCount">-</q-btn>
        <q-btn @click="increaseCount">+</q-btn>
      </div>
      <div class="q-pa-lg">
        <q-input @keypress.enter="increaseCounts(countValue)" outlined rounded color="primary" v-model="countValue"></q-input>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, watch, computed } from 'vue'
import { useCounterStore } from 'src/stores/example-store'

export default defineComponent({
  name: 'page-counter',
  setup () {
    const counter = ref(0)
    const countValue = ref(0)
    const $store = useCounterStore()

    const counterOnStore = computed(() => $store.counter)

    const descreaseCount = () => {
      counter.value--
      $store.counter--
    }

    const increaseCount = () => {
      counter.value++
      $store.counter++
    }

    const increaseCounts = value => {
      counter.value += +value
      $store.counter += +value
    }

    const oddOrEven = computed(() => {
      if (counter.value % 2 === 0) {
        return counter.value + ' est paire'
      } return counter.value + ' est impaire'
    })

    watch((counter), (newValue, oldValue) => {
      if (newValue > 100) {
        return alert('vous ne pouvez pas allez au dessus de 10')
      }
      console.log('old = ' + oldValue, 'new = ' + newValue)
    })


    return {
      counter,
      countValue,
      oddOrEven,
      counterOnStore,
      store: $store,
      descreaseCount,
      increaseCount,
      increaseCounts
    }
  }
})
</script>
a
