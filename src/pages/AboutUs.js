import { Box, Grid, Typography } from "@mui/material";
import aboutUsBanner from "../resources/banners/aboutUsBanner.png";
import RoadMap from "../resources/aboutUsPageImages/RoadMap.png";
import abt1 from "../resources/aboutUsPageImages/abt1.png";
import abt2 from "../resources/aboutUsPageImages/abt2.png";
import abt3 from "../resources/aboutUsPageImages/abt3.png";
import abt4 from "../resources/aboutUsPageImages/abt4.png";
import abt5 from "../resources/aboutUsPageImages/abt5.png";
import abt6 from "../resources/aboutUsPageImages/abt6.png";
import abt7 from "../resources/aboutUsPageImages/abt7.png";

const AboutUs = () => {
  const data = [
    {
      title: "AETC, Surat, Gujarat",
      desc: "Founded AETC in Surat, Gujarat, India, focusing on Automation and Embedded Training. \n\nEstablished state-of-the-art Automation and Embedded Training Centers, fostering collaborations with engineering colleges.\n\nIntroduced specialized training programs covering PLC, SCADA, drives, and embedded systems for engineering students.",
      img: abt1,
    },
    {
      title: "Tatvamasi Automation",
      desc: "Established Tatvamasi Automation to cater to industrial automation needs. Initiated services in automation panel manufacturing, starting with the textile sector and expanding into steel, pharma, chemical, cement, and heavy engineering industries.",
      img: abt2,
    },
    {
      title: "Government & PSU Sector",
      desc: `Successfully entered the government and PSU sectors through strategic tender bidding. Introduced specialized training programs covering PLC, SCADA, drives, and embedded systems for engineering students.	Executed notable our 1st projects, including the prestigious "Crane Automation" (40-ton & 20-ton capacity) at Ukai Dam, Gujarat, marking a significant milestone.`,
      img: abt3,
    },
    {
      title: "Diversification",
      desc: "Expanded services to include the manufacturing of power panels such as PCC, MCC, and APFC. Became a one-stop solution provider for both automation and electrical sectors.",
      img: abt4,
    },
    {
      title: "Expansion",
      desc: "Continued to excel in providing automation and electrical solutions across various industries. Launched an in-house panel enclosure manufacturing unit, ensuring control over quality and customization.",
      img: abt5,
    },
    {
      title: "Pvt. Ltd. Formation",
      desc: "Officially transitioned into Tatvamasi Automation Pvt Ltd, reflecting the company's growth and commitment to excellence. Maintained a leading position as an electrical and automation solution provider with a focus on innovation and quality.",
      img: abt6,
    },
    {
      title: "",
      desc: "Achieved a significant corporate milestone by establishing a new corporate house. Relocated to a new, state-of-the-art premises, reflecting the company's commitment to growth and modernization. Set new visionary goals to further enhance service quality, innovation, and customer satisfaction.",
      img: abt7,
    },
  ];

  const itemStyle = {
    width: "80%", // Set the desired width
    height: "500px", // Set the desired height
    backgroundColor: "#C3C3C3", // Set the background color
    clipPath: "polygon(50% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)", // Define the pentagon shape
    transform: "rotate(-90deg)", // Rotate the pentagon to the correct orientation
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "50px 0", // Optional margin for spacing between elements
    borderRadius: "10px",
  };
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
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "70%",
          margin: "auto",
        }}
      >
        <Grid item xs={4}>
          <img
            src={RoadMap}
            alt="RoadMap"
            style={{
              width: "420px",
              height: "auto",
            }}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
          {data.map((_, index) => (
            <Box>
              <Box sx={itemStyle}>
                <Box
                  sx={{
                    width: "70%",
                    transform: "rotate(90deg)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#162866",
                      fontSize: "40px",
                      fontFamily: "Montserrat-Bold",
                      textAlign: "center",
                    }}
                  >
                    {data[index].title}
                  </Typography>
                  <Typography>{data[index].desc}</Typography>
                </Box>
              </Box>
              <img src={data[index].img} alt="" />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
export default AboutUs;
