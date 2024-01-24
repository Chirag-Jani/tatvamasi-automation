import { Box, Typography } from "@mui/material";
import aboutUsBanner from "../resources/banners/aboutUsBanner.png";
import aboutUs from "../resources/aboutUsPageImages/aboutUs.svg";
import vision from "../resources/aboutUsPageImages/Vision.svg";
import mission from "../resources/aboutUsPageImages/Mission.svg";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(239,239,239)",
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
            padding: "20px",
          }}
        >
          About Us
        </Typography>
        <img
          data-aos="zoom-in"
          src={aboutUsBanner}
          alt="Tatvamasi Automation"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          padding: "50px 0",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: "#162866",
            fontSize: {
              xl: "39.58px",
              lg: "39.58px",
              m: "39.58px",
              sm: "39.58px",
              xs: "30px",
            },
            textAlign: "center",
            margin: "20px",
            textDecoration: "underline",
          }}
        >
          Overview
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xl: "25px",
              lg: "25px",
              m: "25px",
              sm: "25px",
              xs: "15px",
            },
            textAlign: "justify",
            width: "90%",
            margin: "auto",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tatvamasi
          Automation Pvt. Ltd. (TAPL) is formed by a team of qualified
          professionals serving the industrial sector with end-to-end
          solutions.TAPL is headquartered in Surat (India) and operates World
          wide. Specializations of TAPL include core services, operations, and
          maintenance of Automation & electrical Solution in all the sectors.
          The company's strength comes from its knowledge-based approach, highly
          experienced team, and strong multi-disciplinary capabilities. TAPL
          fosters a culture of excellence and prioritizes environmentally
          friendly practices. TAPL excels in designing and delivering innovative
          electrical and automation solutions by leveraging its extensive domain
          knowledge and business expertise. The company maintains exceptionally
          high standards of quality, safety, and environmental protection. TAPL
          is devoted to delivering projects on schedule with an unwavering focus
          on quality.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <img
          src={vision}
          alt=""
          style={{
            width: "fit-content",
            maxWidth: "80%",
            margin: "10px",
          }}
        />
        <img
          src={mission}
          alt=""
          style={{
            width: "fit-content",
            maxWidth: "80%",
            margin: "10px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "70%",
            height: "auto",
            margin: "auto",
          }}
          src={aboutUs}
          alt=""
        />
      </Box>
    </Box>
  );
};
export default AboutUs;
