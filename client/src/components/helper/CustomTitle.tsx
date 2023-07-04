import { Typography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  text: string | number;
  gutterBottom?: boolean;
}

const CustomTitle = ({ text, gutterBottom, ...typographyProps }: Props) => {
  return (
    <Typography {...typographyProps} gutterBottom={gutterBottom}>
      {text}
    </Typography>
  );
};

export default CustomTitle;
