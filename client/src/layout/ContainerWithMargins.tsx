import { Container } from "@mui/material";
import img from "../images/background.jpg";

interface Props {
  children: any;
}

const AppWithMargins = ({ children }: Props) => {
  return (
    <Container
      style={{
        maxWidth: "100vw",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </Container>
  );
};

export default AppWithMargins;
