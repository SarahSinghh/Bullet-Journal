<template>
<q-page padding>

  <b style="font-size: 25px; color: #b46c53; font-family: Aileron;">Calendar</b>
  <q-space></q-space>
  <div class="q-pa-md">
     <q-date style="width: 100%; height: 650px; font-family: Aileron;" v-model="date" landscape today-btn/>
  </div>
</q-page>
</template>

<script>
import { ref } from 'vue'


export default ({
  setup () {
    return {
      date: ref('2022/08/01')

    }}
})
</script>
