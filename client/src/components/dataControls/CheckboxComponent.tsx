import {
  Paper,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

interface Props {
  label: string;
  options: string[];
  checked?: string[];
  onChange: (items: string[]) => void;
}

const CheckboxComponent = ({ label, options, checked, onChange }: Props) => {
  const [checkedItems, setCheckedItems] = useState(checked || []);

  function handleChecked(value: string) {
    const currentIndex = checkedItems.findIndex((item) => item === value);
    let newChecked: string[] = [];
    if (currentIndex === -1) newChecked = [...checkedItems, value];
    else newChecked = checkedItems.filter((item) => item !== value);
    setCheckedItems(newChecked);
    onChange(newChecked);
  }

  return (
    <Paper sx={{ mt: 2, p: 2, overflow: "auto" }}>
      <FormLabel component="legend">{label} Checkboxes</FormLabel>
      <FormGroup>
        {options.map((option: any) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={checkedItems.indexOf(option) !== -1}
                onClick={() => handleChecked(option)}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
    </Paper>
  );
};

export default CheckboxComponent;
