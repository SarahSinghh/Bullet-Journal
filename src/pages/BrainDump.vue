<template>
  <q-page padding>
    <b style="font-size: 25px; color: #b46c53; font-family: Aileron;">Brain Dump</b>
    <div class="row q-mb-lg">
      <q-input v-model="newTask" placeholder="Add a task!" class="col"
      @keyup.enter="addTask"/>
      <q-btn
        color="secondary"
        size="sm"
        icon="add"
        @click.native="addTask"
      />
    </div>

    <div class="row q-mb-lg">
      <q-list highlight class="col">
        <q-list-header>ToDo</q-list-header>
          <q-item v-for="(task,index) in todoList">
            <q-item-label>{{task}}</q-item-label>
            <q-space></q-space>
            <q-item-section avatar>
              <q-icon color="green" name="check" @click.native="moveToFinished(index)"></q-icon>
            </q-item-section>
          </q-item>
      </q-list>
    </div>

    <div class="row">
      <q-list highlight class="col">
        <q-list-header>Finished</q-list-header>
          <q-item v-for="(task,index) in finishedList">
            <q-item-label>{{task}}</q-item-label>
            <q-space></q-space>
            <q-item-section avatar>
              <q-icon color="red" name="close" @click.native="deleteTask(index)"></q-icon>
            </q-item-section>
          </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      newTask: ' ',
      todoList: ["Hot Girl Walk", "Eat, We are hungry"],
      finishedList: ["Present slides", "Yum, Yum, Yum"]
    }
  },
  methods: {
    addTask() {
      this.todoList.push(this.newTask)
      this.newTask = ' '
    },
    moveToFinished(index) {
      this.finishedList.push(this.todoList[index])
      this.todoList.splice(index,1)
    },
    deleteTask(index){
      this.$q.dialog({
        title: "Confirm",
        message: "Delete selected task?",
        ok: "Yes",
        cancel: "No"
      }).then(() => {
        this.finished.splice(index,1)
        this.$q.notify("Deleted!")
      }).catch(() => {

      })
    },
    setAnotherTitle () {
      this.title = 'Brain Dump' // will automatically trigger a Meta update due to the binding
    }
  }
})
</script>
