import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DemoPanel from "../../resources/Demo Panel.svg";
import "../../styles/PCCStyle.css";
import { data } from "../../resources/data/data";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonChecked";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import ReactPlayer from "react-player";
import ZoomedImage from "../tenders/ZoomedImage";
import Carousel from "react-material-ui-carousel";

const Panel = () => {
  let { machine } = useParams();
  const Machines = data[0]?.machines;
  console.log(machine);

  const machineData = Machines.find((p) => p.path === machine);

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
    <>
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
            {machineData.title}
          </Typography>

          <Box
            sx={{
              width: "80%",
              height: "80%",
              margin: "50px auto",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                height: "500px",
                width: "100%",
                marginBottom: "50px",
                backgroundColor: "#162966",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                data-aos="zoom-in"
                src={DemoPanel}
                alt="Tatvamasi Automation"
                style={{
                  width: "50%",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "18px",
                textAlign: "justify",
                fontFamily: "Montserrat",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {machineData.desc}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "90%",
            margin: "auto",
          }}
        >
          {machineData.whyWeNeed && (
            <Box
              sx={{
                // width: "70%",
                margin: "50px auto",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "Montserrat-Bold",
                  color: "#162966",
                }}
              >
                {machineData.whyWeNeed.title}
              </Typography>
              {machineData?.whyWeNeed?.reasons?.map((reason) => {
                return (
                  <Box
                    data-aos="zoom-in"
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
                    key={reason}
                  >
                    <RadioButtonCheckedTwoToneIcon
                      sx={{ marginRight: "10px" }}
                    />
                    <Typography>{reason}</Typography>
                  </Box>
                );
              })}
            </Box>
          )}

          {machineData.offeredSol && (
            <Box
              sx={{
                // width: "70%",
                margin: "50px auto",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "Montserrat-Bold",
                  color: "#162966",
                }}
              >
                {machineData.offeredSol?.title}
              </Typography>
              {machineData?.offeredSol?.solutions?.map((solution) => {
                return (
                  <Box
                    data-aos="zoom-in"
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
                    key={solution}
                  >
                    <RadioButtonCheckedTwoToneIcon
                      sx={{ marginRight: "10px" }}
                    />
                    <Typography>{solution}</Typography>
                  </Box>
                );
              })}
            </Box>
          )}

          {machineData.benefits && (
            <Box
              sx={{
                // width: "70%",
                margin: "50px auto",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "Montserrat-Bold",
                  color: "#162966",
                }}
              >
                {machineData.benefits.title}
              </Typography>
              {machineData?.benefits?.reasons?.map((reason) => {
                return (
                  <Box
                    data-aos="zoom-in"
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
                    key={reason}
                  >
                    <RadioButtonCheckedTwoToneIcon
                      sx={{ marginRight: "10px" }}
                    />
                    <Typography>{reason}</Typography>
                  </Box>
                );
              })}
            </Box>
          )}

          {machineData.systCompo && (
            <Box
              sx={{
                margin: "50px auto",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "Montserrat-Bold",
                  color: "#162966",
                  marginBottom: "40px",
                }}
              >
                {machineData.systCompo.title}
              </Typography>

              <Box
                sx={{
                  width: "70%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                {machineData?.systCompo?.comps.map((comp) => {
                  return (
                    <Box
                      data-aos="zoom-in"
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
                        flexDirection: "column",
                      }}
                      key={comp.label}
                    >
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <LabelImportantIcon sx={{ marginRight: "10px" }} />
                        <Typography>{comp.label}</Typography>
                      </Box>
                      {comp?.info?.map((itm) => {
                        return (
                          <Box
                            key={itm}
                            sx={{
                              display: "flex",
                              margin: "10px 0",
                              marginLeft: "20px",
                            }}
                          >
                            <RadioButtonCheckedTwoToneIcon
                              sx={{ marginRight: "10px" }}
                            />
                            <Typography>{itm}</Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}

          {machineData.scope && (
            <Box
              sx={{
                margin: "50px auto",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "Montserrat-Bold",
                  color: "#162966",
                  marginBottom: "40px",
                }}
              >
                {machineData.scope.title}
              </Typography>
              {machineData?.scope?.videos?.map((vid) => {
                return (
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      width: "80%",
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
                        {/* ReactPlayer Component */}
                        <ReactPlayer
                          url={vid}
                          controls={true}
                          width={"100%"}
                          height={"100%"}
                          // style={{
                          //   maxHeight: "325px",
                          // }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                );
              })}

              {machineData?.scope?.images?.map((item, index) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      width: "90%",
                      margin: "auto",
                      //   width: {
                      //     xl: "50%",
                      //     lg: "50%",
                      //     md: "50%",
                      //     sm: "100%",
                      //     xs: "100%",
                      //   },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat-Bold",
                        fontSize: "20px",
                        margin: "20px",
                      }}
                    >
                      {index + 1}. {item.title}
                    </Typography>
                    {/* carosel shit here */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        margin: "30px auto",
                        width: "80%",
                        flexDirection: {
                          xl: "row",
                          lg: "row",
                          md: "row",
                          sm: "column",
                          xs: "column",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "80%",
                            lg: "50%",
                            xl: "50%",
                          },
                        }}
                      >
                        <Carousel animation="slide" duration={"700"}>
                          {item.imgList?.map((img, i) => {
                            return (
                              <img
                                key={i}
                                data-aos="zoom-out"
                                src={img}
                                alt=""
                                style={{
                                  width: "95%",
                                  height: {
                                    xs: "auto",
                                    sm: "auto",
                                    md: "325px",
                                    lg: "325px",
                                    xl: "325px",
                                  },
                                  borderRadius: "10px",
                                }}
                                onClick={() => handleImageClick(img)}
                              />
                            );
                          })}
                        </Carousel>
                        <ZoomedImage
                          open={open}
                          handleClose={handleClose}
                          src={selectedImage}
                        />
                      </Box>
                    </Box>

                    <Grid
                      container
                      //   sx={{
                      //     display: "flex",
                      //     flexWrap: "wrap",
                      //   }}
                    >
                      <Grid item md={6} xs={12}>
                        {/* Exssting eq */}
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              margin: "20px",
                              alignItems: "center",
                            }}
                          >
                            <LabelImportantIcon sx={{ marginRight: "10px" }} />
                            <Typography
                              sx={{
                                fontFamily: "Montserrat",
                                fontSize: "20px",
                              }}
                            >
                              {item?.existingEq?.title}
                            </Typography>
                          </Box>

                          {item?.existingEq?.data?.item && (
                            <Box
                              sx={{
                                display: "flex",
                                margin: "10px 0",
                                marginLeft: "50px",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: "Montserrat",
                                  fontSize: "18px",
                                }}
                              >
                                {item?.existingEq?.data?.item}
                              </Typography>
                            </Box>
                          )}
                          {item?.existingEq?.data?.sys?.map((itm) => {
                            return (
                              <Box
                                key={itm}
                                sx={{
                                  display: "flex",
                                  margin: "10px 0",
                                  marginLeft: "50px",
                                }}
                              >
                                <RadioButtonCheckedTwoToneIcon
                                  sx={{ marginRight: "10px" }}
                                />
                                <Typography>{itm}</Typography>
                              </Box>
                            );
                          })}
                          {item?.existingEq?.data?.info?.map((itm) => {
                            return (
                              <Box
                                key={itm}
                                sx={{
                                  display: "flex",
                                  margin: "10px 0",
                                  marginLeft: "50px",
                                }}
                              >
                                <RadioButtonCheckedTwoToneIcon
                                  sx={{ marginRight: "10px" }}
                                />
                                <Typography>{itm}</Typography>
                              </Box>
                            );
                          })}
                        </Box>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        {/* Provided system */}
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              margin: "20px",
                              alignItems: "center",
                            }}
                          >
                            <LabelImportantIcon sx={{ marginRight: "10px" }} />
                            <Typography
                              sx={{
                                fontFamily: "Montserrat",
                                fontSize: "20px",
                              }}
                            >
                              {item?.providedSys?.title}
                            </Typography>
                          </Box>

                          {item?.providedSys?.data?.item && (
                            <Box
                              sx={{
                                display: "flex",
                                margin: "10px 0",
                                marginLeft: "50px",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: "Montserrat",
                                  fontSize: "18px",
                                }}
                              >
                                {item?.providedSys?.data?.item}
                              </Typography>
                            </Box>
                          )}
                          {item?.providedSys?.data?.sys?.map((itm) => {
                            return (
                              <Box
                                key={itm}
                                sx={{
                                  display: "flex",
                                  margin: "10px 0",
                                  marginLeft: "50px",
                                }}
                              >
                                <RadioButtonCheckedTwoToneIcon
                                  sx={{ marginRight: "10px" }}
                                />
                                <Typography>{itm}</Typography>
                              </Box>
                            );
                          })}
                          {item?.providedSys?.data?.info?.map((itm) => {
                            return (
                              <Box
                                key={itm}
                                sx={{
                                  display: "flex",
                                  margin: "10px 0",
                                  marginLeft: "50px",
                                }}
                              >
                                <RadioButtonCheckedTwoToneIcon
                                  sx={{ marginRight: "10px" }}
                                />
                                <Typography>{itm}</Typography>
                              </Box>
                            );
                          })}
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}

              {machineData.types && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "30px auto",
                    width: "80%",
                    flexDirection: {
                      xl: "row",
                      lg: "row",
                      md: "row",
                      sm: "column",
                      xs: "column",
                    },
                  }}
                >
                  {machineData?.types?.map((type, i) => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: {
                            xl: "50%",
                            lg: "50%",
                            md: "50%",
                            sm: "100%",
                            xs: "100%",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Montserrat-Bold",
                            fontSize: "20px",
                            margin: "20px",
                          }}
                        >
                          {i + 1}. {type.typeName}
                        </Typography>
                        <Box>
                          <Carousel animation="slide" duration={"700"}>
                            {type?.imgList?.map((item, i) => (
                              <img
                                key={i}
                                data-aos="zoom-out"
                                src={item}
                                alt=""
                                style={{
                                  width: "95%",
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
                            ))}
                          </Carousel>
                          <ZoomedImage
                            open={open}
                            handleClose={handleClose}
                            src={selectedImage}
                          />

                          {/* Image Component */}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Panel;
