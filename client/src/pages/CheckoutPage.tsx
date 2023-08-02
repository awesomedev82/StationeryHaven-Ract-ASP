import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Review from "../components/checkout/Review";
import PaymentForm from "../components/checkout/PaymentForm";
import AddressForm from "../components/checkout/AddressForm";
import { checkoutSteps } from "../lib/constants";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../myValidationSchema/checkoutValidation";
import agent from "../api/agent";
import { useAppDispatch } from "../redux/store/configureStore";
import { clearBasket } from "../redux/basketSlice";
import { LoadingButton } from "@mui/lab";

const stepsComponents = [<AddressForm />, <Review />, <PaymentForm />];

function getStepContent(step: number) {
  const component = stepsComponents[step];
  if (component) {
    return component;
  }
  throw new Error("Unknown step");
}

const CheckoutPage = () => {
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });
  const [activeStep, setActiveStep] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleNext = async (data: FieldValues) => {
    const { ...shippingAddress } = data;
    if (activeStep === checkoutSteps.length - 1) {
      setLoading(true);
      try {
        const orderNumber = await agent.Orders.create({ shippingAddress });
        setOrderNumber(orderNumber);
        setActiveStep(activeStep + 1);
        dispatch(clearBasket());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <FormProvider {...methods}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {checkoutSteps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === checkoutSteps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #{ orderNumber}. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped (it will be set in future).
              </Typography>
            </>
          ) : (
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <LoadingButton
                  loading={loading}
                  disabled={!methods.formState.isValid}
                  variant="contained"
                  type="submit"
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === checkoutSteps.length - 1
                    ? "Place order"
                    : "Next"}
                </LoadingButton>
              </Box>
            </form>
          )}
        </>
      </Paper>
    </FormProvider>
  );
};

export default CheckoutPage;
