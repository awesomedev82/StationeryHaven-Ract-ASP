import { Container } from "@mui/material";

interface Props {
  children : any
}

const AppWithMargins = ({ children } : Props) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default AppWithMargins;