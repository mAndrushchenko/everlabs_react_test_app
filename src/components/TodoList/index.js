import React from "react";

import { Container, Grid } from "@mui/material";

import { TodoItem } from "../TodoItem";

export const TodoList = () => (
  <Container maxWidth="sm">
    <Grid container spacing={2}>
      <Grid xs={12} item>
        <TodoItem />
      </Grid>
      <Grid xs={12} item>
        <TodoItem />
      </Grid>
      <Grid xs={12} item>
        <TodoItem />
      </Grid>
      <Grid xs={12} item>
        <TodoItem />
      </Grid>
    </Grid>
  </Container>
)
