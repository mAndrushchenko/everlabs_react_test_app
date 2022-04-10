import React from "react"
import { useParams } from "react-router"
import { useSelector } from "react-redux"

import { TodoItem } from "../TodoItem"
import { TodosForm } from "../TodosForm"
import { Box, Container, Grid } from "@mui/material"

import { getTodos } from "../../services/store/slices/todoSlice"

export const TodoList = () => {
  const { param } = useParams()
  const todos = useSelector(getTodos)

  // Todo: connect to local storage
  // const [getStorageTodos] = useStorage({ key: "todos", data: todos })


  const Todo = ({ todo }) => (
    <Grid xs={12} item>
      <TodoItem todo={todo}/>
    </Grid>
  )

  return (
    <Box component={"section"}>
      <Box mb={5}>
        <Container maxWidth={"md"}>
          <TodosForm/>
        </Container>
      </Box>

      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {todos.flatMap(todo => {
            if (param === "completed") {
              return todo.isCompleted ? [ <Todo key={todo.id} todo={todo}/> ] : []
            } else if (param === "uncompleted") {
              return !todo.isCompleted ? [ <Todo key={todo.id} todo={todo}/> ] : []
            } else {
              return [ <Todo key={todo.id} todo={todo}/> ]
            }
          })}
        </Grid>
      </Container>
    </Box>

  )
}
