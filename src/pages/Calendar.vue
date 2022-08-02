<template>
<q-page padding>
  <b style="font-size: 25px; color: #b46c53; font-family: Aileron;">Calendar</b>
  <div class="q-pa-md">
    <q-date style="width: 100%; height: 650px" v-model="date" landscape today-btn/>
  </div>
</q-page>
</template>

<script>
import { ref } from 'vue'

export default ({
  setup(){
    return {
        date: ref('2022/07/30')
    }
  }
})
</script>
