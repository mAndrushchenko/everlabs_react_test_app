import React, { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"

import DeleteIcon from "@mui/icons-material/Delete"
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Box, Paper, Input, Checkbox, IconButton, Typography } from "@mui/material"

import { removeTodo, toggleStar, toggleTodo, updateTodoText } from "../../services/store/slices/todoSlice"


export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  // Navigation
  const navigate = useNavigate()
  const [ edit, setEdit ] = useState({})
  const [ form, setForm ] = useState({ title: todo.title, description: todo.description })

  const showInput = (e, name) => {
    e.stopPropagation()
    setEdit(prev => ({ ...prev, [name]: true }))
  }

  const hideInput = (e) => {
    e.preventDefault()
    setEdit({})

    if (form.title.trim()) {
      const updatedTodo = { ...todo, ...form }
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

  const onToggleStar = (e) => {
    e.stopPropagation()
    dispatch(toggleStar(todo))
  }

  const handleInputChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const openTodo = () => {
    navigate(`/todos/${todo.id}`)
  }

  const TodoText = ({ text, name, variant }) => (
    <Typography
      onClick={(e) => showInput(e, name)}
      variant={variant}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "auto", width: "100%" }}
    >
      {text}
    </Typography>
  )

  return (
    <Paper elevation={3} onClick={openTodo}>
      <Box px={3} py={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box mr={1}>
          <Checkbox checked={todo.isCompleted} onChange={handleCheckBox} onClick={(e) => e.stopPropagation()}/>
        </Box>
        <Box width={"100%"} display={"flex"} flexWrap={"wrap"} gap={2} alignItems={"center"}>
          {edit.title
            ? (
              <Box component={"form"} width={"100%"} onSubmit={hideInput}>
                <Input
                  name={"title"}
                  fullWidth
                  autoFocus
                  value={form.title}
                  onBlur={hideInput}
                  onChange={handleInputChange}
                  onClick={e => e.stopPropagation()}
                />
              </Box>
            )
            : <TodoText variant={"body1"} name="title" text={todo.title}/>}
          {form.description && (edit.description
          ? (
              <Box component={"form"} width={"100%"} onSubmit={hideInput}>
                <Input
                  name={"description"}
                  fullWidth
                  autoFocus
                  onBlur={hideInput}
                  sx={{ fontSize: 14 }}
                  value={form.description}
                  onChange={handleInputChange}
                  onClick={e => e.stopPropagation()}
                />
              </Box>
            )
          : <TodoText variant={"body2"} name="description" text={todo.description}/>)}
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Box ml={1}>
            <Typography variant={"body2"}>{todo.time}</Typography>
          </Box>
          <Box ml={1}>
            <IconButton onClick={onDeleteIcon}>
              <DeleteIcon color={"error"}/>
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={onToggleStar}>
              {todo.isImportant ? <StarIcon color={"warning"}/> : <StarBorderOutlinedIcon />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}
