import React, { useEffect, useState } from "react"
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
import { getSearchParamsHelper } from "../../utils/getSearchParamsHelper"


// Todo: add groups
// const groups = [{ name: 'All', value: 'all' }, { name: 'Family', value: 'family' }, { name: 'Work', value: 'work' }]

export const filters = {
  todoState: 'todo_state',
  sortByDate: 'sort_by_date',
  isImportant: 'is_important',
  withDescription: 'with_description'
}

export const TodosFilter = () => {
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
                value={searchParams.get(filters.todoState) || 'all'}
                name={filters.todoState}
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
                name={filters.sortByDate}
                value={searchParams.get(filters.sortByDate) || 'default'}
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
          {/*<Grid item xs={12}>*/}
          {/*  <FormControl fullWidth>*/}
          {/*    <InputLabel id="todos-sort-by-group-label">Sort by group</InputLabel>*/}
          {/*    <Select*/}
          {/*      labelId="todos-sort-by-group-label"*/}
          {/*      id="todos-sort-by-group-select"*/}
          {/*      defaultValue={groups[0].value}*/}
          {/*      label="Sort by group"*/}
          {/*    >*/}
          {/*      {groups.map((group, index) => (*/}
          {/*        <MenuItem key={index} value={group.value}>{group.name}</MenuItem>*/}
          {/*      ))}*/}
          {/*    </Select>*/}
          {/*  </FormControl>*/}
          {/*</Grid>*/}
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                name={filters.withDescription}
                label="With description"
                control={<Checkbox />}
                checked={searchParams.get(filters.withDescription) === 'checked'}
                onChange={handleCheckbox}
              />
              <FormControlLabel
                label="Important"
                name={filters.isImportant}
                control={<Checkbox />}
                onChange={handleCheckbox}
                checked={searchParams.get(filters.isImportant) === 'checked'}
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
