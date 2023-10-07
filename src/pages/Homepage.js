import React from "react";

import { Stack } from "@mui/material";

import homepageBanner from "../resources/homepageImages/homepageBanner.png";

const Homepage = () => {
  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      <img src={homepageBanner} alt="Tatvamasi Automation" />
    </Stack>
  );
};

export default Homepage;
