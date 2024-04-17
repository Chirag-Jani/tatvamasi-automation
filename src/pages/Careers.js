import { Box, Typography, Button } from "@mui/material";
import Aos from "aos";
import React, { useEffect } from "react";
import formBanner from "../resources/banners/form banner 2.png";

const Careers = () => {
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
    <Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Montserrat-BoldItalic",
            color: "#484848",
            fontSize: {
              xl: "45px",
              lg: "45px",
              m: "45px",
              sm: "45px",
              xs: "40px",
            },
            textAlign: "center",
            margin: "20px",
          }}
        >
          We Are <u>Hiring</u>
        </Typography>

        <img
          data-aos="zoom-in"
          src={formBanner}
          alt="Tatvamasi Automation"
          style={{
            width: "100%",
          }}
        />
      </Box>

      <Box m={5} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          component={"a"}
          target="_blank"
          href="https://forms.gle/RP8ESGMzPJo5TPHQ8"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "10px",
            fontSize: "18px",
            px: 4,
            py: 2,
          }}
        >
          Apply Now for a Job
        </Button>
      </Box>
    </Box>
  );
};

export default Careers;
