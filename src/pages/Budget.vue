<template>
<q-page padding style="height: 100vh;">
  <b style="font-size: 25px; color: #b46c53; font-family: Aileron;">Budget</b>
  <div class="row q-mb-lg">
    <q-table
      style="width: 100%; font-family: Aileron;"
      title="Budget Planning"
      :rows="rows"
      :columns="cols"
      row-key="name"
    ></q-table>
  </div>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

const cols = [
  {
    name: 'name',
    required: true,
    label: 'Budget',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {name: 'bills', align: 'center', label: 'Bills', field: 'bills'},
  {name: 'fun', align: 'center', label: 'Fun', field: 'fun'},
]
const rows = [
  {
    name: '$1000',
    date: 'n/a',
    bills: '$250',
    fun: '$500'
  },
  {
    name: '$1000',
    date: 'n/a',
    bills: '$200',
    fun: '$700'
  }
]

export default defineComponent({
  name: 'Budget',

  setup() {
    return {
      cols,
      rows
    }
  }

})
</script>
