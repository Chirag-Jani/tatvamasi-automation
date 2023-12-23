import React, { useEffect } from "react";

import { Stack } from "@mui/material";

import homepageBanner from "../resources/banners/homepageBanner.svg";
import Menus from "../components/homepage/Menus";
import Companies from "../components/homepage/Companies";
import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    Aos.init({
      // Global settings:
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
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
