import React from 'react'

import randomWords from 'random-words'

import {
  Box,
  Grid,
  FormLabel,
  FormControl,
  Radio,
  Checkbox,
  TextField,
  RadioGroup,
  FormControlLabel, FormGroup, Slider, Button
} from "@mui/material"

export const SingUpForm = ({ onSubmit, handleSignUpForm, form, errors }) => {

  return (
    <Box as={'form'} noValidate onChange={handleSignUpForm} onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            value={form.firstName}
            name={"firstName"}
            label={"First name"}
          />
        </Grid>
        <Grid item  xs={12}>
          <TextField
            required
            fullWidth
            value={form.lastName}
            name={"lastName"}
            label={"Last name"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="gender-radio">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender-radio"
              value={form.gender}
              name="gender"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other"/>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel name={"isMarried"} checked={!!form.isMarried} control={<Checkbox />} label="Married"/>
            <FormControlLabel name={"hasChildren"} checked={!!form.hasChildren} control={<Checkbox />} label="Have children"/>
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel id="success-range">How successful are you?</FormLabel>
            <Slider
              aria-required
              size="small"
              name={"successRange"}
              value={form.successRange}
              onChange={handleSignUpForm}
              aria-label="success-range"
              valueLabelDisplay="auto"
            />
          </FormControl>

        </Grid>

        <Grid item xs={12} textAlign={"center"}>
          <Button type={"submit"} variant={"contained"}>Sign up</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
