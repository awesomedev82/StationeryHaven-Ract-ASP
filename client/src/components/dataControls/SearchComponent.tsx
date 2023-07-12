import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  label: string;
  searchWithIcon?: boolean;
  iconPosition: "start" | "end";
}

const SearchComponent = ({ label, searchWithIcon, iconPosition }: Props) => {
  return (
    <Paper sx={{ mt: 5 }}>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        InputProps={{
          [iconPosition + "Adornment"]: searchWithIcon ? (
            <InputAdornment position={iconPosition}>
              <SearchIcon />
            </InputAdornment>
          ) : null,
        }}
      />
    </Paper>
  );
};

export default SearchComponent;
