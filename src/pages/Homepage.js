import React from "react";

import { Stack } from "@mui/material";

import homepageBanner from "../resources/homepageImages/homepageBanner.png";
import Menus from "../components/homepage/Menus";

const Homepage = () => {
  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      <img src={homepageBanner} alt="Tatvamasi Automation" />
      <Menus />
    </Stack>
  );
};

export default Homepage;
