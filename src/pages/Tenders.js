import { Box, Typography } from "@mui/material";
import React from "react";
import tendersBanner from "../resources/banners/tendersBanner.svg";

const Tenders = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Montserrat-ExtraBoldItalic",
            color: "#484848",
            fontSize: {
              xl: "39.58px",
              lg: "39.58px",
              m: "39.58px",
              sm: "39.58px",
              xs: "30px",
            },
            textAlign: "center",
            margin: "20px",
          }}
        >
          Tenders
        </Typography>
        <img
          src={tendersBanner}
          alt="Tatvamasi Automation"
          style={{
            maxWidth: "99vw",
          }}
        />
      </Box>
    </Box>
  );
};

export default Tenders;
