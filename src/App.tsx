import React from "react";
import ReactDOM from "react-dom";
import { theme } from "./styles/theme";
import { Button, Container, ThemeProvider, Typography } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h5" fontWeight="700">
          PROYECTO TEST REACT
        </Typography>
        <Typography variant="body2">
          Proyecto test, React MUI, Microfront
        </Typography>
        <hr />
        <Button variant="contained" onClick={() => alert("Este es un click")}>
          Click
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
