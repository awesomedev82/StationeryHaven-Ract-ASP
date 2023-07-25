import { TextField } from "@mui/material";
import { UseControllerProps, useController } from "react-hook-form";

interface Props extends UseControllerProps {
  name: string;
  label: string;
}

const TextInput = (props: Props) => {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });
  return (
    <TextField
      {...props}
      {...field}
      fullWidth
      variant="outlined"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
};

export default TextInput;
