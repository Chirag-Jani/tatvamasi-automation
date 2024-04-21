import React, { useEffect, useState } from "react";
import appointmentHeader from "../resources/appointment/appointmentHeader.png";
import appLeft from "../resources/appointment/appLeft.png";
import { Box, Button, Skeleton, TextField, Typography } from "@mui/material";
import Aos from "aos";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const Appointment = () => {
  const [timeToLoad, setTimeToLoad] = useState(false);
  const [datetime12h, setDateTime12h] = useState(null);
  const [formData, setFormData] = useState({
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
    // Handle form submission here
    console.log(formData); // For demonstration, logging form data
    console.log(datetime12h);
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
    setDateTime12h(null);
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
    <Box
      sx={{
        width: "100%",
        marginBottom: "40px",
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
          Appointment
        </Typography>
        {timeToLoad ? (
          <img
            // data-aos="zoom-in"
            src={appointmentHeader}
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
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Montserrat-Bold",
              textAlign: "center",
              mt: 4,
            }}
          >
            Contact us
          </Typography>
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
            <Box
              className="card flex flex-wrap gap-3 p-fluid"
              sx={{
                margin: "10px 0",
                marginBottom: "20px",
              }}
            >
              <Box className="flex-auto">
                <Calendar
                  placeholder="Select Date & Time"
                  id="calendar-12h"
                  value={datetime12h}
                  onChange={(e) => setDateTime12h(e.value)}
                  showTime
                  hourFormat="12"
                />
              </Box>
            </Box>
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
  );
};

export default Appointment;
