import { Box, Typography } from "@mui/material";
import React from "react";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import webBanner from "../resources/banners/webBanner.webp";

const UsedMachine = () => {
  return (
    <>
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
            padding: "20px",
          }}
        >
          Used Machine Buy / Sell
        </Typography>
        <img
          // data-aos="zoom-in"
          src={webBanner}
          alt="Tatvamasi Automation"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          margin: "50px auto",
          marginTop: 0,
          width: "90%",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
            fontFamily: "Montserrat-Bold",
            color: "rgba(22, 40, 102, 1)",
            margin: "25px 0",
          }}
        >
          Overview
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "justify",
            fontFamily: "Montserrat",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The
          word “old” is not enough for the machinery who will give you a new
          expenditure. We call it “experienced machine” We worked in textile
          field since so many years and our team have a good knowledge of
          process machines. We definitely help you to find out the best machine
          to fulfil your requirement.The word “old” is not enough for the
          machinery who will give you a new expenditure. We call it “experienced
          machine” We worked in textile field since so many years and our team
          have a good knowledge of process machines. We definitely help you to
          find out the best machine to fulfil your requirement.
        </Typography>
        <Box
          sx={{
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[
            "Wide range of inventory offers you more choice",
            "Sourcing of right textile equipments",
            "Dismantling, Packing & Logistics",
          ].map((item, index) => {
            return (
              <Box
                // data-aos="zoom-in"
                sx={{
                  display: "flex",
                  width: {
                    xl: "45%",
                    lg: "45%",
                    m: "45%",
                    sm: "45%",
                    xs: "100%",
                  },
                  margin: "10px",
                  color: "#162966",
                }}
                key={index}
              >
                <RadioButtonCheckedTwoToneIcon sx={{ marginRight: "10px" }} />
                <Typography
                  sx={{
                    fontSize: "20px",
                    textAlign: "justify",
                    fontFamily: "Montserrat",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          margin: "50px auto",
          marginTop: 0,
          width: "90%",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
            fontFamily: "Montserrat-Bold",
            color: "rgba(22, 40, 102, 1)",
            margin: "25px 0",
          }}
        >
          Spinning
        </Typography>
        <Box
          sx={{
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[
            {
              title: "Ring spinning plant machinery",
              subPoint:
                "Complete range of machines from blow room machines to winding machines",
            },
            {
              title: "Open end spinning plant machinery",
              subPoint:
                "Complete range of machines from blow room to open end machines",
            },
          ].map((item, index) => {
            return (
              <Box
                // data-aos="zoom-in"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: {
                    xl: "45%",
                    lg: "45%",
                    m: "45%",
                    sm: "45%",
                    xs: "100%",
                  },
                  margin: "10px",
                  color: "#162966",
                }}
                key={index}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <RadioButtonCheckedTwoToneIcon sx={{ marginRight: "10px" }} />
                  <Typography
                    sx={{
                      fontSize: "22px",
                      textAlign: "justify",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    margin: "20px",
                    marginLeft: "40px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <PlayArrowIcon sx={{ marginRight: "10px" }} />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      textAlign: "justify",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item.subPoint}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          margin: "50px auto",
          marginTop: 0,
          width: "90%",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
            fontFamily: "Montserrat-Bold",
            color: "rgba(22, 40, 102, 1)",
            margin: "25px 0",
          }}
        >
          Weaving machinery
        </Typography>
        <Typography
          sx={{
            fontSize: "23px",
            textAlign: "justify",
            fontFamily: "Montserrat",
            width: "80%",
            margin: "auto",
          }}
        >
          With highly dedicated network in the weaving textiles sector, we
          expertise in serving our worldwide clients with various products that
          fulfil their requirements suitably.
        </Typography>
        <Box
          sx={{
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[
            {
              title: "Ring spinning plant machinery",
              subPoint: [
                "Airjet looms",
                "Waterjet looms",
                "Projectile looms",
                "Rapier looms",
              ],
            },
            {
              title:
                "All kind of weaving preparatory, machines for cotton and filament",
              subPoint: ["Direct warping", "Sectional warping", "Sizing"],
            },
          ].map((item, index) => {
            return (
              <Box
                // data-aos="zoom-in"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: {
                    xl: "45%",
                    lg: "45%",
                    m: "45%",
                    sm: "45%",
                    xs: "100%",
                  },
                  margin: "10px",
                  color: "#162966",
                }}
                key={index}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <RadioButtonCheckedTwoToneIcon sx={{ marginRight: "10px" }} />
                  <Typography
                    sx={{
                      fontSize: "22px",
                      textAlign: "justify",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                {item.subPoint.map((point, index) => {
                  return (
                    <Box
                      sx={{
                        margin: "10px",
                        marginLeft: "40px",
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                      key={index}
                    >
                      <PlayArrowIcon sx={{ marginRight: "10px" }} />
                      <Typography
                        sx={{
                          fontSize: "20px",
                          textAlign: "justify",
                          fontFamily: "Montserrat",
                        }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          margin: "50px auto",
          marginTop: 0,
          width: "90%",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
            fontFamily: "Montserrat-Bold",
            color: "rgba(22, 40, 102, 1)",
            margin: "25px 0",
          }}
        >
          Dyeing & Finishing Machinery
        </Typography>
        <Box
          sx={{
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[
            "Our processing department is headed by industry professional with over 20 years of experience in the field",
            "Bringing to the table in-depth knowledge of all processing procedures. yarm dyeing, knitted and woven dyeing, printing and finishing as well as full and comprehensive coverage of indigo production line",
            "Capable of managing complete projects. in addition to provide the machinery we also find various solution for many complex matters for our customers in all spectrum of processing industry",
            "Dedicated tp providing the industry with the most economical yet cost effective methods and equipment for the production",
          ].map((item, index) => {
            return (
              <Box
                // data-aos="zoom-in"
                sx={{
                  display: "flex",
                  width: {
                    xl: "75%",
                    lg: "75%",
                    m: "75%",
                    sm: "75%",
                    xs: "100%",
                  },
                  margin: "10px",
                  color: "#162966",
                }}
                key={index}
              >
                <RadioButtonCheckedTwoToneIcon sx={{ marginRight: "10px" }} />
                <Typography
                  sx={{
                    fontSize: "20px",
                    textAlign: "justify",
                    fontFamily: "Montserrat",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default UsedMachine;
