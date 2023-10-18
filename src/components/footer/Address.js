import { Box, Typography } from "@mui/material";
import React from "react";
import DemoMap from "../../resources/DemoMap.svg";

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
      <img
        src={DemoMap}
        alt=""
        style={{
          width: "60%", // Default width for all screen sizes
          margin: "50px auto", // Center the image
          marginTop: "0",
          display: "block", // Remove any extra space below the image
          "@media (minWidth: 600px)": {
            width: "50%",
          },
          "@media (minWidth: 960px)": {
            width: "50%",
          },
        }}
      />

      <Typography
        sx={{
          fontWeight: 500,
          textAlign: "center",
          width: "60%",
          margin: "auto",
          fontSize: {
            xs: "20px",
            sm: "20px",
            m: "19px",
            lg: "19px",
            xl: "19px",
          },
        }}
      >
        PLOT NO. 5527 ROAD NO.55, GIDC, Sachin, Surat, Gujarat 394230
      </Typography>
    </Box>
  );
};

export default Address;
