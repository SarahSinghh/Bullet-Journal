<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="primary">
        <q-btn
          flat
          dense
          round
          icon="bookmarks"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title style="font-family: Aileron;">
         The Triad Bulletin
        </q-toolbar-title>

        <q-space />

        <q-btn-dropdown flat label="Welcome Zoe Mazur!" style="font-family: Aileron;">
          <q-list>
            <q-item-section>
              <q-item-label style="font-family: Aileron;">User: Mazurz</q-item-label>
            </q-item-section>
            <q-separator inset spaced />
            <q-item-section>
              <q-item-label style="font-family: Aileron;">Settings</q-item-label>
            </q-item-section>
            <q-separator inset spaced />
            <q-item-section>
              <q-item-label style="font-family: Aileron;">Log Out</q-item-label>
            </q-item-section>
          </q-list>
        </q-btn-dropdown>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Dashboard
        </q-item-label>
        <q-item to="/" exact clickable>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-label>Home</q-item-label>
        </q-item>
        <q-item to="/Calendar" exact clickable>
          <q-item-section avatar>
            <q-icon name="calendar_month" />
          </q-item-section>
          <q-item-label>Calendar</q-item-label>
        </q-item>
        <q-item to="/Budget" exact clickable>
          <q-item-section avatar>
            <q-icon name="attach_money" />
          </q-item-section>
          <q-item-label>Budget</q-item-label>
        </q-item>
        <q-item to="/Health" exact clickable>
          <q-item-section avatar>
            <q-icon name="spa" />
          </q-item-section>
          <q-item-label>Health</q-item-label>
        </q-item>
        <q-item to="/Books" exact clickable>
          <q-item-section avatar>
            <q-icon name="menu_book" />
          </q-item-section>
          <q-item-label>Books</q-item-label>
        </q-item>
        <q-item to="/BrainDump" exact clickable>
          <q-item-section avatar>
            <q-icon name="sticky_note_2" />
          </q-item-section>
          <q-item-label>Brain Dump</q-item-label>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import Books from 'pages/BookList.vue'

const linksList = [
  {
    title: 'Books',
    caption: '',
    icon: 'material-symbols-outlined',
    link: 'src/pages/BookList.vue'
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
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
