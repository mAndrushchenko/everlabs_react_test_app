import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: [],
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload)
    },

    setTodos: (state, { payload }) => payload,

    removeTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload.id)
    },

    removeCompletedTodos: (state) => {
      return state.filter(({ isCompleted }) => !isCompleted)
    },

    toggleTodo: (state, { payload }) => {
      let toggledTodo = null
      state.forEach((todo) => {
        if (todo.id === payload.id) {
          todo.isCompleted = !todo.isCompleted
          toggledTodo = todo.isCompleted || toggledTodo
        }
      })
      // Move completed todo to the end of the list
      // toggledTodo && state.push(state.splice(state.indexOf(toggledTodo), 1)[0])
    },

    toggleAllTodos: (state) => {
      const isEveryCompleted = state.every(({ isCompleted }) => isCompleted)
      state.forEach(todo => todo.isCompleted = !isEveryCompleted)
    },

    updateTodoText: (state, { payload }) => {
      state.forEach(todo => {
        if (todo.id === payload.id) {
          todo.text = payload.text
        }
      })
    }
  }
})

export const {
  addTodo,
  setTodos,
  removeTodo,
  removeCompletedTodos,
  toggleTodo,
  toggleAllTodos,
  updateTodoText
} = todoSlice.actions

export const getTodos = (state) => state.todos
