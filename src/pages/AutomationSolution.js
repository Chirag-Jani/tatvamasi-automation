import { Box, Typography } from "@mui/material";
import automationBanner from "../resources/banners/automation-banner.webp";
import { data } from "../resources/data/data";
import PanelCard from "../components/eletricalsolution/PanelCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const automationData = data[0];
const automationMachines = automationData.machines;

const AutomationSolution = () => {
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
  }, []);

  return (
    <Box>
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
          Automation Solutions
        </Typography>
        <img
          data-aos="zoom-in"
          src={automationBanner}
          alt="Tatvamasi Automation"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "75%",
          margin: "50px auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            textAlign: "justify",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          We are commited to providing exceptional quality and reliability in
          all of our Industrial Electrical Solutions. Our Planning and Design
          Process is just the beginning of delivering Customized and Reliable
          solutions that meet or exceed our cliets' expectations.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
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
              margin: "10px 0",
              marginTop: "50px",
            }}
          >
            Automation Solution Services / Machines
          </Typography>
          <Typography
            sx={{
              width: "80%",
              margin: "10px",
              textAlign: "justify",
              fontFamily: "Montserrat",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Explore Tatvamasi Automation's "Power Panel Solution," a
            cutting-edge offering designed to effectively handle and distribute
            electrical power in industrial and commercial settings. Our solution
            encompasses power distribution panels, advanced control systems, and
            automation technologies, all aimed at optimizing energy consumption,
            enhancing safety, and boosting operational efficiency. Trust
            Tatvamasi Automation for a dependable and scalable power management
            solution to meet your organization's needs.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {automationMachines.map((machine) => {
            return (
              <Link
                data-aos="flip-up"
                to={machine.path}
                style={{
                  textDecoration: "none",
                }}
                key={machine.title}
              >
                <PanelCard panelName={machine.title} />
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default AutomationSolution;
