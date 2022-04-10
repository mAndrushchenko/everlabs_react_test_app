import React from "react"
import { useSelector } from "react-redux"
import { useParams, Navigate } from "react-router"

import { TodoItem } from "./index"
import { getTodos } from "../../services/store/slices/todoSlice"

export const TodoWrapper = () => {
  const { todoId } = useParams()
  const todos = useSelector(getTodos)
  const todo = todos.filter(({ id }) => +todoId === id)[0]

  return todo ? <TodoItem todo={todo}/> : <Navigate to={"/todos"}/>
}
