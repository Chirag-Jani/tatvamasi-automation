import React from "react";

import { Box } from "@mui/material";

import SearchField from "../components/utilities/SearchField";

import FooterStyle from "../styles/FooterStyle.module.css";

const Footer = () => {
  return (
    <Box className={FooterStyle.footerContainer}>
      <Box className={FooterStyle.footerSearcfield}>
        <SearchField />
      </Box>
    </Box>
  );
};

export default Footer;
