import { Product } from "../models/product";
import ProductList from "../../components/product/ProductList";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import agent from "../api/agent";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    agent.Product.list()
      .then((products) => setProducts(products))
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
