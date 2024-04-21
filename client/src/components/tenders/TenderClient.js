import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../resources/data/data";
import { Box, Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import Carousel from "react-material-ui-carousel";

import gnfc0 from "../../resources/gnfc/gnfc 0.webp";
import gnfc1 from "../../resources/gnfc/gnfc 1.webp";
import gnfc2 from "../../resources/gnfc/gnfc 2.webp";
import gnfc3 from "../../resources/gnfc/gnfc 3.webp";
import gnfc4 from "../../resources/gnfc/gnfc 4.webp";
import gnfc5 from "../../resources/gnfc/gnfc 5.webp";
import gnfc6 from "../../resources/gnfc/gnfc 6.webp";
import gnfc7 from "../../resources/gnfc/gnfc 7.webp";
import gnfc8 from "../../resources/gnfc/gnfc 8.webp";
import gnfc9 from "../../resources/gnfc/gnfc 9.webp";
import gnfc10 from "../../resources/gnfc/gnfc 10.webp";
import gnfc11 from "../../resources/gnfc/gnfc 11.webp";
import gnfc12 from "../../resources/gnfc/gnfc 12.webp";
import ZoomedImage from "./ZoomedImage";

var items = [
  {
    name: "GNFC #0",
    img: gnfc0,
  },
  {
    name: "GNFC #1",
    img: gnfc1,
  },
  {
    name: "GNFC #2",
    img: gnfc2,
  },
  {
    name: "GNFC #3",
    img: gnfc3,
  },
  {
    name: "GNFC #4",
    img: gnfc4,
  },
  {
    name: "GNFC #5",
    img: gnfc5,
  },
  {
    name: "GNFC #6",
    img: gnfc6,
  },
  {
    name: "GNFC #7",
    img: gnfc7,
  },
  {
    name: "GNFC #8",
    img: gnfc8,
  },
  {
    name: "GNFC #9",
    img: gnfc9,
  },
  {
    name: "GNFC #10",
    img: gnfc10,
  },
  {
    name: "GNFC #11",
    img: gnfc11,
  },
  {
    name: "GNFC #12",
    img: gnfc12,
  },
];

const TenderClient = () => {
  const TenderList = data[3].tenders;
  let { client } = useParams();
  const Specs = TenderList.find((t) => t.path === client);

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      sx={{
        margin: "auto",
        width: "80%",
      }}
    >
      <Box
        sx={{
          margin: "30px 0",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: "#162866",
            fontSize: "40px",
            margin: "50px 0",
          }}
        >
          {Specs.name}
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "50px 0",
          marginTop: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            textAlign: "justify",
            fontFamily: "Montserrat",
            color: "rgba(22, 40, 102, 1)",
            margin: "25px 0",
          }}
        >
          Overview
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "justify",
            fontFamily: "Montserrat",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {Specs.data.overview}
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "50px 0",
          marginTop: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            textAlign: "justify",
            fontFamily: "Montserrat",
            color: "rgba(22, 40, 102, 1)",
            margin: "25px 0",
          }}
        >
          Project Highlights
        </Typography>
        {Specs.data.highlights?.map((itm) => {
          return (
            <Box key={itm.label} data-aos="flip-up">
              <Typography
                sx={{
                  fontSize: {
                    xl: "18px",
                    lg: "18px",
                    m: "18px",
                    sm: "18px",
                    xs: "12px",
                  },
                  fontFamily: "Montserrat",
                  color: "#414141",
                  textAlign: "justify",
                  textTransform: "capitalize",
                  margin: "40px 0",
                }}
              >
                <strong
                  style={{
                    fontFamily: "Montserrat-Bold",
                  }}
                >
                  {itm.label}&nbsp;:&nbsp;
                </strong>
                {itm.value}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* These things need to be dynamic */}
      <Box
        sx={{
          margin: "30px 0",
        }}
      >
        <Box
          sx={{
            margin: "30px 0",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#162866",
              fontSize: "40px",
            }}
          >
            Conclusion
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "50px 0",
            marginTop: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "justify",
              fontFamily: "Montserrat",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {Specs.data.conslusion}
          </Typography>
        </Box>
        {Specs?.youtube && (
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "80%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                  },
                  margin: "auto",
                }}
              >
                <Carousel animation="slide" duration={"700"}>
                  {items.map((item, i) => (
                    <img
                      key={item.name}
                      // data-aos="zoom-out"
                      src={item.img}
                      alt=""
                      style={{
                        width: "100%",
                        height: {
                          xs: "auto",
                          sm: "auto",
                          md: "325px",
                          lg: "325px",
                          xl: "325px",
                        },
                        borderRadius: "10px",
                      }}
                      onClick={() => handleImageClick(item.img)}
                    />
                  ))}
                </Carousel>
                <ZoomedImage
                  open={open}
                  handleClose={handleClose}
                  src={selectedImage}
                />

                {/* Image Component */}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "80%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                  },
                  margin: "auto",
                  height: {
                    xs: "325px",
                    sm: "325px",
                    md: "325px",
                    lg: "325px",
                    xl: "325px",
                  },
                }}
                // data-aos="zoom-out"
              >
                {/* ReactPlayer Component */}
                <ReactPlayer
                  url={Specs.youtube}
                  controls={true}
                  width={"100%"}
                  height={"85%"}
                  // style={{
                  //   maxHeight: "325px",
                  // }}
                />
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default TenderClient;
