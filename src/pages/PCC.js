import { Box, Typography } from "@mui/material";
import React from "react";
import DemoPanel from "../resources/Demo Panel.svg";
import "../styles/PCCStyle.css";

const PCC = () => {
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
            PCC Panel
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "justify",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The standard chunk
            of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
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
            borderRadius: "30px",
            backgroundColor: "#D9D9D9",
            marginBottom: "500px",
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
            List goes here!
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PCC;
