<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="q-pa-sm">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <div class="column text-center">
          <div>Liste des taches du</div>
          <div>{{ dateNow }}</div>
          <div>{{ hours }}</div>
        </div>
        <q-space />
        <div class="col-1">
          <q-icon v-if="store.meteo.isCold" name="ac_unit"></q-icon>
          <q-icon v-else name="local_fire_department" />
        </div>
        <div>Compteur dans le store : {{ store.counter }}</div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area style="height: calc(100% - 76px); margin-top: 76px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item :to="{ name: 'page-todo' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>Taches</q-item-section>
          </q-item>
          <q-item :to="{ name: 'page-help' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name=" help" />
            </q-item-section>
            <q-item-section>Aide</q-item-section>
          </q-item>
          <q-item :to="{ name: 'page-counter' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="calculate" />
            </q-item-section>
            <q-item-section>Compteur</q-item-section>
          </q-item>
          <q-item :to="{ name: 'page-api' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="webhook" />
            </q-item-section>
            <q-item-section>API</q-item-section>
          </q-item>
          <q-item :to="{ name: 'page-meteo' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="cloud" />
            </q-item-section>
            <q-item-section>Météo</q-item-section>
          </q-item>
          <q-item :to="{ name: 'page-array' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="data_array" />
            </q-item-section>
            <q-item-section>Tableaux</q-item-section>
          </q-item>
          <q-item :to="{ name: 'page-follow' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="calendar_month" />
            </q-item-section>
            <q-item-section>Suivi</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 66px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Alex Rovere</div>
          <div v-if="store.user">{{ store.user.name.first }}</div>
          <div v-else>"Utilisateur anonyme</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { date } from 'quasar'
import EssentialLink from 'components/EssentialLink.vue'
import { useCounterStore } from 'src/stores/example-store'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const $store = useCounterStore()
    const hours = ref()

    const dateNow = computed(() => {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'DD/MM/YYYY')
    })

    const getNow = () => {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time;
      hours.value = dateTime;
    }
    getNow()

    onMounted(() => {
      setInterval(() => getNow(), 1000)
    })

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      dateNow,
      store: $store,
      hours
    }
  }
})
</script>
