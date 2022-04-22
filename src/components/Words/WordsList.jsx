import React from "react"

import { Grid } from "@mui/material"
import { WordItem } from "./WordItem"

export const WordsList = ({ wordList }) => (
  <Grid container>
    {wordList.map((word, index) => (
      <Grid item key={index}>
        <WordItem word={word}/>
      </Grid>
    ))}
  </Grid>
)
