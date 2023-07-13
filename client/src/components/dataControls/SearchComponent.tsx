import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

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
  const [showTooltip, setShowTooltip] = useState(false);

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
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        onKeyPress={(event) => {
          event.key === "Enter" && onChange(event);
        }}
        InputProps={{
          [iconPosition + "Adornment"]: searchWithIcon ? (
            <InputAdornment position={iconPosition}>
              <Tooltip
                title="Press 'Enter' to search"
                open={showTooltip}
                onClose={() => setShowTooltip(false)}
              >
                <SearchIcon />
              </Tooltip>
            </InputAdornment>
          ) : null,
        }}
      />
    </Paper>
  );
};

export default SearchComponent;
