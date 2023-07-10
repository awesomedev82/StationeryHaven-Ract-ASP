import { IconButton, styled } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

interface Props {
  onClick: () => void,
  direction: string;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "white",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
}));

const SliderButton = ({ onClick, direction } : Props) => {
  const positionStyles =
    direction === "previous"
      ? { left: 0, marginLeft: "5%" }
      : { right: 0, marginRight: "5%" };

  return (
    <StyledIconButton onClick={onClick} style={positionStyles}>
      {direction === "previous" ? <NavigateBefore /> : <NavigateNext />}
    </StyledIconButton>
  );
};

export default SliderButton;