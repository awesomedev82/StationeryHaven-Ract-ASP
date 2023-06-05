import ProductPage from "../../components/Product/ProductPage";
import Navbar from "../../components/Navbar";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? "#eaeaea" : "#121212"
      }
    },
  });

  const handleChange = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar darkMode={darkMode} handleChange={handleChange}/>
        <Container>
          <ProductPage />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
