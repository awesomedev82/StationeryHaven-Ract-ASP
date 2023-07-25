import { Typography, Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import TextInput from "../TextInput";
import CustomCheckBox from "../CustomCheckBox";

const AddressForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextInput control={control} name="fullName" label="Full Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput control={control} name="lastName" label="Last Name" />
        </Grid>
        <Grid item xs={12}>
          <TextInput control={control} name="address1" label="Address line 1" />
        </Grid>
        <Grid item xs={12}>
          <TextInput control={control} name="address2" label="Address line 2" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput control={control} name="city" label="City" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput control={control} name="state" label="State" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput control={control} name="zip" label="ZipCode" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextInput control={control} name="country" label="Country" />
        </Grid>
        <Grid item xs={12}>
          <CustomCheckBox
            name="saveAddress"
            label="Save this as default address"
            control={control}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
