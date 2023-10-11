import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import BHEL from "../../resources/clientLogos/BHEL.svg";
import MD from "../../resources/clientLogos/MD.svg";
import NTPC from "../../resources/clientLogos/NTPC.svg";
import ONGC from "../../resources/clientLogos/ONGC.svg";
import { Box, Typography } from "@mui/material";
import "../../styles/CompaniesStyle.css";

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
        slidesPerView={3.5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        effect="slide"
        speed={7000}
        modules={[Autoplay]}
        className="custom-swiper"
      >
        <SwiperSlide>
          <img src={BHEL} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NTPC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MD} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ONGC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BHEL} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NTPC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MD} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ONGC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BHEL} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NTPC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MD} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ONGC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BHEL} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NTPC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MD} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ONGC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BHEL} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NTPC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MD} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ONGC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BHEL} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NTPC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MD} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ONGC} alt="" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Companies;
