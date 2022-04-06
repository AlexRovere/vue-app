<template>
  <q-page class="q-pa-lg">
    <div class="flex-center text-center">
      <h5 class="q-mt-none">Suivi</h5>
      <q-btn :to="{ name: 'page-follow-create' }" label="Ajouter une journée"></q-btn>
      <div class="q-pa-md">
        <q-table class="my-sticky-header-table" title="Suivi santé" :rows="rows" :columns="columns" row-key="date" flat bordered />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'page-folow',
  setup () {
    const columns = ref([{
      name: 'date',
      required: true,
      label: 'Date',
      align: 'left',
      field: row => row.date,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'mood', align: 'center', label: 'Humeur', field: 'mood', sortable: true },
    { name: 'quantity', label: 'Quantité', field: 'quantity', sortable: true },
    { name: 'medication', label: 'Médicaments', field: 'medication' },
    { name: 'comment', label: 'Commentaires', field: 'comment' }
    ])
    const rows = ref()


    // const pingServer = () => api.get('http://localhost:8080').then((response) => rows.value = response.data).catch((e) => console.log(e))

    const getAllFollows = () => api.get('http://localhost:8080/follow/all')
      .then((response) => {
        rows.value = response.data.map(item => {
          return {
            date: item.createdAt,
            mood: item.mood,
            quantity: item.quantity,
            medication: item.medication,
            comment: item.comment
          }
        })
      }).catch((e) => console.log(e))

    // pingServer()

    onMounted(() => {
      getAllFollows()
    })

    return {
      columns,
      rows
    }
  }
})
</script>
