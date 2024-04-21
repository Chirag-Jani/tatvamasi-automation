import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";

const TenderCard = (props) => {
  const { cardName, cardImg } = props;

  useEffect(() => {
    Aos.init({
      // Global settings:
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <Box
      // data-aos="flip-down"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        margin: {
          xl: "20px 50px",
          lg: "20px 50px",
          m: "20px 0px",
          sm: "20px 0px",
          xs: "20px 0px",
        },
      }}
    >
      <Box
        sx={{
          cursor: "pointer", // temporary
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#DCDCDC",
          width: "303.65px",
          height: "242.92px",
          borderRadius: "22px",
          boxShadow: "4px 4px 0px rgba(176, 176, 176, 1)",
        }}
      >
        <img src={cardImg} alt={cardName} />
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          color: "#484848",
          fontSize: "27px",
          margin: "20px",
        }}
      >
        {cardName}
      </Typography>
    </Box>
  );
};

export default TenderCard;
