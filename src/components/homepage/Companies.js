import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";

import "../../styles/CompaniesStyle.css";

import BHEL from "../../resources/clientLogos/BHEL.svg";
import MD from "../../resources/clientLogos/MD.svg";
import NTPC from "../../resources/clientLogos/NTPC.svg";
import ONGC from "../../resources/clientLogos/ONGC.svg";
import TAPI from "../../resources/clientLogos/TAPI.svg";
import ADANI from "../../resources/clientLogos/ADANI.svg";
import AMIORGS from "../../resources/clientLogos/AMIORGS.svg";
import AUNDE from "../../resources/clientLogos/AUNDE.svg";
import FILATEX from "../../resources/clientLogos/FILATEX.svg";
import GAIL from "../../resources/clientLogos/GAIL.svg";
import GNFC from "../../resources/clientLogos/GNFC.svg";
import INDRAIL from "../../resources/clientLogos/INDRAIL.svg";
import LT from "../../resources/clientLogos/LT.svg";
import RELIANCE from "../../resources/clientLogos/RELIANCE.svg";
import SMC from "../../resources/clientLogos/SMC.svg";
import TRIDENT from "../../resources/clientLogos/TRIDENT.svg";

const clientList = [
  BHEL,
  MD,
  NTPC,
  ONGC,
  TAPI,
  ADANI,
  AMIORGS,
  AUNDE,
  FILATEX,
  GAIL,
  GNFC,
  INDRAIL,
  LT,
  RELIANCE,
  SMC,
  TRIDENT,
];

const Companies = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#DCDCDC",
        margin: "50px 0",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 600,
          margin: {
            xl: "40px 0 0 0",
            lg: "20px 0 0 0",
            m: "20px 0 0 0",
            sm: "20px 0 0 0",
            xs: "20px 0 0 0",
          },
          color: "#424242",
          fontSize: {
            xl: "27px",
            lg: "27px",
            m: "27px",
            sm: "27px",
            xs: "20px",
          },
        }}
      >
        Proudly Working With
      </Typography>
      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={7000}
        modules={[Autoplay]}
        slidesPerView="4"
        watchSlidesProgress={true}
        grabCursor={true}
        className="custom-swiper"
      >
        {clientList.map((client) => {
          return (
            <SwiperSlide>
              <img src={client} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Companies;
