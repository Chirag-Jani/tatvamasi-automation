import { Box, Skeleton, Typography } from "@mui/material";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import contactUsBanner from "../resources/banners/ContactUsBanner.png";

const Careers = () => {
  const [timeToLoad, setTimeToLoad] = useState(false);

  useEffect(() => {
    Aos.init({
      // Global settings:
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });

    setTimeout(() => {
      setTimeToLoad(true);
    }, 2000);
  }, []);
  return (
    <Box>
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
          Careers
        </Typography>
        {timeToLoad ? (
          <img
            // data-aos="zoom-in"
            src={contactUsBanner}
            alt="Tatvamasi Automation"
            style={{
              width: "100%",
            }}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={"300px"}
            sx={{
              borderRadius: "10px",
            }}
          />
        )}
      </Box>
      <iframe
        title="Apply Here"
        src="https://docs.google.com/forms/d/e/1FAIpQLSftsHor2qd8E0QMV7kRo2ZLP_AkRT8ISmAiijlJh2RA5k9K0g/viewform?embedded=true"
        width="100%"
        height="1000px"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style={{
          margin: "40px auto"
        }}
      >
        Loading…
      </iframe>
    </Box>
  );
};

export default Careers;
