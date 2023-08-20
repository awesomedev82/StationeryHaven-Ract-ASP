import React from "react";
import { Box } from "@mui/material";
import { sortOptions } from "../lib/constants";
import {
  SearchComponent,
  RadioButton,
  CheckboxComponent,
} from "../components/dataControls";
import { setProductParams } from "../redux/productSlice";
import { useAppDispatch } from "../redux/store/configureStore";

interface Props {
  productParams: {
    orderBy: string;
    pageNumber: number;
    pageSize: number;
    brands: string[];
    types: string[];
  };
  brands: string[];
  types: string[];
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductFilter = ({
  productParams,
  brands,
  types,
  onSearchChange,
}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Box mb={5}>
      <SearchComponent
        label="Search products"
        searchWithIcon
        iconPosition="start"
        productParams={productParams}
        onChange={onSearchChange}
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
    </Box>
  );
};

export default ProductFilter;
