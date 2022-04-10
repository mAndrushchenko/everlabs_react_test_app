import React from "react"
import { Provider } from "react-redux"

import { AppRoutes } from "./routes"
import { store } from "./services/store"

import { CssBaseline } from "@mui/material"

export const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline/>
      <AppRoutes/>
    </Provider>
  )
}
