import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import "./App.css";
import theme from "./theme/theme";

import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import ElectricalSolution from "./pages/ElectricalSolution";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/electrical-solution" element={<ElectricalSolution />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
