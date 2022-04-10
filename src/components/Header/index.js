import React from "react"
import { Link } from "react-router-dom"

import { Container, AppBar, Button, Grid } from "@mui/material"

const pages = [
  { name: "Home", path: "/" },
  { name: "Todos", path: "todos" },
  { name: "Photos", path: "photos" }
]

export const Header = () => (
  <AppBar position="static">
    <Container maxWidth="xs">
      <Grid container>
        {pages.map(({ name, path }, index) => (
          <Grid item xs={4} key={index} textAlign={"center"}>
            <Button to={path} color="inherit" component={Link}>{name}</Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  </AppBar>
)
