import { Box, Typography } from "@mui/material";
import React from "react";
import DemoBanner from "../resources/DemoBanner.svg";
import PanelCard from "../components/eletricalsolution/PanelCard";
import { PanelList } from "../components/eletricalsolution/PanelList";

const ElectricalSolution = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box>
          <img
            src={DemoBanner}
            alt="Tatvamasi Automation"
            style={{
              maxWidth: "99vw",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "75%",
            margin: "100px auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 400,
              textAlign: "justify",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
            standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.The standard chunk of Lorem Ipsum used
            since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
            are also reproduced in their exact original form, accompanied by
            English versions from the 1914 translation by H. Rackham.The
            standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "350px",
          }}
        >
          {PanelList.map((panel) => {
            return <PanelCard panelName={panel.name} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default ElectricalSolution;
