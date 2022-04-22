import React from 'react'

import { Avatar, Box, Typography } from "@mui/material"


export const PersonalInfo = () => {

  return (
    <Box>
      <Box display={"flex"} alignItems={"center"} gap={4}>
        <Avatar
          sx={{ width: 100, height: 100 }}
          src={"https://static.espreso.tv/uploads/article/211035/images/im-main.jpg"}
        />
        <Typography as={"h2"} variant={"h4"}>Barsick</Typography>
      </Box>
    </Box>
  )
}
