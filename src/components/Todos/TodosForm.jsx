import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { Box, Button, Grid, TextField, Typography } from "@mui/material"

import { addTodo } from "../../services/store/slices/todoSlice"


const initialFormState = {
  title: "",
  description: ""
}

export const TodosForm = () => {
  const dispatch = useDispatch()
  const [ form, setForm ] = useState(initialFormState)
  const [ isError, setIsError ] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!form.title.trim()) return setIsError(true)
    const generateInteger = (int) => int > 9 ? int : '0' + int
    const date = new Date()
    const h = date.getHours()
    const s = date.getMinutes()
    const m = date.getSeconds()

    dispatch(addTodo({
      id: date.getTime(),
      isCompleted: false,
      isImportant: false,
      date: date.getTime(),
      title: form.title.trim(),
      description: form.description.trim(),
      time: `${generateInteger(h)}:${generateInteger(s)}:${generateInteger(m)}`
    }))

    setForm(initialFormState)
    setIsError(false)
  }

  const handleInput = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }))
    setIsError(false)
  }

  return (
    <>
      <Box mb={3}>
        <Typography variant={"h6"}>Create todo</Typography>
      </Box>
      <Box component={"form"} onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={isError}
              name={"title"}
              value={form.title}
              variant={"standard"}
              placeholder={"Title"}
              onChange={handleInput}
              helperText={isError && "The field cannot be empty"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name={"description"}
              variant={"standard"}
              onChange={handleInput}
              value={form.description}
              placeholder={"Description"}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth name={"submitTodo"} variant={"contained"} type={"submit"}>Add todo</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
