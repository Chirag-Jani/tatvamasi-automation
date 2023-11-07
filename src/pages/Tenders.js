import { Box, Typography } from "@mui/material";
import React from "react";
import tendersBanner from "../resources/banners/tendersBanner.svg";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";
import { data } from "../resources/data/data";
import TenderCard from "../components/tenders/TenderCard";
import { Link } from "react-router-dom";

const Tenders = () => {
  const tenderContracts = [
    "Electrical Wiring / Maintenance",
    "Water Treatment Plant",
    "Sewage Treatment Plant",
    "Water distilation Plant",
    "H.T / L.T Work",
    "Lightning and Security System",
    "PLC, SCADA, DRIVE, Flow Meter and other Automation Work",
    "Street Light (AMC)",
    "VFD for Crane & Hoist Application",
    "Maintenance & Servicing of HT/LT, Control Panels",
  ];

  const tenderClients = data[3].tenders;

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
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
          Tenders
        </Typography>
        <img
          src={tendersBanner}
          alt="Tatvamasi Automation"
          style={{
            maxWidth: "99vw",
          }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            textAlign: "center",
            margin: "50px auto",
            fontSize: {
              xl: "24px",
              lg: "20px",
              m: "20px",
              sm: "20px",
              xs: "18px",
            },
            width: "90%",
          }}
        >
          We are Atteched with so many tender/Contact work released by
          Government, Non government Like :
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            margin: "20px auto",
          }}
        >
          {tenderContracts?.map((contract) => {
            return (
              <Box
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
              >
                <RadioButtonCheckedTwoToneIcon sx={{ marginRight: "10px" }} />
                <Typography>{contract}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Montserrat-BoldItalic",
            color: "#484848",
            fontSize: {
              xl: "39.58px",
              lg: "39.58px",
              m: "39.58px",
              sm: "39.58px",
              xs: "30px",
            },
            textAlign: "center",
          }}
        >
          Our Success Stories for Tendering are with :
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {tenderClients?.map((client) => {
            return (
              <Link
                to={client.path}
                style={{
                  textDecoration: "none",
                }}
                key={client.name}
              >
                <TenderCard cardName={client.name} cardImg={client.image} />
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Tenders;
