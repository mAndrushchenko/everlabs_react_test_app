import React, { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"

import DeleteIcon from "@mui/icons-material/Delete"
import { Box, Paper, Input, Checkbox, IconButton, Typography } from "@mui/material"

import { removeTodo, toggleTodo, updateTodoText } from "../../services/store/slices/todoSlice"

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ isEdit, setIsEdit ] = useState(false)

  const [ inputValue, setInputValue ] = useState(todo.text)

  const showInput = (e) => {
    e.stopPropagation()
    setIsEdit(true)
  }

  const hideInput = () => {
    setIsEdit(false)

    if (inputValue.trim()) {
      const updatedTodo = { ...todo, text: inputValue }
      dispatch(updateTodoText(updatedTodo))
    } else {
      navigate("/todos")
      dispatch(removeTodo(todo))
    }
  }

  const handleCheckBox = () => {
    dispatch(toggleTodo(todo))
  }

  const onDeleteIcon = (e) => {
    e.stopPropagation()
    navigate("/todos")
    dispatch(removeTodo(todo))
  }

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const openTodo = () => {
    navigate(`/todos/${todo.id}`)
  }

  return (
    <Paper elevation={3} onClick={openTodo}>
      <Box px={3} py={2} display={"flex"} justifyContent={"space-between"}>
        <Box mr={1}>
          <Checkbox checked={todo.isCompleted} onChange={handleCheckBox} onClick={(e) => e.stopPropagation()}/>
        </Box>
        <Box width={"100%"} display={"flex"} alignItems={"center"}>
          {isEdit ?
            <Box component={"form"} width={"100%"} onSubmit={hideInput}>
              <Input fullWidth autoFocus value={inputValue} onBlur={hideInput} onChange={handleInputChange}/>
            </Box> :
            <Typography
              width={"100%"}
              style={{ textDecoration: todo.isCompleted ? "line-through" : "auto" }}
              onClick={showInput}
            >{todo.text}</Typography>
          }
        </Box>
        <Box ml={1}>
          <IconButton onClick={onDeleteIcon}>
            <DeleteIcon color={"error"}/>
          </IconButton>
        </Box>
      </Box>
    </Paper>
  )
}
