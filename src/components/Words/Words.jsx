import React from 'react'
import randomWords from "random-words"

import { Autocomplete, Box, Container, Stack, TextField, Typography } from "@mui/material"

export const Words = () => {

  const words = randomWords(10)


  return (
    <Container maxWidth={"xs"}>
      <Box my={4} textAlign="center">
        <Typography variant="h3" as="h1">Todos</Typography>
      </Box>

      <Stack spacing={2}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={words.map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              fullWidth
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>



    </Container>
  )
}
