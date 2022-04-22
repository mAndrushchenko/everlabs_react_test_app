import React from "react"
import { Link } from "react-router-dom"

import { Container, AppBar, Button, Box } from "@mui/material"


const pages = [
  { name: "Home", path: "/" },
  { name: "Words", path: "words" },
  { name: "Todos", path: "todos" },
  { name: "Photos", path: "photos" },
  { name: "Sign up", path: "sign-up" },
  { name: "Profile", path: "profile" },
]

export const Header = () => (
  <AppBar position="static">
    <Container maxWidth="sm">
      <Box display={"flex"} flexWrap={"nowrap"} gap={2} justifyContent={"space-between"}>
        {pages.map(({ name, path }, index) => (
          <Box key={index} textAlign={"center"}>
            <Button to={path} color="inherit" component={Link}>{name}</Button>
          </Box>
        ))}
      </Box>
    </Container>
  </AppBar>
)
