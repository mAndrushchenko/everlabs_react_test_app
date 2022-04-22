import React from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"

import { TodoItem } from "./TodoItem"
import { Grid, Typography } from "@mui/material"

import { todosFilterHelper } from "../../utils"
import { getSearchParamsHelper } from "../../utils"
import { getTodos } from "../../services/store/slices/todoSlice"


export const TodoItems = () => {
  // Used search params
  const [searchParams] = useSearchParams()
  const todos = useSelector(getTodos)
  const filteredTodos = todosFilterHelper({ todos, params: getSearchParamsHelper({ searchParams }) })

  return (
    <Grid container spacing={2}>
      {filteredTodos.length ? filteredTodos.map(todo => (
          <Grid key={todo.id} xs={12} item>
            <TodoItem todo={todo}/>
          </Grid>
      )).reverse()
        : (
            <Typography variant={"h6"} fontStyle={"italic"}>No todos..</Typography>
        )
      }
    </Grid>
  )
}
