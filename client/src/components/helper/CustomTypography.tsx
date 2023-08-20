import { Typography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  cursor?: string;
}

const CustomTypography = ({ variant, children, cursor, ...rest }: Props) => {
  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: "Montserrat",
        cursor: cursor || "auto",
        ...rest,
      }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
