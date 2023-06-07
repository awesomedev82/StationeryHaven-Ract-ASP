import { Product } from "../models/product";
import ProductList from "../../components/product/ProductList";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default ProductPage;
