import ProductPage from "../../components/Product/ProductPage";
import Navbar from "../../components/Navbar";
import { Container, CssBaseline } from "@mui/material";

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <ProductPage  />
      </Container>
    </>
  );
}

export default App;
