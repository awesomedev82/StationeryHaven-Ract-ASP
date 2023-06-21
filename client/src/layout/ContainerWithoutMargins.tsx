import { Container } from "@mui/material";
import img from "../images/background.jpg";

interface Props {
  children: React.ReactNode;
}

const AppWithoutMargins = ({ children }: Props) => {
  return (
    <Container
      disableGutters={true}
      style={{
        margin: 0,
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

export default AppWithoutMargins;
