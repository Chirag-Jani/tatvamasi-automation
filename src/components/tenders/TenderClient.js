import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../resources/data/data";
import { Box, Typography } from "@mui/material";

const TenderClient = () => {
  const TenderList = data[3].tenders;
  let { client } = useParams();
  const Specs = TenderList.find((t) => t.path === client);
  console.log(Specs);

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
    </Box>
  );
};

export default TenderClient;
