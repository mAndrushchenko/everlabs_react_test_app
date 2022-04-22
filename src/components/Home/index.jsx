import React, { Suspense } from 'react'

import { Box, Container, Typography } from "@mui/material";

export const Home = () => (
  <Container maxWidth="xl">
    <Box my={4} textAlign="center">
      <Typography variant="h3" as="h1">Home</Typography>
    </Box>
  </Container>
)
