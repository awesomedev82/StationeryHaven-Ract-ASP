import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface Props {
  label: string;
  searchWithIcon?: boolean;
  iconPosition: "start" | "end";
  productParams: any;
  onChange: (event: any) => void;
}

const SearchComponent = ({
  label,
  searchWithIcon,
  iconPosition,
  productParams,
  onChange,
}: Props) => {
  const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);

  return (
    <Paper sx={{ mt: 5 }}>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={searchTerm || ""}
        onChange={(event: any) => {
          setSearchTerm(event.target.value);
        }}
        onKeyPress={(event) => {
          event.key === "Enter" && onChange(event);
        }}
        InputProps={{
          [iconPosition + "Adornment"]: searchWithIcon ? (
            <InputAdornment
              position={iconPosition}
              style={{ cursor: "pointer" }}
            >
              <SearchIcon onClick={(event) => onChange(event)} />
            </InputAdornment>
          ) : null,
        }}
      />
    </Paper>
  );
};

export default SearchComponent;
