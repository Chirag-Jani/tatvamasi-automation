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
            Our automation solution at the GNFC STP plant has not only
            streamlined operations but also significantly contributed to
            sustainability by enabling efficient water reuse. By optimizing the
            treatment process and ensuring precise water distribution, we have
            enhanced the overall performance of this critical facility, setting
            new benchmarks for water management in large industrial colonies.
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
              <img src={DemoPanel} alt="" style={{ width: "100%" }} />
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
            >
              {/* ReactPlayer Component */}
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                controls={true}
                width={"100%"}
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
