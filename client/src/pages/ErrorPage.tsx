import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  List,
  ListItem,
} from "@mui/material";
import agent from "../api/agent";
import { useState } from "react";
import CustomTitle from "../components/helper/Title";

const ErrorPage = () => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const getValidationError = () => {
    agent.TestErrors.getValidationError()
      .then(() => console.log("should not see this"))
      .catch((error) => setValidationErrors(error));
  };

  return (
    <>
      <CustomTitle text="Errors for testing" gutterBottom variant="h2" />
      <ButtonGroup fullWidth sx={{ minHeight: "8vh" }}>
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
    </>
  );
};

export default ErrorPage;
