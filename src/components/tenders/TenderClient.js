import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../resources/data/data";
import { Box, Grid, Typography } from "@mui/material";
import DemoPanel from "../../resources/Demo Panel.svg";
import ReactPlayer from "react-player";

const TenderClient = () => {
  const TenderList = data[3].tenders;
  let { client } = useParams();
  const Specs = TenderList.find((t) => t.path === client);

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
            fontSize: "18px",
            textAlign: "justify",
            fontFamily: "Montserrat",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {Specs.desc}
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {/* Image Component */}
              <img src={DemoPanel} alt="" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* ReactPlayer Component */}
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                controls={true}
                width={"100%"}
                height={"250px"}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TenderClient;
