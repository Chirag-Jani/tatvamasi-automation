import { Box } from "@mui/material";
import React from "react";
import SearchField from "../components/utilities/SearchField";
import QuickLinks from "../components/footer/QuickLinks";
import Address from "../components/footer/Address";
import Connections from "../components/footer/Connections";
import Copy from "../components/footer/Copy";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#162966",
        color: "#D9D9D9",
        textAlign: "center",
        padding: "20px",
        height: "fit-content",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          width: "75%",
          margin: "50px auto",
        }}
      >
        <SearchField />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            m: "space-evenly",
            lg: "space-evenly",
            xl: "space-evenly",
          },
          alignItems: {
            xs: "center",
            sm: "center",
            m: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
          width: "90%",
          flexDirection: {
            xs: "column",
            sm: "column",
            m: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <QuickLinks />
        <Address />
        <Connections />
      </Box>
      <Box
        sx={{
          width: "95%",
          margin: "20px 0 10px 0",
        }}
      >
        <Copy />
      </Box>
    </Box>
  );
};

export default Footer;
