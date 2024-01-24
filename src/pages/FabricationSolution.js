import { Box, Grid, Typography } from "@mui/material";
import aboutUsBanner from "../resources/banners/aboutUsBanner.png";

const FabricationSolution = () => {
  const data = [
    {
      label: "Our Products",
      value:
        "Our panel enclosures are designed with the utmost attention to detail. Whether you choose mild steel or stainless steel, our products guarantee robustness and longevity.",
    },
    {
      label: "Mild Steel Enclosures",
      value:
        "Our mild steel enclosures are known for their strength and versatility. They are perfect for applications where durability and affordability are paramount.",
    },
    {
      label: "Stainless Steel Enclosures",
      value:
        "For environments that demand corrosion resistance and hygiene, our stainless steel enclosures are the ideal choice. They offer superior strength and a sleek, modern aesthetic.",
    },
    {
      label: "Our Promise",
      value:
        "At Tatvamasi Automation, we strive to provide our customers with products that not only meet but exceed their expectations. We believe in delivering on time, every time, without compromising on quality.",
    },
  ];

  const specs = [
    {
      title: "Control & Power Enclosures",
      material: [
        {
          label: "Enclosure",
          info: "CRCA sheet, MS sheet, Gl sheet (as per req.)",
        },
        {
          label: "Mounting plate",
          info: "CRCA sheet, GI sheet",
        },
        {
          label: "Lock",
          info: "Die cast Zinc lock, Nickel-Chrome Plated Lock",
        },
      ],
      thikness: [
        {
          label: "Enclosure",
          info: "1.2mm to 2 mm",
        },
        {
          label: "Mounting Plate",
          info: "2mm (14 gauges)",
        },
        {
          label: "Stand",
          info: "35*35*5 Or 75*40 C-Channel (as per requirement)",
        },
        {
          label: "Surface Finish",
          info: "Enclosure & Doors & Stand Brushed Finish",
        },
        {
          label: "Protection",
          info: "Indoor Panel: IP 45-46-50 & Outdoor Panel: IP 55-56",
        },
        {
          label: "Features",
          info: "Control & Powerpanel as per your req. (Fully Customized) Fabrication Sheet Material: TATA & AM/NS Powder Coating with 7 tank process Lock, Gasket Standard material use",
        },
      ],
    },
    {
      title: "SS Enclosures",
      material: [
        {
          label: "Enclosure",
          info: "SS-304 or SS316L (as per req.)",
        },
        {
          label: "Mounting plate",
          info: "Galvanised SS304 or SS316L",
        },
        {
          label: "Lock",
          info: "Die cast Zinc lock, Nickel-Chrome Plated Lock, SS",
        },
      ],
      thikness: [
        {
          label: "Enclosure",
          info: "1.2mm to 2 mm",
        },
        {
          label: "Mounting Plate",
          info: "2mm (14 gauges)",
        },
        {
          label: "Surface Finish",
          info: "Enclosure & Doors Brushed Finish",
        },
        {
          label: "Protection",
          info: "IP 45-46-50-556",
        },
        {
          label: "Features",
          info: "ontrol & Power ss panel as per your req. (Fully Customized) Fabrication Sheet Material: TATA & AM/NS Lock, Gasket Standard material use Enclosures Buffing and Re-Polishing",
        },
      ],
    },
  ];

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
          Fabrication Solution
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
            width: "90%",
            margin: "20px auto",
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Our fabrication services offer a spectrum of solutions. From sheet
          metal to structural components, we provide cutting, bending, welding,
          and finishing. Elevate your projects with precise craftsmanship, quick
          turnaround, and top-notch quality. Your vision, our fabrication
          expertise.
        </Typography>
      </Box>

      <Box
        sx={{
          margin: "50px auto",
          width: "90%",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            textAlign: "justify",
            fontFamily: "Montserrat",
            color: "rgba(22, 40, 102, 1)",
            margin: "25px 0",
          }}
        >
          Project Highlights
        </Typography>
        {data?.map((itm) => {
          return (
            <Box key={itm.label} data-aos="flip-up">
              <Typography
                sx={{
                  fontSize: {
                    xl: "18px",
                    lg: "18px",
                    m: "18px",
                    sm: "18px",
                    xs: "12px",
                  },
                  fontFamily: "Montserrat",
                  color: "#414141",
                  textAlign: "justify",
                  textTransform: "capitalize",
                  margin: "40px 0",
                }}
              >
                <strong
                  style={{
                    fontFamily: "Montserrat-Bold",
                  }}
                >
                  {itm.label}&nbsp;:&nbsp;
                </strong>
                {itm.value}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {specs.map((spec) => {
        return (
          <Box
            sx={{
              width: "90%",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                color: "rgba(22, 40, 102, 1)",
                fontFamily: "Montserrat-Bold",
                fontSize: {
                  xl: "2rem",
                  lg: "2rem",
                  m: "2rem",
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
                textAlign: "left",
                margin: "25px 0",
              }}
            >
              {spec.title}
            </Typography>
            <Box
              sx={{
                fontFamily: "Montserrat-Bold",
                textAlign: "center",
                margin: "50px 0",
                fontWeight: "700",
              }}
            >
              <Grid container>
                <Typography
                  sx={{
                    color: "rgba(22, 40, 102, 1)",
                    fontFamily: "Montserrat",
                    fontSize: {
                      xl: "2rem",
                      lg: "2rem",
                      m: "2rem",
                      sm: "1.5rem",
                      xs: "1.5rem",
                    },
                    textAlign: "left",
                  }}
                >
                  Material
                </Typography>

                {spec.material?.map((item) => {
                  return (
                    <Grid
                      item
                      container
                      xl={12}
                      lg={12}
                      m={12}
                      sm={12}
                      xs={12}
                      key={item.label}
                      sx={{
                        margin: "auto",
                        padding: "20px",
                        borderRadius: "30px",
                        backgroundColor: "#D9D9D9",
                        marginBottom: "15px",
                      }}
                      data-aos="flip-up"
                    >
                      {item.label !== null && (
                        <>
                          <Typography
                            sx={{
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                m: "18px",
                                sm: "18px",
                                xs: "12px",
                              },
                              fontFamily: "Montserrat",
                              color: "#414141",
                              textAlign: "justify",
                              textTransform: "capitalize",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "Montserrat-Bold",
                              }}
                            >
                              {item.label}&nbsp;:&nbsp;
                            </strong>
                            {item.info}
                          </Typography>
                        </>
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Box
              sx={{
                fontFamily: "Montserrat-Bold",
                textAlign: "center",
                marginTop: "50px",
                fontWeight: "700",
              }}
            >
              <Grid container>
                <Typography
                  sx={{
                    color: "rgba(22, 40, 102, 1)",
                    fontFamily: "Montserrat",
                    fontSize: {
                      xl: "2rem",
                      lg: "2rem",
                      m: "2rem",
                      sm: "1.5rem",
                      xs: "1.5rem",
                    },
                    textAlign: "left",
                  }}
                >
                  Thikness
                </Typography>

                {spec.thikness?.map((item) => {
                  return (
                    <Grid
                      item
                      container
                      xl={12}
                      lg={12}
                      m={12}
                      sm={12}
                      xs={12}
                      key={item.label}
                      sx={{
                        margin: "auto",
                        padding: "20px",
                        borderRadius: "30px",
                        backgroundColor: "#D9D9D9",
                        marginBottom: "15px",
                      }}
                      data-aos="flip-up"
                    >
                      {item.label !== null && (
                        <>
                          <Typography
                            sx={{
                              fontSize: {
                                xl: "18px",
                                lg: "18px",
                                m: "18px",
                                sm: "18px",
                                xs: "12px",
                              },
                              fontFamily: "Montserrat",
                              color: "#414141",
                              textAlign: "justify",
                              textTransform: "capitalize",
                            }}
                          >
                            <strong
                              style={{
                                fontFamily: "Montserrat-Bold",
                              }}
                            >
                              {item.label}&nbsp;:&nbsp;
                            </strong>
                            {item.info}
                          </Typography>
                        </>
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default FabricationSolution;