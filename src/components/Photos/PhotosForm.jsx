import React, { useEffect, useState } from "react";

import { Box, Button, Grid, TextField } from "@mui/material";

export const PhotosForm = ({ getPhotosById, currentAlbumId }) => {
  const [albumId, setAlbumId] = useState('')
  const [isError, setIsError] = useState(false)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)

  const onChange = (e) => {
    const value = e.target.value

    if (value < 1 || value > 100 || isNaN(+value)) {
      return setIsError(true)
    }
    setIsError(false)
    setAlbumId(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (isError) return

    getPhotosById({ albumId })
  }

  useEffect(() => {
    setIsBtnDisabled(+albumId === +currentAlbumId)
  }, [albumId, currentAlbumId])

  return (
    <Box px={3} py={2} component={"form"} onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={8}>
          <TextField
            fullWidth
            type={"number"}
            error={isError}
            value={albumId}
            variant={"standard"}
            onChange={onChange}
            InputProps={{ inputProps: { min: 1, max: 100 } }}
            helperText={isError && "Album id should be number from 1 to 100"}/>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Button fullWidth type={"submit"} disabled={isBtnDisabled} variant={"contained"}>Get photos</Button>
        </Grid>
      </Grid>
    </Box>
  );
};


