import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Container, AppBar, Button, Box, IconButton } from "@mui/material"


const pages = [
  { name: "Home", path: "/" },
  { name: "Words", path: "words" },
  { name: "Todos", path: "todos" },
  { name: "Photos", path: "photos" },
  { name: "Sign up", path: "sign-up" },
  { name: "Profile", path: "profile" },
]

export const Header = () => {
  // Navigation
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Box display={"flex"} flexWrap={"nowrap"} alignItems={"center"} gap={2} justifyContent={"space-between"}>
          <Box textAlign={"center"}>
            <IconButton color="inherit" onClick={() => navigate(-1)}><ArrowBackIcon/></IconButton>
          </Box>
          {pages.map(({ name, path }, index) => (
            <Box key={index} textAlign={"center"}>
              <Button to={path} color="inherit" component={Link}>{name}</Button>
            </Box>
          ))}
          <Box textAlign={"center"}>
            <IconButton  color="inherit" onClick={() => navigate(1)}><ArrowForwardIcon/></IconButton>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}
