import React from "react"
import { useSearchParams } from "react-router-dom"

import {
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  FormGroup,
  InputLabel,
  FormControlLabel, Typography, Button
} from "@mui/material"

import {
  TODO_STATE_FILTER,
  TODO_IS_IMPORTANT_FILTER,
  TODO_SORT_BY_DATE_FILTER,
  TODO_WITH_DESCRIPTION_FILTER
} from "../../constants"
import { getSearchParamsHelper } from "../../utils"


export const TodosFilter = () => {
  // handle search params
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSelect = ({ target }) => {
    const prevSearchParams = getSearchParamsHelper({ searchParams })
    setSearchParams({ ...prevSearchParams, [target.name]: target.value })
  }

  const handleCheckbox = ({ target }) => {
    const prevSearchParams = getSearchParamsHelper({ searchParams })
    setSearchParams({ ...prevSearchParams, [target.name]: target.checked ? 'checked' : 'unchecked' })
  }

  const onResetFilters = () => {
    setSearchParams({})
  }

  return (
    <>
      <Box mb={3}>
        <Typography variant={"h6"}>Filters</Typography>
      </Box>
      <Box as={"form"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="todos-state-label">State</InputLabel>
              <Select
                label="State"
                value={searchParams.get(TODO_STATE_FILTER) || 'all'}
                name={TODO_STATE_FILTER}
                onChange={handleSelect}
                labelId="todos-state-label"
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'completed'}>Completed</MenuItem>
                <MenuItem value={'uncompleted'}>Uncompleted</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="todos-sort-by-date-label">Sort by date</InputLabel>
              <Select
                name={TODO_SORT_BY_DATE_FILTER}
                value={searchParams.get(TODO_SORT_BY_DATE_FILTER) || 'default'}
                label="Sort by date"
                defaultValue="default"
                onChange={handleSelect}
                labelId="todos-sort-by-date-label"
              >
                <MenuItem value={'default'}>Default</MenuItem>
                <MenuItem value={'first-new'}>First new</MenuItem>
                <MenuItem value={'first-old'}>First old</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                name={TODO_WITH_DESCRIPTION_FILTER}
                label="With description"
                control={<Checkbox />}
                checked={searchParams.get(TODO_WITH_DESCRIPTION_FILTER) === 'checked'}
                onChange={handleCheckbox}
              />
              <FormControlLabel
                label="Important"
                name={TODO_IS_IMPORTANT_FILTER}
                control={<Checkbox />}
                onChange={handleCheckbox}
                checked={searchParams.get(TODO_IS_IMPORTANT_FILTER) === 'checked'}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant={"contained"} onClick={onResetFilters}>Reset filters</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
