import React, { useEffect } from "react";

import { Stack } from "@mui/material";

import homepageBanner from "../resources/banners/homepageBanner.svg";
import Menus from "../components/homepage/Menus";
import Companies from "../components/homepage/Companies";
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      <img data-aos="zoom-in" src={homepageBanner} alt="Tatvamasi Automation" />
      <Menus />
      <Companies />
    </Stack>
  );
};

export default Homepage;
