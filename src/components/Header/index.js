import React from "react";
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Button } from "@mui/material";
import Box from "@mui/material/Box";


export const Header = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Box display="inline-block" width="100%" textAlign="center">
          <Button to='todos' color="inherit" component={Link}>Todos</Button>
          <Button to='photos' color="inherit" component={Link}>Photos</Button>
        </Box>
      </Container>
    </AppBar>
  );
};
