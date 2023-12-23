import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../resources/data/data";
import { Box, Grid, Typography } from "@mui/material";
import DemoPanel from "../../resources/semp 2.png";
import ReactPlayer from "react-player";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";

const TenderClient = () => {
  const TenderList = data[3].tenders;
  let { client } = useParams();
  const Specs = TenderList.find((t) => t.path === client);
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
              {/* Image Component */}
              <img
                data-aos="zoom-out"
                src={DemoPanel}
                alt=""
                style={{ width: "100%", height: "325px", borderRadius: "10px" }}
              />
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
              }}
              data-aos="zoom-out"
            >
              {/* ReactPlayer Component */}
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                controls={true}
                width={"100%"}
                height={"325px"}
                style={{
                  maxHeight: "325px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TenderClient;
