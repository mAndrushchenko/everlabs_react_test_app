import React from 'react'

import { AppRoutes } from "./routes";

import { CssBaseline } from "@mui/material";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <AppRoutes />
    </>
  );
}
