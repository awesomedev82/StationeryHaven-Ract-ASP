import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { minHeight } from "../muiStyles/helper/helper";
import { Delete } from "@mui/icons-material";
import { useStoreContext } from "../context/Context";
import { Link as RouterLink } from "react-router-dom";
import image from "../images/pngwing.com (9).png"


const BoxStyle = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  ...minHeight,
  margin: "0 auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& img": {
    width: "100%",
    maxWidth: 400,
    objectFit: "cover",
  },
  "& .MuiButton-root": {
    backgroundColor: "#198416cd",
    color: "#fff",
    marginTop: 20,
  },
}));

const BasketPage = () => {
  const { basket } = useStoreContext();

  if (!basket)
    return (
      <BoxStyle>
      <Typography variant="h4">Your basket is empty</Typography>
      <img src={image} alt="404 Error" loading="lazy" />
      <Button
        to="/"
        variant="contained"
        component={RouterLink}
        size="large"
        disableElevation
      >
        Go to Product
      </Button>
    </BoxStyle>
    );

  return (
    <Box minHeight={minHeight} sx={{ pt: "4vh" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.items.map((item) => (
              <TableRow
                key={item.productId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">
                  ${(item.price / 100).toFixed(2)}
                </TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">
                  ${((item.price / 100) * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BasketPage;
