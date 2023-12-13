import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DemoPanel from "../../resources/Demo Panel.svg";
import "../../styles/PCCStyle.css";
import { data } from "../../resources/data/data";
import { useParams } from "react-router-dom";

const Panel = () => {
  const PanelList = data[1].panels;
  let { panel } = useParams();

  const Specs = PanelList.find((p) => p.path === panel);

  return (
    <>
      <Box
        sx={{
          // padding: "20px 20px",
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
            }}
          >
            {Specs.desc}
          </Typography>
          <Box
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
            <img src={DemoPanel} alt="" className="panel-image" />
            <img src={DemoPanel} alt="" className="panel-image" />
          </Box>
        </Box>
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
                      textAlign: "left",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "30px",
                      backgroundColor: "#D9D9D9",
                      marginBottom: "15px",
                    }}
                  >
                    {item.label !== null && (
                      <>
                        <Grid
                          item
                          xs={5}
                          sx={{
                            marginBottom: "30px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                m: "18px",
                                sm: "18px",
                                xs: "12px",
                              },
                              fontFamily: "Montserrat-bold",
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                m: "18px",
                                sm: "18px",
                                xs: "12px",
                              },
                              fontFamily: "Montserrat-bold",
                            }}
                          >
                            :
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
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
                              paddingLeft: "20px",
                              textAlign: "justify",
                              textTransform: "capitalize",
                            }}
                          >
                            {item.info}
                          </Typography>
                        </Grid>
                      </>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Box>
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
                margin: "50px 0",
              }}
            >
              Application
            </Typography>

            {[0, 1, 2, 3, 4].map((itm) => {
              return (
                <Typography
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
                  Steel industries & heavy engineering Industries
                </Typography>
              );
            })}
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontFamily: "Montserrat-Bold",
                fontSize: {
                  xl: "1.1rem",
                  lg: "1.1rem",
                  m: "1.1rem",
                  sm: ".8rem",
                  xs: ".5rem",
                },
                textAlign: "justify",
                margin: "50px 0",
                marginBottom: "200px",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With
              no limitations on the industries we serve, we are committed to
              tailoring PCC panels that precisely fit your unique requirements.
              At TAPL, our mission is to provide you with reliable and efficient
              power control solutions that enhance your industrial processes.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Panel;
