import { configureStore } from "@reduxjs/toolkit";

import { todoSlice } from "./slices/todoSlice";
import { saveToLocalStorage } from "../../utils/handleLocalStorage"

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
})

store.subscribe(() => {
  const state = store.getState()

  saveToLocalStorage({ key: 'todos', data: state.todos })
})
