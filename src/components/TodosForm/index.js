import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Box, Button, TextField } from "@mui/material"

import { addTodo, removeCompletedTodos, toggleAllTodos } from "../../services/store/slices/todoSlice"

export const TodosForm = () => {
  const dispatch = useDispatch()
  const [ text, setText ] = useState("")
  const [ isError, setIsError ] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text.trim()) return setIsError(true)

    const todo = {
      text,
      id: Date.now(),
      isCompleted: false
    }

    setText("")
    setIsError(false)
    dispatch(addTodo(todo))
  }

  const onChange = ({ target }) => {
    setText(target.value)
    setIsError(false)
  }

  const onRemoveCompletedTodos = () => {
    dispatch(removeCompletedTodos())
  }

  const onToggleAllTodos = () => {
    dispatch(toggleAllTodos())
  }

  return (
    <>
      <Box component={"form"} mb={2} textAlign={"center"} onSubmit={onSubmit}>
        <Box display={"inline-block"}>
          <TextField
            error={isError}
            value={text}
            name={"todoInput"}
            onChange={onChange}
            variant={"standard"}
            helperText={isError && "The field cannot be empty"}
          />
        </Box>
        <Box ml={2} display={"inline-block"}>
          <Button name={"submitTodo"} variant={"contained"} type={"submit"}>Add todo</Button>
        </Box>
      </Box>
      <Box textAlign={"center"} display={"flex"} gap={2} flexWrap={"wrap"} justifyContent={"center"}>
        <Button variant={"contained"} onClick={onToggleAllTodos}>Toggle all todos</Button>
        <Button to={"/todos"} variant={"contained"} component={Link}>All todos</Button>
        <Button to={"/todos/filter/uncompleted"} variant={"contained"} component={Link}>Uncompleted todos</Button>
        <Button to={"/todos/filter/completed"} variant={"contained"} component={Link}>Completed todos</Button>
        <Button variant={"contained"} color={"secondary"} onClick={onRemoveCompletedTodos}>Remove completed
          todos</Button>
      </Box>
    </>
  )
}
