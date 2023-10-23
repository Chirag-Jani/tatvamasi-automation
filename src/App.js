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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/electrical-solution" element={<ElectricalSolution />} />
          <Route path="/electrical-solution/:panel" element={<Panel />} />
          <Route path="/tenders" element={<Tenders />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
