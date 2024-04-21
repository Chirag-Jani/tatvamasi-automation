// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // palette: palette,
  palette: {
    primary: {
      main: "#263467", // tatvamasi primary color
    },
    secondary: {
      main: "#162966", // tatvamasi secondary color
    },
    ttvmsYellow: {
      main: "#FFB800",
    },
    ttvmsGray: {
      main: "#DCDCDC",
    },
  },
});

export default theme;
