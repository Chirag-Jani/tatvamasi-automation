import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const links = [
    { label: "About Us", path: "about-us" },
    { label: "Events", path: "events" },
    { label: "Appointment", path: "appointment" },
    { label: "Automation Solutions", path: "automation-solutions" },
    { label: "Electrical Solutions", path: "electrical-solution" },
    { label: "Fabrication Solutions", path: "fabrication-solutions" },
    { label: "Tenders", path: "tenders" },
    { label: "Used Machine Buy/Sell", path: "used-machine-buy/sell" },
    { label: "Equipment Store", path: "equipment-store" },
    { label: "AMC", path: "amc" },
    { label: "Career", path: "career" },
    { label: "Contact Us", path: "contact-us" },
  ];

  return (
    <Box
      sx={{
        textAlign: "left",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: "25px", // Extra small screens
            sm: "28px", // Small screens
            md: "32px", // Medium screens
            lg: "32px", // Large screens
            xl: "36px", // Extra large screens
          },
          margin: {
            xs: "20px 0",
            sm: "20px 0",
            m: "0 0 100px 0",
            lg: "0 0 100px 0",
            xl: "0 0 100px 0",
          },
        }}
      >
        Quick Links
      </Typography>
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Typography
            sx={{
              margin: "10px 0",
              fontSize: {
                xs: "20px",
                sm: "25px",
                m: "24px",
                lg: "24px",
                xl: "24px",
              },
            }}
          >
            {link.label}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default QuickLinks;
