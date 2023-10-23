import React from "react";

import { Stack } from "@mui/material";

import homepageBanner from "../resources/banners/homepageBanner.svg";
import Menus from "../components/homepage/Menus";
import Companies from "../components/homepage/Companies";

const Homepage = () => {
  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      <img src={homepageBanner} alt="Tatvamasi Automation" />
      <Menus />
      <Companies />
    </Stack>
  );
};

export default Homepage;
