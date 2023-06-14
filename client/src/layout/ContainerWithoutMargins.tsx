import { Container } from "@mui/material";

interface Props {
  children : any
}

const AppWithoutMargins = ({ children } : Props) => {
  return (
    <Container
    disableGutters={true}
    style={{ margin: 0, maxWidth: "100vw" }}
  >
      {children}
    </Container>
  );
};

export default AppWithoutMargins;