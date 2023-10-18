import { Box, Typography } from "@mui/material";
import React from "react";

import FB from "../../resources/icons/FB.svg";
import INSTA from "../../resources/icons/INSTA.svg";
import LINK from "../../resources/icons/LINK.svg";
import WP from "../../resources/icons/WP.svg";
import YT from "../../resources/icons/YT.svg";

const Connections = () => {
  const mailAndContact = {
    mails: [
      "a@tatvamasiautomation.com",
      "b@tatvamasiautomation.com",
      "c@tatvamasiautomation.com",
      "d@tatvamasiautomation.com",
      "e@tatvamasiautomation.com",
      "f@tatvamasiautomation.com",
    ],
    contacts: ["+91 1234561234", "+91 9876543210"],
  };

  const social = [
    {
      logo: WP,
      url: "#WP",
    },
    {
      logo: LINK,
      url: "#LINK",
    },
    {
      logo: FB,
      url: "#FB",
    },
    {
      logo: INSTA,
      url: "#INSTA",
    },

    {
      logo: YT,
      url: "#YT",
    },
  ];

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 600,
          textAlign: "center",
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
        Connections
      </Typography>
      <Box>
        {mailAndContact.mails.map((mail) => {
          return (
            <Typography
              key={mail}
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
              {mail}
            </Typography>
          );
        })}
        {mailAndContact.contacts.map((contact) => {
          return (
            <Typography
              key={contact}
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
              {contact}
            </Typography>
          );
        })}
      </Box>
      <Box
        sx={{
          margin: "20px 0",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {social.map((profile) => {
          return (
            <img
              src={profile.logo}
              alt=""
              key={profile.url}
              style={{
                margin: "0px 2px",
                width: "60px",
                height: "auto",
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Connections;
