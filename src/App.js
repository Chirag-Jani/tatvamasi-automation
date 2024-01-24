import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import "./App.css";
import theme from "./theme/theme";

import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import ElectricalSolution from "./pages/ElectricalSolution";
import Tenders from "./pages/Tenders";
import Footer from "./layout/Footer";
import Panel from "./components/eletricalsolution/Panel";
import ScrollToTop from "./components/utilities/ScrollToTop";
import TenderClient from "./components/tenders/TenderClient";
import AboutUs from "./pages/AboutUs";
import FabricationSolution from "./pages/FabricationSolution";
import AutomationSolution from "./pages/AutomationSolution";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/electrical-solution" element={<ElectricalSolution />} />
          <Route path="/electrical-solution/:panel" element={<Panel />} />
          <Route
            path="/fabrication-solution"
            element={<FabricationSolution />}
          />
          <Route path="/psu-and-govt" element={<Tenders />} />
          <Route path="/automation-solution" element={<AutomationSolution />} />
          <Route path="/psu-and-govt" element={<Tenders />} />
          <Route path="/psu-and-govt/:client" element={<TenderClient />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
