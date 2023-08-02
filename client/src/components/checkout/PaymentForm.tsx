import { useState } from "react";
import {
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import TextInput from "../TextInput";
import { useFormContext } from "react-hook-form";

const PaymentForm = () => {
  const [skipPayment, setSkipPayment] = useState(false);
  const { control } = useFormContext();

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
              <TextInput
                name="nameOnCard"
                label="Name on card"
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                name="cardNumber"
                label="Card number"
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput name="expDate" label="Expiry date" control={control} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput name="cvv" label="CVV" control={control} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default PaymentForm;
