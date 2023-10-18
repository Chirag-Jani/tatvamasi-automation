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
  console.log(Specs);

  console.log(panel);

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
        <Box
          sx={{
            padding: "20px",
            paddingBottom: "0",
            borderRadius: "30px",
            backgroundColor: "#D9D9D9",
            marginBottom: "50px",
          }}
        >
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
              }}
            >
              Specifications
            </Typography>
          </Box>
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
                    xl={6}
                    lg={6}
                    m={12}
                    sm={12}
                    xs={12}
                    key={item.label}
                    sx={{
                      textAlign: "left",
                      margin: "auto",
                    }}
                  >
                    <Grid
                      item
                      xs={5}
                      sx={{
                        margin: "auto",
                        marginBottom: "30px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xl: "18px",
                            lg: "18px",
                            m: "18px",
                            sm: "18px",
                            xs: "14px",
                          },
                          fontFamily: "Montserrat-bold",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Grid>
                    {item.label !== null && (
                      <Grid item xs={1}>
                        <Typography
                          sx={{
                            fontSize: {
                              xl: "18px",
                              lg: "18px",
                              m: "18px",
                              sm: "18px",
                              xs: "14px",
                            },
                            fontFamily: "Montserrat-bold",
                          }}
                        >
                          :
                        </Typography>
                      </Grid>
                    )}
                    <Grid item xs={4}>
                      <Typography
                        sx={{
                          fontSize: {
                            xl: "18px",
                            lg: "18px",
                            m: "18px",
                            sm: "18px",
                            xs: "14px",
                          },
                          fontFamily: "Montserrat",
                          color: "#414141",
                        }}
                      >
                        {item.info}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Panel;
