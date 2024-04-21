import React from "react";
import { ThemeProvider } from "@mui/material";
import Loader from "./components/utilities/Loader";
import theme from "./theme/theme";
import ScrollToTop from "./components/utilities/ScrollToTop";
import FloatingWhatsAppButton from "./components/utilities/FloatingWhatsAppButton";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <Navbar />
        <React.Suspense fallback={<Loader />}>
          <AppRoutes />
        </React.Suspense>
        <FloatingWhatsAppButton />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
