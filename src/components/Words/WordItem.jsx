import React from 'react'
import { Box, Paper, Typography } from "@mui/material"

export const WordItem = ({ word }) => {
  return (
    <Paper elevation={3}>
      <Box px={3} py={2}>
        <Typography>{ word }</Typography>
      </Box>
    </Paper>

  )
}
