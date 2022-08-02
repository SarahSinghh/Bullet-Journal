<template>
<q-page padding>
  <b style="font-size: 25px; color: #b46c53; font-family: Aileron;">Health</b>
  <div class="row q-mb-lg">
    <q-table
      style="width: 100%"
      title="Health Tracking"
      :rows="rows"
      :columns="cols"
      row-key="name"
    ></q-table>
  </div>
  <div class="row q-mb-lg">
    <q-table
      style="width: 100%"
      title="Meal Planning"
      :rows="rows2"
      :columns="cols2"
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
    label: 'Date',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {name: 'fitness', align: 'center', label: 'Fitness', field: 'fitness'},
  {name: 'mood', align: 'center', label: 'Mood', field: 'mood'},
  {name: 'water', align: 'center', label: 'Water', field: 'water'}
]

const rows = [
  {
    name: '07-31-2022',
    fitness: 'Hot Girl Walk',
    mood: 'Good Day',
    water: '43 oz'
  },
  {
    name: '08-01-2022',
    fitness: 'Hot Girl Walk Pt. 2',
    mood: 'Mediocre',
    water: '64 oz'
  },
  {
    name: '08-02-2022',
    fitness: '15 Minute Abs',
    mood: 'Better than Normal',
    water: '96 oz'
  },
  {
    name: '08-03-2022',
    fitness: 'Hot Girl Walk',
    mood: 'Pretty Good',
    water: '32 oz'
  },

]

const cols2 = [
  {
    name: 'name',
    required: true,
    label: 'Day',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {name: 'meal', align: 'center', label: 'Dinner', field: 'meal'}
]

const rows2 = [
  {
    name: 'Monday',
    meal: 'Sausage Bowl'
  },
  {
    name: 'Tuesday',
    meal: 'Salmon and Rice'
  },
  {
    name: 'Wednesday',
    meal: 'Caesar Salad w/ chicken nuggets'
  },
  {
    name: 'Thursday',
    meal: 'Pizza'
  },
  {
    name: 'Friday',
    meal: 'Chocolate Chip Cookies'
  },
]

export default defineComponent({
  name: 'Health',
  setup() {
    return {
      cols,
      rows,
      cols2,
      rows2
    }
  }
})
</script>
