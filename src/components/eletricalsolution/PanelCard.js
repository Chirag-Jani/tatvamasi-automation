import { Box, Typography } from "@mui/material";
import React from "react";

const PanelCard = (props) => {
  const { panelName } = props;

  return (
    <Box
      sx={{
        margin: {
          xl: "20px 50px",
          lg: "20px 50px",
          m: "20px 0",
          sm: "20px 0",
          xs: "20px 0",
        },
      }}
    >
      <Typography
        color={"black"}
        sx={{
          textAlign: "center",
          cursor: "pointer", // temporary
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#DCDCDC",
          width: {
            xl: "418px",
            lg: "418px",
            m: "350px",
            sm: "350px",
            xs: "200px",
          },
          height: "148px",
          borderRadius: "22px",
          boxShadow: "4px 4px 0px rgba(176, 176, 176, 1)",
          fontWeight: 400,
          fontSize: {
            xl: "35px",
            lg: "35px",
            m: "30px",
            sm: "30px",
            xs: "25px",
          },
          fontFamily: "Neuropolitical",
        }}
      >
        {panelName}
      </Typography>
    </Box>
  );
};

export default PanelCard;
