import React from "react"
import { useDispatch } from "react-redux"

import { Box, Button, Grid, Typography } from "@mui/material"

import { removeCompletedTodos, toggleAllTodos } from "../../services/store/slices/todoSlice"


export const TodosActions = () => {
  const dispatch = useDispatch()

  const onRemoveCompletedTodos = () => {
    dispatch(removeCompletedTodos())
  }

  const onToggleAllTodos = () => {
    dispatch(toggleAllTodos())
  }

  return (
    <>
      <Box mb={4}>
        <Typography variant={"h6"}>Todos actions</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item>
          <Button variant={"contained"} onClick={onToggleAllTodos}>Toggle all</Button>
        </Grid>

        <Grid item>
          <Button variant={"contained"} color={"secondary"} onClick={onRemoveCompletedTodos}>Remove completed</Button>
        </Grid>
      </Grid>

    </>
  )
}
