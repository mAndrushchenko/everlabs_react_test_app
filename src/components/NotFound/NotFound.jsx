import React from 'react'

import { Box, Container, Typography } from "@mui/material"


export const NotFound = () => (
  <Container maxWidth="xl">
    <Box my={4} textAlign="center">
      <Typography variant="h3" as="h1">Not found</Typography>
      <Typography variant="h3" as="h1">404</Typography>
    </Box>
  </Container>
)
