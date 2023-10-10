import React from "react";

import { Box } from "@mui/material";

import Card from "./Card";
import { CardList } from "./CardList";

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
          <Card cardName={card.name} cardImg={card.image} key={card.name} />
        );
      })}
    </Box>
  );
};

export default Menus;
