import React from "react";

import { Box } from "@mui/material";

import Card from "./Card";
import { CardList } from "./CardList";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {CardList.map((card) => {
        return (
          <Link
            to={card.path}
            style={{
              textDecoration: "none",
            }}
          >
            <Card cardName={card.name} cardImg={card.image} key={card.name} />
          </Link>
        );
      })}
    </Box>
  );
};

export default Menus;
