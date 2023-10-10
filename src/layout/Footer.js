import { Box } from "@mui/material";
import React from "react";
import SearchField from "../components/utilities/SearchField";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#263467",
        color: "white",
        textAlign: "center",
        padding: "20px",
        height: "500px",
      }}
    >
      <Box
        sx={{
          width: "75%",
          margin: "20px auto",
        }}
      >
        <SearchField />
      </Box>
    </Box>
  );
};

export default Footer;
