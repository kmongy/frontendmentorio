<template>
  <div class="todo-wrapper">
    <div class="header-wrapper">
      <header class="todo-header">
        <h1 class="todo-title">TODO</h1>
        <div class="dark-mode-toggle">
          <svg
            class="moon-toggle"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
          >
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
        </div>
      </header>

      <form class="todo-form" @submit.prevent>
        <div class="completion-circle"></div>
        <input
          v-model="newTaskInput"
          class="todo-input"
          type="text"
          placeholder="Create a new todo..."
          @keyup.enter="addTask"
        />
      </form>
    </div>

    <div class="items-in-todos">
      <ul>
        <li class="todo-items" v-for="taskItem in taskList" :key="taskItem">
          <div class="completion-circle"></div>
          {{ taskItem }}
          <div class="delete-todo">
            <svg class="delete" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                fill="#494C6B"
                fill-rule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </div>
        </li>
      </ul>
      
      <div class="todos-list-info">
        <p> items left</p>
        <p>Clear Completed</p>
      </div>
    </div>

    <div class="todos-status">
      <p class="todo-all-selection">All</p>
      <p class="todo-active-selection">Active</p>
      <p class="todo-completed-selection">Completed</p>
    </div>

    <p class="drag-drop-info">Drag and drop to reorder list</p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: "Todos",

  setup() {
    const state = reactive({
      newTaskInput: '',
      taskList: []
    });

    const addTask = () => {


      state.taskList.push(state.newTaskInput);
      state.newTaskInput = '';
    }

    return {
      ...toRefs(state),
      addTask
    }
  }
};
</script>
