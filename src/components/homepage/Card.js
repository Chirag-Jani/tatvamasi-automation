import React from "react";
import { Box, Typography } from "@mui/material";

const Card = (props) => {
  const { cardName, cardImg } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        margin: {
          xl: "20px 50px",
          lg: "20px 50px",
          m: "20px 0px",
          sm: "20px 0px",
          xs: "20px 0px",
        },
      }}
    >
      <Box
        sx={{
          cursor: "pointer", // temporary
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#DCDCDC",
          width: "303.65px",
          height: "242.92px",
          borderRadius: "22px",
          boxShadow: "4px 4px 0px rgba(176, 176, 176, 1)",
        }}
      >
        <img src={cardImg} alt={cardName} />
      </Box>
      <Typography
        color={"primary"}
        sx={{
          fontWeight: 700,
          fontSize: "27px",
          margin: "20px",
        }}
      >
        {cardName}
      </Typography>
    </Box>
  );
};

export default Card;
