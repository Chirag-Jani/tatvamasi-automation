import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme/theme";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./layout/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Homepage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
