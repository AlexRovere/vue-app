<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-secondary">
      <q-input @keyup.enter="createTask" class="col" filled bottom-slots v-model="newTask" label="Ajouter une tache" dense>
        <template v-slot:append>
          <q-btn @click="createTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>
    <div class="row justify-between q-px-md">
      <q-btn @click="selectAll" round color="primary" icon="done_all" />
      <q-btn @click="deleteAll" round color="primary" icon="delete" />
    </div>
    <q-list bordered separator class="bg-white">
      <q-item v-for="(task, idx) in tasks" :key="idx" tag="label" v-ripple :class="{ 'bg-success': task.isDone }">
        <q-item-section avatar>
          <q-checkbox v-model="task.isDone" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label :class="{ 'text-surligned': task.isDone }">{{ task.name }}</q-item-label>
        </q-item-section>
        <q-item-section side v-if="task.isDone">
          <q-btn @click.stop="deleteTask(idx)" flat round dense icon="delete" color="secondary"></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="absolute-center no-tasks">
      <q-icon class="q-mx-auto fit" name="check" size="100px" color="primary"></q-icon>
      <div>Félicitations vouz avez réalisé toutes vos taches !</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'page-todo',
  setup () {
    const $q = useQuasar()
    const newTask = ref('')
    const allClicked = ref(false)
    const tasks = (ref([
      {
        name: 'Works',
        isDone: false
      },
      {
        name: 'Shop',
        isDone: false
      },
      {
        name: 'Banque',
        isDone: false
      },
    ]))

    const consoleLog = data => {
      console.log(data)
    }

    const createTask = () => newTask.value ? tasks.value.push({
      name: newTask.value,
      isDone: false
    }) : $q.dialog({
      title: 'Erreur',
      message: 'Veuillez entrer un nom de tache'
    })

    const oneNotChecked = () => tasks.value.some(item => item.isDone === false)

    const selectAll = () => oneNotChecked() ? tasks.value.forEach(t => t.isDone = true) : tasks.value.forEach(t => t.isDone = false)

    const deleteAll = () => {
      const result = tasks.value.filter(item => item.isDone === false)
      return tasks.value = result
    }

    const deleteTask = (idx) => {
      $q.dialog({
        position: 'top',
        style: 'border: 2px solid black',
        title: 'Confirmer',
        message: 'Etes-vous sur de voulour supprimer cette tache ?',
        cancel: true,
        persistent: false
      }).onOk(() => {
        tasks.value.splice(idx, 1)
        $q.notify({
          message: `La tache ${tasks.value[idx].name} a bien été supprimé`,
          color: 'primary',
          textColor: 'black',
          spinner: true,
          progress: true,
          timeout: 2000,
          closeBtn: 'close'
        })
      })
    }

    return {
      tasks,
      newTask,
      consoleLog,
      deleteTask,
      createTask,
      selectAll,
      deleteAll
    }
  }
})
</script>
<style>
.done {
  background-color: #44ffd2;
  text-decoration: line-through;
}

.bg-success {
  background-color: #44ffd2;
}

.text-surligned {
  text-decoration: line-through;
}
.clear {
  text-decoration: none;
}
</style>
