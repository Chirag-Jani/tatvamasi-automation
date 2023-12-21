import React, { useEffect } from "react";

import { Box } from "@mui/material";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";

import Card from "./Card";
import { data } from "../../resources/data/data";
import { Link } from "react-router-dom";

const Menus = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {data.map((card) => {
        return (
          <Link
            data-aos="flip-left"
            to={card.path}
            style={{
              textDecoration: "none",
            }}
            key={card.name}
          >
            <Card cardName={card.name} cardImg={card.image} key={card.name} />
          </Link>
        );
      })}
    </Box>
  );
};

export default Menus;
