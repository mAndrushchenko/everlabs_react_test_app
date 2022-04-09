import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const PhotoItem = ({ photo }) => (
  <Card sx={{ height: "100%" }} raised>
    <CardMedia
      height={140}
      component={"img"}
      image={photo?.url || ''}
    />
    <CardContent>
      <Typography>{photo?.title || ''}</Typography>
    </CardContent>
  </Card>
)
