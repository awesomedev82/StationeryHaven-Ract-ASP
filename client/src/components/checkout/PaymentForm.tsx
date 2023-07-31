import { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const PaymentForm = () => {
  const [skipPayment, setSkipPayment] = useState(false);

  const handleSkipPaymentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSkipPayment(event.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={skipPayment}
            onChange={handleSkipPaymentChange}
            color="primary"
          />
        }
        label="Skip Payment Method"
      />
      {!skipPayment && (
        <>
          <Typography variant="h6" gutterBottom>
            Payment method - Just for viewing
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default PaymentForm;
