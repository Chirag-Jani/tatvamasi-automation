import { Box, Typography } from "@mui/material";
import aboutUsBanner from "../resources/banners/aboutUsBanner.png";
import vision from "../resources/aboutUsPageImages/Vision.svg";
import mission from "../resources/aboutUsPageImages/Mission.svg";
import p1 from "../resources/aboutUsPageImages/roadmap/p1.webp";
import p2 from "../resources/aboutUsPageImages/roadmap/p2.webp";
import p3 from "../resources/aboutUsPageImages/roadmap/p3.webp";
import p4 from "../resources/aboutUsPageImages/roadmap/p4.webp";
import p5 from "../resources/aboutUsPageImages/roadmap/p5.webp";
import p6 from "../resources/aboutUsPageImages/roadmap/p6.webp";
import p7 from "../resources/aboutUsPageImages/roadmap/p7.webp";
import p8 from "../resources/aboutUsPageImages/roadmap/p8.webp";
import p9 from "../resources/aboutUsPageImages/roadmap/p9.webp";
import p10 from "../resources/aboutUsPageImages/roadmap/p10.webp";
import p11 from "../resources/aboutUsPageImages/roadmap/p11.webp";
import p12 from "../resources/aboutUsPageImages/roadmap/p12.webp";

const roadmapImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

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
          margin: "50px auto",
          marginTop: 0,
          width: "90%",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "justify",
            fontFamily: "Montserrat",
            color: "rgba(22, 40, 102, 1)",
            margin: "25px 0",
          }}
        >
          Overview
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "justify",
            fontFamily: "Montserrat",
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {roadmapImages.map((img, idx) => {
          return (
            <img
              style={{
                width: "70%",
                height: "auto",
                margin: "auto",
              }}
              src={img}
              alt=""
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default AboutUs;
