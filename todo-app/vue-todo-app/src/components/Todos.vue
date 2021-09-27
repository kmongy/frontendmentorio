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
        <li class="todo-items" v-for="taskItem in tasksInView" :key="taskItem">
          <div class="todo-checkbox-wrapper">
            <div
              class="completion-circle completed"
              v-show="taskItem.completed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path
                  fill="none"
                  stroke="#FFF"
                  stroke-width="2"
                  d="M1 4.304L3.696 7l6-6"
                />
              </svg>
            </div>
            <div class="completion-circle" v-show="!taskItem.completed"></div>
            <input
              v-model="taskItem.completed"
              :checked="taskItem.completed"
              type="checkbox"
              class="todo-item-checkbox"
            />
          </div>

          <p class="todo-item-text" v-show="!taskItem.completed">
            {{ taskItem.label }}
          </p>
          <p class="todo-item-text completed" v-show="taskItem.completed">
            {{ taskItem.label }}
          </p>
          <div class="delete-todo" @click="deleteTask(taskItem.id)">
            <svg
              class="delete"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
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
        <p>{{ activeItemsCurrently.currentTaskLength }} items left</p>
        <p>Clear Completed</p>
      </div>
    </div>

    <div class="todos-status">
      <p class="todo-all-selection" @click="setView('All')">All</p>
      <p class="todo-active-selection" @click="setView('Active')">Active</p>
      <p class="todo-completed-selection" @click="setView('Completed')">
        Completed
      </p>
    </div>

    <p class="drag-drop-info">Drag and drop to reorder list</p>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";

export default {
  name: "Todos",

  setup() {
    const state = reactive({
      currentView: "All",
      newTaskInput: "",
      taskList: [],
    });

    const activeItemsCurrently = reactive({
      currentTaskLength: computed(() => {
        return state.taskList.filter((item) => item.completed === false).length;
      }),
    });

    const tasksInView = computed(() => {
      if (state.currentView === "Active") {
        return state.taskList.filter((item) => item.completed === false);
      } else if (state.currentView === "Completed") {
        return state.taskList.filter((item) => item.completed === true);
      } else {
        return state.taskList;
      }
    });

    const addTask = () => {
      state.taskList.push({
        id: Date.now(),
        label: state.newTaskInput,
        completed: false,
      });
      state.newTaskInput = "";
    };

    const deleteTask = (taskId) => {
      const taskIndex = state.taskList.findIndex((task) => task.id === taskId);
      state.taskList.splice(taskIndex, 1);
    };

    const setView = (viewLabel) => {
      state.currentView = viewLabel;
    };

    return {
      ...toRefs(state),
      addTask,
      tasksInView,
      setView,
      activeItemsCurrently,
      deleteTask,
    };
  },
};
</script>
