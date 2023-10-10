import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import searchIcon from "../resources/icons/searchIconYellow.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#263467",
        color: "white",
        textAlign: "center",
        padding: "50px",
        height: "500px",
      }}
    >
      <TextField
        sx={{
          width: "80%",
          margin: "40px",
          "& .MuiInputBase-input": {
            textAlign: "center", // Center the text
            color: "#FFB800", // Set text color
            fontSize: "30px",
          },
          "& .MuiInputBase-placeholder": {
            textAlign: "center", // Center the placeholder
            color: "#FFB800", // Set placeholder color
            fontSize: "30px",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img
                src={searchIcon}
                alt=""
                style={{
                  width: "30px",
                  height: "auto",
                  margin: "0 20px",
                }}
              />
            </InputAdornment>
          ),
          style: {
            border: "2px solid #FFB800",
            borderRadius: "202px",
            color: "#FFB800",
            textAlign: "center", // Center the text within the input
          },
        }}
        placeholder="Magic Search"
      />
    </Box>
  );
};

export default Footer;
