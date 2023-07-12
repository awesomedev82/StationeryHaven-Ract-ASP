import {
  Paper,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

interface Props {
  label: string;
  options: any[];
}

const CheckboxComponent = ({ label, options }: Props) => {
  return (
    <Paper sx={{ mt: 2, p: 2, overflow: "auto" }}>
      <FormLabel component="legend">{label} Checkboxes</FormLabel>
      <FormGroup>
        {options.map((option: any) => (
          <FormControlLabel
            key={option}
            control={<Checkbox />}
            label={option}
          />
        ))}
      </FormGroup>
    </Paper>
  );
};

export default CheckboxComponent;
