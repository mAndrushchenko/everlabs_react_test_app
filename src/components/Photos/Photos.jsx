import React, { useState } from "react";

import { PhotosForm } from "./PhotosForm";
import { getPhotos } from "../../api/axios";
import { PhotoItem } from "./PhotoItem";

import { Box, Container, Grid, Typography } from "@mui/material";

export const Photos = () => {
  const [photos, setPhotos] = useState([])
  const [currentAlbumId, setCurrentAlbumId] = useState(null)

  const getPhotosById = ({ albumId }) => {
    getPhotos({ albumId }).then(res => {
      if (Array.isArray(res?.data)) {
        setPhotos(res.data)
      } else {
        console.error("Response data is not an array")
      }
    }).catch(err => console.error(err.message))
    setCurrentAlbumId(albumId)
  }

  return (
    <Container maxWidth={"lg"}>
      <Box mt={4} mb={8}>
        <Box mb={3} textAlign="center">
          <Typography variant="h3" as="h1">Photos</Typography>
        </Box>
        <Container maxWidth={"sm"}>
          <PhotosForm getPhotosById={getPhotosById} currentAlbumId={currentAlbumId}/>
        </Container>
        <Grid container spacing={2} mt={3}>
          {photos.map((photo, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <PhotoItem photo={photo}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
