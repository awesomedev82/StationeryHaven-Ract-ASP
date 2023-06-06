import { Product } from "../models/product";
import ProductList from "../../components/product/ProductList";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default ProductPage;
