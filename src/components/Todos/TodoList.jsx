import React from "react"

import { TodoItems } from "./TodoItems"
import { TodosForm } from "./TodosForm"
import { TodosFilter } from "./TodosFilter"
import { TodosActions } from "./TodosActions"
import { Box, Grid } from "@mui/material"


export const TodoList = () => {

  return (
    <Box component={"section"}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Grid container spacing={6} position={"sticky"} top={0}>
            <Grid item xs={12}>
              <TodosForm/>
            </Grid>

            <Grid item xs={12}>
              <TodosFilter/>
            </Grid>

            <Grid item xs={12}>
              <TodosActions/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <TodoItems/>
        </Grid>
      </Grid>
    </Box>
  )
}
