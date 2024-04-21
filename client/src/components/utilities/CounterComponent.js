import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Box, Typography, Grid } from "@mui/material";

const CounterComponent = () => {
  const stats = [
    { label: "Years Of Experience", value: 11 },
    { label: "No. of Products", value: 112 },
    { label: "Team Strength", value: 54 },
    { label: "No. of Customers", value: 873 },
  ];

  return (
    <Box textAlign="center" sx={{ m: 3 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontFamily: "Montserrat-BoldItalic",
        }}
      >
        Statistics
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Box textAlign="center">
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Montserrat-Bold, sans-serif",
                    }}
                  >
                    {isVisible ? (
                      <CountUp end={stat.value} duration={2.75} />
                    ) : (
                      <Box sx={{ height: "26px" }} />
                    )}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {stat.label}
                  </Typography>
                </Box>
              )}
            </VisibilitySensor>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CounterComponent;
