import React, { useState } from "react";
import { useParams } from "react-router";

import { Box, Paper, Input, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoItem = () => {
  const { todoId } = useParams()

  const [isEdit, setIsEdit] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [inputValue, setInputValue] = useState(todoId || 'Default value')

  const showInput = () => {
    setIsEdit(true)
  }

  const hideInput = () => {
    setIsEdit(false)
  }


  const handleCheckBox = () => {
    setIsCompleted(prevState => !prevState)
  }
  const removeTodo = () => {

  }

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }


  return (
    <Paper elevation={3}>
      <Box px={3} py={2} display={"flex"} justifyContent={"space-between"}>
        <Box mr={1}>
          <Checkbox checked={isCompleted} onChange={handleCheckBox}/>
        </Box>
        <Box width={"100%"} display={"flex"} alignItems={"center"}>
          {isEdit ?
            <Input fullWidth autoFocus value={inputValue} onBlur={hideInput} onChange={handleInputChange}/> :
            <Typography
              width={"100%"}
              style={{ textDecoration: isCompleted ? "line-through" : "auto"}}
              onClick={showInput}
            >{inputValue}</Typography>
          }
        </Box>
        <Box ml={1}>
          <IconButton onClick={removeTodo}>
            <DeleteIcon color={"error"} />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  )
}
