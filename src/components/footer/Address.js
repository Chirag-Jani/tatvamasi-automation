import { Box, Typography } from "@mui/material";
import React from "react";
import Map from "./Map";

const Address = () => {
  return (
    <Box
      sx={
        {
          // border: "2px solid #0C183D",
          // height: "100%",
        }
      }
    >
      <Typography
        sx={{
          fontWeight: 600,
          textAlign: "center",
          // fontSize: {
          //   xs: "25px", // Extra small screens
          //   sm: "28px", // Small screens
          //   md: "32px", // Medium screens
          //   lg: "32px", // Large screens
          //   xl: "36px", // Extra large screens
          // },
          fontSize: "35px",
          margin: {
            xs: "20px 0",
            sm: "20px 0",
            m: "0 0 100px 0",
            lg: "0 0 100px 0",
            xl: "0 0 100px 0",
          },
        }}
      >
        Address
      </Typography>

      <Box>
        <Map />
      </Box>

      <Typography
        sx={{
          fontWeight: 500,
          textAlign: "center",
          width: {
            xs: "90%",
            sm: "90%",
            m: "60%",
            lg: "60%",
            xl: "60%",
          },
          margin: "auto",
          fontSize: {
            xs: "15px",
            sm: "20px",
            m: "19px",
            lg: "19px",
            xl: "19px",
          },
        }}
      >
        Tatvamasi Automation Pvt. Ltd. Plot No. F-18 TO F-21, G-22, Satyam
        Estate, at. Lindiyad, Ta. Mangrol, Dist. Surat - 394110
      </Typography>
    </Box>
  );
};

export default Address;
