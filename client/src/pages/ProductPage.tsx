import ProductList from "../components/product/ProductList";
import { useEffect } from "react";
import Loading from "../components/helper/Loading";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Typography,
  debounce,
} from "@mui/material";
import Slider from "../components/helper/Slider";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import {
  fetchFilters,
  fetchProductsAsync,
  productsSelectors,
  setProductParams,
} from "../redux/productSlice";
import { sortOptions } from "../lib/constants";
import {
  SearchComponent,
  RadioButton,
  CheckboxComponent,
} from "../components/dataControls";

const ProductPage = () => {
  const products = useAppSelector(productsSelectors.selectAll);
  const {
    productsLoaded,
    status,
    filtersLoaded,
    brands,
    types,
    productParams,
  } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  if (status.includes("pending"))
    return <Loading message="Loading products..." />;

  const handleSearchInputChange = (event: any) => {
    dispatch(setProductParams({ searchTerm: event.target.value }));
  };

  const debouncerSearch = debounce((event: any) => {
    handleSearchInputChange(event);
  }, 500);

  return (
    <>
      <Slider />

      <Container style={{ maxWidth: "1390px", paddingBottom: "5vh" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item marginTop="1vh">
            <Typography
              variant="h5"
              sx={{ fontFamily: "Montserrat", fontSize: 30, paddingTop: "13%" }}
            >
              All Products:
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 0, sm: 3, lg: 6 }}>
          <Grid item xs={3} sx={{ mb: 5 }}>
            <SearchComponent
              label="Search products"
              searchWithIcon
              iconPosition="start"
              productParams={productParams}
              onChange={debouncerSearch}
            />
            <RadioButton
              sortOptions={sortOptions}
              selectedValue={productParams.orderBy}
              onChange={(e) =>
                dispatch(setProductParams({ orderBy: e.target.value }))
              }
            />

            <CheckboxComponent
              label="Brands"
              options={brands}
              checked={productParams.brands}
              onChange={(items: string[]) =>
                dispatch(setProductParams({ brands: items }))
              }
            />
            <CheckboxComponent
              label="Types"
              options={types}
              checked={productParams.types}
              onChange={(items: string[]) =>
                dispatch(setProductParams({ types: items }))
              }
            />
          </Grid>
          <Grid item xs={9}>
            <ProductList products={products} />
          </Grid>

          <Grid item xs={3} />
          <Grid item xs={9}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>Displaying 1-6 of 20 items</Typography>
              <Pagination
                sx={{
                  "& .Mui-selected": {
                    backgroundColor: "rgba(20, 146, 181, 0.478) !important",
                  },
                }}
                size="large"
                count={5}
                page={2}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductPage;
