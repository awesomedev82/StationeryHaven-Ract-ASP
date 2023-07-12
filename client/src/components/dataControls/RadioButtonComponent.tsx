import {
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface SortOption {
  value: string;
  label: string;
}

interface Props {
  sortOptions: SortOption[];
  onChange: (event: any) => void;
  selectedValue: string;
}

const RadioButton = ({ sortOptions, onChange, selectedValue }: Props) => {
  return (
    <Paper sx={{ mt: 2, p: 2, overflow: "auto" }}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Sort Options</FormLabel>
        <RadioGroup onChange={onChange} value={selectedValue}>
          {sortOptions.map(({ value, label }: SortOption) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default RadioButton;
