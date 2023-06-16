import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import agent from "../api/agent";
import { useState } from "react";
import { minHeight } from "../muiStyles/helper/helper";

const ErrorPage = () => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const getValidationError = () => {
    agent.TestErrors.getValidationError()
      .then(() => console.log("should not see this"))
      .catch((error) => setValidationErrors(error));
  };

  return (
    <Container style={minHeight} sx={{pt: 3}}>
      <Typography gutterBottom variant="h2">
        Errors for testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get400().catch((e) => console.log(e))}
        >
          Test 400 error
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get401().catch((e) => console.log(e))}
        >
          Test 401 error
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get404().catch((e) => console.log(e))}
        >
          Test 404 error
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get500().catch((e) => console.log(e))}
        >
          Test 500 error
        </Button>
        <Button variant="contained" onClick={getValidationError}>
          Test validation error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>ValidationError</AlertTitle>
          <List>
            {validationErrors.map((e) => (
              <ListItem key="error">{e}</ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
};

export default ErrorPage;
