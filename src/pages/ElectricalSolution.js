import { Box, Typography } from "@mui/material";
import React from "react";
import DemoBanner from "../resources/DemoBanner.svg";
import PanelCard from "../components/eletricalsolution/PanelCard";
import { data } from "../resources/data/data";
import electricalBanner from "../resources/banners/electricalBanner.svg";
import { Link } from "react-router-dom";

const PanelList = data[1].panels;

const ElectricalSolution = () => {
  return (
    <>
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
            Electrical Solutions
          </Typography>
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
              marginBottom: "20px",
            }}
          >
            Planning and Designing
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              flexWrap: "wrap",
              width: "90%",
            }}
          >
            <img
              src={electricalBanner}
              alt=""
              style={{
                maxWidth: "70%",
              }}
            />
            <Typography
              sx={{
                textAlign: "justify",
                fontFamily: "Montserrat",
                width: "60%",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              At Electrical Panel Manufacturing and Automation Company, we
              specialize in tailored Industrial Electrical Solutions. Our
              process starts with thorough client consultations to understand
              their needs. We then design compliant solutions by analyzing
              facility location, electrical load, and power requirements. Our
              experienced engineers ensure safety and efficiency using
              cutting-edge technology. We also manage government approvals for
              regulation adherence.
            </Typography>
          </Box>
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
                margin: "20px 0",
                marginTop: "50px",
              }}
            >
              Power panel Solution
            </Typography>
            <Typography
              sx={{
                width: "80%",
                margin: "20px",
                textAlign: "justify",
                fontFamily: "Montserrat",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Explore Tatvamasi Automation's "Power Panel Solution," a
              cutting-edge offering designed to effectively handle and
              distribute electrical power in industrial and commercial settings.
              Our solution encompasses power distribution panels, advanced
              control systems, and automation technologies, all aimed at
              optimizing energy consumption, enhancing safety, and boosting
              operational efficiency. Trust Tatvamasi Automation for a
              dependable and scalable power management solution to meet your
              organization's needs.
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
            {PanelList.map((panel) => {
              return (
                <Link
                  to={panel.path}
                  style={{
                    textDecoration: "none",
                  }}
                  key={panel.name}
                >
                  <PanelCard panelName={panel.name} />
                </Link>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "50px 0",
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
            }}
          >
            Panel Upgradation & Retrofitting
          </Typography>

          <Typography
            sx={{
              textAlign: "justify",
              fontFamily: "Montserrat",
              margin: "10px",
              width: "80%",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Tatvamasi Automation offers "Panel Upgradation and Retrofitting"
            services to modernize your electrical control panels, improving
            performance and safety while extending equipment lifespan. Upgrade
            with us for cost-effective efficiency gains and compliance with
            industry standards.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ElectricalSolution;
