import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

import { Home } from "../components/Home";
import { Todos } from "../components/Todos";
import { Photos } from "../components/Photos";
import { Header } from "../components/Header";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";

export const AppRoutes = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todos" element={<Todos />} >
        <Route index element={<TodoList />} />
        <Route path=":todoId" element={<TodoItem />} />
      </Route>
      <Route path="photos" exact element={<Photos />} />
    </Routes>
  </BrowserRouter>
)
