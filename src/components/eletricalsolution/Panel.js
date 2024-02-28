import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../../styles/PCCStyle.css";
import { data } from "../../resources/data/data";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
// import ReactPlayer from "react-player";
import ZoomedImage from "../tenders/ZoomedImage";
import Carousel from "react-material-ui-carousel";

const Panel = () => {
  const PanelList = data[1].panels;
  let { panel } = useParams();

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [timeToLoad, setTimeToLoad] = useState(false);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Specs = PanelList.find((p) => p.path === panel);
  console.log(Specs);
  useEffect(() => {
    Aos.init({
      // Global settings:
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });

    setTimeout(() => {
      setTimeToLoad(true);
    }, 3000);
  }, []);
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: "80%",
        }}
      >
        <Box
          sx={{
            margin: "50px 0",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Neuropolitical",
              color: "#162866",
              fontSize: "40px",
            }}
          >
            {Specs.name}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "justify",
              fontFamily: "Montserrat",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {Specs.desc}
          </Typography>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "20px 0",
              flexDirection: {
                xl: "row",
                lg: "row",
                m: "row",
                sm: "row",
                xs: "column",
              },
            }}
          >
            <img
              src={DemoPanel}
              alt=""
              className="panel-image"
              data-aos="fade-right"
            />
            <img
              src={DemoPanel}
              alt=""
              className="panel-image"
              data-aos="fade-left"
            />
          </Box> */}
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
                  {timeToLoad
                    ? Specs?.images?.length > 0 &&
                      Specs?.images?.map((item, i) => (
                        <img
                          key={i}
                          data-aos="zoom-out"
                          src={item}
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
                          onClick={() => handleImageClick(item)}
                        />
                      ))
                    : Specs?.images?.length > 0 && (
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          width={"100%"}
                          height={"325px"}
                          sx={{
                            borderRadius: "10px",
                          }}
                        />
                      )}
                </Carousel>
                <ZoomedImage
                  open={open}
                  handleClose={handleClose}
                  src={selectedImage}
                />

                {/* Image Component */}
              </Box>
            </Grid>
            {/* NONE videos as of now */}
            {/* <Grid item xs={12} md={6}>
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
                data-aos="zoom-out"
              >
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
            </Grid> */}
          </Grid>
        </Box>
        {Specs.specs && (
          <Box>
            <Typography
              sx={{
                fontFamily: "Montserrat-Bold",
                color: "#162866",
                fontSize: {
                  xl: "35px",
                  lg: "35px",
                  m: "35px",
                  sm: "35px",
                  xs: "20px",
                },
                textAlign: "center",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              Specifications
            </Typography>
          </Box>
        )}
        {Specs.whatAre && (
          <Box>
            <Typography
              sx={{
                color: "rgba(22, 40, 102, 1)",
                fontFamily: "Montserrat",
                fontSize: {
                  xl: "2rem",
                  lg: "2rem",
                  m: "2rem",
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
                textAlign: "left",
                margin: "25px 0",
              }}
            >
              {Specs.whatAre.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                textAlign: "justify",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {Specs.whatAre.data}
            </Typography>
          </Box>
        )}
        <Box>
          <Box
            sx={{
              fontFamily: "Montserrat-Bold",
              textAlign: "center",
              margin: "50px 0",
              fontWeight: "700",
            }}
          >
            <Grid container>
              {Specs.specs?.map((item) => {
                return (
                  <Grid
                    item
                    container
                    xl={12}
                    lg={12}
                    m={12}
                    sm={12}
                    xs={12}
                    key={item.label}
                    sx={{
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "30px",
                      backgroundColor: "#D9D9D9",
                      marginBottom: "15px",
                    }}
                    data-aos="flip-up"
                  >
                    {item.label !== null && (
                      <>
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
                          }}
                        >
                          <strong
                            style={{
                              fontFamily: "Montserrat-Bold",
                            }}
                          >
                            {item.label}&nbsp;:&nbsp;
                          </strong>
                          {item.info}
                        </Typography>
                      </>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Box>
            {Specs.application && (
              <Typography
                sx={{
                  color: "rgba(22, 40, 102, 1)",
                  fontFamily: "Montserrat-Bold",
                  fontSize: {
                    xl: "3rem",
                    lg: "3rem",
                    m: "3rem",
                    sm: "2rem",
                    xs: "1.5rem",
                  },
                  textAlign: "center",
                  marginBottom: "50px",
                }}
              >
                Application
              </Typography>
            )}
            {Specs.application?.industries?.map((itm) => {
              return (
                <Typography
                  data-aos="zoom-in"
                  key={itm}
                  sx={{
                    color: "rgba(60, 60, 59, 1)",
                    fontFamily: "Montserrat",
                    fontSize: {
                      xl: "2rem",
                      lg: "2rem",
                      m: "2rem",
                      sm: "1.5rem",
                      xs: ".8rem",
                    },
                    textAlign: "center",
                    margin: "5px 0",
                  }}
                >
                  {itm}
                </Typography>
              );
            })}
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontFamily: "Montserrat",
                fontSize: {
                  xl: "1.1rem",
                  lg: "1.1rem",
                  m: "1.1rem",
                  sm: "1rem",
                  xs: "1rem",
                },
                textAlign: "justify",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {Specs.moreInfo?.content}
            </Typography>
          </Box>
          {Specs.experienceThePower && (
            <Box>
              <Typography
                sx={{
                  color: "rgba(22, 40, 102, 1)",
                  fontFamily: "Montserrat",
                  fontSize: {
                    xl: "2rem",
                    lg: "2rem",
                    m: "2rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  },
                  textAlign: "left",
                  margin: "25px 0",
                }}
              >
                {Specs.experienceThePower.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  textAlign: "justify",
                  marginBottom: "50px",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {Specs.experienceThePower.data}
              </Typography>
            </Box>
          )}

          {Specs.keyBenefits && (
            <Box>
              <Typography
                sx={{
                  color: "rgba(22, 40, 102, 1)",
                  fontFamily: "Montserrat",
                  fontSize: {
                    xl: "2rem",
                    lg: "2rem",
                    m: "2rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  },
                  textAlign: "left",
                  margin: "25px 0",
                }}
              >
                Key Benefits
              </Typography>

              <Grid container>
                {Specs.keyBenefits?.map((item) => {
                  return (
                    <Grid
                      data-aos="flip-up"
                      item
                      container
                      xl={12}
                      lg={12}
                      m={12}
                      sm={12}
                      xs={12}
                      key={item.label}
                      sx={{
                        margin: "auto",
                        padding: "20px",
                        borderRadius: "30px",
                        backgroundColor: "#D9D9D9",
                        marginBottom: "15px",
                      }}
                    >
                      {item.label !== null && (
                        <>
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
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "Montserrat-Bold",
                              }}
                            >
                              {item.label}&nbsp;:&nbsp;
                            </strong>
                            {item.info}
                          </Typography>
                        </>
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}

          {Specs.types && (
            <Typography
              sx={{
                color: "rgba(22, 40, 102, 1)",
                fontFamily: "Montserrat",
                fontSize: {
                  xl: "2rem",
                  lg: "2rem",
                  m: "2rem",
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
                textAlign: "left",
                margin: "25px 0",
              }}
              data-aos="fade-down"
            >
              Types
            </Typography>
          )}
          {Specs.types?.map((item) => {
            return (
              <Box
                sx={{
                  marginLeft: "30px",
                }}
                data-aos="zoom-out-left"
              >
                <Typography
                  sx={{
                    color: "rgba(22, 40, 102, 1)",
                    fontFamily: "Montserrat-Bold",
                    fontSize: {
                      xl: "1.5rem",
                      lg: "1.5rem",
                      m: "1.5rem",
                      sm: "1rem",
                      xs: "1rem",
                    },
                    textAlign: "left",
                    margin: "25px 0",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    textAlign: "justify",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.data}
                </Typography>
              </Box>
            );
          })}

          {Specs.precisionMotorControl && (
            <Box>
              <Typography
                sx={{
                  color: "rgba(22, 40, 102, 1)",
                  fontFamily: "Montserrat",
                  fontSize: {
                    xl: "2rem",
                    lg: "2rem",
                    m: "2rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  },
                  textAlign: "left",
                  margin: "25px 0",
                }}
              >
                {Specs.precisionMotorControl.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  textAlign: "justify",
                  marginBottom: "50px",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {Specs.precisionMotorControl.data}
              </Typography>
            </Box>
          )}

          {Specs.subPanel && (
            <Box>
              {" "}
              <Typography
                sx={{
                  color: "rgba(22, 40, 102, 1)",
                  fontFamily: "Montserrat-Bold",
                  fontSize: {
                    xl: "2rem",
                    lg: "2rem",
                    m: "2rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  },
                  textAlign: "center",
                  margin: "25px 0",
                }}
              >
                {Specs.subPanel.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  textAlign: "justify",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {Specs.subPanel.desc}
              </Typography>
              {Specs.subPanel.advFeats && (
                <Typography
                  sx={{
                    color: "rgba(22, 40, 102, 1)",
                    fontFamily: "Montserrat",
                    fontSize: {
                      xl: "2rem",
                      lg: "2rem",
                      m: "2rem",
                      sm: "1.5rem",
                      xs: "1.5rem",
                    },
                    textAlign: "left",
                    margin: "25px 0",
                  }}
                >
                  {Specs.subPanel.advFeats.title}
                </Typography>
              )}
              <Grid
                container
                sx={{
                  margin: "50px 0",
                }}
              >
                {Specs.subPanel.advFeats.feats?.map((item) => {
                  return (
                    <Grid
                      data-aos="flip-up"
                      item
                      container
                      xl={12}
                      lg={12}
                      m={12}
                      sm={12}
                      xs={12}
                      key={item.label}
                      sx={{
                        margin: "auto",
                        padding: "20px",
                        borderRadius: "30px",
                        backgroundColor: "#D9D9D9",
                        marginBottom: "15px",
                      }}
                    >
                      {item.label !== null && (
                        <>
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
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "Montserrat-Bold",
                              }}
                            >
                              {item.label}&nbsp;:&nbsp;
                            </strong>
                            {item.info}
                          </Typography>
                        </>
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}

          {Specs.subPanel?.application && (
            <Typography
              sx={{
                color: "rgba(22, 40, 102, 1)",
                fontFamily: "Montserrat-Bold",
                fontSize: {
                  xl: "3rem",
                  lg: "3rem",
                  m: "3rem",
                  sm: "2rem",
                  xs: "1.5rem",
                },
                textAlign: "center",
                marginBottom: "50px",
              }}
            >
              Application
            </Typography>
          )}
          {Specs.subPanel?.application?.industries?.map((itm) => {
            return (
              <Typography
                data-aos="zoom-in"
                key={itm}
                sx={{
                  color: "rgba(60, 60, 59, 1)",
                  fontFamily: "Montserrat",
                  fontSize: {
                    xl: "2rem",
                    lg: "2rem",
                    m: "2rem",
                    sm: "1.5rem",
                    xs: ".8rem",
                  },
                  textAlign: "center",
                  margin: "5px 0",
                }}
              >
                {itm}
              </Typography>
            );
          })}

          {Specs.powerEneSimp && (
            <Box>
              <Typography
                sx={{
                  color: "rgba(22, 40, 102, 1)",
                  fontFamily: "Montserrat",
                  fontSize: {
                    xl: "2rem",
                    lg: "2rem",
                    m: "2rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  },
                  textAlign: "left",
                  margin: "25px 0",
                }}
              >
                {Specs.powerEneSimp.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  textAlign: "justify",
                  marginBottom: "50px",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {Specs.powerEneSimp.data}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Panel;
