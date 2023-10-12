import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import searchIcon from "../../resources/icons/searchIconYellow.svg";

const SearchField = () => {
  return (
    <d>
      <TextField
        sx={{
          width: "100%",
          "& .MuiInputBase-input": {
            textAlign: "center", // Center the text
            color: "#FFB800", // Set text color
            fontSize: "16px",
          },
          "& .MuiInputBase-placeholder": {
            textAlign: "center", // Center the placeholder
            color: "#FFB800", // Set placeholder color
            fontSize: "16px",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img
                src={searchIcon}
                alt=""
                style={{
                  width: "20px",
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
    </d>
  );
};

export default SearchField;
