import React from "react"
import { useSelector } from "react-redux"
import { useParams, Navigate, useMatch } from "react-router"

import { TodoItem } from "./TodoItem"
import { getTodos } from "../../services/store/slices/todoSlice"


export const TodoWrapper = () => {
  // Reading URL Parameters
  const { todoId } = useParams()

  // useMatch hook
  const match = useMatch('/todos/:todoId')
  // // const match = useMatch('/todos/12345')
  console.log(match)

  const todos = useSelector(getTodos)
  const todo = todos.filter(({ id }) => todoId === id + '')[0]

  return todo ? <TodoItem todo={todo}/> : <Navigate to={"/todos"}/>
}
