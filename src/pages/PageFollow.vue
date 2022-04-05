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
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'page-folow',
  setup () {
    const columns = ref([{
      name: 'Date',
      required: true,
      label: 'Date',
      align: 'left',
      field: row => row.date,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'Humeur', align: 'center', label: 'Humeur', field: 'Humeur', sortable: true },
    { name: 'Quantité', label: 'Quantité', field: 'Quantité', sortable: true },
    { name: 'Médicaments', label: 'Médicaments', field: 'Médicaments' },
    { name: 'Commentaires', label: 'Commentaires', field: 'Commentaires' }
    ])
    const rows = ref([
      {
        date: 'Frozen Yogurt',
        Humeur: 159,
        Quantité: 6.0,
        Médicaments: 24,
        Commentaires: 4.0,
      }, {
        date: 'Ice cream sandwich',
        Humeur: 237,
        Quantité: 9.0,
        Médicaments: 37,
        Commentaires: 4.3,
      },
      {
        date: 'Eclair',
        Humeur: 262,
        Quantité: 16.0,
        Médicaments: 23,
        Commentaires: 6.0,
      },
      {
        date: 'Cupcake',
        Humeur: 305,
        Quantité: 3.7,
        Médicaments: 67,
        Commentaires: 4.3,
      },
      {
        date: 'Gingerbread',
        Humeur: 356,
        Quantité: 16.0,
        Médicaments: 49,
        Commentaires: 3.9,
      },
      {
        date: 'Jelly bean',
        Humeur: 375,
        Quantité: 0.0,
        Médicaments: 94,
        Commentaires: 0.0,
      },
      {
        date: 'Lollipop',
        Humeur: 392,
        Quantité: 0.2,
        Médicaments: 98,
        Commentaires: 0,
      },
      {
        date: 'Honeycomb',
        Humeur: 408,
        Quantité: 3.2,
        Médicaments: 87,
        Commentaires: 6.5,
      },
      {
        date: 'Donut',
        Humeur: 452,
        Quantité: 25.0,
        Médicaments: 51,
        Commentaires: 4.9,
      },
      {
        date: 'KitKat',
        Humeur: 518,
        Quantité: 26.0,
        Médicaments: 65,
        Commentaires: 7,
      }
    ])

    return {
      columns,
      rows
    }
  }
})
</script>
