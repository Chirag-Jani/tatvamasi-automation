import { Box, Typography } from "@mui/material";
import React from "react";

const Copy = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "center",
          m: "space-between",
          lg: "space-between",
          xl: "space-between",
        }, // Align elements to the start and end of the container
        flexDirection: {
          xs: "column",
          sm: "column",
          m: "row",
          lg: "row",
          xl: "row",
        },
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#A17C1C",
          textAlign: "left",
          flex: 1, // Allow the element to grow to take up available space
        }}
      >
        Copyright : Tatvamasi Automation Pvt. Ltd.
      </Typography>
      <Typography
        sx={{
          color: "#A17C1C",
        }}
      >
        Website Design & Developed By : Creative Work Company
      </Typography>
    </Box>
  );
};

export default Copy;
