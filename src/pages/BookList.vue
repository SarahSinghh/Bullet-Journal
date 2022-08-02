<template>
<q-page padding>
  <b style="font-size: 25px; color: #b46c53; font-family: Aileron;">Book Tracker</b>
  <div class="row q-mb-lg">
    <q-input v-model="newTask" placeholder="Add a Book?" class="col"
      @keyup.enter="addTask"/>
    <q-btn
        color="secondary"
        size="sm"
        icon="add"
        @click.native="addTask"
      />
    <q-space></q-space>
    <q-table
      style="width: 100%"
      title="Books Read"
      :rows="rows"
      :columns="cols"
      row-key="name"
    ></q-table>
  </div>

  <div class="row q-mb-lg">
    <q-table
      style="width: 100%"
      title="Book Queue"
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
    label: 'Title',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {name: 'author', align: 'center', label: 'Author', field: 'author'},
  {name: 'rating', align: 'center', label: 'Rating (1-5)', field: 'rating'},
  {name: 'genre', align: 'center', label: 'Genre', field: 'genre'}
]

const rows = [
  {
    name: 'Verity',
    author: 'Colleen Hoover',
    rating: '5',
    genre: 'thriller, romance, fiction, suspense'
  },
  {
    name: 'The Midnight Library',
    author: 'Matt Haig',
    rating: '4',
    genre: 'fantasy, fiction, science fiction'
  },
    {
    name: 'The Perfect Child',
    author: 'Lucinda Barry',
    rating: '5',
    genre: 'thriller, suspense, psychological fiction'
  }
]

const cols2 = [
  {
    name: 'name',
    required: true,
    label: 'Title',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  {name: 'author', align: 'center', label: 'Author', field: 'author'},
  {name: 'genre', align: 'center', label: 'Genre', field: 'genre'}
]

const rows2 = [
  {
    name: 'Who is Maud Dixon?',
    author: 'Alexandra Andrews',
    genre: 'thriller, mystery, suspense'
  },
  {
    name: 'Layla',
    author: 'Colleen Hoover',
    genre: 'romance, thriller, suspense'
  },
  {
    name: 'Things We Never Got Over',
    author: 'Lucy Score',
    genre: 'fiction, romance'
  }
]
export default defineComponent({
  name: 'BookList',
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
