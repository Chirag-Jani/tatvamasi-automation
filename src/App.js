import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme/theme";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
