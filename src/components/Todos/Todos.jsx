import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container, Typography, Box } from "@mui/material";

export const Todos = () => (
  <Container maxWidth="lg">
    <Box my={4} textAlign="center">
      <Typography variant="h3" as="h1">Todos</Typography>
    </Box>
    <Outlet />
  </Container>
)
