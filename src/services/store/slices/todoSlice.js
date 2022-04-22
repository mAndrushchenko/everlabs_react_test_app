import { createSlice } from "@reduxjs/toolkit"
import { loadFromLocalStorage } from "../../../utils"

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: loadFromLocalStorage({ key: 'todos', initialValue: [] }),
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload)
    },

    removeTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload.id)
    },

    removeCompletedTodos: (state) => {
      return state.filter(({ isCompleted }) => !isCompleted)
    },

    toggleTodo: (state, { payload }) => {
      state.forEach((todo) => {
        if (todo.id === payload.id) {
          todo.isCompleted = !todo.isCompleted
        }
      })

      state.sort((a, b) => (a.isCompleted === b.isCompleted) ? 0 : a.isCompleted ? -1 : 1)
    },

    toggleStar: (state, { payload }) => {
      state.forEach((todo) => {
        if (todo.id === payload.id) {
          todo.isImportant = !todo.isImportant
        }
      })
    },

    toggleAllTodos: (state) => {
      const isEveryCompleted = state.every(({ isCompleted }) => isCompleted)
      state.forEach(todo => todo.isCompleted = !isEveryCompleted)
    },

    updateTodoText: (state, { payload }) => {
      state.forEach(todo => {
        if (todo.id === payload.id) {
          todo.title = payload.title
          todo.description = payload.description
        }
      })
    }
  }
})

export const {
  addTodo,
  removeTodo,
  removeCompletedTodos,
  toggleTodo,
  toggleStar,
  toggleAllTodos,
  updateTodoText
} = todoSlice.actions

export const getTodos = (state) => state.todos
