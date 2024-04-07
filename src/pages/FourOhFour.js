import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Container, Box } from "@mui/material";

const FourOhFour = () => {
  const navigate = useNavigate();

  function handleHomeClick() {
    navigate("/");
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h2" gutterBottom>
          404
        </Typography>
        <Typography variant="body1" gutterBottom>
          Oops! Page not found.
        </Typography>
        <Button
          variant="contained"
          onClick={handleHomeClick}
          sx={{ mt: 3, mb: 2 }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default FourOhFour;
