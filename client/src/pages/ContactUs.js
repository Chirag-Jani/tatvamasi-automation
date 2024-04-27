import { Box, Button, Skeleton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import appLeft from "../resources/appointment/appLeft.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import contactUsBanner from "../resources/banners/ContactUsBanner.png";

const contacts = [
  { number: "+919898041644", name: "Automation Solution" },
  { number: "+919558971777", name: "Electrical Solution & Other" },
];

const mails = ["info@tatvamasiautomation.com", "tatvamasiautomation@gmail.com"];

const ContactUs = () => {
  const [timeToLoad, setTimeToLoad] = useState(false);

  const [formData, setFormData] = useState({
    subject: "Contact Request",
    name: "",
    email: "",
    contactNumber: "",
    purposeOfMeeting: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://tatvamasi-server.vercel.app/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // Get the text response
      })
      .then((data) => {
        console.log(data); // "Email sent successfully"
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Error sending email. Please try again later.");
      });
    handleCancel();
  };

  const handleCancel = () => {
    // Handle cancel action here
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      purposeOfMeeting: "",
    });
  };

  useEffect(() => {
    Aos.init({
      // Global settings:
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });

    setTimeout(() => {
      setTimeToLoad(true);
    }, 2000);
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
          Contact Us
        </Typography>
        {timeToLoad ? (
          <img
            // data-aos="zoom-in"
            src={contactUsBanner}
            alt="Tatvamasi Automation"
            style={{
              width: "100%",
            }}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={"300px"}
            sx={{
              borderRadius: "10px",
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          marginLeft: {
            xl: "50px",
          },
        }}
      >
        <Box
          sx={{
            marginBottom: "100px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Montserrat-SemiBold",
              textAlign: "left",
              textDecoration: "underline",
              marginLeft: "10px",
              marginTop: "40px",
            }}
          >
            Quick Communication
          </Typography>
          {contacts?.map((con) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#D9D9D9",
                  width: "fit-content",
                  padding: "10px ",
                  borderRadius: "10px",
                  margin: "20px 0",
                  marginLeft: "10px",
                }}
                onClick={() => {
                  const url = `https://wa.me/${con.number}`;
                  window.open(url, "_blank");
                }}
              >
                <WhatsAppIcon
                  sx={{
                    fontSize: 40,
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                    "&:hover": {
                      backgroundColor: "#128C7E",
                    },
                    backgroundColor: "#25D366",
                    padding: "10px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      xl: "30px",
                      lg: "30px",
                      m: "25px",
                      sm: "20px",
                      xs: "16px",
                    },
                    fontFamily: "Montserrat-Bold",
                    textAlign: "left",
                    margin: "0 20px",
                  }}
                >
                  {con.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Montserrat-SemiBold",
              textAlign: "left",
              textDecoration: "underline",
              marginLeft: "10px",
              marginTop: "40px",
            }}
          >
            Other streams
          </Typography>
          {mails?.map((con) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#D9D9D9",
                  width: "fit-content",
                  padding: "10px ",
                  borderRadius: "10px",
                  margin: "20px 0",
                  marginLeft: "10px",
                }}
                onClick={() => {
                  const url = `mailto:${con}`;
                  window.open(url, "_blank");
                }}
              >
                <EmailIcon
                  sx={{
                    fontSize: 40,
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                    backgroundColor: "#2494FF",
                    padding: "10px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      xl: "30px",
                      lg: "30px",
                      m: "25px",
                      sm: "20px",
                      xs: "16px",
                    },
                    fontFamily: "Montserrat-Bold",
                    textAlign: "left",
                    margin: "0 20px",
                    width: {
                      xl: "100%",
                      lg: "100%",
                      m: "100%",
                      sm: "100%",
                      xs: "200px",
                    },
                    wordWrap: "break-word",
                  }}
                >
                  {con}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "30px",
            fontFamily: "Montserrat-SemiBold",
            textAlign: "left",
            textDecoration: "underline",
            marginLeft: "60px",
            marginTop: "40px",
          }}
        >
          Appointment
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: {
              xl: "row",
              lg: "row",
              m: "row",
              sm: "row",
              xs: "column",
            },
          }}
        >
          <Box
            className="left"
            sx={{
              width: {
                xl: "25%",
                lg: "25%",
                m: "25%",
                sm: "25%",
                xs: "50%",
              },
            }}
          >
            <img
              src={appLeft}
              alt="Please fill the form for appointment"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box
            className="right"
            sx={{
              width: {
                xl: "40%",
                lg: "40%",
                m: "40%",
                sm: "40%",
                xs: "90%",
              },
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Purpose of Meeting"
                name="purposeOfMeeting"
                value={formData.purposeOfMeeting}
                onChange={handleChange}
              />
              {/* Typography for meeting timing note */}
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#333", // Darken the text color
                  padding: 2, // Add padding around the text
                  borderRadius: 4, // Add rounded corners
                  fontSize: "15px",
                }}
              >
                We're available from Monday to Friday, 9:00 AM to 6:00 PM.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "20px",
                    width: "200px",
                  }}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="error"
                  onClick={handleCancel}
                  sx={{
                    borderRadius: "20px",
                    width: "200px",
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
