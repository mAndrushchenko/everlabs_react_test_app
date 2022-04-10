import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "../components/Home"
import { Todos } from "../components/Todos"
import { Photos } from "../components/Photos"
import { Header } from "../components/Header"
import { TodoList } from "../components/TodoList"
import { TodoWrapper } from "../components/TodoItem/TodoWrapper"

export const AppRoutes = () => (
  <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="todos" element={<Todos/>}>
        <Route index element={<TodoList/>}/>
        <Route path="filter/:param" element={<TodoList/>}/>
        <Route path=":todoId" element={<TodoWrapper/>}/>
      </Route>
      <Route path="photos" exact element={<Photos/>}/>
    </Routes>
  </BrowserRouter>
)
